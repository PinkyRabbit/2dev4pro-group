function getUsername({ username }) {
 return username ? `@${username}` : '*со скрытым ником*';
}

const messageFor = {
  reward: (username, title, description) => 
    username
    ? [
      `💥 @${username}, поздравляем!`,
      '---',
      `Вы получили награду: *${title}*🎖`,
      ' ',
      `_${description}_`,
    ].join('\n')
    : [
      `💥 Пользователь *со скрытым ником* получает награду: *${title}*🎖`,
      ' ',
      `_${description}_`,
    ].join('\n'),
  topic: (data) => [
    `Пользователь ${getUsername(data)} создал новый раздел`,
    `*${data.topic}*`,
    '🥶  🎃  🥶  🎃  🥶',
  ].join('\n'),
  admin: (data) =>  {
    return data.isPositive
      ? [
        `🍺 Пользователь ${getUsername(data)} теперь модератор.`,
        '🍹 🍹 🍹 🍹 🍹',
        'Просим любить и жаловать!'
      ].join('\n')
      : [
        `☠️ Пользователь ${getUsername(data)} больше не модератор.`,
        '🥁 🥁 🥁 🥁 🥁',
        'Благодарим за работу в команде! Желаем успехов!'
      ].join('\n');
  },
};

module.exports = { messageFor };
