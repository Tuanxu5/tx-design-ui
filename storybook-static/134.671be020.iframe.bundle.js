"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [134],
  {
    "./src/stories/TxAvatar.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Badge: () => Badge,
          Group: () => Group,
          Icon: () => Icon,
          PreviewAvatar: () => PreviewAvatar,
          Shape: () => Shape,
          Size: () => Size,
          Url: () => Url,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => TxAvatar_stories,
        });
      var dist = __webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),
        icons =
          (__webpack_require__("./node_modules/react/index.js"), __webpack_require__("./src/assets/icons/index.js")),
        components = __webpack_require__("./src/components/index.js"),
        urlImageAvatar = "https://avatars.githubusercontent.com/u/124599?v=4",
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const TxAvatar_stories = {
        title: "tx-design-ui/TxAvatar",
        component: components.a,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { color: { control: "color" } },
        args: { onClick: dist.fn },
      };
      var PreviewAvatar = {
          render: function render(args) {
            return (0, jsx_runtime.jsx)("div", {
              className: "flex-center",
              children: (0, jsx_runtime.jsx)(components.a, { children: "T" }),
            });
          },
          args: { onClick: function onClick() {} },
        },
        Size = {
          render: function render(args) {
            return (0, jsx_runtime.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, jsx_runtime.jsx)(components.a, { size: 56, children: "T" }),
                (0, jsx_runtime.jsx)(components.a, { size: 48, children: "T" }),
                (0, jsx_runtime.jsx)(components.a, { size: "large", children: "T" }),
                (0, jsx_runtime.jsx)(components.a, { size: "medium", children: "T" }),
                (0, jsx_runtime.jsx)(components.a, { size: "small", children: "T" }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Shape = {
          render: function render(args) {
            return (0, jsx_runtime.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, jsx_runtime.jsx)(components.a, { children: "T" }),
                (0, jsx_runtime.jsx)(components.a, { shape: "square", children: "T" }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Icon = {
          render: function render(args) {
            return (0, jsx_runtime.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, jsx_runtime.jsx)(components.a, { icon: (0, jsx_runtime.jsx)(icons.A.IconCursor04, {}) }),
                (0, jsx_runtime.jsx)(components.a, {
                  icon: (0, jsx_runtime.jsx)(icons.A.IconCursor04, {}),
                  shape: "square",
                }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Url = {
          render: function render(args) {
            return (0, jsx_runtime.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, jsx_runtime.jsx)(components.a, { url: urlImageAvatar, size: 40 }),
                (0, jsx_runtime.jsx)(components.a, { url: urlImageAvatar, shape: "square", size: 40 }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Badge = {
          render: function render(args) {
            return (0, jsx_runtime.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, jsx_runtime.jsx)(components.a, { badge: 1, children: "T" }),
                (0, jsx_runtime.jsx)(components.a, { badge: 1, shape: "square", children: "T" }),
                (0, jsx_runtime.jsx)(components.a, { badge: "dot", children: "T" }),
                (0, jsx_runtime.jsx)(components.a, { badge: "dot", shape: "square", children: "T" }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Group = {
          render: function render(args) {
            return (0, jsx_runtime.jsxs)("div", {
              className: "flex-column",
              children: [
                (0, jsx_runtime.jsxs)(components.a.Group, {
                  children: [
                    (0, jsx_runtime.jsx)(components.a, { children: "T" }),
                    (0, jsx_runtime.jsx)(components.a, { children: "U" }),
                    (0, jsx_runtime.jsx)(components.a, { children: "A" }),
                    (0, jsx_runtime.jsx)(components.a, { children: "N" }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(components.a.Group, {
                  max: 2,
                  children: [
                    (0, jsx_runtime.jsx)(components.a, { children: "T" }),
                    (0, jsx_runtime.jsx)(components.a, { children: "U" }),
                    (0, jsx_runtime.jsx)(components.a, { children: "A" }),
                    (0, jsx_runtime.jsx)(components.a, { children: "N" }),
                  ],
                }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        };
      const __namedExportsOrder = ["PreviewAvatar", "Size", "Shape", "Icon", "Url", "Badge", "Group"];
      (PreviewAvatar.parameters = {
        ...PreviewAvatar.parameters,
        docs: {
          ...PreviewAvatar.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: args => <div className="flex-center">\n      <TxAvatar>T</TxAvatar>\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
            ...PreviewAvatar.parameters?.docs?.source,
          },
        },
      }),
        (Size.parameters = {
          ...Size.parameters,
          docs: {
            ...Size.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxAvatar size={56}>T</TxAvatar>\n      <TxAvatar size={48}>T</TxAvatar>\n      <TxAvatar size="large">T</TxAvatar>\n      <TxAvatar size="medium">T</TxAvatar>\n      <TxAvatar size="small">T</TxAvatar>\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Size.parameters?.docs?.source,
            },
          },
        }),
        (Shape.parameters = {
          ...Shape.parameters,
          docs: {
            ...Shape.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxAvatar>T</TxAvatar>\n      <TxAvatar shape="square">T</TxAvatar>\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Shape.parameters?.docs?.source,
            },
          },
        }),
        (Icon.parameters = {
          ...Icon.parameters,
          docs: {
            ...Icon.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxAvatar icon={<SvgIcon.IconCursor04 />} />\n      <TxAvatar icon={<SvgIcon.IconCursor04 />} shape="square" />\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Icon.parameters?.docs?.source,
            },
          },
        }),
        (Url.parameters = {
          ...Url.parameters,
          docs: {
            ...Url.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxAvatar url={urlImageAvatar} size={40} />\n      <TxAvatar url={urlImageAvatar} shape="square" size={40} />\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Url.parameters?.docs?.source,
            },
          },
        }),
        (Badge.parameters = {
          ...Badge.parameters,
          docs: {
            ...Badge.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxAvatar badge={1}>T</TxAvatar>\n      <TxAvatar badge={1} shape="square">\n        T\n      </TxAvatar>\n      <TxAvatar badge="dot">T</TxAvatar>\n      <TxAvatar badge="dot" shape="square">\n        T\n      </TxAvatar>\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Badge.parameters?.docs?.source,
            },
          },
        }),
        (Group.parameters = {
          ...Group.parameters,
          docs: {
            ...Group.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-column">\n      <TxAvatar.Group>\n        <TxAvatar>T</TxAvatar>\n        <TxAvatar>U</TxAvatar>\n        <TxAvatar>A</TxAvatar>\n        <TxAvatar>N</TxAvatar>\n      </TxAvatar.Group>\n      <TxAvatar.Group max={2}>\n        <TxAvatar>T</TxAvatar>\n        <TxAvatar>U</TxAvatar>\n        <TxAvatar>A</TxAvatar>\n        <TxAvatar>N</TxAvatar>\n      </TxAvatar.Group>\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Group.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/assets/icons/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => SvgIcon });
      var _path,
        react = __webpack_require__("./node_modules/react/index.js"),
        _excluded = ["title", "titleId"];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          _extends.apply(null, arguments)
        );
      }
      function SvgIconCursor04(_ref, svgRef) {
        var title = _ref.title,
          titleId = _ref.titleId,
          props = (function _objectWithoutProperties(e, t) {
            if (null == e) return {};
            var o,
              r,
              i = (function _objectWithoutPropertiesLoose(r, e) {
                if (null == r) return {};
                var t = {};
                for (var n in r)
                  if ({}.hasOwnProperty.call(r, n)) {
                    if (e.includes(n)) continue;
                    t[n] = r[n];
                  }
                return t;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(e);
              for (r = 0; r < s.length; r++)
                (o = s[r]), t.includes(o) || ({}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]));
            }
            return i;
          })(_ref, _excluded);
        return react.createElement(
          "svg",
          _extends(
            {
              width: 18,
              height: 18,
              viewBox: "0 0 25 25",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: svgRef,
              "aria-labelledby": titleId,
            },
            props
          ),
          title ? react.createElement("title", { id: titleId }, title) : null,
          _path ||
            (_path = react.createElement("path", {
              d: "M5.7231 15.0988L4.03594 16.7859M3.85964 10.5993H1.47363M4.03594 4.41386L5.7231 6.10096M10.2227 1.85107L10.2227 4.23699M16.4085 4.41386L14.7213 6.10096M22.074 20.3169L20.212 22.179C20.0063 22.3846 19.6728 22.3846 19.4671 22.179L16.5315 19.2434C16.3096 19.0214 15.9439 19.0416 15.7478 19.2868L13.7735 21.7547C13.5063 22.0887 12.9734 21.9817 12.8559 21.5703L9.67248 10.4285C9.55897 10.0312 9.92628 9.66393 10.3236 9.77744L21.4654 12.9608C21.8767 13.0783 21.9837 13.6113 21.6497 13.8785L19.1818 15.8528C18.9367 16.0489 18.9164 16.4145 19.1384 16.6365L22.074 19.5721C22.2797 19.7778 22.2797 20.1112 22.074 20.3169Z",
              stroke: "currentColor",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }))
        );
      }
      var ForwardRef = react.forwardRef(SvgIconCursor04);
      __webpack_require__.p;
      var _g,
        _defs,
        icon_loader_01_excluded = ["title", "titleId"];
      function icon_loader_01_extends() {
        return (
          (icon_loader_01_extends = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var e = 1; e < arguments.length; e++) {
                  var t = arguments[e];
                  for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
              }),
          icon_loader_01_extends.apply(null, arguments)
        );
      }
      function SvgIconLoader01(_ref, svgRef) {
        var title = _ref.title,
          titleId = _ref.titleId,
          props = (function icon_loader_01_objectWithoutProperties(e, t) {
            if (null == e) return {};
            var o,
              r,
              i = (function icon_loader_01_objectWithoutPropertiesLoose(r, e) {
                if (null == r) return {};
                var t = {};
                for (var n in r)
                  if ({}.hasOwnProperty.call(r, n)) {
                    if (e.includes(n)) continue;
                    t[n] = r[n];
                  }
                return t;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(e);
              for (r = 0; r < s.length; r++)
                (o = s[r]), t.includes(o) || ({}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]));
            }
            return i;
          })(_ref, icon_loader_01_excluded);
        return react.createElement(
          "svg",
          icon_loader_01_extends(
            {
              width: 18,
              height: 18,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: svgRef,
              "aria-labelledby": titleId,
            },
            props
          ),
          title ? react.createElement("title", { id: titleId }, title) : null,
          _g ||
            (_g = react.createElement(
              "g",
              { clipPath: "url(#clip0_211_66834)" },
              react.createElement("path", {
                d: "M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            )),
          _defs ||
            (_defs = react.createElement(
              "defs",
              null,
              react.createElement(
                "clipPath",
                { id: "clip0_211_66834" },
                react.createElement("rect", { width: 24, height: 24, fill: "red" })
              )
            ))
        );
      }
      var icon_loader_01_ForwardRef = react.forwardRef(SvgIconLoader01);
      __webpack_require__.p;
      var SvgIcon = { IconCursor04: ForwardRef, IconLoader01: icon_loader_01_ForwardRef };
    },
    "./src/components/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { a: () => tx_avatar, j: () => tx_button });
      var objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        es_badge = __webpack_require__("./node_modules/antd/es/badge/index.js"),
        avatar = __webpack_require__("./node_modules/antd/es/avatar/index.js"),
        jsx_runtime =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__("./node_modules/react/jsx-runtime.js")),
        _excluded = ["shape", "badge", "size", "icon", "color", "url", "alt"],
        _excluded2 = ["children", "max", "size", "shape"],
        TxAvatar = function TxAvatar(_ref) {
          var shape = _ref.shape,
            badge = _ref.badge,
            size = _ref.size,
            icon = _ref.icon,
            color = _ref.color,
            url = _ref.url,
            rest = (_ref.alt, (0, objectWithoutProperties.A)(_ref, _excluded));
          return (0, jsx_runtime.jsx)(es_badge.A, {
            count: isNaN(badge) ? void 0 : badge,
            dot: "dot" === badge && !0,
            children: (0, jsx_runtime.jsx)(
              avatar.A,
              (0, objectSpread2.A)(
                {
                  size,
                  src: url && (0, jsx_runtime.jsx)("img", { src: url, alt: "avatar" }),
                  style: { backgroundColor: color },
                  icon: icon && icon,
                  shape: shape && shape,
                },
                rest
              )
            ),
          });
        };
      TxAvatar.defaultProps = { size: 36, shape: "circle", color: "#0e0e13" };
      var TxAvatarGroup = function TxAvatarGroup(_ref2) {
        var children = _ref2.children,
          max = _ref2.max,
          size = _ref2.size;
        _ref2.shape, (0, objectWithoutProperties.A)(_ref2, _excluded2);
        return (0, jsx_runtime.jsx)(avatar.A.Group, {
          size,
          max: {
            count: max,
            style: { color: "#0e0e13", backgroundColor: "#f4f4f5", cursor: "pointer" },
            popover: { trigger: "hover" },
          },
          children:
            null == children
              ? void 0
              : children.map(function (item, index) {
                  return item;
                }),
        });
      };
      (TxAvatarGroup.defaultProps = { size: 36 }), (TxAvatar.Group = TxAvatarGroup);
      const tx_avatar = TxAvatar;
      TxAvatar.__docgenInfo = {
        description: "",
        methods: [
          {
            name: "Group",
            docblock: null,
            modifiers: ["static"],
            params: [{ name: "{ children, max, size, shape, ...rest }", optional: !1, type: null }],
            returns: null,
          },
        ],
        displayName: "TxAvatar",
        props: {
          size: {
            defaultValue: { value: "36", computed: !1 },
            description: "",
            type: {
              name: "union",
              value: [
                {
                  name: "enum",
                  value: [
                    { value: '"large"', computed: !1 },
                    { value: '"medium"', computed: !1 },
                    { value: '"small"', computed: !1 },
                  ],
                },
                { name: "number" },
              ],
            },
            required: !1,
          },
          shape: {
            defaultValue: { value: '"circle"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"square"', computed: !1 },
                { value: '"circle"', computed: !1 },
              ],
            },
            required: !1,
          },
          color: {
            defaultValue: { value: '"#0e0e13"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          url: { description: "", type: { name: "string" }, required: !1 },
          badge: {
            description: "",
            type: {
              name: "union",
              value: [{ name: "enum", value: [{ value: '"dot"', computed: !1 }] }, { name: "number" }],
            },
            required: !1,
          },
        },
      };
      var _templateObject,
        _templateObject2,
        _templateObject3,
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        icons = __webpack_require__("./src/assets/icons/index.js");
      const styled = styled_components_browser_esm.Ay.button(
        _templateObject ||
          (_templateObject = (0, taggedTemplateLiteral.A)([
            "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: ",
            ";\n  border: ",
            ";\n  border-radius: ",
            ";\n  font-size: 14px;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n  text-align: center;\n  user-select: none;\n  touch-action: manipulation;\n  font-weight: 500;\n  padding: ",
            ";\n  transition: background-color 0.25s ease, transform 0.25s ease;\n  background: ",
            ";\n\n  &.tx-ui-tx-button {\n    &:hover {\n      opacity: 0.8;\n      box-shadow: 0px 0px 8px 2px #03030f30;\n    }\n\n    &:active {\n      transform: scale(0.98);\n    }\n\n    &.tx-ui-tx-button--large {\n      font-size: 16px;\n      padding: ",
            ";\n    }\n\n    &.tx-ui-tx-button--small {\n      font-size: 12px;\n      padding: ",
            ";\n    }\n\n    &.tx-ui-tx-button--danger {\n      background-color: #e45649 !important;\n      border: 1px solid #e45649 !important;\n      color: #ffffff;\n    }\n\n    &.tx-ui-tx-button--disabled {\n      background-color: #f3f3f4 !important;\n      border: 1px solid #a0a1a7 !important;\n      color: #a0a1a7;\n      outline: none;\n      cursor: not-allowed;\n      &:hover {\n        opacity: 1;\n        box-shadow: none;\n      }\n\n      &:active {\n        transform: none;\n      }\n    }\n\n    &.tx-ui-tx-button--loading {\n      opacity: 0.7;\n      cursor: not-allowed;\n      &:hover {\n        box-shadow: none;\n      }\n\n      &:active {\n        transform: none;\n      }\n    }\n  }\n\n  &.tx-ui-tx-button--secondary {\n    background: #ffffff;\n    border: 1px solid #03030f;\n    color: #03030f;\n    &:hover {\n      opacity: 0.9;\n      background: #03030f;\n      color: #ffffff;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n\n      &:hover {\n        background: #e45649 !important;\n        box-shadow: 0px 0px 8px 2px #e4564930;\n        color: #ffffff;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      &:hover {\n        color: #a0a1a7;\n      }\n    }\n\n    &.tx-ui-tx-button--loading {\n      opacity: 0.7;\n    }\n  }\n\n  &.tx-ui-tx-button--dashed {\n    background: #ffffff;\n    border: 1px dashed #03030f;\n    color: #03030f;\n\n    &:hover {\n      border: 1px dashed #1fa9ff;\n      color: #1fa9ff;\n      box-shadow: 0px 0px 8px 2px #1fa9ff30;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n\n      &:hover {\n        background: #e4564915 !important;\n        box-shadow: 0px 0px 8px 2px #e4564930;\n        color: #e45649;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      &:hover {\n        color: #a0a1a7;\n      }\n    }\n  }\n\n  &.tx-ui-tx-button--filled {\n    background: #03030f20;\n    border: 1px solid #03030f00;\n    color: #03030f;\n    &:hover {\n      opacity: 0.9;\n      box-shadow: none;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #e4564920 !important;\n      color: #e45649;\n      border: 1px solid transparent !important;\n    }\n\n    &.tx-ui-tx-button--disabled {\n      border: 1px solid #03030f00 !important;\n    }\n\n    &.tx-ui-tx-button--loading {\n      opacity: 0.7;\n    }\n  }\n\n  &.tx-ui-tx-button--text {\n    background: white;\n    border: 1px solid #ffffff;\n    background: #ffffff;\n    color: #03030f;\n    &:hover {\n      background: #03030f10;\n      box-shadow: none;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n      border: 1px solid transparent !important;\n      &:hover {\n        background: #e4564915 !important;\n        box-shadow: none;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      border: 1px solid #ffffff !important;\n      background: #ffffff !important;\n    }\n  }\n\n  &.tx-ui-tx-button--link {\n    background: white;\n    border: none;\n    background: #ffffff;\n    border: 1px solid #ffffff;\n    color: #1fa9ff;\n    &:hover {\n      box-shadow: none;\n      border: none;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n      border: 1px solid transparent !important;\n      &:hover {\n        border: 1px solid transparent !important;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      border: 1px solid #ffffff !important;\n      background: #ffffff !important;\n    }\n  }\n",
          ])),
        function (props) {
          return props.color || "#ffffff";
        },
        function (props) {
          return props.gradientBackground ? "1px solid #ffffff" : "1px solid #0e0e13ff";
        },
        function (props) {
          return "circle" === props.shape ? "100px" : "10px";
        },
        function (props) {
          return "circle" === props.shape ? "12px 12px !important" : "12px 22px !important";
        },
        function (props) {
          return props.gradientBackground
            ? "linear-gradient("
                .concat(props.gradientBackground.degree || 135, "deg, ")
                .concat(
                  props.gradientBackground.colors && props.gradientBackground.colors.length > 0
                    ? props.gradientBackground.colors.join(", ")
                    : ["#6253e1", "#04befe"].join(", "),
                  ")"
                )
            : props.backgroundColor || "#03030f";
        },
        function (props) {
          return "circle" === props.shape ? "14px 14px !important" : "14px 24px !important";
        },
        function (props) {
          return "circle" === props.shape ? "10px 10px !important" : "10px 20px !important";
        }
      );
      var rotate = (0, styled_components_browser_esm.i7)(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n",
            ]))
        ),
        LoadingRotatingIcon = (0, styled_components_browser_esm.Ay)(icons.A.IconLoader01)(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)(["\n  animation: ", " 1s linear infinite;\n"])),
          rotate
        ),
        tx_button_excluded = [
          "label",
          "onClick",
          "background",
          "color",
          "primary",
          "size",
          "type",
          "disabled",
          "prefix",
          "suffix",
          "shape",
          "loading",
          "danger",
          "gradientBackground",
        ],
        TxButton = function TxButton(_ref) {
          var _ref$label = _ref.label,
            label = void 0 === _ref$label ? "Click Me" : _ref$label,
            onClick = _ref.onClick,
            background = _ref.background,
            color = _ref.color,
            size = (_ref.primary, _ref.size),
            type = _ref.type,
            disabled = _ref.disabled,
            prefix = _ref.prefix,
            suffix = _ref.suffix,
            shape = _ref.shape,
            loading = _ref.loading,
            danger = _ref.danger,
            gradientBackground = _ref.gradientBackground,
            rest = (0, objectWithoutProperties.A)(_ref, tx_button_excluded);
          return (0, jsx_runtime.jsxs)(
            styled,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)(
                {
                  onClick,
                  className: [
                    "tx-ui-tx-button",
                    disabled && "tx-ui-tx-button--disabled",
                    loading && "tx-ui-tx-button--loading",
                    danger && "tx-ui-tx-button--danger",
                    "tx-ui-tx-button--".concat(size),
                    "tx-ui-tx-button--".concat(type),
                  ].join(" "),
                  style: {
                    padding: "10px 20px",
                    background: background || "defaultBackground",
                    color: color || "defaultColor",
                  },
                  disabled: loading,
                  shape,
                  danger,
                  gradientBackground: gradientBackground && gradientBackground,
                },
                rest
              ),
              {},
              {
                children: [
                  loading && (0, jsx_runtime.jsx)(LoadingRotatingIcon, {}),
                  prefix && !loading && prefix,
                  label,
                  suffix && suffix,
                ],
              }
            )
          );
        };
      TxButton.defaultProps = { backgroundColor: null, type: "primary", size: "medium", onClick: void 0 };
      const tx_button = TxButton;
      TxButton.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxButton",
        props: {
          label: {
            defaultValue: { value: '"Click Me"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          backgroundColor: {
            defaultValue: { value: "null", computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          type: {
            defaultValue: { value: '"primary"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"primary"', computed: !1 },
                { value: '"secondary"', computed: !1 },
                { value: '"filled"', computed: !1 },
                { value: '"text"', computed: !1 },
                { value: '"link"', computed: !1 },
                { value: '"dashed"', computed: !1 },
              ],
            },
            required: !1,
          },
          size: {
            defaultValue: { value: '"medium"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"small"', computed: !1 },
                { value: '"medium"', computed: !1 },
                { value: '"large"', computed: !1 },
              ],
            },
            required: !1,
          },
          onClick: {
            defaultValue: { value: "undefined", computed: !0 },
            description: "",
            type: { name: "func" },
            required: !1,
          },
          loading: { description: "", type: { name: "bool" }, required: !1 },
          danger: { description: "", type: { name: "bool" }, required: !1 },
          shape: {
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"default"', computed: !1 },
                { value: '"circle"', computed: !1 },
              ],
            },
            required: !1,
          },
          prefix: { description: "", type: { name: "node" }, required: !1 },
          suffix: { description: "", type: { name: "node" }, required: !1 },
          gradientBackground: {
            description: "",
            type: {
              name: "shape",
              value: {
                degree: { name: "number", required: !1 },
                colors: { name: "arrayOf", value: { name: "string" }, required: !1 },
              },
            },
            required: !1,
          },
        },
      };
    },
  },
]);
