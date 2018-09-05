export default {
  methods: {
    docLink(side, component) {
      if (side === 'right') {
        return this.$store.state.docLinks[
          this.$store.state.linkIndexes[component] + 1
        ]
      }
      return this.$store.state.docLinks[
        this.$store.state.linkIndexes[component] - 1
      ]
    }
  }
}
