const mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: CHECK IF THEY ARE LOGGED IN
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
    return item;
  }
};

module.exports = mutations;
