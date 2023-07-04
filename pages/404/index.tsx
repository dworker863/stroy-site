import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect } from 'react';
import {
  StyledNotFoundCode,
  StyledNotFoundDesc,
  StyledNotFoundPage,
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
          width={150}
          height={150 / ratio}
        />
        4
      </StyledNotFoundCode>
      <StyledNotFoundTitle>Страница не найдена</StyledNotFoundTitle>;
      <StyledNotFoundDesc>
        Возможно, она была удалена или ее никогда не существовало.
      </StyledNotFoundDesc>
      ;
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;
