// 1.echarts设置了tooltip之后，无效的问题,原因是formatter函数未设置返回值。
formatter: (data) => {
    if (data.data) {
      return data.name + '(云平台-域-租户): ' + data.value;
    } else {
      return '';
    }
}

// 2.下载文件
// 导出漏洞,get请求
downloadDetail(url: string, params): Observable<string> {
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach(key => {
      if (Array.isArray(params[key])) {
        for (var i in params[key]) {
          searchParams.append(key, params[key][i]);
        }
      } else {
        searchParams.append(key, params[key]);
      }
    });
    return this.http.get<DataResponse<string>>(url + '?' + searchParams).pipe(
      map(res => res.result)
    );
  }

//   post请求
downloadDetail(url: string, params): Observable<string> {
    return this.http.post<DataResponse<string>>(url, params).pipe(
      map(res => res.result)
    )
  }

// 现在的下载方式
  this.assetService.downloadDetail('/trail/api/v1/log/export', this.tableParams)
    .subscribe(
      (res: any) => {
        console.log('%c 🍯 res: ', 'font-size:20px;background-color: #B03734;color:#fff;', res);
        this.exportEle.export('/trail/api/v1/log/download', res);
      },
      () => {
        this.message.error('导出失败');
      }
    );
  }

//   下载组件
<ng-template #exportTem let-fileData="data">
  <div class="export-notification">
  <!-- <div class=""><i nz-icon nzType="loading" nzTheme="outline"></i>导出中</div>
  <div class=""><i nz-icon nzType="check-circle" nzTheme="outline"></i>导出完成</div> -->
  <div class="file-name">文件：{{fileData.name}}</div>
  <div class="progress-wrap process-wrap">
    <nz-progress [nzPercent]="fileData.progress" [nzStatus]="fileData.progress !== -1 ? '' : 'exception'"></nz-progress>
  </div>
  <a *ngIf="fileData.progress === 100" nz-button href="{{fileData.url}}" target="_blank">下载</a>
  </div>
</ng-template>

import { Component, OnInit, ViewChild, TemplateRef, OnDestroy, Input } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ExportListService } from './export-list.service';
import { ExportService } from './export.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.less']
})
export class ExportComponent implements OnInit, OnDestroy {
  @ViewChild('exportTem', {static: false}) exportTem: TemplateRef<{}>;
  @Input() field = 'taskId';
  private exportingList = [];
  private progressSub: Subscription;
  constructor(private notification: NzNotificationService,
    private exportListService: ExportListService,
    private ExportService: ExportService) {}

  ngOnInit(): void {
  }

  export(url, data) {
    this.exportingList = this.exportListService.exportList;
    if (this.exportingList.findIndex(v => v === data.id) === -1) {
      this.exportListService.setExportingList(data.id);
      // 先掉一遍再轮训
      this.getExportProgress(url, data);
      this.progressSub = interval(2000).subscribe(() => {
        this.getExportProgress(url, data);
      });
    }
  }

  getExportProgress(url, data) {
    const params = {};
    params[this.field] = data.id;
    this.ExportService.getExportProgress(url, params).subscribe(
      (res) => {
        res.name = data.fileName;
        this.show(res);
        if (res.progress === 100 || res.progress === -1) {
          this.progressSub.unsubscribe();
        }
      },
      () => {}
    );
  }

  show(data) {
    this.notification.template(this.exportTem, { nzData: data, nzKey: data.id });
  }

  ngOnDestroy() {
    if (this.progressSub) {
      this.progressSub.unsubscribe();
      this.progressSub = null;
    }
  }

}

{/* export.service.ts */}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataResponse } from '@core/types';


@Injectable({
  providedIn: 'root'
})
export class ExportService {
  constructor(private http: HttpClient) {
  }

  getExportProgress(url, params) {
    return this.http.get<DataResponse<any>>(url, { params }).pipe(
      map(res => res.result)
    );
  }
}

{/* export-list.service.ts */}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataResponse } from '@core/types';


@Injectable({
  providedIn: 'root'
})
export class ExportListService {
  exportList = [];
  constructor(private http: HttpClient) {
  }

  setExportingList(item) {
    // const exportingList = this.
    this.exportList.push(item);
  }

  get list() {
    return this.exportList;
  }
}



//   另一种方式下载
// this.service.downloadDetail('/alert/api/v1/alert/exportExcelNotDownloadByAsset', this.searchParams)
    // .subscribe(
    //   (res) => {
    //     window.open('/alert/api/v1/alert/downloadExcelFile?key=' + res, '_blank');
    //   },
    //   () => {
    //     this.message.error('导出失败');
    //   }
    // );

//   弃用的下载文件的方法
    // this.notification
    // this.notification.blank(
    //   `文件导出`,
    //   `<div class="file-name:>文件名：</div>
    //     进度：
    //     <div class="progress-wrap process-wrap">
    //       <div class="progress-bar-container">
    //         <div class="progress-c ng-star-inserted">
    //           <div class="progress-bar">
    //           </div>
    //         </div>
    //       </div>
    //   </div>`,
    //   {
    //     nzClass: 'export-notification-wrap'
    //   }
    // );
    // '/vulnerability/api/v1/export/excelWithUser'

    // const searchParams = new URLSearchParams();
    // Object.keys(this.params).forEach(key => {
    //   if (Array.isArray(this.params[key])) {
    //     for(var i in this.params[key]) {
    //       searchParams.append(key, this.params[key][i]);
    //     }
    //   } else {
    //     searchParams.append(key, this.params[key]);
    //   }
    // });
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", '/vulnerability/api/v1/vulnerability/exportExcelWithUser?'+ searchParams, true);
    // const data = sessionStorage.getItem('x-user-authorization') || '';
    // const token = 'Bearer ' + data;
    // xhr.setRequestHeader(
    //   'x-user-authorization',
    //   decodeURIComponent(token)
    // );
    // xhr.send();
