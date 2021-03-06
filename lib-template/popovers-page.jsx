import React from 'react'
import Radium from 'radium'
import { RadioButton, Checkbox, Toggle, Popover, RaisedButton } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle} from 'reactivity'

@Radium
class PopoversPage extends React.Component {
	constructor() {
		super();
		this.state = {
			anchorOrigin: {"horizontal":"left","vertical":"top"},
			targetOrigin: {"vertical":"top","horizontal":"left"},
			activePopover:'none'
		};
	}

	render() {
		return <Dashboard>
					<Widget width={12}>
						<WidgetTitle title='Popovers' />
						<WidgetText>
							<RaisedButton onClick={this._show.bind(this, "pop")} label="Click on me to show a popover" />
							<br/>
							<br/>
							<h2>Position Options</h2>
							<p>Use the settings below to toggle the positioning of the popovers above</p>
							<strong>Current Settings</strong>
							<br/>
							<pre>
								anchorOrigin: {JSON.stringify(this.state.anchorOrigin)}
								<br/>
								targetOrigin: {JSON.stringify(this.state.targetOrigin)}
							</pre>
							<h3>Anchor Origin</h3>
								<div style={{float:'left'}}>
								<strong>Vertical</strong>
								<RadioButton onClick={this._setAnchor.bind(this, 'vertical', 'top')} label="Top" checked={this.state.anchorOrigin.vertical === "top"} />
								<RadioButton onClick={this._setAnchor.bind(this, 'vertical', 'center')} label="Center" checked={this.state.anchorOrigin.vertical === "center"} />
								<RadioButton onClick={this._setAnchor.bind(this, 'vertical', 'bottom')} label="Bottom" checked={this.state.anchorOrigin.vertical === "bottom"} />
							</div>
							<div style={{float:'left'}}>
								<strong>Horizontal</strong>
								<RadioButton onClick={this._setAnchor.bind(this, 'horizontal', 'left')} label="Left" checked={this.state.anchorOrigin.horizontal === "left"} />
								<RadioButton onClick={this._setAnchor.bind(this, 'horizontal', 'middle')} label="Middle" checked={this.state.anchorOrigin.horizontal === "middle"} />
								<RadioButton onClick={this._setAnchor.bind(this, 'horizontal', 'right')} label="Right" checked={this.state.anchorOrigin.horizontal === "right"} />
							</div>
							<br style={{clear:'both'}} />
							<br style={{clear:'both'}} />
							
							<h3>Target Origin</h3>
							<div style={{float:'left'}}>
								<strong>Vertical</strong>
								<RadioButton onClick={this._setTarget.bind(this, 'vertical', 'top')} label="Top" checked={this.state.targetOrigin.vertical === "top"} />
								<RadioButton onClick={this._setTarget.bind(this, 'vertical', 'center')} label="Center" checked={this.state.targetOrigin.vertical === "center"} />
								<RadioButton onClick={this._setTarget.bind(this, 'vertical', 'bottom')} label="Bottom" checked={this.state.targetOrigin.vertical === "bottom"} />
							</div>
							<div style={{float:'left'}}>
								<strong>Horizontal</strong>
								<RadioButton onClick={this._setTarget.bind(this, 'horizontal', 'left')} label="Left" checked={this.state.targetOrigin.horizontal === "left"} />
								<RadioButton onClick={this._setTarget.bind(this, 'horizontal', 'middle')} label="Middle" checked={this.state.targetOrigin.horizontal === "middle"} />
								<RadioButton onClick={this._setTarget.bind(this, 'horizontal', 'right')} label="Right" checked={this.state.targetOrigin.horizontal === "right"} />
							</div>
							
							<br style={{clear:'both'}} />
							<br style={{clear:'both'}} />
							
							<Popover open={this.state.activePopover === 'pop'}
								anchorEl={this.state.anchorEl}
								anchorOrigin={this.state.anchorOrigin}
								targetOrigin={this.state.targetOrigin}
								onRequestClose={this._closePopover.bind(this, 'pop')} >
								<div style={{padding:20}}>
									<h2>Here is an arbitrary popover</h2>
									<p>Hi - here is some content</p>
									<RaisedButton primary={true} label="Here is a button"/>
								</div>
							</Popover>
						</WidgetText>
					</Widget>
				</Dashboard>
	}
	
	_show(key, e) {
		this.setState({
			activePopover:key,
			anchorEl:e.currentTarget,
		});
	}

	_closePopover(key) {
		if (this.state.activePopover !== key)
			return
		this.setState({
			activePopover:'none',
		});
	}

	_setAnchor(positionElement, position, e) {
		let {anchorOrigin} = this.state;
		anchorOrigin[positionElement] = position;
		
		this.setState({
			anchorOrigin:anchorOrigin,
		});
	}

	_setTarget(positionElement, position, e) {
		let {targetOrigin} = this.state;
		targetOrigin[positionElement] = position;
		
		this.setState({
			targetOrigin:targetOrigin,
		});
	}
}

export default PopoversPage