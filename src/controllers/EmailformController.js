

function EmailFormController() {


    const handleSubmit = e => {
        e.preventDefault();
        alert("Sign Up Coming Shortly!");
      };

    return (
    <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\components.css);
          @import url(C:\\css\\suck-elons-cock.css);
        ` }} />
        <span className="af-view">
          <div className="w-form">
            <form onSubmit={handleSubmit} id="email-form" name="email-form" data-name="Email Form" className="af-class-subscribe-form-flex-2">
                
                <div className="af-class-subscribe-form-input-wrapper-2">
                    <input type="email" className="af-class-subscribe-form-input w-input" maxLength={256} name="Subscriber-Email" data-name="Subscriber Email" placeholder="enter your email" id="Subscriber-Email" required /> 
                </div>

                <input type="submit" defaultValue="Subscribe" data-wait="Please wait..." className="af-class-submit-button w-button" />
           
            </form>
          </div>
        </span>
    </span>
    )

}

export default (props) => (
    <EmailFormController>

    </EmailFormController>
  )
  