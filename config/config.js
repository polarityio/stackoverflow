module.exports = {
  /**
   * Name of the integration which is displayed in the Polarity integrations user interface
   *
   * @type String
   * @required
   */
  name: "Stackoverflow",
  /**
   * The acronym that appears in the notification window when information from this integration
   * is displayed.  Note that the acronym is included as part of each "tag" in the summary information
   * for the integration.  As a result, it is best to keep it to 4 or less characters.  The casing used
   * here will be carried forward into the notification window.
   *
   * @type String
   * @required
   */
  acronym: "SO",
  /**
   * Description for this integration which is displayed in the Polarity integrations user interface
   *
   * @type String
   * @optional
   */
  description:
    "Stackoverflow integration uses Google Programmable Search to find public results on stackoverflow.com website",
  customTypes: [
    {
      key: "so:searchstring",
      regex: /so:[\s\S]{3,256}\S/,
    },
    {
      key: "openString",
      regex: /\S[\s\S]{3,256}\S/,
    },
  ],
  onDemandOnly: true,
  defaultColor: "light-gray",
  /**
   * Provide custom component logic and template for rendering the integration details block.  If you do not
   * provide a custom template and/or component then the integration will display data as a table of key value
   * pairs.
   *
   * @type Object
   * @optional
   */
  styles: ["./styles/style.less"],
  block: {
    component: {
      file: "./components/block.js",
    },
    template: {
      file: "./templates/block.hbs",
    },
  },
  request: {
    // Provide the path to your certFile. Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    cert: "",
    // Provide the path to your private key. Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    key: "",
    // Provide the key passphrase if required.  Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    passphrase: "",
    // Provide the Certificate Authority. Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    ca: "",
    // An HTTP proxy to be used. Supports proxy Auth with Basic Auth, identical to support for
    // the url parameter (by embedding the auth info in the uri)
    proxy: ""
  },
  logging: {
    level: "info", //trace, debug, info, warn, error, fatal
  },
  /**
   * Options that are displayed to the user/admin in the Polarity integration user-interface.  Should be structured
   * as an array of option objects.
   *
   * @type Array
   * @optional
   */
  options: [
    {
      key: "apiKey",
      name: "API Key",
      description: "Valid Google CSE API Key",
      default: "",
      type: "password",
      userCanEdit: false,
      adminOnly: true,
    },
    {
      key: "searchString",
      name: "Search String",
      description:
        'Add search clause to filter search results even more such as "Javascript OR PYTHON" without the quotes.',
      default: "JAVASCRIPT OR PYTHON OR PERL OR C# OR C++ OR JAVA OR RUBY",
      type: "text",
      userCanEdit: true,
      adminOnly: false,
    },
  ],
};
