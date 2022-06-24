import React from 'react';
import _ from "lodash"
import { View, Image, Text } from 'react-native'

export interface IEmpty {
	extra?: React.ReactElement
	title: string
}

const Empty = (props: IEmpty) => {
	return (
		<View
			style={{
				flex: 1,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				paddingVertical: 20
			}}
		>
			<Image
				style={{
					height: 130,
					width: 178,
				}}
				source={{
					uri: "http://common.z023.cn/image/zhu/data_empty.png"
				}}
			/>
			<Text style={{marginTop: 20, color: "#888", marginBottom: 20}}>{props.title}</Text>
			{
				_.isEmpty(props.extra) ? null : props.extra
			}
		</View>
	)
};

Empty.defaultProps = {
	title: "暂无数据"
};

export default Empty;
