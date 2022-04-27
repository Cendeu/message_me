import consumer from "./consumer";
// import {scroll_bottom} from '../application';

consumer.subscriptions.create({ channel: "ChatroomChannel"}, {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#message-box').append(data.new_message);
    scroll_bottom();
  }
});
