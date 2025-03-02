import React, { useState } from 'react';
import useTheme from '../../hooks/useTheme';
import Button from '../Button';

const Article = () => {
  const { theme, toggleTheme } = useTheme();
  const [likes, setLikes] = useState(0);

  const articleStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <div style={articleStyle}>
      <div className={theme}>
    <ol type="1">
        <li>Первоначальное имя SpongeBob было Spongeboy Ahoy! но слово Spongeboy оказалось защищено авторским правом компанией по уборке. <br /> Но сейчас мы все понимаем, что SpongeBob гораздо оригинальнее, чем просто какая-то "губка-мальчик".</li>
        <li>Стивен Хилленбург придумал идею для эпизода" Sailor Mouth", но все сказали: НЕТ. <br /> Он даже не смог использовать бип ("запикивать" нехорошие слова). Вместо этого он использовал звук дельфина.</li>
        <li>В 2011 году был открыт новый вид грибов, и его назвали в честь Спанч Боба. <br /> Исследователи из Университета штата Сан-Франциско назвали гриб Spongiforma squarepantsii.</li>
        <li>Смех Спанч Боба основан на звуке дельфина.</li>
        <li>Кэролин Лоуренс, голос Сэнди Чикс, получила много писем из тюрем, <br /> она заявила, что это её самая большая база поклонников.</li>
        <li>Любимый персонаж Барака Обамы всех времён — Губка Боб Квадратные Штаны, <br /> потому что он смотрел это шоу вместе со своими дочерьми.</li>
    </ol>
</div>
      <Button onClick={handleLike}>Лайк: {likes}</Button>
      <Button onClick={toggleTheme}>Переключить тему</Button>
    </div>
  );
};

export default Article;
