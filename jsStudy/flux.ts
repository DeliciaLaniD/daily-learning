import { NscTableSearchComponent } from '../../../shared/components/table-search/table-search.component';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { STColumn, STData, STColumnBadge } from '@delon/abc';
import {
  $LABEL,
  FluxCollectObjectType,
  FluxCollectActionType,
} from '@shared/const';
import { FluxService } from './flux.service';

@Component({
  selector: 'strategy-manage-flux',
  templateUrl: './flux.component.html',
  styleUrls: ['./flux.component.less'],
  providers: [FluxService],
})
export class StrategyManageFluxNewComponent implements OnInit {
  @ViewChild('nscTableSearch', { static: true }) nscTableSearch;
  @ViewChild('fluxCreateModal', { static: true }) fluxCreateModal;
  @ViewChild('smsappm', { static: true }) smsappm;
  @ViewChild('fluxStrategyCreateModal', { static: true })
  fluxStrategyCreateModal;
  @ViewChild('fluxAssetsModal', { static: true })
  fluxAssetsModal;
  effectTimeList = [];
  constructor(
    private http: _HttpClient,
    private message: NzMessageService,
    private modalService: NzModalService,
    private fluxService: FluxService,
  ) {
    this.getEffectTimeList();
  }
  option: {};
  buttonColumns: any[];
  ngOnInit() {
    this.buttonColumns = [
      {
        text: '启用',
        iif: (item: any) => !item.enable,
        click: (item: any) => {},
        pop: true,
        popTitle: '确定启用吗?',
        quick: true,
        quickParam: {
          url: '/api/strategy/flowbulkstopstart/',
          urlType: 'post',
          getParam: (param, ids) => {
            return {
              ids: ids.map(item => item.id),
              enable: true,
            };
          },
        },
      },
      {
        text: '停用',
        iif: (item: any) => item.enable,
        pop: true,
        popTitle: '确定停用吗?',
        click: (item: any) => {},
        quick: true,
        quickParam: {
          url: '/api/strategy/flowbulkstopstart/',
          urlType: 'post',
          getParam: (param, ids) => {
            return {
              ids: ids.map(item => item.id),
              enable: false,
            };
          },
        },
      },
      {
        text: '编辑',
        click: item => this.fluxStrategyCreateModal.show(item[0]),
      },
      {
        text: '删除',
        pop: true,
        popTitle: '确定删除吗?',
        // click: ({ id }) => this.deleteStrategies([id]),
        quick: true,
        quickParam: {
          url: '/api/strategy/flowcollect/',
          urlType: 'delete',
          getParam: (param, ids) => {
            return {
              ids: ids.map(item => item.id),
            };
          },
        },
      },
    ];
    const that = this;
    this.option = {
      table: {
        columns: this.generateColumns(),
        // columnsConfig: true,
        // tableId: 'flux',
        url: '/api/strategy/flowcollect/',
        urlType: null,
        beforeAjax: null,
        afterAjax: datas => {
          datas.forEach(data => {
            // 翻译effect_time
            if (data.effect_time && data.effect_time[0]) {
              const tem = this.effectTimeList.find(
                item => item.id === data.effect_time[0],
              );
              data['effect_time' + $LABEL] = (tem && tem.name) || '所有时间';
            } else {
              data['effect_time' + $LABEL] = '所有时间';
            }
            const tem1 = FluxCollectObjectType.find(
              i => i.value === data['collect_type'],
            ) || { label: '未选择' };
            data['collect_type'] = tem1.label + ' (' + data['assets_num'] + ')';
            const action = FluxCollectActionType.find(
              i => i.value === data['collect_act'],
            ) || { label: '' };
            data['collect_act'] = action.label;
          });
          return datas;
        },
        memory: false,
        memoryData: null,
        manualRefresh: true,
      },
      search: {
        show: true,
        config: true,
      },
      operation: {
        quick: true,
        add: {
          show: true,
          text: '新建',
          click: () => {
            that.fluxStrategyCreateModal.show();
          },
        },
        common: {
          show: true,
          text: '批量操作',
          columns: [
            {
              text: '启用',
              ...this.buttonColumns.find(item => item.text === '启用'),
              iif: () => true,
            },
            {
              text: '停用',
              ...this.buttonColumns.find(item => item.text === '停用'),
              iif: () => true,
            },
            {
              text: '删除',
              ...this.buttonColumns.find(item => item.text === '删除'),
              iif: () => true,
            },
          ],
        },
      },
    };
  }

  generateColumns(): STColumn[] {
    const enableBadge: STColumnBadge = {
      true: { text: '已启用', color: 'success' },
      false: { text: '已停用', color: 'error' },
    };
    const columns: STColumn[] = [
      { title: '', index: 'id', type: 'checkbox' },
      { title: '策略名称', index: 'name' },
      { title: '描述', index: 'comment' },
      { title: '状态', index: 'enable', type: 'badge', badge: enableBadge },
      {
        title: '采集对象',
        index: 'collect_type',
        type: 'link',
        // click: item => this.smsappm.show(item.id),
        // fluxAssetsModal
        click: item => this.fluxAssetsModal.show(item),
      },
      {
        title: '采集动作',
        index: 'collect_act',
      },
      {
        title: '业务流速总计',
        index: 'speed_total',
      },
      {
        title: '转发流速总计',
        index: 'speed_mirrored',
      },
      {
        title: '生效时间',
        index: 'effect_time',
        render: 'show-label-template',
      },
      { title: '创建者', index: 'creator' },
      { title: '最后更新时间', index: 'update_time', type: 'date', sort: true },
      {
        title: '操作',
        render: 'operation-template',
        buttons: this.buttonColumns,
      },
    ];
    return columns;
  }

  refresh() {
    this.nscTableSearch.nsctable.loadTableData();
  }

  // 翻译生效时间
  // /api/strategy/timeobj/
  getEffectTimeList() {
    this.http.get('/api/strategy/timeobj/', {}).subscribe({
      next: data => {
        this.effectTimeList = (data as any).list;
      },
      error: () => {},
    });
  }
}
