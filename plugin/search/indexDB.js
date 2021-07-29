
export const initIndexDB = (dbName, tableName, data ) => {
    // 打开数据库
//    const request = window.indexedDB.open(dbName);
}

export const addData = (dbName, tableName, data) => {

    const request = window.indexedDB.open(dbName);
    // var request = indexedDB.open(dbName, 2);

    request.onerror = function(event) {
        // 错误处理
    };

    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        // 建立一个对象仓库来存储我们客户的相关信息，我们选择 ssn 作为键路径（key path）
        // 因为 ssn 可以保证是不重复的
        var objectStore = db.createObjectStore(tableName, { keyPath: 'searchIndex' });

        // 使用事务的 oncomplete 事件确保在插入数据前对象仓库已经创建完毕
        objectStore.transaction.oncomplete = function(event) {
            // 将数据保存到新创建的对象仓库
            var customerObjectStore = db.transaction(tableName, "readwrite").objectStore(tableName);
            customerObjectStore.add(data);
            
        };
    };
    
}

export const getData = async (dbName, tableName, key, callback) => {
    const request = window.indexedDB.open(dbName);

    request.onerror = function(event) {
        console.error(event)
        // 错误处理
    };

    request.onsuccess = function (event) {
        const db = event.target.result;
        db.transaction(tableName)
            .objectStore(tableName)
            .get(key)
            .onsuccess = function(event) {
                if (callback) callback(event)
            };
      };
    
}