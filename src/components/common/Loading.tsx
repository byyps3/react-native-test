import React from 'react';
import _ from "lodash"
import {View} from 'react-native'
import { Placeholder, PlaceholderLine, Fade } from "rn-placeholder";

export interface ILoading {
	extra?: string
	title?: string
	row: number
}

const Loading = (props: ILoading) => {
	let list: Array<undefined> = [];
	list.length = props.row || 12;

	return (
		<View style={{padding: 20}}>
			<Placeholder
				Animation={Fade}
			>
				{
					_.map(list, (item, index)=>{
						return (
							<PlaceholderLine
								key={index}
								style={{backgroundColor: "#a9a9a9"}}
								width={_.random(20, 100)}
							/>
						)
					})
				}
			</Placeholder>
		</View>
	)
};

Loading.defaultProps = {
	row: 12
};

export default Loading;
