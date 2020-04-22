import * as React from 'react';
import {
  SelfWrap,
  SelfImageLeft,
  SelfTextRight,
  H1,
  Paragraph,
  P,
} from '../styles/selfIntroduction';
import {ImageMe} from '../components/imageMe';

const SelfIntroduction: React.FC = () => {
  return (
    <SelfWrap>
      <SelfImageLeft>
        <ImageMe />
      </SelfImageLeft>
      <SelfTextRight>
        <Paragraph>
          <H1>プロフィール</H1>
          <P>道下 潤</P>
          <P>HAL東京 Web開発学科 4年</P>
        </Paragraph>
        <Paragraph>
          <P>
            平成10年10月4日、大都市横浜のとある病院で爆誕。
            中学で進路を決める際に「お米を作りたい」という思いから農業高校へ。
            授業を受けているうちに農家の現状を知り絶望、プログラマーを目指す事を決意。
            高校卒業後に専門学校HAL東京へ入学、高度情報処理学科へ。
            2年時に触れたPHPでのWeb開発が最高に楽しく、Webへの道を進み始める。
            3年時にWeb開発学科へと進学し、今に至る。
          </P>
        </Paragraph>
      </SelfTextRight>
    </SelfWrap>
  );
};

export default SelfIntroduction;
