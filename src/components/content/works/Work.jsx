import React from 'react';
import './Work.css';
import { Link as RouteLink } from 'react-router-dom';
// images (all in one bcs time of loading will be wrapped)
import mini_one from '../../../img/personal-page_mini.png';
import mini_two from '../../../img/express-photo_mini.png';
import mini_three from '../../../img/project-one_mini.png';
import mini_four from '../../../img/project-two_mini.png';

class Work extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getViewport = this.getViewport.bind(this);
  }

  render () {
    let img_array = [mini_one, mini_two, mini_three, mini_four];
    const { src, Prj, id } = this.props;
    let half_name_1, half_name_2, mini_desc;
    try {
      half_name_1 = Prj[id].half_name_1;
      half_name_2 = Prj[id].half_name_2;
      mini_desc = Prj[id].mini_descr_text;
    } catch (error) {
      half_name_1 = 'Название';
      half_name_2 = 'проекта';
      mini_desc = 'Описание проекта';
    }
    const render_img = img_array[id];

    return (
      <RouteLink to={`/` + src}>
        <div
          className={'work--work_container'}
          onClick={this.handleClick}>
          <label className="work--text_block">
            <h5 className="work--text_header headers-of-work-font">{half_name_1}<br/>{half_name_2}</h5>
            <p className="descr-of-work-font">{mini_desc}</p>
          </label>
          <div className="work--wrapped_background">
            <div className='work--wrapped_background_div'/>
          </div>
          <img
            className="work--background"
            src={render_img}
            alt="this is screenshot of the web-page"/>
        </div>
      </RouteLink>
    );
  }

  handleClick () {
    const { chooseWork, id } = this.props;
    chooseWork(id);
    window.scrollTo(0, 0);
  }

  componentDidMount () {
    this.getViewport();
    // данный код раскрашивает каждый блок в индивидуальные цвета
    const coloring = () => {
      let background_clr = document.getElementsByClassName('work--wrapped_background');
      let background_clr_div = document.getElementsByClassName('work--wrapped_background_div');
      let work_text_clr = document.getElementsByClassName('work--text_block');
      let clr = 1;

      for (let item of background_clr) {
        item.style.backgroundColor = `var(--color-${clr})`;
        clr += 1;
      }
      clr = 1;

      for (let item of background_clr_div) {
        item.style.borderColor = `var(--color-${clr})`;
        clr += 1;
      }
      clr = 1;

      for (let item of work_text_clr) {
        item.style.color = `var(--color-${clr})`;
        clr += 1;
      }
      clr = 1;
    };
    coloring();
  }

  componentDidUpdate () {
    this.getViewport();
  }

  // different params for mobile devices
  getViewport () {
    let height = window.innerHeight;
    let width = window.innerWidth;
    if (width <= 576) {
      let aspect_ratio = height / width;
      let current_ratio =
        aspect_ratio >= 1.9 ? 0 :
          aspect_ratio >= 1.6 ? 1 :
            aspect_ratio >= 1.5 ? 2 :
              aspect_ratio >= 1.3 ? 3 : 4;
      let work_container = document.getElementsByClassName('work--work_container');
      switch (current_ratio) {
        case 0:
          for (let item of work_container) {
            item.style.height = '23vh';
          }
          break;
        case 1:
          for (let item of work_container) {
            item.style.height = '28vh';
          }
          break;
        case 2:
          for (let item of work_container) {
            item.style.height = '30vh';
          }
          break;
        case 3:
          for (let item of work_container) {
            item.style.height = '33vh';
          }
          break;
        default:
          break;
      }
    }
  }

}

export default Work;
