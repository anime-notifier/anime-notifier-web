import background from 'assets/background.jpg';

exports.background = {backgroundRepeat: 'no-repeat', backgroundSize: 'auto 600px', backgroundImage: `url(${background})`, backgroundPosition: 'top', maxWidth: '100%'};

exports.topRow = {maxWidth: '100%', margin: 0};
exports.heading = {textAlign: 'center', paddingTop: '250px', color: 'white'};
exports.formGroup = {maxWidth: '400px', margin: '0 auto'};
exports.formLabel = {display: 'block', textAlign: 'center', color: 'white'};
exports.inputDiv = {borderRadius: '0.25em', border: '2px solid #fff'};
exports.input = {textAlign: 'center', opacity: '0.7'};
exports.inputDropdown = {margin: "1px 0px 1px 1px", borderRadius: "3px 0px 0px 3px"};
exports.inputButton = {opacity: '0.9', margin: '0 auto', display: 'block', marginTop: '15px'};

exports.botRow = {paddingTop: '200px', margin: 0};
exports.flexRow = {textAlign: "center", color: 'white', display: "flex", justifyContent: "space-around", flexWrap: 'wrap'};
exports.flexItem = {maxWidth: "25%"};
exports.flexItemSmall = {maxWidth: "100%"};
exports.flexLogo = {color: "#6BF", fontSize: "4.5em"};
exports.flexDesc = {color: "#bebebe"};
