function Button(props) {
    console.log(props.children)
    return(
        <div class="button">
        <div className="ui cards">
        <div className="card">
        <div className="content">
            {props.children}
 <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Accept</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    )
}
export default Button;