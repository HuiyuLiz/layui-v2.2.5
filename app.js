// 找出 status==1 的id
// Recursively get nested array which status equal one : https://stackoverflow.com/questions/71988117/recursively-get-nested-array-which-status-equal-one

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
