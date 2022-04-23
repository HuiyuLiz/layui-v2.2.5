const data = [
	{
		title: '一级1',
		id: 1,
		field: 'name1',
		spread: true,
		children: [
			{
				title: '二级1-1 可允许跳转',
				id: 3,
				field: 'name11',
				spread: true,
				children: [{ title: '三级1-1-1', id: 7, field: '', checked: true }]
			}
		]
	}
]


function convert(array) {
    const iter = o => o ? [{ id: o.id }, ...iter(o.children)] : [];
    return array.map(({ id, children }) => ({ id, children: iter(children) }));
}

console.log(convert(data));