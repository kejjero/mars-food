import '../scss/app.scss'
import Header from "./Header";
import Categories from "./Categories";
import burger from "../images/burger.png"
import Sort from "./Sort";

function App() {
  return (
          <div className="wrapper">
              <Header/>
              <div className="content">
                  <div className="container">
                      <div className="content__top">
                          <Categories/>
                          {/*<Sort/>*/}
                      </div>


                      <h2 className="content__title">Меню</h2>
                      <div className="content__items">
                          <div className="pizza-block">
                              <img
                                  className="pizza-block__image"
                                  src={burger}
                                  alt="Pizza"
                              />
                              <h4 className="pizza-block__title">Марсбургер</h4>
                              <p className="pizza-block__description">
                                  Ветчина, полукопченая колбаса,
                                  болгарский перец, маринованные огурцы,
                                  белый соус, сыр моцарелла, зелень
                              </p>
                              <div className="pizza-block__bottom">
                                  <div className="pizza-block__price">от 180 &psi;</div>
                                  <div className="button button--outline button--add">
                                      <svg
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                              fill="white"
                                          />
                                      </svg>
                                      <span>Добавить</span>
                                      <i>2</i>
                                  </div>
                              </div>
                          </div>
                          <div className="pizza-block">
                              <img
                                  className="pizza-block__image"
                                  src={burger}
                                  alt="Pizza"
                              />
                              <h4 className="pizza-block__title">Саларианcкий малыш</h4>
                              <p className="pizza-block__description">
                                  Ветчина, полукопченая колбаса,
                                  болгарский перец, маринованные огурцы,
                                  белый соус, сыр моцарелла, зелень
                              </p>
                              <div className="pizza-block__bottom">
                                  <div className="pizza-block__price">от 235 &psi;</div>
                                  <div className="button button--outline button--add">
                                      <svg
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                              fill="white"
                                          />
                                      </svg>
                                      <span>Добавить</span>
                                  </div>
                              </div>
                          </div>
                          <div className="pizza-block">
                              <img
                                  className="pizza-block__image"
                                  src={burger}
                                  alt="Pizza"
                              />
                              <h4 className="pizza-block__title">Жгучий ануннак</h4>
                              <p className="pizza-block__description">
                                  Ветчина, полукопченая колбаса,
                                  болгарский перец, маринованные огурцы,
                                  белый соус, сыр моцарелла, зелень
                              </p>
                              <div className="pizza-block__bottom">
                                  <div className="pizza-block__price">от 395 &psi;</div>
                                  <div className="button button--outline button--add">
                                      <svg
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                              fill="white"
                                          />
                                      </svg>
                                      <span>Добавить</span>
                                  </div>
                              </div>
                          </div>
                          <div className="pizza-block">
                              <img
                                  className="pizza-block__image"
                                  src={burger}
                                  alt="Pizza"
                              />
                              <h4 className="pizza-block__title">Землянская-пицца</h4>
                              <p className="pizza-block__description">
                                  Ветчина, полукопченая колбаса,
                                  болгарский перец, маринованные огурцы,
                                  белый соус, сыр моцарелла, зелень
                              </p>
                              <div className="pizza-block__bottom">
                                  <div className="pizza-block__price">от 550 &psi;</div>
                                  <div className="button button--outline button--add">
                                      <svg
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                              fill="white"
                                          />
                                      </svg>
                                      <span>Добавить</span>
                                  </div>
                              </div>
                          </div>
                          <div className="pizza-block">
                              <img
                                  className="pizza-block__image"
                                  src={burger}
                                  alt="Pizza"
                              />
                              <h4 className="pizza-block__title">Марсбургер</h4>
                              <p className="pizza-block__description">
                                  Ветчина, полукопченая колбаса,
                                  болгарский перец, маринованные огурцы,
                                  белый соус, сыр моцарелла, зелень
                              </p>
                              <div className="pizza-block__bottom">
                                  <div className="pizza-block__price">от 395 &psi;</div>
                                  <div className="button button--outline button--add">
                                      <svg
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                              fill="white"
                                          />
                                      </svg>
                                      <span>Добавить</span>
                                  </div>
                              </div>
                          </div>
                          <div className="pizza-block">
                              <img
                                  className="pizza-block__image"
                                  src={burger}
                                  alt="Pizza"
                              />
                              <h4 className="pizza-block__title">Саларианcкий малыш</h4>
                              <p className="pizza-block__description">
                                  Ветчина, полукопченая колбаса,
                                  болгарский перец, маринованные огурцы,
                                  белый соус, сыр моцарелла, зелень
                              </p>
                              <div className="pizza-block__bottom">
                                  <div className="pizza-block__price">395 &psi;</div>
                                  <div className="button button--outline button--add">
                                      <svg
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                              fill="white"
                                          />
                                      </svg>
                                      <span>Добавить</span>
                                  </div>
                              </div>
                          </div>
                          <div className="pizza-block">
                              <img
                                  className="pizza-block__image"
                                  src={burger}
                                  alt="Pizza"
                              />
                              <h4 className="pizza-block__title">Жгучий ануннак</h4>
                              <p className="pizza-block__description">
                                  Ветчина, полукопченая колбаса,
                                  болгарский перец, маринованные огурцы,
                                  белый соус, сыр моцарелла, зелень
                              </p>
                              <div className="pizza-block__bottom">
                                  <div className="pizza-block__price">от 395 &psi;</div>
                                  <div className="button button--outline button--add">
                                      <svg
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                              fill="white"
                                          />
                                      </svg>
                                      <span>Добавить</span>
                                  </div>
                              </div>
                          </div>
                          <div className="pizza-block">
                              <img
                                  className="pizza-block__image"
                                  src={burger}
                                  alt="Pizza"
                              />
                              <h4 className="pizza-block__title">Землянская-пицца</h4>
                              <p className="pizza-block__description">
                                  Ветчина, полукопченая колбаса,
                                  болгарский перец, маринованные огурцы,
                                  белый соус, сыр моцарелла, зелень
                              </p>
                              <div className="pizza-block__bottom">
                                  <div className="pizza-block__price">от 395 &psi;</div>
                                  <div className="button button--outline button--add">
                                      <svg
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                              fill="white"
                                          />
                                      </svg>
                                      <span>Добавить</span>
                                      <i>2</i>
                                  </div>
                              </div>
                          </div>
                          <div className="pizza-block">
                              <img
                                  className="pizza-block__image"
                                  src={burger}
                                  alt="Pizza"
                              />
                              <h4 className="pizza-block__title">Чизбургер-пицца</h4>
                              <div className="pizza-block__bottom">
                                  <div className="pizza-block__price">от 395 &psi;</div>
                                  <div className="button button--outline button--add">
                                      <svg
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <path
                                              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                              fill="white"
                                          />
                                      </svg>
                                      <span>Добавить</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  )
}

export default App;
