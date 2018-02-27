import React from 'react';

class Modal extends React.Component{
  constructor(props){
    super(props)
    this.state = { currentClass: "modal fade" }
}

componentWillReceiveProps(nextProps){
  if(nextProps.modalShowing !== this.props.modalShowing){
    this.toggleModal();
  }
}

toggleModal(){
  if(this.props.modalShowing){
    this.closeModal();
  }
  else{
    this.openModal();
  }
}

closeModal(){
  const that = this
  this.setState({ currentClass: "modal fade force-block" })
  setTimeout(() => {
    that.setState({ currentClass: "modal show fade" })
  }, 100);
}

openModal(){
  const that = this
  this.setState({ currentClass: "modal fade my-overlay force-block"})
  setTimeout(() => {
    that.setState({ currentClass: "modal show my-overlay fade force-block"})
  }, 10);
}

  render(){
    return(
      <div ref={this.setWrapperRef}>
        <div className={this.state.currentClass} id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="close-sm">
                <button onClick={this.props.closeModal} type="button" className="close"aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal