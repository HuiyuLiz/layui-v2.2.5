    const data = [{
      id: 1,
      title: '一级菜单-1',
      status: 1,
      menuList: [
        {
          id: 1,
          title: '一级菜单-1',
          status: 1,
        }, {
          id: 2,
          title: '二级菜单-1-1',
          status: 1,
          apiList: [{
            id: 4,
            title: '三级菜单-编辑',
            status: 1,
          }, {
            id: 5,
            title: '三级菜单-删除',
            status: 0,
          }]
        }, {
          id: 3,
          title: '二级菜单-1-2',
          status: 0,
        }]
    },{
      id: 7,
      title: '一级菜单-2',
      status: 1,
      menuList: [
        {
          id: 7,
      		title: '一级菜单-2',
      		status: 1,
        },  {
          id: 9,
          title: '二级菜单-2-2',
          status: 1,
        }]
    }]

	// 取得第三级勾选菜单
	let result = data.map(d=>{
		// 移除menuList第一笔
		const [, ...rest] = d.menuList;
		return {
			id:d.id,
			title:d.title+d.id,
			status:d.status,
			children:rest.map((menu,index)=>{
				return {
						id:menu.id,
						title:menu.title+d.id,
						status:menu.status,
						children:menu.apiList?menu.apiList.map(api=>{
							return{
								id:api.id,
								title:api.title+d.id,
								status:api.status,
								checked:!!api.status,
							}
						}):[]
				}				
			})
		}
	})

	let apiList=[]
	let checkedIds = data.forEach(d=>{
		d.menuList.forEach(element => {
			if(element.apiList!==undefined){
 				apiList.push(element.apiList)
			}
		});
	})

// 	apiList.forEach(api=>{
// 		api.forEach(a=>{
// 			if(a.status===1){
// 				console.log(a.id)
// 			}
// 		})
// })

// 找出 status==1 的id
let formatData=[{
    "id": 1,
    "title": "一级菜单-11",
    "status": 1,
    "children": [
        {
            "id": 2,
            "title": "二级菜单-1-11",
            "status": 1,
            "children": [
                {
                    "id": 4,
                    "title": "三级菜单-编辑1",
                    "status": 1,
                    "checked": true
                },
                {
                    "id": 5,
                    "title": "三级菜单-删除1",
                    "status": 0,
                    "checked": false
                }
            ]
        },
        {
            "id": 3,
            "title": "二级菜单-1-21",
            "status": 0,
            "children": []
        }
    ]
},{
    "id": 7,
    "title": "一级菜单-27",
    "status": 1,
    "children": [
        {
            "id": 9,
            "title": "二级菜单-2-27",
            "status": 1,
            "children": []
        }
    ]
}]

const getIdsWithStatus = (obj, status) => 
  obj.reduce((acc, item) => {
    if (item.children)
      acc.push(...getIdsWithStatus(item.children, status))
    if (item.status === status)
      acc.push(item.id)
    return acc;
  }, []);

console.log(getIdsWithStatus(formatData, 1))