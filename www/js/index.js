var stateEl = document.getElementById('state');
var deviceList = document.getElementById('deviceList');

var app = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById("startScan").addEventListener('touchstart', this.startScan, false);
        document.getElementById("stopScan").addEventListener('touchstart', this.stopScan, false);
        document.getElementById("refresh").addEventListener('touchstart', this.refresh, false);
        // deviceList.addEventListener('touchstart', this.connect, false);
        navigator.notification.alert('bindEvents', this.alertCallback, 'bindEvents', '닫기')
    },
    onDeviceReady: function () {
        this.startScan();
        // ble.startScan([],this.discoverSuccess, this.onError);
        // this.initializeBLE();
    },
    initializeBLE: function () {
        // bluetoothle.initialize(this.initializeResult, {
        //     "request": true,
        //     "statusReceiver": false,
        //     "restoreKey": "bluetoothleplugin"
        // });
        // bluetoothle.enable(function (resut) {
        //     navigator.notification.alert('enable: ' + resut, this.alertCallback, '블루투스 사용', '닫기')
        // }, this.onError);
    },
    initializeResult: function (resut) {
        stateEl.innerHTML = resut.status;
    },
    startScan: function () {
        stateEl.innerText = 'Scanning...'
        // { name: 'CareSens 2958' }
        // bluetoothle.startScan(app.discoverSuccess, app.onError, []);
        ble.startScan([],this.discoverSuccess, this.onError);
    },
    stopScan: function () {
        stateEl.innerHTML = 'Stop'
        ble.stopScan();
        // bluetoothle.stopScan(this.onSuccess, this.onError);
    },
    refresh: function () {
        stateEl.innerText = 'Scanning...'
        deviceList.innerHTML = ''; // empties the list
        // bluetoothle.startScan(app.discoverSuccess, app.onError, []);
    },
    discoverSuccess: function (device) {
        // CareSens 2958
        // if (device.name.match(/CareSens/i)) {
        var listItem = document.createElement('li');
        //     html = '<b>' + device.name + '</b><br/>' +
        //         'RSSI: ' + device.rssi + '&nbsp;|&nbsp;' +
        //         device.id;

        // listItem.dataset.deviceId = device.id;
        // listItem.innerHTML = html;
        listItem.innerHTML = JSON.stringify(device);
        deviceList.appendChild(listItem);
        // }
    },
    onSuccess: function (reason) {
        navigator.notification.alert("Success: " + reason, this.alertCallback, '성공', '닫기')
    },
    onError: function (reason) {
        navigator.notification.alert("ERROR: " + reason, this.alertCallback, '에러', '닫기')
    },
    alertCallback: function () {
    }
};

app.initialize();