export const manifest = {
	appDir: "internal",
	appPath: "internal",
	assets: new Set([".nojekyll","CNAME","amogus.png","blogs/project-north-star.md","blogs/workshop-openxr.md","fonts/BaronNeue-Black.otf","fonts/BaronNeue-BlackItalic.otf","fonts/BaronNeue-Bold.otf","fonts/BaronNeue-BoldItalic.otf","fonts/BaronNeue-Italic.otf","fonts/BaronNeue-Regular.otf","home-banner.png","pranav.png","projects/project-north-star.md"]),
	mimeTypes: {".png":"image/png",".md":"text/markdown",".otf":"font/otf"},
	_: {
		client: {"start":{"file":"internal/immutable/entry/start.8ba616ca.js","imports":["internal/immutable/entry/start.8ba616ca.js","internal/immutable/chunks/index.d02ac943.js","internal/immutable/chunks/singletons.6c73ec8e.js","internal/immutable/chunks/index.5eb61e5f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"internal/immutable/entry/app.392906a2.js","imports":["internal/immutable/entry/app.392906a2.js","internal/immutable/chunks/index.d02ac943.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blogs",
				pattern: /^\/blogs\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blogs/[blog]",
				pattern: /^\/blogs\/([^/]+?)\/?$/,
				params: [{"name":"blog","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects/[project]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"project","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
