import { Fragment } from "react";
import Project from "../components/Project";
import SecondImge from "../resources/img/2.jpg"
import ThirdImage from "../resources/img/3.jpg"
import MainCover from "../resources/img/main-cover.png"
import FirstImage from "../resources/img/1.jpg"
import FifthImage from "../resources/img/5.jpg"
let Projects = () => {
        return (
          <Fragment>
            <div className="cover-page">
              <div className="tit">
                <h1>Project</h1>
                <ul className="breadcrumb">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#" className="active">
                      project
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <section id="project">
        <div className="flex project pt-30">
            <Project title= "Title can be here" image={SecondImge}/>
            <Project title= "Title can be here" image={ThirdImage}/>
            <Project title= "Title can be here" image={MainCover}/>
        </div>

        <div className="flex project pt-30">
            <Project title= "Title can be here" image={FirstImage}/>
            <Project title= "Title can be here" image={FifthImage}/>
            <Project title= "Title can be here" image={ThirdImage}/>
        </div>

        <div className="flex project pt-30">
            <Project title= "Title can be here" image={SecondImge}/>
            <Project title= "Title can be here" image={ThirdImage}/>
            <Project title= "Title can be here" image={MainCover}/>
        </div>
        <div className="flex project pt-30">
            <Project title= "Title can be here" image={FifthImage}/>
            <Project title= "Title can be here" image={FifthImage}/>
            <Project title= "Title can be here" image={ThirdImage}/>
        </div>
      <div className="flex project">
            <Project title= "Title can be here" image={SecondImge}/>
            <Project title= "Title can be here" image={ThirdImage}/>
            <Project title= "Title can be here" image={MainCover}/>
        </div>
      </section>
          </Fragment>
        );
      };
export default Projects;