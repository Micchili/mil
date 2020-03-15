import * as React from 'react';
import {
  SelfWrap,
  SelfImageLeft,
  SelfTextRight,
  H1,
  Paragraph,
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
          <p>道下 潤</p>
          <p>HAL東京 Web開発学科 ３年</p>
        </Paragraph>
        <Paragraph>
          <p>
            平成10年10月4日、大都市横浜のとある病院で爆誕。
            中学で進路を決める際に「お米を作りたい」という思いから農業高校へ。
            授業を受けているうちに農家の現状を知り絶望、PCを普段からいじっていたため、プログラマーを目指す事を決意。
            高校卒業後、専門学校HAL東京へ入学、高度情報処理学科へ。
            2年時に触れたPHPでのWeb開発が最高に楽しく、Webへの道を進み始める。
            3年時、Web開発学科へと進学し、今に至る。
          </p>
        </Paragraph>
        <Paragraph>
          <p>
            フロントエンドエンジニアを目指しています。
            今まで経験してきた言語はHTML5/CSS3,PHP,JavaScript,Cです。
            普段書いている言語はReactとTypeScriptです。
            このサイトはFireBaseのFireStoreとHostingで構築しています。
          </p>
        </Paragraph>
      </SelfTextRight>
    </SelfWrap>
  );
};

export default SelfIntroduction;
