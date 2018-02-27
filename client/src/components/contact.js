import React from 'react';
import ContactContent from '../containers/contact_content';
import EmailMe from '../containers/email_me';
import Modal from '../components/modal';

const contactText = {
  heading: "I am looking for new opportunities and unique ideas.",
  button: "Contact me!"
};


class Contact extends React.Component{

  constructor(props){
    super(props);
    this.state={
      modalShowing: false
    };
  }
  
  showModal(){
    console.log("opneing")
    this.setState({modalShowing: true});
  }

  closeModal(){
    console.log("closing")
    this.setState({modalShowing: false});
  }

  render(){
    return(
      <section name={this.props.name} id="contact-me">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Want to work together?</h2>
            <div className="spacer-xl"></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <ContactContent handleClick={this.showModal.bind(this)} contactText={contactText}/>
        </div>
      </div>
      <div
      tabIndex='0'
      onFocus={()=> this.showModal()}
      onBlur={()=> this.closeModal()}>
        <Modal closeModal={this.closeModal.bind(this)} modalShowing={this.state.modalShowing}>
          <EmailMe/>
        </Modal>
      </div>
    </section>
    );
  };
};

export default Contact