import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h1 className="lead">Contact Me</h1>
              <p className="lead">
              Feel free to contact me for any free lance work, projects or suggestions. Can contact me either through LinkedIn or email.
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Email :
                  {resumeData.email}
                </h4>
                <h4>LinkedInId :
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}