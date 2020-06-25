updateIpInfo() {
    const vpcArray = [];
    this.network.forEach(item => {
      vpcArray.push(item.vpc);
    });
    const result = this.duplicates(vpcArray);
    // 有重复的vpc，进一步检查其对应的ip地址是否相等
  }

// 查找该资产重复的vpc
duplicates(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          result.push(arr[i]);
          break;
        }
      }
    }
    return result;
  }

  封装table表格组件，编译错误且有展示问题；原因是，table表格有属于自己的module,
  import { NzTableModule } from 'ng-zorro-antd/table';


  setCollectData(list) {
    let total = 0;
    let totalArr = [];
    const data = list && list.map(v => {
      v.value = v.count;
      v.name = v.key;
      total += v.count;
      return v;
    });
    while (data.length < 5) {
      data.push({
        value: '',
        name: ''
      });
    }
    const newData = Object.assign([], data);
    for (let i = 0; i < newData.length; i++) {
      totalArr.push({
        showValue: newData[i].value,
        value: total,
        name: newData[i].name
      });
    }
    const dataArr = data.reverse();
    const totalArrNew = totalArr.reverse();
    return { dataArr, totalArrNew };
  }


  res => {
    const { dataArr, totalArrNew } = this.setCollectData(res.chart);
    this.ipTopChartEmpty = false;
    this.ipTopChartLoading = false;
    const options = Object.assign({}, this.riskBar);
    console.log('%c 🍿 options: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', options);
    options.series[0].data = dataArr;
    options.series[1].data = totalArrNew;
    console.log('%c 🥚 options: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', options);
    this.riskCharts.chartInstance.setOption(options);
  },
  () => {
    this.ipTopChartEmpty = true;
    this.ipTopChartLoading = false;
  }


  public threatTopChartEmpty = false;
  public ipTopChartEmpty = false;
  public ipTopChartLoading = false;

  <div [class.hidden]="threatTopChartEmpty">
            <div chart #riskCharts="chartEle" [options]="riskBar"></div>
          </div>
          <div *ngIf="threatTopChartEmpty" class="no-data-container">
            <nz-empty nzNotFoundImage="simple"></nz-empty>
          </div>



          var arr = []
var threeSum = function (nums) {
  nums.sort((a, b) => {
    return a - b
  })
  if (nums === null) return [];
  if (nums.length < 3) return [];
  if (nums === [0,0,0]) return [0,0,0]
  for (var i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (var j = i + 1; j < nums.length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      for (var k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          continue;
        }
        if (nums[i] + nums[j] + nums[k] === 0) {
          arr.push([nums[i], nums[j], nums[k]])
          console.log(arr)
        }
      }
    }
  }
  return arr;
}


this.networkInfo.privateIpv4.push(item.privateNetworkIpv4);
this.networkInfo.privateIpv6.push(item.privateNetworkIpv6);
this.networkInfo.publicIpv4.push() = item.publicNetworkIpv4;
this.networkInfo.publicIpv6.push() = item.publicNetworkIpv6;