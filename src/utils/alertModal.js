// import { Navigation } from 'react-native-navigation';
import { Navigation } from 'react-native-navigation';

export default {
  show: (textObj, onOk) => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              id: 'AlertModal',
              name: 'AlertModal',
              passProps: { textObj, onOk },
              options: {
                topBar: {
                  visible: false,
                  translucent: true,
                  color: 'transparent',
                },
                layout: {
                  backgroundColor: 'transparent',
                  componentBackgroundColor: 'transparent',
                },
                screenBackgroundColor: 'transparent',
                modalPresentationStyle: 'overCurrentContext',
                componentBackgroundColor: 'transparent',
                navBarHidden: true,
                animations: {
                  showModal: {
                    alpha: {
                      from: 0,
                      to: 1,
                      duration: 100,
                    },
                  },
                  dismissModal: {
                    alpha: {
                      from: 1,
                      to: 0,
                      duration: 100,
                    },
                  },
                },
              },
            },
          },
        ],
        options: {},
      },
    });
  },

  hide: () => {
    // console.log('componend Id', componentId);
    Navigation.dismissModal('AlertModal').catch((err) => {
      console.log(err); // Nothing to dissmiss uyarısı için yazıldı
    });
  },
};
