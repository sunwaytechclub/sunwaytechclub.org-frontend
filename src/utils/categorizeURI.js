export default function (navigations, uri) {
    /**Given with two inputs, return where the uri shall fall under which navigation
    * @param { [ { title: String, path: String } ] } navigations: The list of all the navigations
    * @param { String } uri: The input uri
    */
    return navigations.reduce((acc, n, index, arr) => {

        // Generate Regex for current navigation
        let pattern = `^${n.path}?.{1,}`.split("/").join("\\/");
        let test = new RegExp(pattern, "g");

        // Test out the current navigation against input URI
        let output = test.test(uri) ? index : acc;
        return typeof output == "object" ? output : arr[output];
    });
} 