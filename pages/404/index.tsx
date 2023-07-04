import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import {
  StyledNotFoundCode,
  StyledNotFoundDesc,
  StyledNotFoundLink,
  StyledNotFoundNav,
  StyledNotFoundPage,
  StyledNotFoundSeparator,
  StyledNotFoundTitle,
} from './StyledNotFoundPage';

const NotFoundPage: NextPage = () => {
  const ratio = 323 / 430;

  useEffect(() => {
    const scrollPageToCenter = () => {
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollYCenter = (docHeight - windowHeight) / 2 + 100;
      window.scrollTo(0, scrollYCenter);
    };

    scrollPageToCenter();
  }, []);

  return (
    <StyledNotFoundPage>
      <StyledNotFoundCode>
        4
        <Image
          src="/images/builder.avif"
          alt="Разбитая стена"
          width={140}
          height={140 / ratio}
        />
        4
      </StyledNotFoundCode>
      <StyledNotFoundTitle>Страница не найдена</StyledNotFoundTitle>
      <StyledNotFoundDesc>
        Возможно, она была удалена или ее никогда не существовало.
      </StyledNotFoundDesc>
      <StyledNotFoundNav>
        <li>
          <StyledNotFoundLink href="/">
            Главная <StyledNotFoundSeparator>|</StyledNotFoundSeparator>
          </StyledNotFoundLink>
        </li>
        <li>
          <StyledNotFoundLink href="/projects">
            Проекты <StyledNotFoundSeparator>|</StyledNotFoundSeparator>
          </StyledNotFoundLink>
        </li>
        <li>
          <StyledNotFoundLink href="/video">
            Видео <StyledNotFoundSeparator>|</StyledNotFoundSeparator>
          </StyledNotFoundLink>
        </li>
        <li>
          <StyledNotFoundLink href="/calculator">
            Калькулятор <StyledNotFoundSeparator>|</StyledNotFoundSeparator>
          </StyledNotFoundLink>
        </li>
        <li>
          <StyledNotFoundLink href="/contacts">
            Контакты <StyledNotFoundSeparator>|</StyledNotFoundSeparator>
          </StyledNotFoundLink>
        </li>
      </StyledNotFoundNav>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;
