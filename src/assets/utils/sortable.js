import Sortable from 'sortablejs';

const sortableBundle = function(id, callback, sortHandle = '.dragSortIcon', dataKey = 'data-row-id') {
    const tbody = document.querySelector(id + ' .el-table__body-wrapper tbody');
    return new Sortable(tbody, {
        sort: true,
        handle: sortHandle,
        onEnd: (event) => {
            const dragSortIcon = tbody.querySelectorAll(sortHandle);
            const len = dragSortIcon.length;
            const ids = [];
            for(let i=0; i<len; i++) {
                ids.push({
                    id: dragSortIcon[i].attributes[dataKey].nodeValue,
                    seqno: (i + 1)
                });
            }
            callback(ids);
        },
        animation: 150
    });
};

export default sortableBundle;