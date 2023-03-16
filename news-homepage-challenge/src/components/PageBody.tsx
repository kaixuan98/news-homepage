import React from 'react'

interface Article {
  title: string;
  subtitle: string; 
}

interface SmallArticle extends Article{
  img: string;
  no: string;
}

interface FeatureArticle extends Article{
  img: string;
  buttonText: string;
}

const PageBody = () => {
  const smallArticles: SmallArticle[] = [
    {
      img: 'image-retro-pcs.jpg',
      no: '01',
      title: 'Reviving Retro PCs',
      subtitle: 'What happens when old PCs are given modern upgrades?'
    },
    {
      img: 'image-top-laptops.jpg',
      no: '02',
      title: 'Top 10 Laptops of 2022',
      subtitle: 'Our best picks for various needs and budgets.'
    },
    {
      img: 'image-gaming-growth.jpg',
      no: '03',
      title: 'The Growth of Gaming',
      subtitle: 'How the pandemic has sparked fresh opportunities.'
    }
  ]

  const sideArticles: Article[] = [
    {
      title: 'Hydrogen VS Electric Cars',
      subtitle: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
      title: 'The Downsides of AI Artistry',
      subtitle: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
      title: 'Is VC Funding Drying Up?',
      subtitle: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }
  ]

  const featureArticle: FeatureArticle = {
    title: 'The Bright Future of Web 3.0?',
    subtitle: 'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
    img: 'image-web-3-desktop.jpg',
    buttonText: 'Read More'
  }

  return (
    <div className="page__container">
        <div className={`${'page__section'}`}>
            <div className={ `${"page__article"} ${"page__article--feature"}`}>
              <div className="article__image-wrapper--feature">
                <img src={require(`../assets/image-web-3-desktop.jpg`)} alt={featureArticle.title}></img>
              </div>
              <div className="article__content-container--feature">
                <div className="article__title-wrapper">
                  <p className={` ${'article__title'} ${"article__title--feature"}`}>{featureArticle.title}</p>
                </div>
                <div className="article__content-wrapper">
                  <div className={`${"article__content--stack"} ${"article__content--feature"}`}>
                    <p className="article__subtitle">{featureArticle.subtitle}</p>
                    <div className="btn__wrapper">
                      <button className="btn">{featureArticle.buttonText}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${"page__list"} ${"page__list--stack"} ${"page__list--dark-bg"}`}>
              <p className={`${"list__title"} ${"list__title--dark-bg"}`}>New</p>
              {
                sideArticles.map( sideArticle => (
                  <div className={ `${"page__article"} ${"page__article--stack"}`}>
                    <p className={`${"article__title"} ${"article__title--dark-bg"}`}>{sideArticle.title}</p>
                    <p className="article__subtitle">{sideArticle.subtitle}</p>
                    <hr className="article__seperator"></hr>
                  </div>
                ) )
              }
            </div>
        </div>

        <div className="page__section">
            {
              smallArticles.map( (article) => (
                  <div className={ `${"page__article"} ${"page__article--sideways"}`} key={article.no}>
                    <div className="article__image-wrapper">
                      <img src={require(`../assets/${article.img}`)} alt={article.title}></img>
                    </div>
                    <div className={`${"article__content"} ${"article__content--stack"}`}>
                      <p className="article__numbering">{article.no}</p>
                      <p className="article__title">{article.title}</p>
                      <p className="article__subtitle">{article.subtitle}</p>
                    </div>
                  </div>
              ))
            }

            
        </div>
    </div>
  )
}

export default PageBody
