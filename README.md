# Remix Series | Unikey.org

What if "Unikey.org" is built using Remix framework! This is the result of my playing with [Remix Framework](https://remix.run).

> Deploy target is [Cloudflare Pages](https://pages.cloudflare.com/)

# Usage

## Add new main page

To create new pages, do following steps:

1. create new .md file in `~/content/` folder
2. create new .tsx file in `~/route/` folder
3. update `~/root.tsx` file

	```js
	const menuItems = [
		{ to: "/about", text: "Giới thiệu" },
		/* add new route here */
	]
	```

## Add new blog post

1. create new blog post with `.md` format at `~/routes/blog/__posts/` folder
2. update 2 places in `~/routes/blog/index.tsx` file
   * import newly created `.md` file at `step 1`
   * update loader function

	```js
	const unSortedBlogList = [
		getMdxMeta(UniKey_43_RC5_Release),
		/* add new getMdxMeta usage */
	]
	```
