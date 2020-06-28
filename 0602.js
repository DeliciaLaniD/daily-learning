searchEvent(e): void {
    console.log('%c 🥪 e: ', 'font-size:20px;background-color: #42b983;color:#fff;', e);
    console.log(this.searchParams)
    // 常用搜索条件，选择某项之后，会触发这里，直接发请求导致选择条件不完整，处理为点击之后不发请求
    if (this.commonOptions && JSON.stringify(e) !== '{}') {
      const commonArray = [];
      this.commonOptions.forEach((item, index) => {
        commonArray.push(item.tagsArray[0].key);
      });
      const eKey = Object.keys(e);
      commonArray.forEach(item => {
        if (eKey[0] === item && this.tags.length) {
          return;
        }
      });
    // this.searchRegionParam.value有值，表示是从服务器地域/专有网络跳转过来，请求该地域的所有服务器
    } else if ((this.searchRegionParam.value || this.searchVpcParam.value) && JSON.stringify(e) === '{}') {
      if (this.searchRegionParam.value) {
        this.searchParams.criteria[0] = {
          name: this.goCheckServerType,
          value: this.searchRegionParam.value
        };
      } else {
        this.searchParams.criteria[0] = {
          name: this.goCheckServerType,
          value: this.searchVpcParam.value
        };
      }
      // tslint:disable-next-line: no-unused-expression
      this.tableRef && this.tableRef.refresh();
      return;
    } else if (JSON.stringify(e) === '{}') {
      // 点击清空也触发该函数，如果此时直接return，则不会请求列表
      this.searchParams.logic = '';
      this.searchParams.criteria = [];
      // tslint:disable-next-line: no-unused-expression
      this.tableRef && this.tableRef.refresh();
      return;
    } else {
      const search: any = {};
      search.logic = e.logic;
      delete e.logic;
      search.criteria = [];
      for (const i in e) {
        if (e.hasOwnProperty(i)) {
          if (Array.isArray(e[i]) && e[i].length > 0) {
            for (const sub of e[i]) {
              search.criteria.push({
                name: i,
                value: sub
              });
            }
          }
        }
      }
      this.searchParams = Object.assign(this.searchParams, search);
      this.tableRef.refresh();
    }
  }