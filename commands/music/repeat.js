module.exports = {
    name: "반복",
    aliases: ["반복재생"],
    description: "노래를 반복해요",
    run: async (client, message, args) => {
      if (!message.member.voice.channel) return message.channel.send("보이스채널에 먼저 들어가셔야 해요!")
      if (!client.distube.isPlaying(message)) return message.channel.send("듣고 계신거 맞죠?!")
      let mode = null;
      switch (args[0]) {
        case "끄기":
          mode = 0
          break
        case "한곡만":
          mode = 1
          break
        case "전체":
          mode = 2
          break
      }
      mode = client.distube.setRepeatMode(message, mode);
      mode = mode ? mode == 2 ? "`전체 반복` 하기로" : "`한 곡만` 하기로" : "`끄기`로";
      message.channel.send(`${mode} 할게요!`);
    }
  }
  