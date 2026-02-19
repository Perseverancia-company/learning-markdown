/**
 * Learning markdown parser
 */
export default class Parser {
	/**
	 * Parse custom content
	 *
	 * Built with AI help
	 *
	 * @param content
	 */
	parse(content: string) {
		return (
			content
				// 1. Parse Text Inputs
				.replace(
					/\[\[text:(.*?)\]\]/g,
					'<input type="text" name="custom_text" placeholder="$1" class="border p-2 rounded">'
				) // 2. Parse Checkboxes
				.replace(
					/\[\[checkbox:(.*?)\]\]/g,
					`
		<label class="flex items-center gap-2">
		  <input type="checkbox" name="custom_check" value="$1"> $1
		</label>`
				)
				// 3. Parse Radios (Format: [[radio:group_name:label]])
				.replace(
					/\[\[radio:(.*?):(.*?)\]\]/g,
					`
		<label class="flex items-center gap-2">
		  <input type="radio" name="$1" value="$2"> $2
		</label>`
				)
		);
	}
}
