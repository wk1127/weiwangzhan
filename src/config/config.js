import {Message, MessageBox} from 'element-ui';
/**
 * 检测断网
 */
let EventUtil = {
    addHandler: (element, type, handler) => {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    }
};
EventUtil.addHandler(window, 'online', () => {
    Message.success('网络连接已恢复');
});
EventUtil.addHandler(window, 'offline', () => {
    MessageBox.alert('请确认网络是否连通，否则会造成当前工作丢失', '掉线了？', {
        confirmButtonText: '好的，我知道了'
    });
});

