import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              <p><a href="mailto:stacywmsiverd@gmail.com">Shoot me an email</a>, I'd love to hear from you!</p>
              
              </div>
            </aside>
          </div>
        </section>
        );
  }
}