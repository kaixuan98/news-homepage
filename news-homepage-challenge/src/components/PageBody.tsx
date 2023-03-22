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

type windowSize = {
  width: number;
  height: number;
}

type PageProps = {
  windowSize: windowSize;
}

const PageBody = ( {windowSize} : PageProps ) => {
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
    <main className="page__container" aria-label='Page Content'>
        <section className={`${'page__section'}`}aria-label='Top Section'>
            <article className={ `${"page__article"} ${"page__article--feature"}`} aria-label='Feature Article'>
              <div className="article__image-wrapper--feature">
                {
                  windowSize.width <= 375 ? (
                    <img src={require(`../assets/image-web-3-mobile.jpg`)} alt={featureArticle.title}></img>

                  ):(
                    <img src={require(`../assets/image-web-3-desktop.jpg`)} alt={featureArticle.title}></img>
                  )
                }
              </div>
              <div className="article__content-container--feature">
                <div className="article__title-wrapper">
                  <h1 className={` ${'article__title'} ${"article__title--feature"}`}
                  aria-label='Article Title'>{featureArticle.title}</h1>
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
            </article>

            <section className={`${"page__list--dark-bg"}`} aria-label='Side Section'>
              <h1 className={`${"list__title"} ${"list__title--dark-bg"}`} aria-label="Side Section Title">New</h1>
              {
                sideArticles.map( sideArticle => (
                  <article 
                    className={ `${"page__article"} ${"page__article--stack"}`} 
                    key={sideArticle.title}
                    aria-label="Side Article"
                    >
                    <h1 className={`${"article__title"} ${"article__title--dark-bg"}`}>{sideArticle.title}</h1>
                    <p className="article__subtitle">{sideArticle.subtitle}</p>
                    <hr className="article__seperator"></hr>
                  </article>
                ) )
              }
            </section>
        </section>

        <section className="page__section" aria-label='Bottom Section'>
            {
              smallArticles.map( (article) => (
                  <article className={ `${"page__article"} ${"page__article--sideways"}`} key={article.no} aria-label='Small Article'>
                    <div className="article__image-wrapper">
                      <img src={require(`../assets/${article.img}`)} alt={article.title}></img>
                    </div>
                    <div className={`${"article__content"} ${"article__content--stack"}`}>
                      <p className="article__numbering">{article.no}</p>
                      <h1 className="article__title">{article.title}</h1>
                      <p className="article__subtitle">{article.subtitle}</p>
                    </div>
                  </article>
              ))
            }
        </section>
    </main>
  )
}

export default PageBody
