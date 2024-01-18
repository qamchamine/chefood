import * as React from "react";
import $ from 'jquery'





export class ComponentToPrint extends React.PureComponent {
	 ticketCode = ''
	constructor(props) {
		super(props);
		this.state = { checked: false };
	}

	componentDidMount(){
		$(function () {
			var table = $('.barcode tr');
			var table2 = $('.numbers tbody');
			
			$('#bookNowBtn').click(function () {
		this.ticketCode = ''
				/* 			var currentDate = new Date();
							var currentDateTimeString = currentDate.toISOString().slice(0, 16);
							$("#date").val(currentDateTimeString); 
							$('#serviceTypeSelect').val($(this).parents('.contentreservation').find('h2').attr('data-title'))
							*/

		
				
						  var code = '';
						  for (var i = 0; i < 152; i++) {
							var randomInteger = Math.round(Math.random());
							code += randomInteger;
						  }
				
						  table.empty(); 
					  
						  for (var i = 0; i < code.length; i++) {
							var cellColor = code[i] == '1' ? 'black' : 'white';
							table.append('<td bgcolor="' + cellColor + '">');
						  } 
						  var tdElements = table2.find('td');
					
						  for (var i = 0; i < tdElements.length; i++) {
							var randomIndex = Math.floor(Math.random() * 10);
							this.ticketCode += randomIndex
							$(tdElements[i]).text(randomIndex);
						} 
						
						$('.numbers tbody').find('tr').attr('class',this.ticketCode)
						sessionStorage.setItem('ticketCode', this.ticketCode);
/* 						console.log(sessionStorage.getItem('ticketCode')+' xx
						,,,') */
					});
				});
	}

	canvasEl;
	handleCheckboxOnChange = () =>
		this.setState({ checked: !this.state.checked });
	render() {
		const { text } = this.props; 


		return (

			<div className="position-absolute relativeCSS" style={{ left: '50%', translate: '-50% 0' }}>


				<div className="testClass ticketWrapper mt-4 pt-5 hidden-for-print" >

					<div className="ticket shadow-sm">
						<div className="holes-top"></div>
						<div className="title text-black">
							<p className="cinema">CHEFOOD RESTAURANT</p>
							<p className="movie-title " style={{ textTransform: 'uppercase', fontSize: '.65em' }}>Enjoy your meal!</p>
						</div>
						<div className="poster">
							<img src={this.props.img2} alt="Movie: Only God Forgives" />
						</div>
						<div className="info">

							<table>
								<tbody>
									<tr>
										<th>FOR :</th>
										<th>DATE :</th>
										<th>TIME :</th>
									</tr>
									<tr id="ticketdata">
										<td id="ticket-name">{this.props.service2}</td>
										<td id="ticket-date">{this.props.date2}</td>
										<td id="ticket-time">{this.props.time2}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="holes-lower"></div>
						<div className="serial">
							<table className="barcode" style={{ width: '4em' }}><tbody><tr></tr></tbody></table>
							<table className="numbers">
								<tbody>
									<tr className="">
										<td>9</td>
										<td>1</td>
										<td>7</td>
										<td>3</td>
										<td>7</td>
										<td>5</td>
										<td>4</td>
										<td>4</td>
										<td>4</td>
										<td>5</td>
										<td>4</td>
										<td>1</td>
										<td>4</td>
										<td>7</td>
										<td>8</td>
										<td>7</td>
										<td>3</td>
										<td>4</td>
										<td>1</td>
										<td>4</td>
										<td>5</td>
										<td>2</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export const FunctionalComponentToPrint = React.forwardRef((props, ref) => {
	return <ComponentToPrint text={props.text} />;
});
