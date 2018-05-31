<script>
const warnMsg =
  "Icon props.type is invalid, have you set svg-sprite-loader correctly? see https://goo.gl/kN8oiw";
export default {
  name: "svg-icon",
  props: {
    type: String,
    className: String
  },
  render(h) {
    let { type, className } = this;

    if (!type || typeof type !== "string") {
      // console.error(warnMsg);
      return null;
    }

    let xlinkHref = this.renderSvg();
    let outerIcon;
    if (!xlinkHref) {
      outerIcon = true;
      xlinkHref = type;
      if (!/^#/.test(type)) {
        // console.error(warnMsg);
      }
    } else {
      if (!/^#/.test(xlinkHref)) {
        // console.error(warnMsg);
      }
      xlinkHref = `#${type}`;
    }
    return h("svg", { attrs: { class: className } }, [
      h("use", { attrs: { "xlink:href": xlinkHref } })
    ]);
  },
  methods: {
    renderSvg() {
      let svg;
      try {
        svg = require(`!svg-sprite-loader!../../icons/svg/${this.type}.svg`);
      } catch (e) {
      } finally {
        return svg;
      }
    }
  }
};
</script>