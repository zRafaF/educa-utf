import { PluginDataRecord, PluginDataResponse } from '@/types/pocketbase-types';
import pb from '../PocketBase/pocketbase';

export async function createPluginData(pluginData: PluginDataRecord) {
	return await pb
		.collection('plugin_data')
		.create<PluginDataResponse>(pluginData);
}

export async function getPluginData(uniqueId: string, article: string) {
	return await pb
		.collection('plugin_data')
		.getFirstListItem<PluginDataResponse>(
			`article='${article}'&&uniqueId='${uniqueId}'`
		);
}