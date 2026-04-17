"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@xterm/xterm/lib/xterm.js
var require_xterm = __commonJS({
  "node_modules/@xterm/xterm/lib/xterm.js"(exports2, module2) {
    !function(e, t) {
      if ("object" == typeof exports2 && "object" == typeof module2)
        module2.exports = t();
      else if ("function" == typeof define && define.amd)
        define([], t);
      else {
        var i = t();
        for (var s in i)
          ("object" == typeof exports2 ? exports2 : e)[s] = i[s];
      }
    }(globalThis, () => (() => {
      "use strict";
      var e = { 4567: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.AccessibilityManager = void 0;
        const n = i2(9042), o = i2(9924), a = i2(844), h = i2(4725), c = i2(2585), l = i2(3656);
        let d = t2.AccessibilityManager = class extends a.Disposable {
          constructor(e3, t3, i3, s3) {
            super(), this._terminal = e3, this._coreBrowserService = i3, this._renderService = s3, this._rowColumns = /* @__PURE__ */ new WeakMap(), this._liveRegionLineCount = 0, this._charsToConsume = [], this._charsToAnnounce = "", this._accessibilityContainer = this._coreBrowserService.mainDocument.createElement("div"), this._accessibilityContainer.classList.add("xterm-accessibility"), this._rowContainer = this._coreBrowserService.mainDocument.createElement("div"), this._rowContainer.setAttribute("role", "list"), this._rowContainer.classList.add("xterm-accessibility-tree"), this._rowElements = [];
            for (let e4 = 0; e4 < this._terminal.rows; e4++)
              this._rowElements[e4] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[e4]);
            if (this._topBoundaryFocusListener = (e4) => this._handleBoundaryFocus(e4, 0), this._bottomBoundaryFocusListener = (e4) => this._handleBoundaryFocus(e4, 1), this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions(), this._accessibilityContainer.appendChild(this._rowContainer), this._liveRegion = this._coreBrowserService.mainDocument.createElement("div"), this._liveRegion.classList.add("live-region"), this._liveRegion.setAttribute("aria-live", "assertive"), this._accessibilityContainer.appendChild(this._liveRegion), this._liveRegionDebouncer = this.register(new o.TimeBasedDebouncer(this._renderRows.bind(this))), !this._terminal.element)
              throw new Error("Cannot enable accessibility before Terminal.open");
            this._terminal.element.insertAdjacentElement("afterbegin", this._accessibilityContainer), this.register(this._terminal.onResize((e4) => this._handleResize(e4.rows))), this.register(this._terminal.onRender((e4) => this._refreshRows(e4.start, e4.end))), this.register(this._terminal.onScroll(() => this._refreshRows())), this.register(this._terminal.onA11yChar((e4) => this._handleChar(e4))), this.register(this._terminal.onLineFeed(() => this._handleChar("\n"))), this.register(this._terminal.onA11yTab((e4) => this._handleTab(e4))), this.register(this._terminal.onKey((e4) => this._handleKey(e4.key))), this.register(this._terminal.onBlur(() => this._clearLiveRegion())), this.register(this._renderService.onDimensionsChange(() => this._refreshRowsDimensions())), this.register((0, l.addDisposableDomListener)(document, "selectionchange", () => this._handleSelectionChange())), this.register(this._coreBrowserService.onDprChange(() => this._refreshRowsDimensions())), this._refreshRows(), this.register((0, a.toDisposable)(() => {
              this._accessibilityContainer.remove(), this._rowElements.length = 0;
            }));
          }
          _handleTab(e3) {
            for (let t3 = 0; t3 < e3; t3++)
              this._handleChar(" ");
          }
          _handleChar(e3) {
            this._liveRegionLineCount < 21 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== e3 && (this._charsToAnnounce += e3) : this._charsToAnnounce += e3, "\n" === e3 && (this._liveRegionLineCount++, 21 === this._liveRegionLineCount && (this._liveRegion.textContent += n.tooMuchOutput)));
          }
          _clearLiveRegion() {
            this._liveRegion.textContent = "", this._liveRegionLineCount = 0;
          }
          _handleKey(e3) {
            this._clearLiveRegion(), /\p{Control}/u.test(e3) || this._charsToConsume.push(e3);
          }
          _refreshRows(e3, t3) {
            this._liveRegionDebouncer.refresh(e3, t3, this._terminal.rows);
          }
          _renderRows(e3, t3) {
            const i3 = this._terminal.buffer, s3 = i3.lines.length.toString();
            for (let r2 = e3; r2 <= t3; r2++) {
              const e4 = i3.lines.get(i3.ydisp + r2), t4 = [], n2 = e4?.translateToString(true, void 0, void 0, t4) || "", o2 = (i3.ydisp + r2 + 1).toString(), a2 = this._rowElements[r2];
              a2 && (0 === n2.length ? (a2.innerText = "\xA0", this._rowColumns.set(a2, [0, 1])) : (a2.textContent = n2, this._rowColumns.set(a2, t4)), a2.setAttribute("aria-posinset", o2), a2.setAttribute("aria-setsize", s3));
            }
            this._announceCharacters();
          }
          _announceCharacters() {
            0 !== this._charsToAnnounce.length && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "");
          }
          _handleBoundaryFocus(e3, t3) {
            const i3 = e3.target, s3 = this._rowElements[0 === t3 ? 1 : this._rowElements.length - 2];
            if (i3.getAttribute("aria-posinset") === (0 === t3 ? "1" : `${this._terminal.buffer.lines.length}`))
              return;
            if (e3.relatedTarget !== s3)
              return;
            let r2, n2;
            if (0 === t3 ? (r2 = i3, n2 = this._rowElements.pop(), this._rowContainer.removeChild(n2)) : (r2 = this._rowElements.shift(), n2 = i3, this._rowContainer.removeChild(r2)), r2.removeEventListener("focus", this._topBoundaryFocusListener), n2.removeEventListener("focus", this._bottomBoundaryFocusListener), 0 === t3) {
              const e4 = this._createAccessibilityTreeNode();
              this._rowElements.unshift(e4), this._rowContainer.insertAdjacentElement("afterbegin", e4);
            } else {
              const e4 = this._createAccessibilityTreeNode();
              this._rowElements.push(e4), this._rowContainer.appendChild(e4);
            }
            this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(0 === t3 ? -1 : 1), this._rowElements[0 === t3 ? 1 : this._rowElements.length - 2].focus(), e3.preventDefault(), e3.stopImmediatePropagation();
          }
          _handleSelectionChange() {
            if (0 === this._rowElements.length)
              return;
            const e3 = document.getSelection();
            if (!e3)
              return;
            if (e3.isCollapsed)
              return void (this._rowContainer.contains(e3.anchorNode) && this._terminal.clearSelection());
            if (!e3.anchorNode || !e3.focusNode)
              return void console.error("anchorNode and/or focusNode are null");
            let t3 = { node: e3.anchorNode, offset: e3.anchorOffset }, i3 = { node: e3.focusNode, offset: e3.focusOffset };
            if ((t3.node.compareDocumentPosition(i3.node) & Node.DOCUMENT_POSITION_PRECEDING || t3.node === i3.node && t3.offset > i3.offset) && ([t3, i3] = [i3, t3]), t3.node.compareDocumentPosition(this._rowElements[0]) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING) && (t3 = { node: this._rowElements[0].childNodes[0], offset: 0 }), !this._rowContainer.contains(t3.node))
              return;
            const s3 = this._rowElements.slice(-1)[0];
            if (i3.node.compareDocumentPosition(s3) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_PRECEDING) && (i3 = { node: s3, offset: s3.textContent?.length ?? 0 }), !this._rowContainer.contains(i3.node))
              return;
            const r2 = ({ node: e4, offset: t4 }) => {
              const i4 = e4 instanceof Text ? e4.parentNode : e4;
              let s4 = parseInt(i4?.getAttribute("aria-posinset"), 10) - 1;
              if (isNaN(s4))
                return console.warn("row is invalid. Race condition?"), null;
              const r3 = this._rowColumns.get(i4);
              if (!r3)
                return console.warn("columns is null. Race condition?"), null;
              let n3 = t4 < r3.length ? r3[t4] : r3.slice(-1)[0] + 1;
              return n3 >= this._terminal.cols && (++s4, n3 = 0), { row: s4, column: n3 };
            }, n2 = r2(t3), o2 = r2(i3);
            if (n2 && o2) {
              if (n2.row > o2.row || n2.row === o2.row && n2.column >= o2.column)
                throw new Error("invalid range");
              this._terminal.select(n2.column, n2.row, (o2.row - n2.row) * this._terminal.cols - n2.column + o2.column);
            }
          }
          _handleResize(e3) {
            this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
            for (let e4 = this._rowContainer.children.length; e4 < this._terminal.rows; e4++)
              this._rowElements[e4] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[e4]);
            for (; this._rowElements.length > e3; )
              this._rowContainer.removeChild(this._rowElements.pop());
            this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions();
          }
          _createAccessibilityTreeNode() {
            const e3 = this._coreBrowserService.mainDocument.createElement("div");
            return e3.setAttribute("role", "listitem"), e3.tabIndex = -1, this._refreshRowDimensions(e3), e3;
          }
          _refreshRowsDimensions() {
            if (this._renderService.dimensions.css.cell.height) {
              this._accessibilityContainer.style.width = `${this._renderService.dimensions.css.canvas.width}px`, this._rowElements.length !== this._terminal.rows && this._handleResize(this._terminal.rows);
              for (let e3 = 0; e3 < this._terminal.rows; e3++)
                this._refreshRowDimensions(this._rowElements[e3]);
            }
          }
          _refreshRowDimensions(e3) {
            e3.style.height = `${this._renderService.dimensions.css.cell.height}px`;
          }
        };
        t2.AccessibilityManager = d = s2([r(1, c.IInstantiationService), r(2, h.ICoreBrowserService), r(3, h.IRenderService)], d);
      }, 3614: (e2, t2) => {
        function i2(e3) {
          return e3.replace(/\r?\n/g, "\r");
        }
        function s2(e3, t3) {
          return t3 ? "\x1B[200~" + e3 + "\x1B[201~" : e3;
        }
        function r(e3, t3, r2, n2) {
          e3 = s2(e3 = i2(e3), r2.decPrivateModes.bracketedPasteMode && true !== n2.rawOptions.ignoreBracketedPasteMode), r2.triggerDataEvent(e3, true), t3.value = "";
        }
        function n(e3, t3, i3) {
          const s3 = i3.getBoundingClientRect(), r2 = e3.clientX - s3.left - 10, n2 = e3.clientY - s3.top - 10;
          t3.style.width = "20px", t3.style.height = "20px", t3.style.left = `${r2}px`, t3.style.top = `${n2}px`, t3.style.zIndex = "1000", t3.focus();
        }
        Object.defineProperty(t2, "__esModule", { value: true }), t2.rightClickHandler = t2.moveTextAreaUnderMouseCursor = t2.paste = t2.handlePasteEvent = t2.copyHandler = t2.bracketTextForPaste = t2.prepareTextForTerminal = void 0, t2.prepareTextForTerminal = i2, t2.bracketTextForPaste = s2, t2.copyHandler = function(e3, t3) {
          e3.clipboardData && e3.clipboardData.setData("text/plain", t3.selectionText), e3.preventDefault();
        }, t2.handlePasteEvent = function(e3, t3, i3, s3) {
          e3.stopPropagation(), e3.clipboardData && r(e3.clipboardData.getData("text/plain"), t3, i3, s3);
        }, t2.paste = r, t2.moveTextAreaUnderMouseCursor = n, t2.rightClickHandler = function(e3, t3, i3, s3, r2) {
          n(e3, t3, i3), r2 && s3.rightClickSelect(e3), t3.value = s3.selectionText, t3.select();
        };
      }, 7239: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ColorContrastCache = void 0;
        const s2 = i2(1505);
        t2.ColorContrastCache = class {
          constructor() {
            this._color = new s2.TwoKeyMap(), this._css = new s2.TwoKeyMap();
          }
          setCss(e3, t3, i3) {
            this._css.set(e3, t3, i3);
          }
          getCss(e3, t3) {
            return this._css.get(e3, t3);
          }
          setColor(e3, t3, i3) {
            this._color.set(e3, t3, i3);
          }
          getColor(e3, t3) {
            return this._color.get(e3, t3);
          }
          clear() {
            this._color.clear(), this._css.clear();
          }
        };
      }, 3656: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.addDisposableDomListener = void 0, t2.addDisposableDomListener = function(e3, t3, i2, s2) {
          e3.addEventListener(t3, i2, s2);
          let r = false;
          return { dispose: () => {
            r || (r = true, e3.removeEventListener(t3, i2, s2));
          } };
        };
      }, 3551: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Linkifier = void 0;
        const n = i2(3656), o = i2(8460), a = i2(844), h = i2(2585), c = i2(4725);
        let l = t2.Linkifier = class extends a.Disposable {
          get currentLink() {
            return this._currentLink;
          }
          constructor(e3, t3, i3, s3, r2) {
            super(), this._element = e3, this._mouseService = t3, this._renderService = i3, this._bufferService = s3, this._linkProviderService = r2, this._linkCacheDisposables = [], this._isMouseOut = true, this._wasResized = false, this._activeLine = -1, this._onShowLinkUnderline = this.register(new o.EventEmitter()), this.onShowLinkUnderline = this._onShowLinkUnderline.event, this._onHideLinkUnderline = this.register(new o.EventEmitter()), this.onHideLinkUnderline = this._onHideLinkUnderline.event, this.register((0, a.getDisposeArrayDisposable)(this._linkCacheDisposables)), this.register((0, a.toDisposable)(() => {
              this._lastMouseEvent = void 0, this._activeProviderReplies?.clear();
            })), this.register(this._bufferService.onResize(() => {
              this._clearCurrentLink(), this._wasResized = true;
            })), this.register((0, n.addDisposableDomListener)(this._element, "mouseleave", () => {
              this._isMouseOut = true, this._clearCurrentLink();
            })), this.register((0, n.addDisposableDomListener)(this._element, "mousemove", this._handleMouseMove.bind(this))), this.register((0, n.addDisposableDomListener)(this._element, "mousedown", this._handleMouseDown.bind(this))), this.register((0, n.addDisposableDomListener)(this._element, "mouseup", this._handleMouseUp.bind(this)));
          }
          _handleMouseMove(e3) {
            this._lastMouseEvent = e3;
            const t3 = this._positionFromMouseEvent(e3, this._element, this._mouseService);
            if (!t3)
              return;
            this._isMouseOut = false;
            const i3 = e3.composedPath();
            for (let e4 = 0; e4 < i3.length; e4++) {
              const t4 = i3[e4];
              if (t4.classList.contains("xterm"))
                break;
              if (t4.classList.contains("xterm-hover"))
                return;
            }
            this._lastBufferCell && t3.x === this._lastBufferCell.x && t3.y === this._lastBufferCell.y || (this._handleHover(t3), this._lastBufferCell = t3);
          }
          _handleHover(e3) {
            if (this._activeLine !== e3.y || this._wasResized)
              return this._clearCurrentLink(), this._askForLink(e3, false), void (this._wasResized = false);
            this._currentLink && this._linkAtPosition(this._currentLink.link, e3) || (this._clearCurrentLink(), this._askForLink(e3, true));
          }
          _askForLink(e3, t3) {
            this._activeProviderReplies && t3 || (this._activeProviderReplies?.forEach((e4) => {
              e4?.forEach((e5) => {
                e5.link.dispose && e5.link.dispose();
              });
            }), this._activeProviderReplies = /* @__PURE__ */ new Map(), this._activeLine = e3.y);
            let i3 = false;
            for (const [s3, r2] of this._linkProviderService.linkProviders.entries())
              if (t3) {
                const t4 = this._activeProviderReplies?.get(s3);
                t4 && (i3 = this._checkLinkProviderResult(s3, e3, i3));
              } else
                r2.provideLinks(e3.y, (t4) => {
                  if (this._isMouseOut)
                    return;
                  const r3 = t4?.map((e4) => ({ link: e4 }));
                  this._activeProviderReplies?.set(s3, r3), i3 = this._checkLinkProviderResult(s3, e3, i3), this._activeProviderReplies?.size === this._linkProviderService.linkProviders.length && this._removeIntersectingLinks(e3.y, this._activeProviderReplies);
                });
          }
          _removeIntersectingLinks(e3, t3) {
            const i3 = /* @__PURE__ */ new Set();
            for (let s3 = 0; s3 < t3.size; s3++) {
              const r2 = t3.get(s3);
              if (r2)
                for (let t4 = 0; t4 < r2.length; t4++) {
                  const s4 = r2[t4], n2 = s4.link.range.start.y < e3 ? 0 : s4.link.range.start.x, o2 = s4.link.range.end.y > e3 ? this._bufferService.cols : s4.link.range.end.x;
                  for (let e4 = n2; e4 <= o2; e4++) {
                    if (i3.has(e4)) {
                      r2.splice(t4--, 1);
                      break;
                    }
                    i3.add(e4);
                  }
                }
            }
          }
          _checkLinkProviderResult(e3, t3, i3) {
            if (!this._activeProviderReplies)
              return i3;
            const s3 = this._activeProviderReplies.get(e3);
            let r2 = false;
            for (let t4 = 0; t4 < e3; t4++)
              this._activeProviderReplies.has(t4) && !this._activeProviderReplies.get(t4) || (r2 = true);
            if (!r2 && s3) {
              const e4 = s3.find((e5) => this._linkAtPosition(e5.link, t3));
              e4 && (i3 = true, this._handleNewLink(e4));
            }
            if (this._activeProviderReplies.size === this._linkProviderService.linkProviders.length && !i3)
              for (let e4 = 0; e4 < this._activeProviderReplies.size; e4++) {
                const s4 = this._activeProviderReplies.get(e4)?.find((e5) => this._linkAtPosition(e5.link, t3));
                if (s4) {
                  i3 = true, this._handleNewLink(s4);
                  break;
                }
              }
            return i3;
          }
          _handleMouseDown() {
            this._mouseDownLink = this._currentLink;
          }
          _handleMouseUp(e3) {
            if (!this._currentLink)
              return;
            const t3 = this._positionFromMouseEvent(e3, this._element, this._mouseService);
            t3 && this._mouseDownLink === this._currentLink && this._linkAtPosition(this._currentLink.link, t3) && this._currentLink.link.activate(e3, this._currentLink.link.text);
          }
          _clearCurrentLink(e3, t3) {
            this._currentLink && this._lastMouseEvent && (!e3 || !t3 || this._currentLink.link.range.start.y >= e3 && this._currentLink.link.range.end.y <= t3) && (this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent), this._currentLink = void 0, (0, a.disposeArray)(this._linkCacheDisposables));
          }
          _handleNewLink(e3) {
            if (!this._lastMouseEvent)
              return;
            const t3 = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
            t3 && this._linkAtPosition(e3.link, t3) && (this._currentLink = e3, this._currentLink.state = { decorations: { underline: void 0 === e3.link.decorations || e3.link.decorations.underline, pointerCursor: void 0 === e3.link.decorations || e3.link.decorations.pointerCursor }, isHovered: true }, this._linkHover(this._element, e3.link, this._lastMouseEvent), e3.link.decorations = {}, Object.defineProperties(e3.link.decorations, { pointerCursor: { get: () => this._currentLink?.state?.decorations.pointerCursor, set: (e4) => {
              this._currentLink?.state && this._currentLink.state.decorations.pointerCursor !== e4 && (this._currentLink.state.decorations.pointerCursor = e4, this._currentLink.state.isHovered && this._element.classList.toggle("xterm-cursor-pointer", e4));
            } }, underline: { get: () => this._currentLink?.state?.decorations.underline, set: (t4) => {
              this._currentLink?.state && this._currentLink?.state?.decorations.underline !== t4 && (this._currentLink.state.decorations.underline = t4, this._currentLink.state.isHovered && this._fireUnderlineEvent(e3.link, t4));
            } } }), this._linkCacheDisposables.push(this._renderService.onRenderedViewportChange((e4) => {
              if (!this._currentLink)
                return;
              const t4 = 0 === e4.start ? 0 : e4.start + 1 + this._bufferService.buffer.ydisp, i3 = this._bufferService.buffer.ydisp + 1 + e4.end;
              if (this._currentLink.link.range.start.y >= t4 && this._currentLink.link.range.end.y <= i3 && (this._clearCurrentLink(t4, i3), this._lastMouseEvent)) {
                const e5 = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
                e5 && this._askForLink(e5, false);
              }
            })));
          }
          _linkHover(e3, t3, i3) {
            this._currentLink?.state && (this._currentLink.state.isHovered = true, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t3, true), this._currentLink.state.decorations.pointerCursor && e3.classList.add("xterm-cursor-pointer")), t3.hover && t3.hover(i3, t3.text);
          }
          _fireUnderlineEvent(e3, t3) {
            const i3 = e3.range, s3 = this._bufferService.buffer.ydisp, r2 = this._createLinkUnderlineEvent(i3.start.x - 1, i3.start.y - s3 - 1, i3.end.x, i3.end.y - s3 - 1, void 0);
            (t3 ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(r2);
          }
          _linkLeave(e3, t3, i3) {
            this._currentLink?.state && (this._currentLink.state.isHovered = false, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t3, false), this._currentLink.state.decorations.pointerCursor && e3.classList.remove("xterm-cursor-pointer")), t3.leave && t3.leave(i3, t3.text);
          }
          _linkAtPosition(e3, t3) {
            const i3 = e3.range.start.y * this._bufferService.cols + e3.range.start.x, s3 = e3.range.end.y * this._bufferService.cols + e3.range.end.x, r2 = t3.y * this._bufferService.cols + t3.x;
            return i3 <= r2 && r2 <= s3;
          }
          _positionFromMouseEvent(e3, t3, i3) {
            const s3 = i3.getCoords(e3, t3, this._bufferService.cols, this._bufferService.rows);
            if (s3)
              return { x: s3[0], y: s3[1] + this._bufferService.buffer.ydisp };
          }
          _createLinkUnderlineEvent(e3, t3, i3, s3, r2) {
            return { x1: e3, y1: t3, x2: i3, y2: s3, cols: this._bufferService.cols, fg: r2 };
          }
        };
        t2.Linkifier = l = s2([r(1, c.IMouseService), r(2, c.IRenderService), r(3, h.IBufferService), r(4, c.ILinkProviderService)], l);
      }, 9042: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.tooMuchOutput = t2.promptLabel = void 0, t2.promptLabel = "Terminal input", t2.tooMuchOutput = "Too much output to announce, navigate to rows manually to read";
      }, 3730: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.OscLinkProvider = void 0;
        const n = i2(511), o = i2(2585);
        let a = t2.OscLinkProvider = class {
          constructor(e3, t3, i3) {
            this._bufferService = e3, this._optionsService = t3, this._oscLinkService = i3;
          }
          provideLinks(e3, t3) {
            const i3 = this._bufferService.buffer.lines.get(e3 - 1);
            if (!i3)
              return void t3(void 0);
            const s3 = [], r2 = this._optionsService.rawOptions.linkHandler, o2 = new n.CellData(), a2 = i3.getTrimmedLength();
            let c = -1, l = -1, d = false;
            for (let t4 = 0; t4 < a2; t4++)
              if (-1 !== l || i3.hasContent(t4)) {
                if (i3.loadCell(t4, o2), o2.hasExtendedAttrs() && o2.extended.urlId) {
                  if (-1 === l) {
                    l = t4, c = o2.extended.urlId;
                    continue;
                  }
                  d = o2.extended.urlId !== c;
                } else
                  -1 !== l && (d = true);
                if (d || -1 !== l && t4 === a2 - 1) {
                  const i4 = this._oscLinkService.getLinkData(c)?.uri;
                  if (i4) {
                    const n2 = { start: { x: l + 1, y: e3 }, end: { x: t4 + (d || t4 !== a2 - 1 ? 0 : 1), y: e3 } };
                    let o3 = false;
                    if (!r2?.allowNonHttpProtocols)
                      try {
                        const e4 = new URL(i4);
                        ["http:", "https:"].includes(e4.protocol) || (o3 = true);
                      } catch (e4) {
                        o3 = true;
                      }
                    o3 || s3.push({ text: i4, range: n2, activate: (e4, t5) => r2 ? r2.activate(e4, t5, n2) : h(0, t5), hover: (e4, t5) => r2?.hover?.(e4, t5, n2), leave: (e4, t5) => r2?.leave?.(e4, t5, n2) });
                  }
                  d = false, o2.hasExtendedAttrs() && o2.extended.urlId ? (l = t4, c = o2.extended.urlId) : (l = -1, c = -1);
                }
              }
            t3(s3);
          }
        };
        function h(e3, t3) {
          if (confirm(`Do you want to navigate to ${t3}?

WARNING: This link could potentially be dangerous`)) {
            const e4 = window.open();
            if (e4) {
              try {
                e4.opener = null;
              } catch {
              }
              e4.location.href = t3;
            } else
              console.warn("Opening link blocked as opener could not be cleared");
          }
        }
        t2.OscLinkProvider = a = s2([r(0, o.IBufferService), r(1, o.IOptionsService), r(2, o.IOscLinkService)], a);
      }, 6193: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.RenderDebouncer = void 0, t2.RenderDebouncer = class {
          constructor(e3, t3) {
            this._renderCallback = e3, this._coreBrowserService = t3, this._refreshCallbacks = [];
          }
          dispose() {
            this._animationFrame && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
          }
          addRefreshCallback(e3) {
            return this._refreshCallbacks.push(e3), this._animationFrame || (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh())), this._animationFrame;
          }
          refresh(e3, t3, i2) {
            this._rowCount = i2, e3 = void 0 !== e3 ? e3 : 0, t3 = void 0 !== t3 ? t3 : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e3) : e3, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t3) : t3, this._animationFrame || (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh()));
          }
          _innerRefresh() {
            if (this._animationFrame = void 0, void 0 === this._rowStart || void 0 === this._rowEnd || void 0 === this._rowCount)
              return void this._runRefreshCallbacks();
            const e3 = Math.max(this._rowStart, 0), t3 = Math.min(this._rowEnd, this._rowCount - 1);
            this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e3, t3), this._runRefreshCallbacks();
          }
          _runRefreshCallbacks() {
            for (const e3 of this._refreshCallbacks)
              e3(0);
            this._refreshCallbacks = [];
          }
        };
      }, 3236: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Terminal = void 0;
        const s2 = i2(3614), r = i2(3656), n = i2(3551), o = i2(9042), a = i2(3730), h = i2(1680), c = i2(3107), l = i2(5744), d = i2(2950), _ = i2(1296), u = i2(428), f = i2(4269), v = i2(5114), p = i2(8934), g = i2(3230), m = i2(9312), S = i2(4725), C = i2(6731), b = i2(8055), w = i2(8969), y = i2(8460), E = i2(844), k = i2(6114), L = i2(8437), D = i2(2584), R = i2(7399), x = i2(5941), A = i2(9074), B = i2(2585), T = i2(5435), M = i2(4567), O = i2(779);
        class P extends w.CoreTerminal {
          get onFocus() {
            return this._onFocus.event;
          }
          get onBlur() {
            return this._onBlur.event;
          }
          get onA11yChar() {
            return this._onA11yCharEmitter.event;
          }
          get onA11yTab() {
            return this._onA11yTabEmitter.event;
          }
          get onWillOpen() {
            return this._onWillOpen.event;
          }
          constructor(e3 = {}) {
            super(e3), this.browser = k, this._keyDownHandled = false, this._keyDownSeen = false, this._keyPressHandled = false, this._unprocessedDeadKey = false, this._accessibilityManager = this.register(new E.MutableDisposable()), this._onCursorMove = this.register(new y.EventEmitter()), this.onCursorMove = this._onCursorMove.event, this._onKey = this.register(new y.EventEmitter()), this.onKey = this._onKey.event, this._onRender = this.register(new y.EventEmitter()), this.onRender = this._onRender.event, this._onSelectionChange = this.register(new y.EventEmitter()), this.onSelectionChange = this._onSelectionChange.event, this._onTitleChange = this.register(new y.EventEmitter()), this.onTitleChange = this._onTitleChange.event, this._onBell = this.register(new y.EventEmitter()), this.onBell = this._onBell.event, this._onFocus = this.register(new y.EventEmitter()), this._onBlur = this.register(new y.EventEmitter()), this._onA11yCharEmitter = this.register(new y.EventEmitter()), this._onA11yTabEmitter = this.register(new y.EventEmitter()), this._onWillOpen = this.register(new y.EventEmitter()), this._setup(), this._decorationService = this._instantiationService.createInstance(A.DecorationService), this._instantiationService.setService(B.IDecorationService, this._decorationService), this._linkProviderService = this._instantiationService.createInstance(O.LinkProviderService), this._instantiationService.setService(S.ILinkProviderService, this._linkProviderService), this._linkProviderService.registerLinkProvider(this._instantiationService.createInstance(a.OscLinkProvider)), this.register(this._inputHandler.onRequestBell(() => this._onBell.fire())), this.register(this._inputHandler.onRequestRefreshRows((e4, t3) => this.refresh(e4, t3))), this.register(this._inputHandler.onRequestSendFocus(() => this._reportFocus())), this.register(this._inputHandler.onRequestReset(() => this.reset())), this.register(this._inputHandler.onRequestWindowsOptionsReport((e4) => this._reportWindowsOptions(e4))), this.register(this._inputHandler.onColor((e4) => this._handleColorEvent(e4))), this.register((0, y.forwardEvent)(this._inputHandler.onCursorMove, this._onCursorMove)), this.register((0, y.forwardEvent)(this._inputHandler.onTitleChange, this._onTitleChange)), this.register((0, y.forwardEvent)(this._inputHandler.onA11yChar, this._onA11yCharEmitter)), this.register((0, y.forwardEvent)(this._inputHandler.onA11yTab, this._onA11yTabEmitter)), this.register(this._bufferService.onResize((e4) => this._afterResize(e4.cols, e4.rows))), this.register((0, E.toDisposable)(() => {
              this._customKeyEventHandler = void 0, this.element?.parentNode?.removeChild(this.element);
            }));
          }
          _handleColorEvent(e3) {
            if (this._themeService)
              for (const t3 of e3) {
                let e4, i3 = "";
                switch (t3.index) {
                  case 256:
                    e4 = "foreground", i3 = "10";
                    break;
                  case 257:
                    e4 = "background", i3 = "11";
                    break;
                  case 258:
                    e4 = "cursor", i3 = "12";
                    break;
                  default:
                    e4 = "ansi", i3 = "4;" + t3.index;
                }
                switch (t3.type) {
                  case 0:
                    const s3 = b.color.toColorRGB("ansi" === e4 ? this._themeService.colors.ansi[t3.index] : this._themeService.colors[e4]);
                    this.coreService.triggerDataEvent(`${D.C0.ESC}]${i3};${(0, x.toRgbString)(s3)}${D.C1_ESCAPED.ST}`);
                    break;
                  case 1:
                    if ("ansi" === e4)
                      this._themeService.modifyColors((e5) => e5.ansi[t3.index] = b.channels.toColor(...t3.color));
                    else {
                      const i4 = e4;
                      this._themeService.modifyColors((e5) => e5[i4] = b.channels.toColor(...t3.color));
                    }
                    break;
                  case 2:
                    this._themeService.restoreColor(t3.index);
                }
              }
          }
          _setup() {
            super._setup(), this._customKeyEventHandler = void 0;
          }
          get buffer() {
            return this.buffers.active;
          }
          focus() {
            this.textarea && this.textarea.focus({ preventScroll: true });
          }
          _handleScreenReaderModeOptionChange(e3) {
            e3 ? !this._accessibilityManager.value && this._renderService && (this._accessibilityManager.value = this._instantiationService.createInstance(M.AccessibilityManager, this)) : this._accessibilityManager.clear();
          }
          _handleTextAreaFocus(e3) {
            this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(D.C0.ESC + "[I"), this.element.classList.add("focus"), this._showCursor(), this._onFocus.fire();
          }
          blur() {
            return this.textarea?.blur();
          }
          _handleTextAreaBlur() {
            this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(D.C0.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire();
          }
          _syncTextArea() {
            if (!this.textarea || !this.buffer.isCursorInViewport || this._compositionHelper.isComposing || !this._renderService)
              return;
            const e3 = this.buffer.ybase + this.buffer.y, t3 = this.buffer.lines.get(e3);
            if (!t3)
              return;
            const i3 = Math.min(this.buffer.x, this.cols - 1), s3 = this._renderService.dimensions.css.cell.height, r2 = t3.getWidth(i3), n2 = this._renderService.dimensions.css.cell.width * r2, o2 = this.buffer.y * this._renderService.dimensions.css.cell.height, a2 = i3 * this._renderService.dimensions.css.cell.width;
            this.textarea.style.left = a2 + "px", this.textarea.style.top = o2 + "px", this.textarea.style.width = n2 + "px", this.textarea.style.height = s3 + "px", this.textarea.style.lineHeight = s3 + "px", this.textarea.style.zIndex = "-5";
          }
          _initGlobal() {
            this._bindKeys(), this.register((0, r.addDisposableDomListener)(this.element, "copy", (e4) => {
              this.hasSelection() && (0, s2.copyHandler)(e4, this._selectionService);
            }));
            const e3 = (e4) => (0, s2.handlePasteEvent)(e4, this.textarea, this.coreService, this.optionsService);
            this.register((0, r.addDisposableDomListener)(this.textarea, "paste", e3)), this.register((0, r.addDisposableDomListener)(this.element, "paste", e3)), k.isFirefox ? this.register((0, r.addDisposableDomListener)(this.element, "mousedown", (e4) => {
              2 === e4.button && (0, s2.rightClickHandler)(e4, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
            })) : this.register((0, r.addDisposableDomListener)(this.element, "contextmenu", (e4) => {
              (0, s2.rightClickHandler)(e4, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
            })), k.isLinux && this.register((0, r.addDisposableDomListener)(this.element, "auxclick", (e4) => {
              1 === e4.button && (0, s2.moveTextAreaUnderMouseCursor)(e4, this.textarea, this.screenElement);
            }));
          }
          _bindKeys() {
            this.register((0, r.addDisposableDomListener)(this.textarea, "keyup", (e3) => this._keyUp(e3), true)), this.register((0, r.addDisposableDomListener)(this.textarea, "keydown", (e3) => this._keyDown(e3), true)), this.register((0, r.addDisposableDomListener)(this.textarea, "keypress", (e3) => this._keyPress(e3), true)), this.register((0, r.addDisposableDomListener)(this.textarea, "compositionstart", () => this._compositionHelper.compositionstart())), this.register((0, r.addDisposableDomListener)(this.textarea, "compositionupdate", (e3) => this._compositionHelper.compositionupdate(e3))), this.register((0, r.addDisposableDomListener)(this.textarea, "compositionend", () => this._compositionHelper.compositionend())), this.register((0, r.addDisposableDomListener)(this.textarea, "input", (e3) => this._inputEvent(e3), true)), this.register(this.onRender(() => this._compositionHelper.updateCompositionElements()));
          }
          open(e3) {
            if (!e3)
              throw new Error("Terminal requires a parent element.");
            if (e3.isConnected || this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"), this.element?.ownerDocument.defaultView && this._coreBrowserService)
              return void (this.element.ownerDocument.defaultView !== this._coreBrowserService.window && (this._coreBrowserService.window = this.element.ownerDocument.defaultView));
            this._document = e3.ownerDocument, this.options.documentOverride && this.options.documentOverride instanceof Document && (this._document = this.optionsService.rawOptions.documentOverride), this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), e3.appendChild(this.element);
            const t3 = this._document.createDocumentFragment();
            this._viewportElement = this._document.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), t3.appendChild(this._viewportElement), this._viewportScrollArea = this._document.createElement("div"), this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), this.screenElement = this._document.createElement("div"), this.screenElement.classList.add("xterm-screen"), this.register((0, r.addDisposableDomListener)(this.screenElement, "mousemove", (e4) => this.updateCursorStyle(e4))), this._helperContainer = this._document.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), t3.appendChild(this.screenElement), this.textarea = this._document.createElement("textarea"), this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", o.promptLabel), k.isChromeOS || this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this._coreBrowserService = this.register(this._instantiationService.createInstance(v.CoreBrowserService, this.textarea, e3.ownerDocument.defaultView ?? window, this._document ?? "undefined" != typeof window ? window.document : null)), this._instantiationService.setService(S.ICoreBrowserService, this._coreBrowserService), this.register((0, r.addDisposableDomListener)(this.textarea, "focus", (e4) => this._handleTextAreaFocus(e4))), this.register((0, r.addDisposableDomListener)(this.textarea, "blur", () => this._handleTextAreaBlur())), this._helperContainer.appendChild(this.textarea), this._charSizeService = this._instantiationService.createInstance(u.CharSizeService, this._document, this._helperContainer), this._instantiationService.setService(S.ICharSizeService, this._charSizeService), this._themeService = this._instantiationService.createInstance(C.ThemeService), this._instantiationService.setService(S.IThemeService, this._themeService), this._characterJoinerService = this._instantiationService.createInstance(f.CharacterJoinerService), this._instantiationService.setService(S.ICharacterJoinerService, this._characterJoinerService), this._renderService = this.register(this._instantiationService.createInstance(g.RenderService, this.rows, this.screenElement)), this._instantiationService.setService(S.IRenderService, this._renderService), this.register(this._renderService.onRenderedViewportChange((e4) => this._onRender.fire(e4))), this.onResize((e4) => this._renderService.resize(e4.cols, e4.rows)), this._compositionView = this._document.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance(d.CompositionHelper, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this._mouseService = this._instantiationService.createInstance(p.MouseService), this._instantiationService.setService(S.IMouseService, this._mouseService), this.linkifier = this.register(this._instantiationService.createInstance(n.Linkifier, this.screenElement)), this.element.appendChild(t3);
            try {
              this._onWillOpen.fire(this.element);
            } catch {
            }
            this._renderService.hasRenderer() || this._renderService.setRenderer(this._createRenderer()), this.viewport = this._instantiationService.createInstance(h.Viewport, this._viewportElement, this._viewportScrollArea), this.viewport.onRequestScrollLines((e4) => this.scrollLines(e4.amount, e4.suppressScrollEvent, 1)), this.register(this._inputHandler.onRequestSyncScrollBar(() => this.viewport.syncScrollArea())), this.register(this.viewport), this.register(this.onCursorMove(() => {
              this._renderService.handleCursorMove(), this._syncTextArea();
            })), this.register(this.onResize(() => this._renderService.handleResize(this.cols, this.rows))), this.register(this.onBlur(() => this._renderService.handleBlur())), this.register(this.onFocus(() => this._renderService.handleFocus())), this.register(this._renderService.onDimensionsChange(() => this.viewport.syncScrollArea())), this._selectionService = this.register(this._instantiationService.createInstance(m.SelectionService, this.element, this.screenElement, this.linkifier)), this._instantiationService.setService(S.ISelectionService, this._selectionService), this.register(this._selectionService.onRequestScrollLines((e4) => this.scrollLines(e4.amount, e4.suppressScrollEvent))), this.register(this._selectionService.onSelectionChange(() => this._onSelectionChange.fire())), this.register(this._selectionService.onRequestRedraw((e4) => this._renderService.handleSelectionChanged(e4.start, e4.end, e4.columnSelectMode))), this.register(this._selectionService.onLinuxMouseSelection((e4) => {
              this.textarea.value = e4, this.textarea.focus(), this.textarea.select();
            })), this.register(this._onScroll.event((e4) => {
              this.viewport.syncScrollArea(), this._selectionService.refresh();
            })), this.register((0, r.addDisposableDomListener)(this._viewportElement, "scroll", () => this._selectionService.refresh())), this.register(this._instantiationService.createInstance(c.BufferDecorationRenderer, this.screenElement)), this.register((0, r.addDisposableDomListener)(this.element, "mousedown", (e4) => this._selectionService.handleMouseDown(e4))), this.coreMouseService.areMouseEventsActive ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager.value = this._instantiationService.createInstance(M.AccessibilityManager, this)), this.register(this.optionsService.onSpecificOptionChange("screenReaderMode", (e4) => this._handleScreenReaderModeOptionChange(e4))), this.options.overviewRulerWidth && (this._overviewRulerRenderer = this.register(this._instantiationService.createInstance(l.OverviewRulerRenderer, this._viewportElement, this.screenElement))), this.optionsService.onSpecificOptionChange("overviewRulerWidth", (e4) => {
              !this._overviewRulerRenderer && e4 && this._viewportElement && this.screenElement && (this._overviewRulerRenderer = this.register(this._instantiationService.createInstance(l.OverviewRulerRenderer, this._viewportElement, this.screenElement)));
            }), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse();
          }
          _createRenderer() {
            return this._instantiationService.createInstance(_.DomRenderer, this, this._document, this.element, this.screenElement, this._viewportElement, this._helperContainer, this.linkifier);
          }
          bindMouse() {
            const e3 = this, t3 = this.element;
            function i3(t4) {
              const i4 = e3._mouseService.getMouseReportCoords(t4, e3.screenElement);
              if (!i4)
                return false;
              let s4, r2;
              switch (t4.overrideType || t4.type) {
                case "mousemove":
                  r2 = 32, void 0 === t4.buttons ? (s4 = 3, void 0 !== t4.button && (s4 = t4.button < 3 ? t4.button : 3)) : s4 = 1 & t4.buttons ? 0 : 4 & t4.buttons ? 1 : 2 & t4.buttons ? 2 : 3;
                  break;
                case "mouseup":
                  r2 = 0, s4 = t4.button < 3 ? t4.button : 3;
                  break;
                case "mousedown":
                  r2 = 1, s4 = t4.button < 3 ? t4.button : 3;
                  break;
                case "wheel":
                  if (e3._customWheelEventHandler && false === e3._customWheelEventHandler(t4))
                    return false;
                  if (0 === e3.viewport.getLinesScrolled(t4))
                    return false;
                  r2 = t4.deltaY < 0 ? 0 : 1, s4 = 4;
                  break;
                default:
                  return false;
              }
              return !(void 0 === r2 || void 0 === s4 || s4 > 4) && e3.coreMouseService.triggerMouseEvent({ col: i4.col, row: i4.row, x: i4.x, y: i4.y, button: s4, action: r2, ctrl: t4.ctrlKey, alt: t4.altKey, shift: t4.shiftKey });
            }
            const s3 = { mouseup: null, wheel: null, mousedrag: null, mousemove: null }, n2 = { mouseup: (e4) => (i3(e4), e4.buttons || (this._document.removeEventListener("mouseup", s3.mouseup), s3.mousedrag && this._document.removeEventListener("mousemove", s3.mousedrag)), this.cancel(e4)), wheel: (e4) => (i3(e4), this.cancel(e4, true)), mousedrag: (e4) => {
              e4.buttons && i3(e4);
            }, mousemove: (e4) => {
              e4.buttons || i3(e4);
            } };
            this.register(this.coreMouseService.onProtocolChange((e4) => {
              e4 ? ("debug" === this.optionsService.rawOptions.logLevel && this._logService.debug("Binding to mouse events:", this.coreMouseService.explainEvents(e4)), this.element.classList.add("enable-mouse-events"), this._selectionService.disable()) : (this._logService.debug("Unbinding from mouse events."), this.element.classList.remove("enable-mouse-events"), this._selectionService.enable()), 8 & e4 ? s3.mousemove || (t3.addEventListener("mousemove", n2.mousemove), s3.mousemove = n2.mousemove) : (t3.removeEventListener("mousemove", s3.mousemove), s3.mousemove = null), 16 & e4 ? s3.wheel || (t3.addEventListener("wheel", n2.wheel, { passive: false }), s3.wheel = n2.wheel) : (t3.removeEventListener("wheel", s3.wheel), s3.wheel = null), 2 & e4 ? s3.mouseup || (s3.mouseup = n2.mouseup) : (this._document.removeEventListener("mouseup", s3.mouseup), s3.mouseup = null), 4 & e4 ? s3.mousedrag || (s3.mousedrag = n2.mousedrag) : (this._document.removeEventListener("mousemove", s3.mousedrag), s3.mousedrag = null);
            })), this.coreMouseService.activeProtocol = this.coreMouseService.activeProtocol, this.register((0, r.addDisposableDomListener)(t3, "mousedown", (e4) => {
              if (e4.preventDefault(), this.focus(), this.coreMouseService.areMouseEventsActive && !this._selectionService.shouldForceSelection(e4))
                return i3(e4), s3.mouseup && this._document.addEventListener("mouseup", s3.mouseup), s3.mousedrag && this._document.addEventListener("mousemove", s3.mousedrag), this.cancel(e4);
            })), this.register((0, r.addDisposableDomListener)(t3, "wheel", (e4) => {
              if (!s3.wheel) {
                if (this._customWheelEventHandler && false === this._customWheelEventHandler(e4))
                  return false;
                if (!this.buffer.hasScrollback) {
                  const t4 = this.viewport.getLinesScrolled(e4);
                  if (0 === t4)
                    return;
                  const i4 = D.C0.ESC + (this.coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (e4.deltaY < 0 ? "A" : "B");
                  let s4 = "";
                  for (let e5 = 0; e5 < Math.abs(t4); e5++)
                    s4 += i4;
                  return this.coreService.triggerDataEvent(s4, true), this.cancel(e4, true);
                }
                return this.viewport.handleWheel(e4) ? this.cancel(e4) : void 0;
              }
            }, { passive: false })), this.register((0, r.addDisposableDomListener)(t3, "touchstart", (e4) => {
              if (!this.coreMouseService.areMouseEventsActive)
                return this.viewport.handleTouchStart(e4), this.cancel(e4);
            }, { passive: true })), this.register((0, r.addDisposableDomListener)(t3, "touchmove", (e4) => {
              if (!this.coreMouseService.areMouseEventsActive)
                return this.viewport.handleTouchMove(e4) ? void 0 : this.cancel(e4);
            }, { passive: false }));
          }
          refresh(e3, t3) {
            this._renderService?.refreshRows(e3, t3);
          }
          updateCursorStyle(e3) {
            this._selectionService?.shouldColumnSelect(e3) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select");
          }
          _showCursor() {
            this.coreService.isCursorInitialized || (this.coreService.isCursorInitialized = true, this.refresh(this.buffer.y, this.buffer.y));
          }
          scrollLines(e3, t3, i3 = 0) {
            1 === i3 ? (super.scrollLines(e3, t3, i3), this.refresh(0, this.rows - 1)) : this.viewport?.scrollLines(e3);
          }
          paste(e3) {
            (0, s2.paste)(e3, this.textarea, this.coreService, this.optionsService);
          }
          attachCustomKeyEventHandler(e3) {
            this._customKeyEventHandler = e3;
          }
          attachCustomWheelEventHandler(e3) {
            this._customWheelEventHandler = e3;
          }
          registerLinkProvider(e3) {
            return this._linkProviderService.registerLinkProvider(e3);
          }
          registerCharacterJoiner(e3) {
            if (!this._characterJoinerService)
              throw new Error("Terminal must be opened first");
            const t3 = this._characterJoinerService.register(e3);
            return this.refresh(0, this.rows - 1), t3;
          }
          deregisterCharacterJoiner(e3) {
            if (!this._characterJoinerService)
              throw new Error("Terminal must be opened first");
            this._characterJoinerService.deregister(e3) && this.refresh(0, this.rows - 1);
          }
          get markers() {
            return this.buffer.markers;
          }
          registerMarker(e3) {
            return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e3);
          }
          registerDecoration(e3) {
            return this._decorationService.registerDecoration(e3);
          }
          hasSelection() {
            return !!this._selectionService && this._selectionService.hasSelection;
          }
          select(e3, t3, i3) {
            this._selectionService.setSelection(e3, t3, i3);
          }
          getSelection() {
            return this._selectionService ? this._selectionService.selectionText : "";
          }
          getSelectionPosition() {
            if (this._selectionService && this._selectionService.hasSelection)
              return { start: { x: this._selectionService.selectionStart[0], y: this._selectionService.selectionStart[1] }, end: { x: this._selectionService.selectionEnd[0], y: this._selectionService.selectionEnd[1] } };
          }
          clearSelection() {
            this._selectionService?.clearSelection();
          }
          selectAll() {
            this._selectionService?.selectAll();
          }
          selectLines(e3, t3) {
            this._selectionService?.selectLines(e3, t3);
          }
          _keyDown(e3) {
            if (this._keyDownHandled = false, this._keyDownSeen = true, this._customKeyEventHandler && false === this._customKeyEventHandler(e3))
              return false;
            const t3 = this.browser.isMac && this.options.macOptionIsMeta && e3.altKey;
            if (!t3 && !this._compositionHelper.keydown(e3))
              return this.options.scrollOnUserInput && this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(), false;
            t3 || "Dead" !== e3.key && "AltGraph" !== e3.key || (this._unprocessedDeadKey = true);
            const i3 = (0, R.evaluateKeyboardEvent)(e3, this.coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
            if (this.updateCursorStyle(e3), 3 === i3.type || 2 === i3.type) {
              const t4 = this.rows - 1;
              return this.scrollLines(2 === i3.type ? -t4 : t4), this.cancel(e3, true);
            }
            return 1 === i3.type && this.selectAll(), !!this._isThirdLevelShift(this.browser, e3) || (i3.cancel && this.cancel(e3, true), !i3.key || !!(e3.key && !e3.ctrlKey && !e3.altKey && !e3.metaKey && 1 === e3.key.length && e3.key.charCodeAt(0) >= 65 && e3.key.charCodeAt(0) <= 90) || (this._unprocessedDeadKey ? (this._unprocessedDeadKey = false, true) : (i3.key !== D.C0.ETX && i3.key !== D.C0.CR || (this.textarea.value = ""), this._onKey.fire({ key: i3.key, domEvent: e3 }), this._showCursor(), this.coreService.triggerDataEvent(i3.key, true), !this.optionsService.rawOptions.screenReaderMode || e3.altKey || e3.ctrlKey ? this.cancel(e3, true) : void (this._keyDownHandled = true))));
          }
          _isThirdLevelShift(e3, t3) {
            const i3 = e3.isMac && !this.options.macOptionIsMeta && t3.altKey && !t3.ctrlKey && !t3.metaKey || e3.isWindows && t3.altKey && t3.ctrlKey && !t3.metaKey || e3.isWindows && t3.getModifierState("AltGraph");
            return "keypress" === t3.type ? i3 : i3 && (!t3.keyCode || t3.keyCode > 47);
          }
          _keyUp(e3) {
            this._keyDownSeen = false, this._customKeyEventHandler && false === this._customKeyEventHandler(e3) || (function(e4) {
              return 16 === e4.keyCode || 17 === e4.keyCode || 18 === e4.keyCode;
            }(e3) || this.focus(), this.updateCursorStyle(e3), this._keyPressHandled = false);
          }
          _keyPress(e3) {
            let t3;
            if (this._keyPressHandled = false, this._keyDownHandled)
              return false;
            if (this._customKeyEventHandler && false === this._customKeyEventHandler(e3))
              return false;
            if (this.cancel(e3), e3.charCode)
              t3 = e3.charCode;
            else if (null === e3.which || void 0 === e3.which)
              t3 = e3.keyCode;
            else {
              if (0 === e3.which || 0 === e3.charCode)
                return false;
              t3 = e3.which;
            }
            return !(!t3 || (e3.altKey || e3.ctrlKey || e3.metaKey) && !this._isThirdLevelShift(this.browser, e3) || (t3 = String.fromCharCode(t3), this._onKey.fire({ key: t3, domEvent: e3 }), this._showCursor(), this.coreService.triggerDataEvent(t3, true), this._keyPressHandled = true, this._unprocessedDeadKey = false, 0));
          }
          _inputEvent(e3) {
            if (e3.data && "insertText" === e3.inputType && (!e3.composed || !this._keyDownSeen) && !this.optionsService.rawOptions.screenReaderMode) {
              if (this._keyPressHandled)
                return false;
              this._unprocessedDeadKey = false;
              const t3 = e3.data;
              return this.coreService.triggerDataEvent(t3, true), this.cancel(e3), true;
            }
            return false;
          }
          resize(e3, t3) {
            e3 !== this.cols || t3 !== this.rows ? super.resize(e3, t3) : this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure();
          }
          _afterResize(e3, t3) {
            this._charSizeService?.measure(), this.viewport?.syncScrollArea(true);
          }
          clear() {
            if (0 !== this.buffer.ybase || 0 !== this.buffer.y) {
              this.buffer.clearAllMarkers(), this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
              for (let e3 = 1; e3 < this.rows; e3++)
                this.buffer.lines.push(this.buffer.getBlankLine(L.DEFAULT_ATTR_DATA));
              this._onScroll.fire({ position: this.buffer.ydisp, source: 0 }), this.viewport?.reset(), this.refresh(0, this.rows - 1);
            }
          }
          reset() {
            this.options.rows = this.rows, this.options.cols = this.cols;
            const e3 = this._customKeyEventHandler;
            this._setup(), super.reset(), this._selectionService?.reset(), this._decorationService.reset(), this.viewport?.reset(), this._customKeyEventHandler = e3, this.refresh(0, this.rows - 1);
          }
          clearTextureAtlas() {
            this._renderService?.clearTextureAtlas();
          }
          _reportFocus() {
            this.element?.classList.contains("focus") ? this.coreService.triggerDataEvent(D.C0.ESC + "[I") : this.coreService.triggerDataEvent(D.C0.ESC + "[O");
          }
          _reportWindowsOptions(e3) {
            if (this._renderService)
              switch (e3) {
                case T.WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:
                  const e4 = this._renderService.dimensions.css.canvas.width.toFixed(0), t3 = this._renderService.dimensions.css.canvas.height.toFixed(0);
                  this.coreService.triggerDataEvent(`${D.C0.ESC}[4;${t3};${e4}t`);
                  break;
                case T.WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:
                  const i3 = this._renderService.dimensions.css.cell.width.toFixed(0), s3 = this._renderService.dimensions.css.cell.height.toFixed(0);
                  this.coreService.triggerDataEvent(`${D.C0.ESC}[6;${s3};${i3}t`);
              }
          }
          cancel(e3, t3) {
            if (this.options.cancelEvents || t3)
              return e3.preventDefault(), e3.stopPropagation(), false;
          }
        }
        t2.Terminal = P;
      }, 9924: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.TimeBasedDebouncer = void 0, t2.TimeBasedDebouncer = class {
          constructor(e3, t3 = 1e3) {
            this._renderCallback = e3, this._debounceThresholdMS = t3, this._lastRefreshMs = 0, this._additionalRefreshRequested = false;
          }
          dispose() {
            this._refreshTimeoutID && clearTimeout(this._refreshTimeoutID);
          }
          refresh(e3, t3, i2) {
            this._rowCount = i2, e3 = void 0 !== e3 ? e3 : 0, t3 = void 0 !== t3 ? t3 : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e3) : e3, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t3) : t3;
            const s2 = Date.now();
            if (s2 - this._lastRefreshMs >= this._debounceThresholdMS)
              this._lastRefreshMs = s2, this._innerRefresh();
            else if (!this._additionalRefreshRequested) {
              const e4 = s2 - this._lastRefreshMs, t4 = this._debounceThresholdMS - e4;
              this._additionalRefreshRequested = true, this._refreshTimeoutID = window.setTimeout(() => {
                this._lastRefreshMs = Date.now(), this._innerRefresh(), this._additionalRefreshRequested = false, this._refreshTimeoutID = void 0;
              }, t4);
            }
          }
          _innerRefresh() {
            if (void 0 === this._rowStart || void 0 === this._rowEnd || void 0 === this._rowCount)
              return;
            const e3 = Math.max(this._rowStart, 0), t3 = Math.min(this._rowEnd, this._rowCount - 1);
            this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e3, t3);
          }
        };
      }, 1680: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Viewport = void 0;
        const n = i2(3656), o = i2(4725), a = i2(8460), h = i2(844), c = i2(2585);
        let l = t2.Viewport = class extends h.Disposable {
          constructor(e3, t3, i3, s3, r2, o2, h2, c2) {
            super(), this._viewportElement = e3, this._scrollArea = t3, this._bufferService = i3, this._optionsService = s3, this._charSizeService = r2, this._renderService = o2, this._coreBrowserService = h2, this.scrollBarWidth = 0, this._currentRowHeight = 0, this._currentDeviceCellHeight = 0, this._lastRecordedBufferLength = 0, this._lastRecordedViewportHeight = 0, this._lastRecordedBufferHeight = 0, this._lastTouchY = 0, this._lastScrollTop = 0, this._wheelPartialScroll = 0, this._refreshAnimationFrame = null, this._ignoreNextScrollEvent = false, this._smoothScrollState = { startTime: 0, origin: -1, target: -1 }, this._onRequestScrollLines = this.register(new a.EventEmitter()), this.onRequestScrollLines = this._onRequestScrollLines.event, this.scrollBarWidth = this._viewportElement.offsetWidth - this._scrollArea.offsetWidth || 15, this.register((0, n.addDisposableDomListener)(this._viewportElement, "scroll", this._handleScroll.bind(this))), this._activeBuffer = this._bufferService.buffer, this.register(this._bufferService.buffers.onBufferActivate((e4) => this._activeBuffer = e4.activeBuffer)), this._renderDimensions = this._renderService.dimensions, this.register(this._renderService.onDimensionsChange((e4) => this._renderDimensions = e4)), this._handleThemeChange(c2.colors), this.register(c2.onChangeColors((e4) => this._handleThemeChange(e4))), this.register(this._optionsService.onSpecificOptionChange("scrollback", () => this.syncScrollArea())), setTimeout(() => this.syncScrollArea());
          }
          _handleThemeChange(e3) {
            this._viewportElement.style.backgroundColor = e3.background.css;
          }
          reset() {
            this._currentRowHeight = 0, this._currentDeviceCellHeight = 0, this._lastRecordedBufferLength = 0, this._lastRecordedViewportHeight = 0, this._lastRecordedBufferHeight = 0, this._lastTouchY = 0, this._lastScrollTop = 0, this._coreBrowserService.window.requestAnimationFrame(() => this.syncScrollArea());
          }
          _refresh(e3) {
            if (e3)
              return this._innerRefresh(), void (null !== this._refreshAnimationFrame && this._coreBrowserService.window.cancelAnimationFrame(this._refreshAnimationFrame));
            null === this._refreshAnimationFrame && (this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh()));
          }
          _innerRefresh() {
            if (this._charSizeService.height > 0) {
              this._currentRowHeight = this._renderDimensions.device.cell.height / this._coreBrowserService.dpr, this._currentDeviceCellHeight = this._renderDimensions.device.cell.height, this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
              const e4 = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._renderDimensions.css.canvas.height);
              this._lastRecordedBufferHeight !== e4 && (this._lastRecordedBufferHeight = e4, this._scrollArea.style.height = this._lastRecordedBufferHeight + "px");
            }
            const e3 = this._bufferService.buffer.ydisp * this._currentRowHeight;
            this._viewportElement.scrollTop !== e3 && (this._ignoreNextScrollEvent = true, this._viewportElement.scrollTop = e3), this._refreshAnimationFrame = null;
          }
          syncScrollArea(e3 = false) {
            if (this._lastRecordedBufferLength !== this._bufferService.buffer.lines.length)
              return this._lastRecordedBufferLength = this._bufferService.buffer.lines.length, void this._refresh(e3);
            this._lastRecordedViewportHeight === this._renderService.dimensions.css.canvas.height && this._lastScrollTop === this._activeBuffer.ydisp * this._currentRowHeight && this._renderDimensions.device.cell.height === this._currentDeviceCellHeight || this._refresh(e3);
          }
          _handleScroll(e3) {
            if (this._lastScrollTop = this._viewportElement.scrollTop, !this._viewportElement.offsetParent)
              return;
            if (this._ignoreNextScrollEvent)
              return this._ignoreNextScrollEvent = false, void this._onRequestScrollLines.fire({ amount: 0, suppressScrollEvent: true });
            const t3 = Math.round(this._lastScrollTop / this._currentRowHeight) - this._bufferService.buffer.ydisp;
            this._onRequestScrollLines.fire({ amount: t3, suppressScrollEvent: true });
          }
          _smoothScroll() {
            if (this._isDisposed || -1 === this._smoothScrollState.origin || -1 === this._smoothScrollState.target)
              return;
            const e3 = this._smoothScrollPercent();
            this._viewportElement.scrollTop = this._smoothScrollState.origin + Math.round(e3 * (this._smoothScrollState.target - this._smoothScrollState.origin)), e3 < 1 ? this._coreBrowserService.window.requestAnimationFrame(() => this._smoothScroll()) : this._clearSmoothScrollState();
          }
          _smoothScrollPercent() {
            return this._optionsService.rawOptions.smoothScrollDuration && this._smoothScrollState.startTime ? Math.max(Math.min((Date.now() - this._smoothScrollState.startTime) / this._optionsService.rawOptions.smoothScrollDuration, 1), 0) : 1;
          }
          _clearSmoothScrollState() {
            this._smoothScrollState.startTime = 0, this._smoothScrollState.origin = -1, this._smoothScrollState.target = -1;
          }
          _bubbleScroll(e3, t3) {
            const i3 = this._viewportElement.scrollTop + this._lastRecordedViewportHeight;
            return !(t3 < 0 && 0 !== this._viewportElement.scrollTop || t3 > 0 && i3 < this._lastRecordedBufferHeight) || (e3.cancelable && e3.preventDefault(), false);
          }
          handleWheel(e3) {
            const t3 = this._getPixelsScrolled(e3);
            return 0 !== t3 && (this._optionsService.rawOptions.smoothScrollDuration ? (this._smoothScrollState.startTime = Date.now(), this._smoothScrollPercent() < 1 ? (this._smoothScrollState.origin = this._viewportElement.scrollTop, -1 === this._smoothScrollState.target ? this._smoothScrollState.target = this._viewportElement.scrollTop + t3 : this._smoothScrollState.target += t3, this._smoothScrollState.target = Math.max(Math.min(this._smoothScrollState.target, this._viewportElement.scrollHeight), 0), this._smoothScroll()) : this._clearSmoothScrollState()) : this._viewportElement.scrollTop += t3, this._bubbleScroll(e3, t3));
          }
          scrollLines(e3) {
            if (0 !== e3)
              if (this._optionsService.rawOptions.smoothScrollDuration) {
                const t3 = e3 * this._currentRowHeight;
                this._smoothScrollState.startTime = Date.now(), this._smoothScrollPercent() < 1 ? (this._smoothScrollState.origin = this._viewportElement.scrollTop, this._smoothScrollState.target = this._smoothScrollState.origin + t3, this._smoothScrollState.target = Math.max(Math.min(this._smoothScrollState.target, this._viewportElement.scrollHeight), 0), this._smoothScroll()) : this._clearSmoothScrollState();
              } else
                this._onRequestScrollLines.fire({ amount: e3, suppressScrollEvent: false });
          }
          _getPixelsScrolled(e3) {
            if (0 === e3.deltaY || e3.shiftKey)
              return 0;
            let t3 = this._applyScrollModifier(e3.deltaY, e3);
            return e3.deltaMode === WheelEvent.DOM_DELTA_LINE ? t3 *= this._currentRowHeight : e3.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t3 *= this._currentRowHeight * this._bufferService.rows), t3;
          }
          getBufferElements(e3, t3) {
            let i3, s3 = "";
            const r2 = [], n2 = t3 ?? this._bufferService.buffer.lines.length, o2 = this._bufferService.buffer.lines;
            for (let t4 = e3; t4 < n2; t4++) {
              const e4 = o2.get(t4);
              if (!e4)
                continue;
              const n3 = o2.get(t4 + 1)?.isWrapped;
              if (s3 += e4.translateToString(!n3), !n3 || t4 === o2.length - 1) {
                const e5 = document.createElement("div");
                e5.textContent = s3, r2.push(e5), s3.length > 0 && (i3 = e5), s3 = "";
              }
            }
            return { bufferElements: r2, cursorElement: i3 };
          }
          getLinesScrolled(e3) {
            if (0 === e3.deltaY || e3.shiftKey)
              return 0;
            let t3 = this._applyScrollModifier(e3.deltaY, e3);
            return e3.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (t3 /= this._currentRowHeight + 0, this._wheelPartialScroll += t3, t3 = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e3.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t3 *= this._bufferService.rows), t3;
          }
          _applyScrollModifier(e3, t3) {
            const i3 = this._optionsService.rawOptions.fastScrollModifier;
            return "alt" === i3 && t3.altKey || "ctrl" === i3 && t3.ctrlKey || "shift" === i3 && t3.shiftKey ? e3 * this._optionsService.rawOptions.fastScrollSensitivity * this._optionsService.rawOptions.scrollSensitivity : e3 * this._optionsService.rawOptions.scrollSensitivity;
          }
          handleTouchStart(e3) {
            this._lastTouchY = e3.touches[0].pageY;
          }
          handleTouchMove(e3) {
            const t3 = this._lastTouchY - e3.touches[0].pageY;
            return this._lastTouchY = e3.touches[0].pageY, 0 !== t3 && (this._viewportElement.scrollTop += t3, this._bubbleScroll(e3, t3));
          }
        };
        t2.Viewport = l = s2([r(2, c.IBufferService), r(3, c.IOptionsService), r(4, o.ICharSizeService), r(5, o.IRenderService), r(6, o.ICoreBrowserService), r(7, o.IThemeService)], l);
      }, 3107: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferDecorationRenderer = void 0;
        const n = i2(4725), o = i2(844), a = i2(2585);
        let h = t2.BufferDecorationRenderer = class extends o.Disposable {
          constructor(e3, t3, i3, s3, r2) {
            super(), this._screenElement = e3, this._bufferService = t3, this._coreBrowserService = i3, this._decorationService = s3, this._renderService = r2, this._decorationElements = /* @__PURE__ */ new Map(), this._altBufferIsActive = false, this._dimensionsChanged = false, this._container = document.createElement("div"), this._container.classList.add("xterm-decoration-container"), this._screenElement.appendChild(this._container), this.register(this._renderService.onRenderedViewportChange(() => this._doRefreshDecorations())), this.register(this._renderService.onDimensionsChange(() => {
              this._dimensionsChanged = true, this._queueRefresh();
            })), this.register(this._coreBrowserService.onDprChange(() => this._queueRefresh())), this.register(this._bufferService.buffers.onBufferActivate(() => {
              this._altBufferIsActive = this._bufferService.buffer === this._bufferService.buffers.alt;
            })), this.register(this._decorationService.onDecorationRegistered(() => this._queueRefresh())), this.register(this._decorationService.onDecorationRemoved((e4) => this._removeDecoration(e4))), this.register((0, o.toDisposable)(() => {
              this._container.remove(), this._decorationElements.clear();
            }));
          }
          _queueRefresh() {
            void 0 === this._animationFrame && (this._animationFrame = this._renderService.addRefreshCallback(() => {
              this._doRefreshDecorations(), this._animationFrame = void 0;
            }));
          }
          _doRefreshDecorations() {
            for (const e3 of this._decorationService.decorations)
              this._renderDecoration(e3);
            this._dimensionsChanged = false;
          }
          _renderDecoration(e3) {
            this._refreshStyle(e3), this._dimensionsChanged && this._refreshXPosition(e3);
          }
          _createElement(e3) {
            const t3 = this._coreBrowserService.mainDocument.createElement("div");
            t3.classList.add("xterm-decoration"), t3.classList.toggle("xterm-decoration-top-layer", "top" === e3?.options?.layer), t3.style.width = `${Math.round((e3.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`, t3.style.height = (e3.options.height || 1) * this._renderService.dimensions.css.cell.height + "px", t3.style.top = (e3.marker.line - this._bufferService.buffers.active.ydisp) * this._renderService.dimensions.css.cell.height + "px", t3.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`;
            const i3 = e3.options.x ?? 0;
            return i3 && i3 > this._bufferService.cols && (t3.style.display = "none"), this._refreshXPosition(e3, t3), t3;
          }
          _refreshStyle(e3) {
            const t3 = e3.marker.line - this._bufferService.buffers.active.ydisp;
            if (t3 < 0 || t3 >= this._bufferService.rows)
              e3.element && (e3.element.style.display = "none", e3.onRenderEmitter.fire(e3.element));
            else {
              let i3 = this._decorationElements.get(e3);
              i3 || (i3 = this._createElement(e3), e3.element = i3, this._decorationElements.set(e3, i3), this._container.appendChild(i3), e3.onDispose(() => {
                this._decorationElements.delete(e3), i3.remove();
              })), i3.style.top = t3 * this._renderService.dimensions.css.cell.height + "px", i3.style.display = this._altBufferIsActive ? "none" : "block", e3.onRenderEmitter.fire(i3);
            }
          }
          _refreshXPosition(e3, t3 = e3.element) {
            if (!t3)
              return;
            const i3 = e3.options.x ?? 0;
            "right" === (e3.options.anchor || "left") ? t3.style.right = i3 ? i3 * this._renderService.dimensions.css.cell.width + "px" : "" : t3.style.left = i3 ? i3 * this._renderService.dimensions.css.cell.width + "px" : "";
          }
          _removeDecoration(e3) {
            this._decorationElements.get(e3)?.remove(), this._decorationElements.delete(e3), e3.dispose();
          }
        };
        t2.BufferDecorationRenderer = h = s2([r(1, a.IBufferService), r(2, n.ICoreBrowserService), r(3, a.IDecorationService), r(4, n.IRenderService)], h);
      }, 5871: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ColorZoneStore = void 0, t2.ColorZoneStore = class {
          constructor() {
            this._zones = [], this._zonePool = [], this._zonePoolIndex = 0, this._linePadding = { full: 0, left: 0, center: 0, right: 0 };
          }
          get zones() {
            return this._zonePool.length = Math.min(this._zonePool.length, this._zones.length), this._zones;
          }
          clear() {
            this._zones.length = 0, this._zonePoolIndex = 0;
          }
          addDecoration(e3) {
            if (e3.options.overviewRulerOptions) {
              for (const t3 of this._zones)
                if (t3.color === e3.options.overviewRulerOptions.color && t3.position === e3.options.overviewRulerOptions.position) {
                  if (this._lineIntersectsZone(t3, e3.marker.line))
                    return;
                  if (this._lineAdjacentToZone(t3, e3.marker.line, e3.options.overviewRulerOptions.position))
                    return void this._addLineToZone(t3, e3.marker.line);
                }
              if (this._zonePoolIndex < this._zonePool.length)
                return this._zonePool[this._zonePoolIndex].color = e3.options.overviewRulerOptions.color, this._zonePool[this._zonePoolIndex].position = e3.options.overviewRulerOptions.position, this._zonePool[this._zonePoolIndex].startBufferLine = e3.marker.line, this._zonePool[this._zonePoolIndex].endBufferLine = e3.marker.line, void this._zones.push(this._zonePool[this._zonePoolIndex++]);
              this._zones.push({ color: e3.options.overviewRulerOptions.color, position: e3.options.overviewRulerOptions.position, startBufferLine: e3.marker.line, endBufferLine: e3.marker.line }), this._zonePool.push(this._zones[this._zones.length - 1]), this._zonePoolIndex++;
            }
          }
          setPadding(e3) {
            this._linePadding = e3;
          }
          _lineIntersectsZone(e3, t3) {
            return t3 >= e3.startBufferLine && t3 <= e3.endBufferLine;
          }
          _lineAdjacentToZone(e3, t3, i2) {
            return t3 >= e3.startBufferLine - this._linePadding[i2 || "full"] && t3 <= e3.endBufferLine + this._linePadding[i2 || "full"];
          }
          _addLineToZone(e3, t3) {
            e3.startBufferLine = Math.min(e3.startBufferLine, t3), e3.endBufferLine = Math.max(e3.endBufferLine, t3);
          }
        };
      }, 5744: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.OverviewRulerRenderer = void 0;
        const n = i2(5871), o = i2(4725), a = i2(844), h = i2(2585), c = { full: 0, left: 0, center: 0, right: 0 }, l = { full: 0, left: 0, center: 0, right: 0 }, d = { full: 0, left: 0, center: 0, right: 0 };
        let _ = t2.OverviewRulerRenderer = class extends a.Disposable {
          get _width() {
            return this._optionsService.options.overviewRulerWidth || 0;
          }
          constructor(e3, t3, i3, s3, r2, o2, h2) {
            super(), this._viewportElement = e3, this._screenElement = t3, this._bufferService = i3, this._decorationService = s3, this._renderService = r2, this._optionsService = o2, this._coreBrowserService = h2, this._colorZoneStore = new n.ColorZoneStore(), this._shouldUpdateDimensions = true, this._shouldUpdateAnchor = true, this._lastKnownBufferLength = 0, this._canvas = this._coreBrowserService.mainDocument.createElement("canvas"), this._canvas.classList.add("xterm-decoration-overview-ruler"), this._refreshCanvasDimensions(), this._viewportElement.parentElement?.insertBefore(this._canvas, this._viewportElement);
            const c2 = this._canvas.getContext("2d");
            if (!c2)
              throw new Error("Ctx cannot be null");
            this._ctx = c2, this._registerDecorationListeners(), this._registerBufferChangeListeners(), this._registerDimensionChangeListeners(), this.register((0, a.toDisposable)(() => {
              this._canvas?.remove();
            }));
          }
          _registerDecorationListeners() {
            this.register(this._decorationService.onDecorationRegistered(() => this._queueRefresh(void 0, true))), this.register(this._decorationService.onDecorationRemoved(() => this._queueRefresh(void 0, true)));
          }
          _registerBufferChangeListeners() {
            this.register(this._renderService.onRenderedViewportChange(() => this._queueRefresh())), this.register(this._bufferService.buffers.onBufferActivate(() => {
              this._canvas.style.display = this._bufferService.buffer === this._bufferService.buffers.alt ? "none" : "block";
            })), this.register(this._bufferService.onScroll(() => {
              this._lastKnownBufferLength !== this._bufferService.buffers.normal.lines.length && (this._refreshDrawHeightConstants(), this._refreshColorZonePadding());
            }));
          }
          _registerDimensionChangeListeners() {
            this.register(this._renderService.onRender(() => {
              this._containerHeight && this._containerHeight === this._screenElement.clientHeight || (this._queueRefresh(true), this._containerHeight = this._screenElement.clientHeight);
            })), this.register(this._optionsService.onSpecificOptionChange("overviewRulerWidth", () => this._queueRefresh(true))), this.register(this._coreBrowserService.onDprChange(() => this._queueRefresh(true))), this._queueRefresh(true);
          }
          _refreshDrawConstants() {
            const e3 = Math.floor(this._canvas.width / 3), t3 = Math.ceil(this._canvas.width / 3);
            l.full = this._canvas.width, l.left = e3, l.center = t3, l.right = e3, this._refreshDrawHeightConstants(), d.full = 0, d.left = 0, d.center = l.left, d.right = l.left + l.center;
          }
          _refreshDrawHeightConstants() {
            c.full = Math.round(2 * this._coreBrowserService.dpr);
            const e3 = this._canvas.height / this._bufferService.buffer.lines.length, t3 = Math.round(Math.max(Math.min(e3, 12), 6) * this._coreBrowserService.dpr);
            c.left = t3, c.center = t3, c.right = t3;
          }
          _refreshColorZonePadding() {
            this._colorZoneStore.setPadding({ full: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c.full), left: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c.left), center: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c.center), right: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * c.right) }), this._lastKnownBufferLength = this._bufferService.buffers.normal.lines.length;
          }
          _refreshCanvasDimensions() {
            this._canvas.style.width = `${this._width}px`, this._canvas.width = Math.round(this._width * this._coreBrowserService.dpr), this._canvas.style.height = `${this._screenElement.clientHeight}px`, this._canvas.height = Math.round(this._screenElement.clientHeight * this._coreBrowserService.dpr), this._refreshDrawConstants(), this._refreshColorZonePadding();
          }
          _refreshDecorations() {
            this._shouldUpdateDimensions && this._refreshCanvasDimensions(), this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height), this._colorZoneStore.clear();
            for (const e4 of this._decorationService.decorations)
              this._colorZoneStore.addDecoration(e4);
            this._ctx.lineWidth = 1;
            const e3 = this._colorZoneStore.zones;
            for (const t3 of e3)
              "full" !== t3.position && this._renderColorZone(t3);
            for (const t3 of e3)
              "full" === t3.position && this._renderColorZone(t3);
            this._shouldUpdateDimensions = false, this._shouldUpdateAnchor = false;
          }
          _renderColorZone(e3) {
            this._ctx.fillStyle = e3.color, this._ctx.fillRect(d[e3.position || "full"], Math.round((this._canvas.height - 1) * (e3.startBufferLine / this._bufferService.buffers.active.lines.length) - c[e3.position || "full"] / 2), l[e3.position || "full"], Math.round((this._canvas.height - 1) * ((e3.endBufferLine - e3.startBufferLine) / this._bufferService.buffers.active.lines.length) + c[e3.position || "full"]));
          }
          _queueRefresh(e3, t3) {
            this._shouldUpdateDimensions = e3 || this._shouldUpdateDimensions, this._shouldUpdateAnchor = t3 || this._shouldUpdateAnchor, void 0 === this._animationFrame && (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
              this._refreshDecorations(), this._animationFrame = void 0;
            }));
          }
        };
        t2.OverviewRulerRenderer = _ = s2([r(2, h.IBufferService), r(3, h.IDecorationService), r(4, o.IRenderService), r(5, h.IOptionsService), r(6, o.ICoreBrowserService)], _);
      }, 2950: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CompositionHelper = void 0;
        const n = i2(4725), o = i2(2585), a = i2(2584);
        let h = t2.CompositionHelper = class {
          get isComposing() {
            return this._isComposing;
          }
          constructor(e3, t3, i3, s3, r2, n2) {
            this._textarea = e3, this._compositionView = t3, this._bufferService = i3, this._optionsService = s3, this._coreService = r2, this._renderService = n2, this._isComposing = false, this._isSendingComposition = false, this._compositionPosition = { start: 0, end: 0 }, this._dataAlreadySent = "";
          }
          compositionstart() {
            this._isComposing = true, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._dataAlreadySent = "", this._compositionView.classList.add("active");
          }
          compositionupdate(e3) {
            this._compositionView.textContent = e3.data, this.updateCompositionElements(), setTimeout(() => {
              this._compositionPosition.end = this._textarea.value.length;
            }, 0);
          }
          compositionend() {
            this._finalizeComposition(true);
          }
          keydown(e3) {
            if (this._isComposing || this._isSendingComposition) {
              if (229 === e3.keyCode)
                return false;
              if (16 === e3.keyCode || 17 === e3.keyCode || 18 === e3.keyCode)
                return false;
              this._finalizeComposition(false);
            }
            return 229 !== e3.keyCode || (this._handleAnyTextareaChanges(), false);
          }
          _finalizeComposition(e3) {
            if (this._compositionView.classList.remove("active"), this._isComposing = false, e3) {
              const e4 = { start: this._compositionPosition.start, end: this._compositionPosition.end };
              this._isSendingComposition = true, setTimeout(() => {
                if (this._isSendingComposition) {
                  let t3;
                  this._isSendingComposition = false, e4.start += this._dataAlreadySent.length, t3 = this._isComposing ? this._textarea.value.substring(e4.start, e4.end) : this._textarea.value.substring(e4.start), t3.length > 0 && this._coreService.triggerDataEvent(t3, true);
                }
              }, 0);
            } else {
              this._isSendingComposition = false;
              const e4 = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
              this._coreService.triggerDataEvent(e4, true);
            }
          }
          _handleAnyTextareaChanges() {
            const e3 = this._textarea.value;
            setTimeout(() => {
              if (!this._isComposing) {
                const t3 = this._textarea.value, i3 = t3.replace(e3, "");
                this._dataAlreadySent = i3, t3.length > e3.length ? this._coreService.triggerDataEvent(i3, true) : t3.length < e3.length ? this._coreService.triggerDataEvent(`${a.C0.DEL}`, true) : t3.length === e3.length && t3 !== e3 && this._coreService.triggerDataEvent(t3, true);
              }
            }, 0);
          }
          updateCompositionElements(e3) {
            if (this._isComposing) {
              if (this._bufferService.buffer.isCursorInViewport) {
                const e4 = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), t3 = this._renderService.dimensions.css.cell.height, i3 = this._bufferService.buffer.y * this._renderService.dimensions.css.cell.height, s3 = e4 * this._renderService.dimensions.css.cell.width;
                this._compositionView.style.left = s3 + "px", this._compositionView.style.top = i3 + "px", this._compositionView.style.height = t3 + "px", this._compositionView.style.lineHeight = t3 + "px", this._compositionView.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._compositionView.style.fontSize = this._optionsService.rawOptions.fontSize + "px";
                const r2 = this._compositionView.getBoundingClientRect();
                this._textarea.style.left = s3 + "px", this._textarea.style.top = i3 + "px", this._textarea.style.width = Math.max(r2.width, 1) + "px", this._textarea.style.height = Math.max(r2.height, 1) + "px", this._textarea.style.lineHeight = r2.height + "px";
              }
              e3 || setTimeout(() => this.updateCompositionElements(true), 0);
            }
          }
        };
        t2.CompositionHelper = h = s2([r(2, o.IBufferService), r(3, o.IOptionsService), r(4, o.ICoreService), r(5, n.IRenderService)], h);
      }, 9806: (e2, t2) => {
        function i2(e3, t3, i3) {
          const s2 = i3.getBoundingClientRect(), r = e3.getComputedStyle(i3), n = parseInt(r.getPropertyValue("padding-left")), o = parseInt(r.getPropertyValue("padding-top"));
          return [t3.clientX - s2.left - n, t3.clientY - s2.top - o];
        }
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getCoords = t2.getCoordsRelativeToElement = void 0, t2.getCoordsRelativeToElement = i2, t2.getCoords = function(e3, t3, s2, r, n, o, a, h, c) {
          if (!o)
            return;
          const l = i2(e3, t3, s2);
          return l ? (l[0] = Math.ceil((l[0] + (c ? a / 2 : 0)) / a), l[1] = Math.ceil(l[1] / h), l[0] = Math.min(Math.max(l[0], 1), r + (c ? 1 : 0)), l[1] = Math.min(Math.max(l[1], 1), n), l) : void 0;
        };
      }, 9504: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.moveToCellSequence = void 0;
        const s2 = i2(2584);
        function r(e3, t3, i3, s3) {
          const r2 = e3 - n(e3, i3), a2 = t3 - n(t3, i3), l = Math.abs(r2 - a2) - function(e4, t4, i4) {
            let s4 = 0;
            const r3 = e4 - n(e4, i4), a3 = t4 - n(t4, i4);
            for (let n2 = 0; n2 < Math.abs(r3 - a3); n2++) {
              const a4 = "A" === o(e4, t4) ? -1 : 1, h2 = i4.buffer.lines.get(r3 + a4 * n2);
              h2?.isWrapped && s4++;
            }
            return s4;
          }(e3, t3, i3);
          return c(l, h(o(e3, t3), s3));
        }
        function n(e3, t3) {
          let i3 = 0, s3 = t3.buffer.lines.get(e3), r2 = s3?.isWrapped;
          for (; r2 && e3 >= 0 && e3 < t3.rows; )
            i3++, s3 = t3.buffer.lines.get(--e3), r2 = s3?.isWrapped;
          return i3;
        }
        function o(e3, t3) {
          return e3 > t3 ? "A" : "B";
        }
        function a(e3, t3, i3, s3, r2, n2) {
          let o2 = e3, a2 = t3, h2 = "";
          for (; o2 !== i3 || a2 !== s3; )
            o2 += r2 ? 1 : -1, r2 && o2 > n2.cols - 1 ? (h2 += n2.buffer.translateBufferLineToString(a2, false, e3, o2), o2 = 0, e3 = 0, a2++) : !r2 && o2 < 0 && (h2 += n2.buffer.translateBufferLineToString(a2, false, 0, e3 + 1), o2 = n2.cols - 1, e3 = o2, a2--);
          return h2 + n2.buffer.translateBufferLineToString(a2, false, e3, o2);
        }
        function h(e3, t3) {
          const i3 = t3 ? "O" : "[";
          return s2.C0.ESC + i3 + e3;
        }
        function c(e3, t3) {
          e3 = Math.floor(e3);
          let i3 = "";
          for (let s3 = 0; s3 < e3; s3++)
            i3 += t3;
          return i3;
        }
        t2.moveToCellSequence = function(e3, t3, i3, s3) {
          const o2 = i3.buffer.x, l = i3.buffer.y;
          if (!i3.buffer.hasScrollback)
            return function(e4, t4, i4, s4, o3, l2) {
              return 0 === r(t4, s4, o3, l2).length ? "" : c(a(e4, t4, e4, t4 - n(t4, o3), false, o3).length, h("D", l2));
            }(o2, l, 0, t3, i3, s3) + r(l, t3, i3, s3) + function(e4, t4, i4, s4, o3, l2) {
              let d2;
              d2 = r(t4, s4, o3, l2).length > 0 ? s4 - n(s4, o3) : t4;
              const _2 = s4, u = function(e5, t5, i5, s5, o4, a2) {
                let h2;
                return h2 = r(i5, s5, o4, a2).length > 0 ? s5 - n(s5, o4) : t5, e5 < i5 && h2 <= s5 || e5 >= i5 && h2 < s5 ? "C" : "D";
              }(e4, t4, i4, s4, o3, l2);
              return c(a(e4, d2, i4, _2, "C" === u, o3).length, h(u, l2));
            }(o2, l, e3, t3, i3, s3);
          let d;
          if (l === t3)
            return d = o2 > e3 ? "D" : "C", c(Math.abs(o2 - e3), h(d, s3));
          d = l > t3 ? "D" : "C";
          const _ = Math.abs(l - t3);
          return c(function(e4, t4) {
            return t4.cols - e4;
          }(l > t3 ? e3 : o2, i3) + (_ - 1) * i3.cols + 1 + ((l > t3 ? o2 : e3) - 1), h(d, s3));
        };
      }, 1296: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.DomRenderer = void 0;
        const n = i2(3787), o = i2(2550), a = i2(2223), h = i2(6171), c = i2(6052), l = i2(4725), d = i2(8055), _ = i2(8460), u = i2(844), f = i2(2585), v = "xterm-dom-renderer-owner-", p = "xterm-rows", g = "xterm-fg-", m = "xterm-bg-", S = "xterm-focus", C = "xterm-selection";
        let b = 1, w = t2.DomRenderer = class extends u.Disposable {
          constructor(e3, t3, i3, s3, r2, a2, l2, d2, f2, g2, m2, S2, w2) {
            super(), this._terminal = e3, this._document = t3, this._element = i3, this._screenElement = s3, this._viewportElement = r2, this._helperContainer = a2, this._linkifier2 = l2, this._charSizeService = f2, this._optionsService = g2, this._bufferService = m2, this._coreBrowserService = S2, this._themeService = w2, this._terminalClass = b++, this._rowElements = [], this._selectionRenderModel = (0, c.createSelectionRenderModel)(), this.onRequestRedraw = this.register(new _.EventEmitter()).event, this._rowContainer = this._document.createElement("div"), this._rowContainer.classList.add(p), this._rowContainer.style.lineHeight = "normal", this._rowContainer.setAttribute("aria-hidden", "true"), this._refreshRowElements(this._bufferService.cols, this._bufferService.rows), this._selectionContainer = this._document.createElement("div"), this._selectionContainer.classList.add(C), this._selectionContainer.setAttribute("aria-hidden", "true"), this.dimensions = (0, h.createRenderDimensions)(), this._updateDimensions(), this.register(this._optionsService.onOptionChange(() => this._handleOptionsChanged())), this.register(this._themeService.onChangeColors((e4) => this._injectCss(e4))), this._injectCss(this._themeService.colors), this._rowFactory = d2.createInstance(n.DomRendererRowFactory, document), this._element.classList.add(v + this._terminalClass), this._screenElement.appendChild(this._rowContainer), this._screenElement.appendChild(this._selectionContainer), this.register(this._linkifier2.onShowLinkUnderline((e4) => this._handleLinkHover(e4))), this.register(this._linkifier2.onHideLinkUnderline((e4) => this._handleLinkLeave(e4))), this.register((0, u.toDisposable)(() => {
              this._element.classList.remove(v + this._terminalClass), this._rowContainer.remove(), this._selectionContainer.remove(), this._widthCache.dispose(), this._themeStyleElement.remove(), this._dimensionsStyleElement.remove();
            })), this._widthCache = new o.WidthCache(this._document, this._helperContainer), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
          }
          _updateDimensions() {
            const e3 = this._coreBrowserService.dpr;
            this.dimensions.device.char.width = this._charSizeService.width * e3, this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * e3), this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight), this.dimensions.device.char.left = 0, this.dimensions.device.char.top = 0, this.dimensions.device.canvas.width = this.dimensions.device.cell.width * this._bufferService.cols, this.dimensions.device.canvas.height = this.dimensions.device.cell.height * this._bufferService.rows, this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / e3), this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / e3), this.dimensions.css.cell.width = this.dimensions.css.canvas.width / this._bufferService.cols, this.dimensions.css.cell.height = this.dimensions.css.canvas.height / this._bufferService.rows;
            for (const e4 of this._rowElements)
              e4.style.width = `${this.dimensions.css.canvas.width}px`, e4.style.height = `${this.dimensions.css.cell.height}px`, e4.style.lineHeight = `${this.dimensions.css.cell.height}px`, e4.style.overflow = "hidden";
            this._dimensionsStyleElement || (this._dimensionsStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
            const t3 = `${this._terminalSelector} .${p} span { display: inline-block; height: 100%; vertical-align: top;}`;
            this._dimensionsStyleElement.textContent = t3, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = `${this.dimensions.css.canvas.width}px`, this._screenElement.style.height = `${this.dimensions.css.canvas.height}px`;
          }
          _injectCss(e3) {
            this._themeStyleElement || (this._themeStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
            let t3 = `${this._terminalSelector} .${p} { color: ${e3.foreground.css}; font-family: ${this._optionsService.rawOptions.fontFamily}; font-size: ${this._optionsService.rawOptions.fontSize}px; font-kerning: none; white-space: pre}`;
            t3 += `${this._terminalSelector} .${p} .xterm-dim { color: ${d.color.multiplyOpacity(e3.foreground, 0.5).css};}`, t3 += `${this._terminalSelector} span:not(.xterm-bold) { font-weight: ${this._optionsService.rawOptions.fontWeight};}${this._terminalSelector} span.xterm-bold { font-weight: ${this._optionsService.rawOptions.fontWeightBold};}${this._terminalSelector} span.xterm-italic { font-style: italic;}`;
            const i3 = `blink_underline_${this._terminalClass}`, s3 = `blink_bar_${this._terminalClass}`, r2 = `blink_block_${this._terminalClass}`;
            t3 += `@keyframes ${i3} { 50% {  border-bottom-style: hidden; }}`, t3 += `@keyframes ${s3} { 50% {  box-shadow: none; }}`, t3 += `@keyframes ${r2} { 0% {  background-color: ${e3.cursor.css};  color: ${e3.cursorAccent.css}; } 50% {  background-color: inherit;  color: ${e3.cursor.css}; }}`, t3 += `${this._terminalSelector} .${p}.${S} .xterm-cursor.xterm-cursor-blink.xterm-cursor-underline { animation: ${i3} 1s step-end infinite;}${this._terminalSelector} .${p}.${S} .xterm-cursor.xterm-cursor-blink.xterm-cursor-bar { animation: ${s3} 1s step-end infinite;}${this._terminalSelector} .${p}.${S} .xterm-cursor.xterm-cursor-blink.xterm-cursor-block { animation: ${r2} 1s step-end infinite;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-block { background-color: ${e3.cursor.css}; color: ${e3.cursorAccent.css};}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-block:not(.xterm-cursor-blink) { background-color: ${e3.cursor.css} !important; color: ${e3.cursorAccent.css} !important;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-outline { outline: 1px solid ${e3.cursor.css}; outline-offset: -1px;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-bar { box-shadow: ${this._optionsService.rawOptions.cursorWidth}px 0 0 ${e3.cursor.css} inset;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-underline { border-bottom: 1px ${e3.cursor.css}; border-bottom-style: solid; height: calc(100% - 1px);}`, t3 += `${this._terminalSelector} .${C} { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}${this._terminalSelector}.focus .${C} div { position: absolute; background-color: ${e3.selectionBackgroundOpaque.css};}${this._terminalSelector} .${C} div { position: absolute; background-color: ${e3.selectionInactiveBackgroundOpaque.css};}`;
            for (const [i4, s4] of e3.ansi.entries())
              t3 += `${this._terminalSelector} .${g}${i4} { color: ${s4.css}; }${this._terminalSelector} .${g}${i4}.xterm-dim { color: ${d.color.multiplyOpacity(s4, 0.5).css}; }${this._terminalSelector} .${m}${i4} { background-color: ${s4.css}; }`;
            t3 += `${this._terminalSelector} .${g}${a.INVERTED_DEFAULT_COLOR} { color: ${d.color.opaque(e3.background).css}; }${this._terminalSelector} .${g}${a.INVERTED_DEFAULT_COLOR}.xterm-dim { color: ${d.color.multiplyOpacity(d.color.opaque(e3.background), 0.5).css}; }${this._terminalSelector} .${m}${a.INVERTED_DEFAULT_COLOR} { background-color: ${e3.foreground.css}; }`, this._themeStyleElement.textContent = t3;
          }
          _setDefaultSpacing() {
            const e3 = this.dimensions.css.cell.width - this._widthCache.get("W", false, false);
            this._rowContainer.style.letterSpacing = `${e3}px`, this._rowFactory.defaultSpacing = e3;
          }
          handleDevicePixelRatioChange() {
            this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
          }
          _refreshRowElements(e3, t3) {
            for (let e4 = this._rowElements.length; e4 <= t3; e4++) {
              const e5 = this._document.createElement("div");
              this._rowContainer.appendChild(e5), this._rowElements.push(e5);
            }
            for (; this._rowElements.length > t3; )
              this._rowContainer.removeChild(this._rowElements.pop());
          }
          handleResize(e3, t3) {
            this._refreshRowElements(e3, t3), this._updateDimensions(), this.handleSelectionChanged(this._selectionRenderModel.selectionStart, this._selectionRenderModel.selectionEnd, this._selectionRenderModel.columnSelectMode);
          }
          handleCharSizeChanged() {
            this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
          }
          handleBlur() {
            this._rowContainer.classList.remove(S), this.renderRows(0, this._bufferService.rows - 1);
          }
          handleFocus() {
            this._rowContainer.classList.add(S), this.renderRows(this._bufferService.buffer.y, this._bufferService.buffer.y);
          }
          handleSelectionChanged(e3, t3, i3) {
            if (this._selectionContainer.replaceChildren(), this._rowFactory.handleSelectionChanged(e3, t3, i3), this.renderRows(0, this._bufferService.rows - 1), !e3 || !t3)
              return;
            this._selectionRenderModel.update(this._terminal, e3, t3, i3);
            const s3 = this._selectionRenderModel.viewportStartRow, r2 = this._selectionRenderModel.viewportEndRow, n2 = this._selectionRenderModel.viewportCappedStartRow, o2 = this._selectionRenderModel.viewportCappedEndRow;
            if (n2 >= this._bufferService.rows || o2 < 0)
              return;
            const a2 = this._document.createDocumentFragment();
            if (i3) {
              const i4 = e3[0] > t3[0];
              a2.appendChild(this._createSelectionElement(n2, i4 ? t3[0] : e3[0], i4 ? e3[0] : t3[0], o2 - n2 + 1));
            } else {
              const i4 = s3 === n2 ? e3[0] : 0, h2 = n2 === r2 ? t3[0] : this._bufferService.cols;
              a2.appendChild(this._createSelectionElement(n2, i4, h2));
              const c2 = o2 - n2 - 1;
              if (a2.appendChild(this._createSelectionElement(n2 + 1, 0, this._bufferService.cols, c2)), n2 !== o2) {
                const e4 = r2 === o2 ? t3[0] : this._bufferService.cols;
                a2.appendChild(this._createSelectionElement(o2, 0, e4));
              }
            }
            this._selectionContainer.appendChild(a2);
          }
          _createSelectionElement(e3, t3, i3, s3 = 1) {
            const r2 = this._document.createElement("div"), n2 = t3 * this.dimensions.css.cell.width;
            let o2 = this.dimensions.css.cell.width * (i3 - t3);
            return n2 + o2 > this.dimensions.css.canvas.width && (o2 = this.dimensions.css.canvas.width - n2), r2.style.height = s3 * this.dimensions.css.cell.height + "px", r2.style.top = e3 * this.dimensions.css.cell.height + "px", r2.style.left = `${n2}px`, r2.style.width = `${o2}px`, r2;
          }
          handleCursorMove() {
          }
          _handleOptionsChanged() {
            this._updateDimensions(), this._injectCss(this._themeService.colors), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
          }
          clear() {
            for (const e3 of this._rowElements)
              e3.replaceChildren();
          }
          renderRows(e3, t3) {
            const i3 = this._bufferService.buffer, s3 = i3.ybase + i3.y, r2 = Math.min(i3.x, this._bufferService.cols - 1), n2 = this._optionsService.rawOptions.cursorBlink, o2 = this._optionsService.rawOptions.cursorStyle, a2 = this._optionsService.rawOptions.cursorInactiveStyle;
            for (let h2 = e3; h2 <= t3; h2++) {
              const e4 = h2 + i3.ydisp, t4 = this._rowElements[h2], c2 = i3.lines.get(e4);
              if (!t4 || !c2)
                break;
              t4.replaceChildren(...this._rowFactory.createRow(c2, e4, e4 === s3, o2, a2, r2, n2, this.dimensions.css.cell.width, this._widthCache, -1, -1));
            }
          }
          get _terminalSelector() {
            return `.${v}${this._terminalClass}`;
          }
          _handleLinkHover(e3) {
            this._setCellUnderline(e3.x1, e3.x2, e3.y1, e3.y2, e3.cols, true);
          }
          _handleLinkLeave(e3) {
            this._setCellUnderline(e3.x1, e3.x2, e3.y1, e3.y2, e3.cols, false);
          }
          _setCellUnderline(e3, t3, i3, s3, r2, n2) {
            i3 < 0 && (e3 = 0), s3 < 0 && (t3 = 0);
            const o2 = this._bufferService.rows - 1;
            i3 = Math.max(Math.min(i3, o2), 0), s3 = Math.max(Math.min(s3, o2), 0), r2 = Math.min(r2, this._bufferService.cols);
            const a2 = this._bufferService.buffer, h2 = a2.ybase + a2.y, c2 = Math.min(a2.x, r2 - 1), l2 = this._optionsService.rawOptions.cursorBlink, d2 = this._optionsService.rawOptions.cursorStyle, _2 = this._optionsService.rawOptions.cursorInactiveStyle;
            for (let o3 = i3; o3 <= s3; ++o3) {
              const u2 = o3 + a2.ydisp, f2 = this._rowElements[o3], v2 = a2.lines.get(u2);
              if (!f2 || !v2)
                break;
              f2.replaceChildren(...this._rowFactory.createRow(v2, u2, u2 === h2, d2, _2, c2, l2, this.dimensions.css.cell.width, this._widthCache, n2 ? o3 === i3 ? e3 : 0 : -1, n2 ? (o3 === s3 ? t3 : r2) - 1 : -1));
            }
          }
        };
        t2.DomRenderer = w = s2([r(7, f.IInstantiationService), r(8, l.ICharSizeService), r(9, f.IOptionsService), r(10, f.IBufferService), r(11, l.ICoreBrowserService), r(12, l.IThemeService)], w);
      }, 3787: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.DomRendererRowFactory = void 0;
        const n = i2(2223), o = i2(643), a = i2(511), h = i2(2585), c = i2(8055), l = i2(4725), d = i2(4269), _ = i2(6171), u = i2(3734);
        let f = t2.DomRendererRowFactory = class {
          constructor(e3, t3, i3, s3, r2, n2, o2) {
            this._document = e3, this._characterJoinerService = t3, this._optionsService = i3, this._coreBrowserService = s3, this._coreService = r2, this._decorationService = n2, this._themeService = o2, this._workCell = new a.CellData(), this._columnSelectMode = false, this.defaultSpacing = 0;
          }
          handleSelectionChanged(e3, t3, i3) {
            this._selectionStart = e3, this._selectionEnd = t3, this._columnSelectMode = i3;
          }
          createRow(e3, t3, i3, s3, r2, a2, h2, l2, _2, f2, p) {
            const g = [], m = this._characterJoinerService.getJoinedCharacters(t3), S = this._themeService.colors;
            let C, b = e3.getNoBgTrimmedLength();
            i3 && b < a2 + 1 && (b = a2 + 1);
            let w = 0, y = "", E = 0, k = 0, L = 0, D = false, R = 0, x = false, A = 0;
            const B = [], T = -1 !== f2 && -1 !== p;
            for (let M = 0; M < b; M++) {
              e3.loadCell(M, this._workCell);
              let b2 = this._workCell.getWidth();
              if (0 === b2)
                continue;
              let O = false, P = M, I = this._workCell;
              if (m.length > 0 && M === m[0][0]) {
                O = true;
                const t4 = m.shift();
                I = new d.JoinedCellData(this._workCell, e3.translateToString(true, t4[0], t4[1]), t4[1] - t4[0]), P = t4[1] - 1, b2 = I.getWidth();
              }
              const H = this._isCellInSelection(M, t3), F = i3 && M === a2, W = T && M >= f2 && M <= p;
              let U = false;
              this._decorationService.forEachDecorationAtCell(M, t3, void 0, (e4) => {
                U = true;
              });
              let N = I.getChars() || o.WHITESPACE_CELL_CHAR;
              if (" " === N && (I.isUnderline() || I.isOverline()) && (N = "\xA0"), A = b2 * l2 - _2.get(N, I.isBold(), I.isItalic()), C) {
                if (w && (H && x || !H && !x && I.bg === E) && (H && x && S.selectionForeground || I.fg === k) && I.extended.ext === L && W === D && A === R && !F && !O && !U) {
                  I.isInvisible() ? y += o.WHITESPACE_CELL_CHAR : y += N, w++;
                  continue;
                }
                w && (C.textContent = y), C = this._document.createElement("span"), w = 0, y = "";
              } else
                C = this._document.createElement("span");
              if (E = I.bg, k = I.fg, L = I.extended.ext, D = W, R = A, x = H, O && a2 >= M && a2 <= P && (a2 = M), !this._coreService.isCursorHidden && F && this._coreService.isCursorInitialized) {
                if (B.push("xterm-cursor"), this._coreBrowserService.isFocused)
                  h2 && B.push("xterm-cursor-blink"), B.push("bar" === s3 ? "xterm-cursor-bar" : "underline" === s3 ? "xterm-cursor-underline" : "xterm-cursor-block");
                else if (r2)
                  switch (r2) {
                    case "outline":
                      B.push("xterm-cursor-outline");
                      break;
                    case "block":
                      B.push("xterm-cursor-block");
                      break;
                    case "bar":
                      B.push("xterm-cursor-bar");
                      break;
                    case "underline":
                      B.push("xterm-cursor-underline");
                  }
              }
              if (I.isBold() && B.push("xterm-bold"), I.isItalic() && B.push("xterm-italic"), I.isDim() && B.push("xterm-dim"), y = I.isInvisible() ? o.WHITESPACE_CELL_CHAR : I.getChars() || o.WHITESPACE_CELL_CHAR, I.isUnderline() && (B.push(`xterm-underline-${I.extended.underlineStyle}`), " " === y && (y = "\xA0"), !I.isUnderlineColorDefault()))
                if (I.isUnderlineColorRGB())
                  C.style.textDecorationColor = `rgb(${u.AttributeData.toColorRGB(I.getUnderlineColor()).join(",")})`;
                else {
                  let e4 = I.getUnderlineColor();
                  this._optionsService.rawOptions.drawBoldTextInBrightColors && I.isBold() && e4 < 8 && (e4 += 8), C.style.textDecorationColor = S.ansi[e4].css;
                }
              I.isOverline() && (B.push("xterm-overline"), " " === y && (y = "\xA0")), I.isStrikethrough() && B.push("xterm-strikethrough"), W && (C.style.textDecoration = "underline");
              let $ = I.getFgColor(), j = I.getFgColorMode(), z = I.getBgColor(), K = I.getBgColorMode();
              const q = !!I.isInverse();
              if (q) {
                const e4 = $;
                $ = z, z = e4;
                const t4 = j;
                j = K, K = t4;
              }
              let V, G, X, J = false;
              switch (this._decorationService.forEachDecorationAtCell(M, t3, void 0, (e4) => {
                "top" !== e4.options.layer && J || (e4.backgroundColorRGB && (K = 50331648, z = e4.backgroundColorRGB.rgba >> 8 & 16777215, V = e4.backgroundColorRGB), e4.foregroundColorRGB && (j = 50331648, $ = e4.foregroundColorRGB.rgba >> 8 & 16777215, G = e4.foregroundColorRGB), J = "top" === e4.options.layer);
              }), !J && H && (V = this._coreBrowserService.isFocused ? S.selectionBackgroundOpaque : S.selectionInactiveBackgroundOpaque, z = V.rgba >> 8 & 16777215, K = 50331648, J = true, S.selectionForeground && (j = 50331648, $ = S.selectionForeground.rgba >> 8 & 16777215, G = S.selectionForeground)), J && B.push("xterm-decoration-top"), K) {
                case 16777216:
                case 33554432:
                  X = S.ansi[z], B.push(`xterm-bg-${z}`);
                  break;
                case 50331648:
                  X = c.channels.toColor(z >> 16, z >> 8 & 255, 255 & z), this._addStyle(C, `background-color:#${v((z >>> 0).toString(16), "0", 6)}`);
                  break;
                default:
                  q ? (X = S.foreground, B.push(`xterm-bg-${n.INVERTED_DEFAULT_COLOR}`)) : X = S.background;
              }
              switch (V || I.isDim() && (V = c.color.multiplyOpacity(X, 0.5)), j) {
                case 16777216:
                case 33554432:
                  I.isBold() && $ < 8 && this._optionsService.rawOptions.drawBoldTextInBrightColors && ($ += 8), this._applyMinimumContrast(C, X, S.ansi[$], I, V, void 0) || B.push(`xterm-fg-${$}`);
                  break;
                case 50331648:
                  const e4 = c.channels.toColor($ >> 16 & 255, $ >> 8 & 255, 255 & $);
                  this._applyMinimumContrast(C, X, e4, I, V, G) || this._addStyle(C, `color:#${v($.toString(16), "0", 6)}`);
                  break;
                default:
                  this._applyMinimumContrast(C, X, S.foreground, I, V, G) || q && B.push(`xterm-fg-${n.INVERTED_DEFAULT_COLOR}`);
              }
              B.length && (C.className = B.join(" "), B.length = 0), F || O || U ? C.textContent = y : w++, A !== this.defaultSpacing && (C.style.letterSpacing = `${A}px`), g.push(C), M = P;
            }
            return C && w && (C.textContent = y), g;
          }
          _applyMinimumContrast(e3, t3, i3, s3, r2, n2) {
            if (1 === this._optionsService.rawOptions.minimumContrastRatio || (0, _.treatGlyphAsBackgroundColor)(s3.getCode()))
              return false;
            const o2 = this._getContrastCache(s3);
            let a2;
            if (r2 || n2 || (a2 = o2.getColor(t3.rgba, i3.rgba)), void 0 === a2) {
              const e4 = this._optionsService.rawOptions.minimumContrastRatio / (s3.isDim() ? 2 : 1);
              a2 = c.color.ensureContrastRatio(r2 || t3, n2 || i3, e4), o2.setColor((r2 || t3).rgba, (n2 || i3).rgba, a2 ?? null);
            }
            return !!a2 && (this._addStyle(e3, `color:${a2.css}`), true);
          }
          _getContrastCache(e3) {
            return e3.isDim() ? this._themeService.colors.halfContrastCache : this._themeService.colors.contrastCache;
          }
          _addStyle(e3, t3) {
            e3.setAttribute("style", `${e3.getAttribute("style") || ""}${t3};`);
          }
          _isCellInSelection(e3, t3) {
            const i3 = this._selectionStart, s3 = this._selectionEnd;
            return !(!i3 || !s3) && (this._columnSelectMode ? i3[0] <= s3[0] ? e3 >= i3[0] && t3 >= i3[1] && e3 < s3[0] && t3 <= s3[1] : e3 < i3[0] && t3 >= i3[1] && e3 >= s3[0] && t3 <= s3[1] : t3 > i3[1] && t3 < s3[1] || i3[1] === s3[1] && t3 === i3[1] && e3 >= i3[0] && e3 < s3[0] || i3[1] < s3[1] && t3 === s3[1] && e3 < s3[0] || i3[1] < s3[1] && t3 === i3[1] && e3 >= i3[0]);
          }
        };
        function v(e3, t3, i3) {
          for (; e3.length < i3; )
            e3 = t3 + e3;
          return e3;
        }
        t2.DomRendererRowFactory = f = s2([r(1, l.ICharacterJoinerService), r(2, h.IOptionsService), r(3, l.ICoreBrowserService), r(4, h.ICoreService), r(5, h.IDecorationService), r(6, l.IThemeService)], f);
      }, 2550: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.WidthCache = void 0, t2.WidthCache = class {
          constructor(e3, t3) {
            this._flat = new Float32Array(256), this._font = "", this._fontSize = 0, this._weight = "normal", this._weightBold = "bold", this._measureElements = [], this._container = e3.createElement("div"), this._container.classList.add("xterm-width-cache-measure-container"), this._container.setAttribute("aria-hidden", "true"), this._container.style.whiteSpace = "pre", this._container.style.fontKerning = "none";
            const i2 = e3.createElement("span");
            i2.classList.add("xterm-char-measure-element");
            const s2 = e3.createElement("span");
            s2.classList.add("xterm-char-measure-element"), s2.style.fontWeight = "bold";
            const r = e3.createElement("span");
            r.classList.add("xterm-char-measure-element"), r.style.fontStyle = "italic";
            const n = e3.createElement("span");
            n.classList.add("xterm-char-measure-element"), n.style.fontWeight = "bold", n.style.fontStyle = "italic", this._measureElements = [i2, s2, r, n], this._container.appendChild(i2), this._container.appendChild(s2), this._container.appendChild(r), this._container.appendChild(n), t3.appendChild(this._container), this.clear();
          }
          dispose() {
            this._container.remove(), this._measureElements.length = 0, this._holey = void 0;
          }
          clear() {
            this._flat.fill(-9999), this._holey = /* @__PURE__ */ new Map();
          }
          setFont(e3, t3, i2, s2) {
            e3 === this._font && t3 === this._fontSize && i2 === this._weight && s2 === this._weightBold || (this._font = e3, this._fontSize = t3, this._weight = i2, this._weightBold = s2, this._container.style.fontFamily = this._font, this._container.style.fontSize = `${this._fontSize}px`, this._measureElements[0].style.fontWeight = `${i2}`, this._measureElements[1].style.fontWeight = `${s2}`, this._measureElements[2].style.fontWeight = `${i2}`, this._measureElements[3].style.fontWeight = `${s2}`, this.clear());
          }
          get(e3, t3, i2) {
            let s2 = 0;
            if (!t3 && !i2 && 1 === e3.length && (s2 = e3.charCodeAt(0)) < 256) {
              if (-9999 !== this._flat[s2])
                return this._flat[s2];
              const t4 = this._measure(e3, 0);
              return t4 > 0 && (this._flat[s2] = t4), t4;
            }
            let r = e3;
            t3 && (r += "B"), i2 && (r += "I");
            let n = this._holey.get(r);
            if (void 0 === n) {
              let s3 = 0;
              t3 && (s3 |= 1), i2 && (s3 |= 2), n = this._measure(e3, s3), n > 0 && this._holey.set(r, n);
            }
            return n;
          }
          _measure(e3, t3) {
            const i2 = this._measureElements[t3];
            return i2.textContent = e3.repeat(32), i2.offsetWidth / 32;
          }
        };
      }, 2223: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.TEXT_BASELINE = t2.DIM_OPACITY = t2.INVERTED_DEFAULT_COLOR = void 0;
        const s2 = i2(6114);
        t2.INVERTED_DEFAULT_COLOR = 257, t2.DIM_OPACITY = 0.5, t2.TEXT_BASELINE = s2.isFirefox || s2.isLegacyEdge ? "bottom" : "ideographic";
      }, 6171: (e2, t2) => {
        function i2(e3) {
          return 57508 <= e3 && e3 <= 57558;
        }
        function s2(e3) {
          return e3 >= 128512 && e3 <= 128591 || e3 >= 127744 && e3 <= 128511 || e3 >= 128640 && e3 <= 128767 || e3 >= 9728 && e3 <= 9983 || e3 >= 9984 && e3 <= 10175 || e3 >= 65024 && e3 <= 65039 || e3 >= 129280 && e3 <= 129535 || e3 >= 127462 && e3 <= 127487;
        }
        Object.defineProperty(t2, "__esModule", { value: true }), t2.computeNextVariantOffset = t2.createRenderDimensions = t2.treatGlyphAsBackgroundColor = t2.allowRescaling = t2.isEmoji = t2.isRestrictedPowerlineGlyph = t2.isPowerlineGlyph = t2.throwIfFalsy = void 0, t2.throwIfFalsy = function(e3) {
          if (!e3)
            throw new Error("value must not be falsy");
          return e3;
        }, t2.isPowerlineGlyph = i2, t2.isRestrictedPowerlineGlyph = function(e3) {
          return 57520 <= e3 && e3 <= 57527;
        }, t2.isEmoji = s2, t2.allowRescaling = function(e3, t3, r, n) {
          return 1 === t3 && r > Math.ceil(1.5 * n) && void 0 !== e3 && e3 > 255 && !s2(e3) && !i2(e3) && !function(e4) {
            return 57344 <= e4 && e4 <= 63743;
          }(e3);
        }, t2.treatGlyphAsBackgroundColor = function(e3) {
          return i2(e3) || function(e4) {
            return 9472 <= e4 && e4 <= 9631;
          }(e3);
        }, t2.createRenderDimensions = function() {
          return { css: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 } }, device: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 }, char: { width: 0, height: 0, left: 0, top: 0 } } };
        }, t2.computeNextVariantOffset = function(e3, t3, i3 = 0) {
          return (e3 - (2 * Math.round(t3) - i3)) % (2 * Math.round(t3));
        };
      }, 6052: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.createSelectionRenderModel = void 0;
        class i2 {
          constructor() {
            this.clear();
          }
          clear() {
            this.hasSelection = false, this.columnSelectMode = false, this.viewportStartRow = 0, this.viewportEndRow = 0, this.viewportCappedStartRow = 0, this.viewportCappedEndRow = 0, this.startCol = 0, this.endCol = 0, this.selectionStart = void 0, this.selectionEnd = void 0;
          }
          update(e3, t3, i3, s2 = false) {
            if (this.selectionStart = t3, this.selectionEnd = i3, !t3 || !i3 || t3[0] === i3[0] && t3[1] === i3[1])
              return void this.clear();
            const r = e3.buffers.active.ydisp, n = t3[1] - r, o = i3[1] - r, a = Math.max(n, 0), h = Math.min(o, e3.rows - 1);
            a >= e3.rows || h < 0 ? this.clear() : (this.hasSelection = true, this.columnSelectMode = s2, this.viewportStartRow = n, this.viewportEndRow = o, this.viewportCappedStartRow = a, this.viewportCappedEndRow = h, this.startCol = t3[0], this.endCol = i3[0]);
          }
          isCellSelected(e3, t3, i3) {
            return !!this.hasSelection && (i3 -= e3.buffer.active.viewportY, this.columnSelectMode ? this.startCol <= this.endCol ? t3 >= this.startCol && i3 >= this.viewportCappedStartRow && t3 < this.endCol && i3 <= this.viewportCappedEndRow : t3 < this.startCol && i3 >= this.viewportCappedStartRow && t3 >= this.endCol && i3 <= this.viewportCappedEndRow : i3 > this.viewportStartRow && i3 < this.viewportEndRow || this.viewportStartRow === this.viewportEndRow && i3 === this.viewportStartRow && t3 >= this.startCol && t3 < this.endCol || this.viewportStartRow < this.viewportEndRow && i3 === this.viewportEndRow && t3 < this.endCol || this.viewportStartRow < this.viewportEndRow && i3 === this.viewportStartRow && t3 >= this.startCol);
          }
        }
        t2.createSelectionRenderModel = function() {
          return new i2();
        };
      }, 456: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.SelectionModel = void 0, t2.SelectionModel = class {
          constructor(e3) {
            this._bufferService = e3, this.isSelectAllActive = false, this.selectionStartLength = 0;
          }
          clearSelection() {
            this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = false, this.selectionStartLength = 0;
          }
          get finalSelectionStart() {
            return this.isSelectAllActive ? [0, 0] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
          }
          get finalSelectionEnd() {
            if (this.isSelectAllActive)
              return [this._bufferService.cols, this._bufferService.buffer.ybase + this._bufferService.rows - 1];
            if (this.selectionStart) {
              if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                const e3 = this.selectionStart[0] + this.selectionStartLength;
                return e3 > this._bufferService.cols ? e3 % this._bufferService.cols == 0 ? [this._bufferService.cols, this.selectionStart[1] + Math.floor(e3 / this._bufferService.cols) - 1] : [e3 % this._bufferService.cols, this.selectionStart[1] + Math.floor(e3 / this._bufferService.cols)] : [e3, this.selectionStart[1]];
              }
              if (this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1]) {
                const e3 = this.selectionStart[0] + this.selectionStartLength;
                return e3 > this._bufferService.cols ? [e3 % this._bufferService.cols, this.selectionStart[1] + Math.floor(e3 / this._bufferService.cols)] : [Math.max(e3, this.selectionEnd[0]), this.selectionEnd[1]];
              }
              return this.selectionEnd;
            }
          }
          areSelectionValuesReversed() {
            const e3 = this.selectionStart, t3 = this.selectionEnd;
            return !(!e3 || !t3) && (e3[1] > t3[1] || e3[1] === t3[1] && e3[0] > t3[0]);
          }
          handleTrim(e3) {
            return this.selectionStart && (this.selectionStart[1] -= e3), this.selectionEnd && (this.selectionEnd[1] -= e3), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), true) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), false);
          }
        };
      }, 428: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CharSizeService = void 0;
        const n = i2(2585), o = i2(8460), a = i2(844);
        let h = t2.CharSizeService = class extends a.Disposable {
          get hasValidSize() {
            return this.width > 0 && this.height > 0;
          }
          constructor(e3, t3, i3) {
            super(), this._optionsService = i3, this.width = 0, this.height = 0, this._onCharSizeChange = this.register(new o.EventEmitter()), this.onCharSizeChange = this._onCharSizeChange.event;
            try {
              this._measureStrategy = this.register(new d(this._optionsService));
            } catch {
              this._measureStrategy = this.register(new l(e3, t3, this._optionsService));
            }
            this.register(this._optionsService.onMultipleOptionChange(["fontFamily", "fontSize"], () => this.measure()));
          }
          measure() {
            const e3 = this._measureStrategy.measure();
            e3.width === this.width && e3.height === this.height || (this.width = e3.width, this.height = e3.height, this._onCharSizeChange.fire());
          }
        };
        t2.CharSizeService = h = s2([r(2, n.IOptionsService)], h);
        class c extends a.Disposable {
          constructor() {
            super(...arguments), this._result = { width: 0, height: 0 };
          }
          _validateAndSet(e3, t3) {
            void 0 !== e3 && e3 > 0 && void 0 !== t3 && t3 > 0 && (this._result.width = e3, this._result.height = t3);
          }
        }
        class l extends c {
          constructor(e3, t3, i3) {
            super(), this._document = e3, this._parentElement = t3, this._optionsService = i3, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W".repeat(32), this._measureElement.setAttribute("aria-hidden", "true"), this._measureElement.style.whiteSpace = "pre", this._measureElement.style.fontKerning = "none", this._parentElement.appendChild(this._measureElement);
          }
          measure() {
            return this._measureElement.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._measureElement.style.fontSize = `${this._optionsService.rawOptions.fontSize}px`, this._validateAndSet(Number(this._measureElement.offsetWidth) / 32, Number(this._measureElement.offsetHeight)), this._result;
          }
        }
        class d extends c {
          constructor(e3) {
            super(), this._optionsService = e3, this._canvas = new OffscreenCanvas(100, 100), this._ctx = this._canvas.getContext("2d");
            const t3 = this._ctx.measureText("W");
            if (!("width" in t3 && "fontBoundingBoxAscent" in t3 && "fontBoundingBoxDescent" in t3))
              throw new Error("Required font metrics not supported");
          }
          measure() {
            this._ctx.font = `${this._optionsService.rawOptions.fontSize}px ${this._optionsService.rawOptions.fontFamily}`;
            const e3 = this._ctx.measureText("W");
            return this._validateAndSet(e3.width, e3.fontBoundingBoxAscent + e3.fontBoundingBoxDescent), this._result;
          }
        }
      }, 4269: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CharacterJoinerService = t2.JoinedCellData = void 0;
        const n = i2(3734), o = i2(643), a = i2(511), h = i2(2585);
        class c extends n.AttributeData {
          constructor(e3, t3, i3) {
            super(), this.content = 0, this.combinedData = "", this.fg = e3.fg, this.bg = e3.bg, this.combinedData = t3, this._width = i3;
          }
          isCombined() {
            return 2097152;
          }
          getWidth() {
            return this._width;
          }
          getChars() {
            return this.combinedData;
          }
          getCode() {
            return 2097151;
          }
          setFromCharData(e3) {
            throw new Error("not implemented");
          }
          getAsCharData() {
            return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
          }
        }
        t2.JoinedCellData = c;
        let l = t2.CharacterJoinerService = class e3 {
          constructor(e4) {
            this._bufferService = e4, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new a.CellData();
          }
          register(e4) {
            const t3 = { id: this._nextCharacterJoinerId++, handler: e4 };
            return this._characterJoiners.push(t3), t3.id;
          }
          deregister(e4) {
            for (let t3 = 0; t3 < this._characterJoiners.length; t3++)
              if (this._characterJoiners[t3].id === e4)
                return this._characterJoiners.splice(t3, 1), true;
            return false;
          }
          getJoinedCharacters(e4) {
            if (0 === this._characterJoiners.length)
              return [];
            const t3 = this._bufferService.buffer.lines.get(e4);
            if (!t3 || 0 === t3.length)
              return [];
            const i3 = [], s3 = t3.translateToString(true);
            let r2 = 0, n2 = 0, a2 = 0, h2 = t3.getFg(0), c2 = t3.getBg(0);
            for (let e5 = 0; e5 < t3.getTrimmedLength(); e5++)
              if (t3.loadCell(e5, this._workCell), 0 !== this._workCell.getWidth()) {
                if (this._workCell.fg !== h2 || this._workCell.bg !== c2) {
                  if (e5 - r2 > 1) {
                    const e6 = this._getJoinedRanges(s3, a2, n2, t3, r2);
                    for (let t4 = 0; t4 < e6.length; t4++)
                      i3.push(e6[t4]);
                  }
                  r2 = e5, a2 = n2, h2 = this._workCell.fg, c2 = this._workCell.bg;
                }
                n2 += this._workCell.getChars().length || o.WHITESPACE_CELL_CHAR.length;
              }
            if (this._bufferService.cols - r2 > 1) {
              const e5 = this._getJoinedRanges(s3, a2, n2, t3, r2);
              for (let t4 = 0; t4 < e5.length; t4++)
                i3.push(e5[t4]);
            }
            return i3;
          }
          _getJoinedRanges(t3, i3, s3, r2, n2) {
            const o2 = t3.substring(i3, s3);
            let a2 = [];
            try {
              a2 = this._characterJoiners[0].handler(o2);
            } catch (e4) {
              console.error(e4);
            }
            for (let t4 = 1; t4 < this._characterJoiners.length; t4++)
              try {
                const i4 = this._characterJoiners[t4].handler(o2);
                for (let t5 = 0; t5 < i4.length; t5++)
                  e3._mergeRanges(a2, i4[t5]);
              } catch (e4) {
                console.error(e4);
              }
            return this._stringRangesToCellRanges(a2, r2, n2), a2;
          }
          _stringRangesToCellRanges(e4, t3, i3) {
            let s3 = 0, r2 = false, n2 = 0, a2 = e4[s3];
            if (a2) {
              for (let h2 = i3; h2 < this._bufferService.cols; h2++) {
                const i4 = t3.getWidth(h2), c2 = t3.getString(h2).length || o.WHITESPACE_CELL_CHAR.length;
                if (0 !== i4) {
                  if (!r2 && a2[0] <= n2 && (a2[0] = h2, r2 = true), a2[1] <= n2) {
                    if (a2[1] = h2, a2 = e4[++s3], !a2)
                      break;
                    a2[0] <= n2 ? (a2[0] = h2, r2 = true) : r2 = false;
                  }
                  n2 += c2;
                }
              }
              a2 && (a2[1] = this._bufferService.cols);
            }
          }
          static _mergeRanges(e4, t3) {
            let i3 = false;
            for (let s3 = 0; s3 < e4.length; s3++) {
              const r2 = e4[s3];
              if (i3) {
                if (t3[1] <= r2[0])
                  return e4[s3 - 1][1] = t3[1], e4;
                if (t3[1] <= r2[1])
                  return e4[s3 - 1][1] = Math.max(t3[1], r2[1]), e4.splice(s3, 1), e4;
                e4.splice(s3, 1), s3--;
              } else {
                if (t3[1] <= r2[0])
                  return e4.splice(s3, 0, t3), e4;
                if (t3[1] <= r2[1])
                  return r2[0] = Math.min(t3[0], r2[0]), e4;
                t3[0] < r2[1] && (r2[0] = Math.min(t3[0], r2[0]), i3 = true);
              }
            }
            return i3 ? e4[e4.length - 1][1] = t3[1] : e4.push(t3), e4;
          }
        };
        t2.CharacterJoinerService = l = s2([r(0, h.IBufferService)], l);
      }, 5114: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreBrowserService = void 0;
        const s2 = i2(844), r = i2(8460), n = i2(3656);
        class o extends s2.Disposable {
          constructor(e3, t3, i3) {
            super(), this._textarea = e3, this._window = t3, this.mainDocument = i3, this._isFocused = false, this._cachedIsFocused = void 0, this._screenDprMonitor = new a(this._window), this._onDprChange = this.register(new r.EventEmitter()), this.onDprChange = this._onDprChange.event, this._onWindowChange = this.register(new r.EventEmitter()), this.onWindowChange = this._onWindowChange.event, this.register(this.onWindowChange((e4) => this._screenDprMonitor.setWindow(e4))), this.register((0, r.forwardEvent)(this._screenDprMonitor.onDprChange, this._onDprChange)), this._textarea.addEventListener("focus", () => this._isFocused = true), this._textarea.addEventListener("blur", () => this._isFocused = false);
          }
          get window() {
            return this._window;
          }
          set window(e3) {
            this._window !== e3 && (this._window = e3, this._onWindowChange.fire(this._window));
          }
          get dpr() {
            return this.window.devicePixelRatio;
          }
          get isFocused() {
            return void 0 === this._cachedIsFocused && (this._cachedIsFocused = this._isFocused && this._textarea.ownerDocument.hasFocus(), queueMicrotask(() => this._cachedIsFocused = void 0)), this._cachedIsFocused;
          }
        }
        t2.CoreBrowserService = o;
        class a extends s2.Disposable {
          constructor(e3) {
            super(), this._parentWindow = e3, this._windowResizeListener = this.register(new s2.MutableDisposable()), this._onDprChange = this.register(new r.EventEmitter()), this.onDprChange = this._onDprChange.event, this._outerListener = () => this._setDprAndFireIfDiffers(), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._updateDpr(), this._setWindowResizeListener(), this.register((0, s2.toDisposable)(() => this.clearListener()));
          }
          setWindow(e3) {
            this._parentWindow = e3, this._setWindowResizeListener(), this._setDprAndFireIfDiffers();
          }
          _setWindowResizeListener() {
            this._windowResizeListener.value = (0, n.addDisposableDomListener)(this._parentWindow, "resize", () => this._setDprAndFireIfDiffers());
          }
          _setDprAndFireIfDiffers() {
            this._parentWindow.devicePixelRatio !== this._currentDevicePixelRatio && this._onDprChange.fire(this._parentWindow.devicePixelRatio), this._updateDpr();
          }
          _updateDpr() {
            this._outerListener && (this._resolutionMediaMatchList?.removeListener(this._outerListener), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._resolutionMediaMatchList = this._parentWindow.matchMedia(`screen and (resolution: ${this._parentWindow.devicePixelRatio}dppx)`), this._resolutionMediaMatchList.addListener(this._outerListener));
          }
          clearListener() {
            this._resolutionMediaMatchList && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._outerListener = void 0);
          }
        }
      }, 779: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.LinkProviderService = void 0;
        const s2 = i2(844);
        class r extends s2.Disposable {
          constructor() {
            super(), this.linkProviders = [], this.register((0, s2.toDisposable)(() => this.linkProviders.length = 0));
          }
          registerLinkProvider(e3) {
            return this.linkProviders.push(e3), { dispose: () => {
              const t3 = this.linkProviders.indexOf(e3);
              -1 !== t3 && this.linkProviders.splice(t3, 1);
            } };
          }
        }
        t2.LinkProviderService = r;
      }, 8934: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.MouseService = void 0;
        const n = i2(4725), o = i2(9806);
        let a = t2.MouseService = class {
          constructor(e3, t3) {
            this._renderService = e3, this._charSizeService = t3;
          }
          getCoords(e3, t3, i3, s3, r2) {
            return (0, o.getCoords)(window, e3, t3, i3, s3, this._charSizeService.hasValidSize, this._renderService.dimensions.css.cell.width, this._renderService.dimensions.css.cell.height, r2);
          }
          getMouseReportCoords(e3, t3) {
            const i3 = (0, o.getCoordsRelativeToElement)(window, e3, t3);
            if (this._charSizeService.hasValidSize)
              return i3[0] = Math.min(Math.max(i3[0], 0), this._renderService.dimensions.css.canvas.width - 1), i3[1] = Math.min(Math.max(i3[1], 0), this._renderService.dimensions.css.canvas.height - 1), { col: Math.floor(i3[0] / this._renderService.dimensions.css.cell.width), row: Math.floor(i3[1] / this._renderService.dimensions.css.cell.height), x: Math.floor(i3[0]), y: Math.floor(i3[1]) };
          }
        };
        t2.MouseService = a = s2([r(0, n.IRenderService), r(1, n.ICharSizeService)], a);
      }, 3230: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.RenderService = void 0;
        const n = i2(6193), o = i2(4725), a = i2(8460), h = i2(844), c = i2(7226), l = i2(2585);
        let d = t2.RenderService = class extends h.Disposable {
          get dimensions() {
            return this._renderer.value.dimensions;
          }
          constructor(e3, t3, i3, s3, r2, o2, l2, d2) {
            super(), this._rowCount = e3, this._charSizeService = s3, this._renderer = this.register(new h.MutableDisposable()), this._pausedResizeTask = new c.DebouncedIdleTask(), this._observerDisposable = this.register(new h.MutableDisposable()), this._isPaused = false, this._needsFullRefresh = false, this._isNextRenderRedrawOnly = true, this._needsSelectionRefresh = false, this._canvasWidth = 0, this._canvasHeight = 0, this._selectionState = { start: void 0, end: void 0, columnSelectMode: false }, this._onDimensionsChange = this.register(new a.EventEmitter()), this.onDimensionsChange = this._onDimensionsChange.event, this._onRenderedViewportChange = this.register(new a.EventEmitter()), this.onRenderedViewportChange = this._onRenderedViewportChange.event, this._onRender = this.register(new a.EventEmitter()), this.onRender = this._onRender.event, this._onRefreshRequest = this.register(new a.EventEmitter()), this.onRefreshRequest = this._onRefreshRequest.event, this._renderDebouncer = new n.RenderDebouncer((e4, t4) => this._renderRows(e4, t4), l2), this.register(this._renderDebouncer), this.register(l2.onDprChange(() => this.handleDevicePixelRatioChange())), this.register(o2.onResize(() => this._fullRefresh())), this.register(o2.buffers.onBufferActivate(() => this._renderer.value?.clear())), this.register(i3.onOptionChange(() => this._handleOptionsChanged())), this.register(this._charSizeService.onCharSizeChange(() => this.handleCharSizeChanged())), this.register(r2.onDecorationRegistered(() => this._fullRefresh())), this.register(r2.onDecorationRemoved(() => this._fullRefresh())), this.register(i3.onMultipleOptionChange(["customGlyphs", "drawBoldTextInBrightColors", "letterSpacing", "lineHeight", "fontFamily", "fontSize", "fontWeight", "fontWeightBold", "minimumContrastRatio", "rescaleOverlappingGlyphs"], () => {
              this.clear(), this.handleResize(o2.cols, o2.rows), this._fullRefresh();
            })), this.register(i3.onMultipleOptionChange(["cursorBlink", "cursorStyle"], () => this.refreshRows(o2.buffer.y, o2.buffer.y, true))), this.register(d2.onChangeColors(() => this._fullRefresh())), this._registerIntersectionObserver(l2.window, t3), this.register(l2.onWindowChange((e4) => this._registerIntersectionObserver(e4, t3)));
          }
          _registerIntersectionObserver(e3, t3) {
            if ("IntersectionObserver" in e3) {
              const i3 = new e3.IntersectionObserver((e4) => this._handleIntersectionChange(e4[e4.length - 1]), { threshold: 0 });
              i3.observe(t3), this._observerDisposable.value = (0, h.toDisposable)(() => i3.disconnect());
            }
          }
          _handleIntersectionChange(e3) {
            this._isPaused = void 0 === e3.isIntersecting ? 0 === e3.intersectionRatio : !e3.isIntersecting, this._isPaused || this._charSizeService.hasValidSize || this._charSizeService.measure(), !this._isPaused && this._needsFullRefresh && (this._pausedResizeTask.flush(), this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = false);
          }
          refreshRows(e3, t3, i3 = false) {
            this._isPaused ? this._needsFullRefresh = true : (i3 || (this._isNextRenderRedrawOnly = false), this._renderDebouncer.refresh(e3, t3, this._rowCount));
          }
          _renderRows(e3, t3) {
            this._renderer.value && (e3 = Math.min(e3, this._rowCount - 1), t3 = Math.min(t3, this._rowCount - 1), this._renderer.value.renderRows(e3, t3), this._needsSelectionRefresh && (this._renderer.value.handleSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode), this._needsSelectionRefresh = false), this._isNextRenderRedrawOnly || this._onRenderedViewportChange.fire({ start: e3, end: t3 }), this._onRender.fire({ start: e3, end: t3 }), this._isNextRenderRedrawOnly = true);
          }
          resize(e3, t3) {
            this._rowCount = t3, this._fireOnCanvasResize();
          }
          _handleOptionsChanged() {
            this._renderer.value && (this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize());
          }
          _fireOnCanvasResize() {
            this._renderer.value && (this._renderer.value.dimensions.css.canvas.width === this._canvasWidth && this._renderer.value.dimensions.css.canvas.height === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.value.dimensions));
          }
          hasRenderer() {
            return !!this._renderer.value;
          }
          setRenderer(e3) {
            this._renderer.value = e3, this._renderer.value && (this._renderer.value.onRequestRedraw((e4) => this.refreshRows(e4.start, e4.end, true)), this._needsSelectionRefresh = true, this._fullRefresh());
          }
          addRefreshCallback(e3) {
            return this._renderDebouncer.addRefreshCallback(e3);
          }
          _fullRefresh() {
            this._isPaused ? this._needsFullRefresh = true : this.refreshRows(0, this._rowCount - 1);
          }
          clearTextureAtlas() {
            this._renderer.value && (this._renderer.value.clearTextureAtlas?.(), this._fullRefresh());
          }
          handleDevicePixelRatioChange() {
            this._charSizeService.measure(), this._renderer.value && (this._renderer.value.handleDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1));
          }
          handleResize(e3, t3) {
            this._renderer.value && (this._isPaused ? this._pausedResizeTask.set(() => this._renderer.value?.handleResize(e3, t3)) : this._renderer.value.handleResize(e3, t3), this._fullRefresh());
          }
          handleCharSizeChanged() {
            this._renderer.value?.handleCharSizeChanged();
          }
          handleBlur() {
            this._renderer.value?.handleBlur();
          }
          handleFocus() {
            this._renderer.value?.handleFocus();
          }
          handleSelectionChanged(e3, t3, i3) {
            this._selectionState.start = e3, this._selectionState.end = t3, this._selectionState.columnSelectMode = i3, this._renderer.value?.handleSelectionChanged(e3, t3, i3);
          }
          handleCursorMove() {
            this._renderer.value?.handleCursorMove();
          }
          clear() {
            this._renderer.value?.clear();
          }
        };
        t2.RenderService = d = s2([r(2, l.IOptionsService), r(3, o.ICharSizeService), r(4, l.IDecorationService), r(5, l.IBufferService), r(6, o.ICoreBrowserService), r(7, o.IThemeService)], d);
      }, 9312: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.SelectionService = void 0;
        const n = i2(9806), o = i2(9504), a = i2(456), h = i2(4725), c = i2(8460), l = i2(844), d = i2(6114), _ = i2(4841), u = i2(511), f = i2(2585), v = String.fromCharCode(160), p = new RegExp(v, "g");
        let g = t2.SelectionService = class extends l.Disposable {
          constructor(e3, t3, i3, s3, r2, n2, o2, h2, d2) {
            super(), this._element = e3, this._screenElement = t3, this._linkifier = i3, this._bufferService = s3, this._coreService = r2, this._mouseService = n2, this._optionsService = o2, this._renderService = h2, this._coreBrowserService = d2, this._dragScrollAmount = 0, this._enabled = true, this._workCell = new u.CellData(), this._mouseDownTimeStamp = 0, this._oldHasSelection = false, this._oldSelectionStart = void 0, this._oldSelectionEnd = void 0, this._onLinuxMouseSelection = this.register(new c.EventEmitter()), this.onLinuxMouseSelection = this._onLinuxMouseSelection.event, this._onRedrawRequest = this.register(new c.EventEmitter()), this.onRequestRedraw = this._onRedrawRequest.event, this._onSelectionChange = this.register(new c.EventEmitter()), this.onSelectionChange = this._onSelectionChange.event, this._onRequestScrollLines = this.register(new c.EventEmitter()), this.onRequestScrollLines = this._onRequestScrollLines.event, this._mouseMoveListener = (e4) => this._handleMouseMove(e4), this._mouseUpListener = (e4) => this._handleMouseUp(e4), this._coreService.onUserInput(() => {
              this.hasSelection && this.clearSelection();
            }), this._trimListener = this._bufferService.buffer.lines.onTrim((e4) => this._handleTrim(e4)), this.register(this._bufferService.buffers.onBufferActivate((e4) => this._handleBufferActivate(e4))), this.enable(), this._model = new a.SelectionModel(this._bufferService), this._activeSelectionMode = 0, this.register((0, l.toDisposable)(() => {
              this._removeMouseDownListeners();
            }));
          }
          reset() {
            this.clearSelection();
          }
          disable() {
            this.clearSelection(), this._enabled = false;
          }
          enable() {
            this._enabled = true;
          }
          get selectionStart() {
            return this._model.finalSelectionStart;
          }
          get selectionEnd() {
            return this._model.finalSelectionEnd;
          }
          get hasSelection() {
            const e3 = this._model.finalSelectionStart, t3 = this._model.finalSelectionEnd;
            return !(!e3 || !t3 || e3[0] === t3[0] && e3[1] === t3[1]);
          }
          get selectionText() {
            const e3 = this._model.finalSelectionStart, t3 = this._model.finalSelectionEnd;
            if (!e3 || !t3)
              return "";
            const i3 = this._bufferService.buffer, s3 = [];
            if (3 === this._activeSelectionMode) {
              if (e3[0] === t3[0])
                return "";
              const r2 = e3[0] < t3[0] ? e3[0] : t3[0], n2 = e3[0] < t3[0] ? t3[0] : e3[0];
              for (let o2 = e3[1]; o2 <= t3[1]; o2++) {
                const e4 = i3.translateBufferLineToString(o2, true, r2, n2);
                s3.push(e4);
              }
            } else {
              const r2 = e3[1] === t3[1] ? t3[0] : void 0;
              s3.push(i3.translateBufferLineToString(e3[1], true, e3[0], r2));
              for (let r3 = e3[1] + 1; r3 <= t3[1] - 1; r3++) {
                const e4 = i3.lines.get(r3), t4 = i3.translateBufferLineToString(r3, true);
                e4?.isWrapped ? s3[s3.length - 1] += t4 : s3.push(t4);
              }
              if (e3[1] !== t3[1]) {
                const e4 = i3.lines.get(t3[1]), r3 = i3.translateBufferLineToString(t3[1], true, 0, t3[0]);
                e4 && e4.isWrapped ? s3[s3.length - 1] += r3 : s3.push(r3);
              }
            }
            return s3.map((e4) => e4.replace(p, " ")).join(d.isWindows ? "\r\n" : "\n");
          }
          clearSelection() {
            this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire();
          }
          refresh(e3) {
            this._refreshAnimationFrame || (this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._refresh())), d.isLinux && e3 && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText);
          }
          _refresh() {
            this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({ start: this._model.finalSelectionStart, end: this._model.finalSelectionEnd, columnSelectMode: 3 === this._activeSelectionMode });
          }
          _isClickInSelection(e3) {
            const t3 = this._getMouseBufferCoords(e3), i3 = this._model.finalSelectionStart, s3 = this._model.finalSelectionEnd;
            return !!(i3 && s3 && t3) && this._areCoordsInSelection(t3, i3, s3);
          }
          isCellInSelection(e3, t3) {
            const i3 = this._model.finalSelectionStart, s3 = this._model.finalSelectionEnd;
            return !(!i3 || !s3) && this._areCoordsInSelection([e3, t3], i3, s3);
          }
          _areCoordsInSelection(e3, t3, i3) {
            return e3[1] > t3[1] && e3[1] < i3[1] || t3[1] === i3[1] && e3[1] === t3[1] && e3[0] >= t3[0] && e3[0] < i3[0] || t3[1] < i3[1] && e3[1] === i3[1] && e3[0] < i3[0] || t3[1] < i3[1] && e3[1] === t3[1] && e3[0] >= t3[0];
          }
          _selectWordAtCursor(e3, t3) {
            const i3 = this._linkifier.currentLink?.link?.range;
            if (i3)
              return this._model.selectionStart = [i3.start.x - 1, i3.start.y - 1], this._model.selectionStartLength = (0, _.getRangeLength)(i3, this._bufferService.cols), this._model.selectionEnd = void 0, true;
            const s3 = this._getMouseBufferCoords(e3);
            return !!s3 && (this._selectWordAt(s3, t3), this._model.selectionEnd = void 0, true);
          }
          selectAll() {
            this._model.isSelectAllActive = true, this.refresh(), this._onSelectionChange.fire();
          }
          selectLines(e3, t3) {
            this._model.clearSelection(), e3 = Math.max(e3, 0), t3 = Math.min(t3, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [0, e3], this._model.selectionEnd = [this._bufferService.cols, t3], this.refresh(), this._onSelectionChange.fire();
          }
          _handleTrim(e3) {
            this._model.handleTrim(e3) && this.refresh();
          }
          _getMouseBufferCoords(e3) {
            const t3 = this._mouseService.getCoords(e3, this._screenElement, this._bufferService.cols, this._bufferService.rows, true);
            if (t3)
              return t3[0]--, t3[1]--, t3[1] += this._bufferService.buffer.ydisp, t3;
          }
          _getMouseEventScrollAmount(e3) {
            let t3 = (0, n.getCoordsRelativeToElement)(this._coreBrowserService.window, e3, this._screenElement)[1];
            const i3 = this._renderService.dimensions.css.canvas.height;
            return t3 >= 0 && t3 <= i3 ? 0 : (t3 > i3 && (t3 -= i3), t3 = Math.min(Math.max(t3, -50), 50), t3 /= 50, t3 / Math.abs(t3) + Math.round(14 * t3));
          }
          shouldForceSelection(e3) {
            return d.isMac ? e3.altKey && this._optionsService.rawOptions.macOptionClickForcesSelection : e3.shiftKey;
          }
          handleMouseDown(e3) {
            if (this._mouseDownTimeStamp = e3.timeStamp, (2 !== e3.button || !this.hasSelection) && 0 === e3.button) {
              if (!this._enabled) {
                if (!this.shouldForceSelection(e3))
                  return;
                e3.stopPropagation();
              }
              e3.preventDefault(), this._dragScrollAmount = 0, this._enabled && e3.shiftKey ? this._handleIncrementalClick(e3) : 1 === e3.detail ? this._handleSingleClick(e3) : 2 === e3.detail ? this._handleDoubleClick(e3) : 3 === e3.detail && this._handleTripleClick(e3), this._addMouseDownListeners(), this.refresh(true);
            }
          }
          _addMouseDownListeners() {
            this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = this._coreBrowserService.window.setInterval(() => this._dragScroll(), 50);
          }
          _removeMouseDownListeners() {
            this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), this._coreBrowserService.window.clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0;
          }
          _handleIncrementalClick(e3) {
            this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e3));
          }
          _handleSingleClick(e3) {
            if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = false, this._activeSelectionMode = this.shouldColumnSelect(e3) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e3), !this._model.selectionStart)
              return;
            this._model.selectionEnd = void 0;
            const t3 = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
            t3 && t3.length !== this._model.selectionStart[0] && 0 === t3.hasWidth(this._model.selectionStart[0]) && this._model.selectionStart[0]++;
          }
          _handleDoubleClick(e3) {
            this._selectWordAtCursor(e3, true) && (this._activeSelectionMode = 1);
          }
          _handleTripleClick(e3) {
            const t3 = this._getMouseBufferCoords(e3);
            t3 && (this._activeSelectionMode = 2, this._selectLineAt(t3[1]));
          }
          shouldColumnSelect(e3) {
            return e3.altKey && !(d.isMac && this._optionsService.rawOptions.macOptionClickForcesSelection);
          }
          _handleMouseMove(e3) {
            if (e3.stopImmediatePropagation(), !this._model.selectionStart)
              return;
            const t3 = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
            if (this._model.selectionEnd = this._getMouseBufferCoords(e3), !this._model.selectionEnd)
              return void this.refresh(true);
            2 === this._activeSelectionMode ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : 1 === this._activeSelectionMode && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e3), 3 !== this._activeSelectionMode && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
            const i3 = this._bufferService.buffer;
            if (this._model.selectionEnd[1] < i3.lines.length) {
              const e4 = i3.lines.get(this._model.selectionEnd[1]);
              e4 && 0 === e4.hasWidth(this._model.selectionEnd[0]) && this._model.selectionEnd[0] < this._bufferService.cols && this._model.selectionEnd[0]++;
            }
            t3 && t3[0] === this._model.selectionEnd[0] && t3[1] === this._model.selectionEnd[1] || this.refresh(true);
          }
          _dragScroll() {
            if (this._model.selectionEnd && this._model.selectionStart && this._dragScrollAmount) {
              this._onRequestScrollLines.fire({ amount: this._dragScrollAmount, suppressScrollEvent: false });
              const e3 = this._bufferService.buffer;
              this._dragScrollAmount > 0 ? (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e3.ydisp + this._bufferService.rows, e3.lines.length - 1)) : (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e3.ydisp), this.refresh();
            }
          }
          _handleMouseUp(e3) {
            const t3 = e3.timeStamp - this._mouseDownTimeStamp;
            if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && t3 < 500 && e3.altKey && this._optionsService.rawOptions.altClickMovesCursor) {
              if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
                const t4 = this._mouseService.getCoords(e3, this._element, this._bufferService.cols, this._bufferService.rows, false);
                if (t4 && void 0 !== t4[0] && void 0 !== t4[1]) {
                  const e4 = (0, o.moveToCellSequence)(t4[0] - 1, t4[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
                  this._coreService.triggerDataEvent(e4, true);
                }
              }
            } else
              this._fireEventIfSelectionChanged();
          }
          _fireEventIfSelectionChanged() {
            const e3 = this._model.finalSelectionStart, t3 = this._model.finalSelectionEnd, i3 = !(!e3 || !t3 || e3[0] === t3[0] && e3[1] === t3[1]);
            i3 ? e3 && t3 && (this._oldSelectionStart && this._oldSelectionEnd && e3[0] === this._oldSelectionStart[0] && e3[1] === this._oldSelectionStart[1] && t3[0] === this._oldSelectionEnd[0] && t3[1] === this._oldSelectionEnd[1] || this._fireOnSelectionChange(e3, t3, i3)) : this._oldHasSelection && this._fireOnSelectionChange(e3, t3, i3);
          }
          _fireOnSelectionChange(e3, t3, i3) {
            this._oldSelectionStart = e3, this._oldSelectionEnd = t3, this._oldHasSelection = i3, this._onSelectionChange.fire();
          }
          _handleBufferActivate(e3) {
            this.clearSelection(), this._trimListener.dispose(), this._trimListener = e3.activeBuffer.lines.onTrim((e4) => this._handleTrim(e4));
          }
          _convertViewportColToCharacterIndex(e3, t3) {
            let i3 = t3;
            for (let s3 = 0; t3 >= s3; s3++) {
              const r2 = e3.loadCell(s3, this._workCell).getChars().length;
              0 === this._workCell.getWidth() ? i3-- : r2 > 1 && t3 !== s3 && (i3 += r2 - 1);
            }
            return i3;
          }
          setSelection(e3, t3, i3) {
            this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [e3, t3], this._model.selectionStartLength = i3, this.refresh(), this._fireEventIfSelectionChanged();
          }
          rightClickSelect(e3) {
            this._isClickInSelection(e3) || (this._selectWordAtCursor(e3, false) && this.refresh(true), this._fireEventIfSelectionChanged());
          }
          _getWordAt(e3, t3, i3 = true, s3 = true) {
            if (e3[0] >= this._bufferService.cols)
              return;
            const r2 = this._bufferService.buffer, n2 = r2.lines.get(e3[1]);
            if (!n2)
              return;
            const o2 = r2.translateBufferLineToString(e3[1], false);
            let a2 = this._convertViewportColToCharacterIndex(n2, e3[0]), h2 = a2;
            const c2 = e3[0] - a2;
            let l2 = 0, d2 = 0, _2 = 0, u2 = 0;
            if (" " === o2.charAt(a2)) {
              for (; a2 > 0 && " " === o2.charAt(a2 - 1); )
                a2--;
              for (; h2 < o2.length && " " === o2.charAt(h2 + 1); )
                h2++;
            } else {
              let t4 = e3[0], i4 = e3[0];
              0 === n2.getWidth(t4) && (l2++, t4--), 2 === n2.getWidth(i4) && (d2++, i4++);
              const s4 = n2.getString(i4).length;
              for (s4 > 1 && (u2 += s4 - 1, h2 += s4 - 1); t4 > 0 && a2 > 0 && !this._isCharWordSeparator(n2.loadCell(t4 - 1, this._workCell)); ) {
                n2.loadCell(t4 - 1, this._workCell);
                const e4 = this._workCell.getChars().length;
                0 === this._workCell.getWidth() ? (l2++, t4--) : e4 > 1 && (_2 += e4 - 1, a2 -= e4 - 1), a2--, t4--;
              }
              for (; i4 < n2.length && h2 + 1 < o2.length && !this._isCharWordSeparator(n2.loadCell(i4 + 1, this._workCell)); ) {
                n2.loadCell(i4 + 1, this._workCell);
                const e4 = this._workCell.getChars().length;
                2 === this._workCell.getWidth() ? (d2++, i4++) : e4 > 1 && (u2 += e4 - 1, h2 += e4 - 1), h2++, i4++;
              }
            }
            h2++;
            let f2 = a2 + c2 - l2 + _2, v2 = Math.min(this._bufferService.cols, h2 - a2 + l2 + d2 - _2 - u2);
            if (t3 || "" !== o2.slice(a2, h2).trim()) {
              if (i3 && 0 === f2 && 32 !== n2.getCodePoint(0)) {
                const t4 = r2.lines.get(e3[1] - 1);
                if (t4 && n2.isWrapped && 32 !== t4.getCodePoint(this._bufferService.cols - 1)) {
                  const t5 = this._getWordAt([this._bufferService.cols - 1, e3[1] - 1], false, true, false);
                  if (t5) {
                    const e4 = this._bufferService.cols - t5.start;
                    f2 -= e4, v2 += e4;
                  }
                }
              }
              if (s3 && f2 + v2 === this._bufferService.cols && 32 !== n2.getCodePoint(this._bufferService.cols - 1)) {
                const t4 = r2.lines.get(e3[1] + 1);
                if (t4?.isWrapped && 32 !== t4.getCodePoint(0)) {
                  const t5 = this._getWordAt([0, e3[1] + 1], false, false, true);
                  t5 && (v2 += t5.length);
                }
              }
              return { start: f2, length: v2 };
            }
          }
          _selectWordAt(e3, t3) {
            const i3 = this._getWordAt(e3, t3);
            if (i3) {
              for (; i3.start < 0; )
                i3.start += this._bufferService.cols, e3[1]--;
              this._model.selectionStart = [i3.start, e3[1]], this._model.selectionStartLength = i3.length;
            }
          }
          _selectToWordAt(e3) {
            const t3 = this._getWordAt(e3, true);
            if (t3) {
              let i3 = e3[1];
              for (; t3.start < 0; )
                t3.start += this._bufferService.cols, i3--;
              if (!this._model.areSelectionValuesReversed())
                for (; t3.start + t3.length > this._bufferService.cols; )
                  t3.length -= this._bufferService.cols, i3++;
              this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? t3.start : t3.start + t3.length, i3];
            }
          }
          _isCharWordSeparator(e3) {
            return 0 !== e3.getWidth() && this._optionsService.rawOptions.wordSeparator.indexOf(e3.getChars()) >= 0;
          }
          _selectLineAt(e3) {
            const t3 = this._bufferService.buffer.getWrappedRangeForLine(e3), i3 = { start: { x: 0, y: t3.first }, end: { x: this._bufferService.cols - 1, y: t3.last } };
            this._model.selectionStart = [0, t3.first], this._model.selectionEnd = void 0, this._model.selectionStartLength = (0, _.getRangeLength)(i3, this._bufferService.cols);
          }
        };
        t2.SelectionService = g = s2([r(3, f.IBufferService), r(4, f.ICoreService), r(5, h.IMouseService), r(6, f.IOptionsService), r(7, h.IRenderService), r(8, h.ICoreBrowserService)], g);
      }, 4725: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ILinkProviderService = t2.IThemeService = t2.ICharacterJoinerService = t2.ISelectionService = t2.IRenderService = t2.IMouseService = t2.ICoreBrowserService = t2.ICharSizeService = void 0;
        const s2 = i2(8343);
        t2.ICharSizeService = (0, s2.createDecorator)("CharSizeService"), t2.ICoreBrowserService = (0, s2.createDecorator)("CoreBrowserService"), t2.IMouseService = (0, s2.createDecorator)("MouseService"), t2.IRenderService = (0, s2.createDecorator)("RenderService"), t2.ISelectionService = (0, s2.createDecorator)("SelectionService"), t2.ICharacterJoinerService = (0, s2.createDecorator)("CharacterJoinerService"), t2.IThemeService = (0, s2.createDecorator)("ThemeService"), t2.ILinkProviderService = (0, s2.createDecorator)("LinkProviderService");
      }, 6731: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ThemeService = t2.DEFAULT_ANSI_COLORS = void 0;
        const n = i2(7239), o = i2(8055), a = i2(8460), h = i2(844), c = i2(2585), l = o.css.toColor("#ffffff"), d = o.css.toColor("#000000"), _ = o.css.toColor("#ffffff"), u = o.css.toColor("#000000"), f = { css: "rgba(255, 255, 255, 0.3)", rgba: 4294967117 };
        t2.DEFAULT_ANSI_COLORS = Object.freeze((() => {
          const e3 = [o.css.toColor("#2e3436"), o.css.toColor("#cc0000"), o.css.toColor("#4e9a06"), o.css.toColor("#c4a000"), o.css.toColor("#3465a4"), o.css.toColor("#75507b"), o.css.toColor("#06989a"), o.css.toColor("#d3d7cf"), o.css.toColor("#555753"), o.css.toColor("#ef2929"), o.css.toColor("#8ae234"), o.css.toColor("#fce94f"), o.css.toColor("#729fcf"), o.css.toColor("#ad7fa8"), o.css.toColor("#34e2e2"), o.css.toColor("#eeeeec")], t3 = [0, 95, 135, 175, 215, 255];
          for (let i3 = 0; i3 < 216; i3++) {
            const s3 = t3[i3 / 36 % 6 | 0], r2 = t3[i3 / 6 % 6 | 0], n2 = t3[i3 % 6];
            e3.push({ css: o.channels.toCss(s3, r2, n2), rgba: o.channels.toRgba(s3, r2, n2) });
          }
          for (let t4 = 0; t4 < 24; t4++) {
            const i3 = 8 + 10 * t4;
            e3.push({ css: o.channels.toCss(i3, i3, i3), rgba: o.channels.toRgba(i3, i3, i3) });
          }
          return e3;
        })());
        let v = t2.ThemeService = class extends h.Disposable {
          get colors() {
            return this._colors;
          }
          constructor(e3) {
            super(), this._optionsService = e3, this._contrastCache = new n.ColorContrastCache(), this._halfContrastCache = new n.ColorContrastCache(), this._onChangeColors = this.register(new a.EventEmitter()), this.onChangeColors = this._onChangeColors.event, this._colors = { foreground: l, background: d, cursor: _, cursorAccent: u, selectionForeground: void 0, selectionBackgroundTransparent: f, selectionBackgroundOpaque: o.color.blend(d, f), selectionInactiveBackgroundTransparent: f, selectionInactiveBackgroundOpaque: o.color.blend(d, f), ansi: t2.DEFAULT_ANSI_COLORS.slice(), contrastCache: this._contrastCache, halfContrastCache: this._halfContrastCache }, this._updateRestoreColors(), this._setTheme(this._optionsService.rawOptions.theme), this.register(this._optionsService.onSpecificOptionChange("minimumContrastRatio", () => this._contrastCache.clear())), this.register(this._optionsService.onSpecificOptionChange("theme", () => this._setTheme(this._optionsService.rawOptions.theme)));
          }
          _setTheme(e3 = {}) {
            const i3 = this._colors;
            if (i3.foreground = p(e3.foreground, l), i3.background = p(e3.background, d), i3.cursor = p(e3.cursor, _), i3.cursorAccent = p(e3.cursorAccent, u), i3.selectionBackgroundTransparent = p(e3.selectionBackground, f), i3.selectionBackgroundOpaque = o.color.blend(i3.background, i3.selectionBackgroundTransparent), i3.selectionInactiveBackgroundTransparent = p(e3.selectionInactiveBackground, i3.selectionBackgroundTransparent), i3.selectionInactiveBackgroundOpaque = o.color.blend(i3.background, i3.selectionInactiveBackgroundTransparent), i3.selectionForeground = e3.selectionForeground ? p(e3.selectionForeground, o.NULL_COLOR) : void 0, i3.selectionForeground === o.NULL_COLOR && (i3.selectionForeground = void 0), o.color.isOpaque(i3.selectionBackgroundTransparent)) {
              const e4 = 0.3;
              i3.selectionBackgroundTransparent = o.color.opacity(i3.selectionBackgroundTransparent, e4);
            }
            if (o.color.isOpaque(i3.selectionInactiveBackgroundTransparent)) {
              const e4 = 0.3;
              i3.selectionInactiveBackgroundTransparent = o.color.opacity(i3.selectionInactiveBackgroundTransparent, e4);
            }
            if (i3.ansi = t2.DEFAULT_ANSI_COLORS.slice(), i3.ansi[0] = p(e3.black, t2.DEFAULT_ANSI_COLORS[0]), i3.ansi[1] = p(e3.red, t2.DEFAULT_ANSI_COLORS[1]), i3.ansi[2] = p(e3.green, t2.DEFAULT_ANSI_COLORS[2]), i3.ansi[3] = p(e3.yellow, t2.DEFAULT_ANSI_COLORS[3]), i3.ansi[4] = p(e3.blue, t2.DEFAULT_ANSI_COLORS[4]), i3.ansi[5] = p(e3.magenta, t2.DEFAULT_ANSI_COLORS[5]), i3.ansi[6] = p(e3.cyan, t2.DEFAULT_ANSI_COLORS[6]), i3.ansi[7] = p(e3.white, t2.DEFAULT_ANSI_COLORS[7]), i3.ansi[8] = p(e3.brightBlack, t2.DEFAULT_ANSI_COLORS[8]), i3.ansi[9] = p(e3.brightRed, t2.DEFAULT_ANSI_COLORS[9]), i3.ansi[10] = p(e3.brightGreen, t2.DEFAULT_ANSI_COLORS[10]), i3.ansi[11] = p(e3.brightYellow, t2.DEFAULT_ANSI_COLORS[11]), i3.ansi[12] = p(e3.brightBlue, t2.DEFAULT_ANSI_COLORS[12]), i3.ansi[13] = p(e3.brightMagenta, t2.DEFAULT_ANSI_COLORS[13]), i3.ansi[14] = p(e3.brightCyan, t2.DEFAULT_ANSI_COLORS[14]), i3.ansi[15] = p(e3.brightWhite, t2.DEFAULT_ANSI_COLORS[15]), e3.extendedAnsi) {
              const s3 = Math.min(i3.ansi.length - 16, e3.extendedAnsi.length);
              for (let r2 = 0; r2 < s3; r2++)
                i3.ansi[r2 + 16] = p(e3.extendedAnsi[r2], t2.DEFAULT_ANSI_COLORS[r2 + 16]);
            }
            this._contrastCache.clear(), this._halfContrastCache.clear(), this._updateRestoreColors(), this._onChangeColors.fire(this.colors);
          }
          restoreColor(e3) {
            this._restoreColor(e3), this._onChangeColors.fire(this.colors);
          }
          _restoreColor(e3) {
            if (void 0 !== e3)
              switch (e3) {
                case 256:
                  this._colors.foreground = this._restoreColors.foreground;
                  break;
                case 257:
                  this._colors.background = this._restoreColors.background;
                  break;
                case 258:
                  this._colors.cursor = this._restoreColors.cursor;
                  break;
                default:
                  this._colors.ansi[e3] = this._restoreColors.ansi[e3];
              }
            else
              for (let e4 = 0; e4 < this._restoreColors.ansi.length; ++e4)
                this._colors.ansi[e4] = this._restoreColors.ansi[e4];
          }
          modifyColors(e3) {
            e3(this._colors), this._onChangeColors.fire(this.colors);
          }
          _updateRestoreColors() {
            this._restoreColors = { foreground: this._colors.foreground, background: this._colors.background, cursor: this._colors.cursor, ansi: this._colors.ansi.slice() };
          }
        };
        function p(e3, t3) {
          if (void 0 !== e3)
            try {
              return o.css.toColor(e3);
            } catch {
            }
          return t3;
        }
        t2.ThemeService = v = s2([r(0, c.IOptionsService)], v);
      }, 6349: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CircularList = void 0;
        const s2 = i2(8460), r = i2(844);
        class n extends r.Disposable {
          constructor(e3) {
            super(), this._maxLength = e3, this.onDeleteEmitter = this.register(new s2.EventEmitter()), this.onDelete = this.onDeleteEmitter.event, this.onInsertEmitter = this.register(new s2.EventEmitter()), this.onInsert = this.onInsertEmitter.event, this.onTrimEmitter = this.register(new s2.EventEmitter()), this.onTrim = this.onTrimEmitter.event, this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0;
          }
          get maxLength() {
            return this._maxLength;
          }
          set maxLength(e3) {
            if (this._maxLength === e3)
              return;
            const t3 = new Array(e3);
            for (let i3 = 0; i3 < Math.min(e3, this.length); i3++)
              t3[i3] = this._array[this._getCyclicIndex(i3)];
            this._array = t3, this._maxLength = e3, this._startIndex = 0;
          }
          get length() {
            return this._length;
          }
          set length(e3) {
            if (e3 > this._length)
              for (let t3 = this._length; t3 < e3; t3++)
                this._array[t3] = void 0;
            this._length = e3;
          }
          get(e3) {
            return this._array[this._getCyclicIndex(e3)];
          }
          set(e3, t3) {
            this._array[this._getCyclicIndex(e3)] = t3;
          }
          push(e3) {
            this._array[this._getCyclicIndex(this._length)] = e3, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++;
          }
          recycle() {
            if (this._length !== this._maxLength)
              throw new Error("Can only recycle when the buffer is full");
            return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)];
          }
          get isFull() {
            return this._length === this._maxLength;
          }
          pop() {
            return this._array[this._getCyclicIndex(this._length-- - 1)];
          }
          splice(e3, t3, ...i3) {
            if (t3) {
              for (let i4 = e3; i4 < this._length - t3; i4++)
                this._array[this._getCyclicIndex(i4)] = this._array[this._getCyclicIndex(i4 + t3)];
              this._length -= t3, this.onDeleteEmitter.fire({ index: e3, amount: t3 });
            }
            for (let t4 = this._length - 1; t4 >= e3; t4--)
              this._array[this._getCyclicIndex(t4 + i3.length)] = this._array[this._getCyclicIndex(t4)];
            for (let t4 = 0; t4 < i3.length; t4++)
              this._array[this._getCyclicIndex(e3 + t4)] = i3[t4];
            if (i3.length && this.onInsertEmitter.fire({ index: e3, amount: i3.length }), this._length + i3.length > this._maxLength) {
              const e4 = this._length + i3.length - this._maxLength;
              this._startIndex += e4, this._length = this._maxLength, this.onTrimEmitter.fire(e4);
            } else
              this._length += i3.length;
          }
          trimStart(e3) {
            e3 > this._length && (e3 = this._length), this._startIndex += e3, this._length -= e3, this.onTrimEmitter.fire(e3);
          }
          shiftElements(e3, t3, i3) {
            if (!(t3 <= 0)) {
              if (e3 < 0 || e3 >= this._length)
                throw new Error("start argument out of range");
              if (e3 + i3 < 0)
                throw new Error("Cannot shift elements in list beyond index 0");
              if (i3 > 0) {
                for (let s4 = t3 - 1; s4 >= 0; s4--)
                  this.set(e3 + s4 + i3, this.get(e3 + s4));
                const s3 = e3 + t3 + i3 - this._length;
                if (s3 > 0)
                  for (this._length += s3; this._length > this._maxLength; )
                    this._length--, this._startIndex++, this.onTrimEmitter.fire(1);
              } else
                for (let s3 = 0; s3 < t3; s3++)
                  this.set(e3 + s3 + i3, this.get(e3 + s3));
            }
          }
          _getCyclicIndex(e3) {
            return (this._startIndex + e3) % this._maxLength;
          }
        }
        t2.CircularList = n;
      }, 1439: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.clone = void 0, t2.clone = function e3(t3, i2 = 5) {
          if ("object" != typeof t3)
            return t3;
          const s2 = Array.isArray(t3) ? [] : {};
          for (const r in t3)
            s2[r] = i2 <= 1 ? t3[r] : t3[r] && e3(t3[r], i2 - 1);
          return s2;
        };
      }, 8055: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.contrastRatio = t2.toPaddedHex = t2.rgba = t2.rgb = t2.css = t2.color = t2.channels = t2.NULL_COLOR = void 0;
        let i2 = 0, s2 = 0, r = 0, n = 0;
        var o, a, h, c, l;
        function d(e3) {
          const t3 = e3.toString(16);
          return t3.length < 2 ? "0" + t3 : t3;
        }
        function _(e3, t3) {
          return e3 < t3 ? (t3 + 0.05) / (e3 + 0.05) : (e3 + 0.05) / (t3 + 0.05);
        }
        t2.NULL_COLOR = { css: "#00000000", rgba: 0 }, function(e3) {
          e3.toCss = function(e4, t3, i3, s3) {
            return void 0 !== s3 ? `#${d(e4)}${d(t3)}${d(i3)}${d(s3)}` : `#${d(e4)}${d(t3)}${d(i3)}`;
          }, e3.toRgba = function(e4, t3, i3, s3 = 255) {
            return (e4 << 24 | t3 << 16 | i3 << 8 | s3) >>> 0;
          }, e3.toColor = function(t3, i3, s3, r2) {
            return { css: e3.toCss(t3, i3, s3, r2), rgba: e3.toRgba(t3, i3, s3, r2) };
          };
        }(o || (t2.channels = o = {})), function(e3) {
          function t3(e4, t4) {
            return n = Math.round(255 * t4), [i2, s2, r] = l.toChannels(e4.rgba), { css: o.toCss(i2, s2, r, n), rgba: o.toRgba(i2, s2, r, n) };
          }
          e3.blend = function(e4, t4) {
            if (n = (255 & t4.rgba) / 255, 1 === n)
              return { css: t4.css, rgba: t4.rgba };
            const a2 = t4.rgba >> 24 & 255, h2 = t4.rgba >> 16 & 255, c2 = t4.rgba >> 8 & 255, l2 = e4.rgba >> 24 & 255, d2 = e4.rgba >> 16 & 255, _2 = e4.rgba >> 8 & 255;
            return i2 = l2 + Math.round((a2 - l2) * n), s2 = d2 + Math.round((h2 - d2) * n), r = _2 + Math.round((c2 - _2) * n), { css: o.toCss(i2, s2, r), rgba: o.toRgba(i2, s2, r) };
          }, e3.isOpaque = function(e4) {
            return 255 == (255 & e4.rgba);
          }, e3.ensureContrastRatio = function(e4, t4, i3) {
            const s3 = l.ensureContrastRatio(e4.rgba, t4.rgba, i3);
            if (s3)
              return o.toColor(s3 >> 24 & 255, s3 >> 16 & 255, s3 >> 8 & 255);
          }, e3.opaque = function(e4) {
            const t4 = (255 | e4.rgba) >>> 0;
            return [i2, s2, r] = l.toChannels(t4), { css: o.toCss(i2, s2, r), rgba: t4 };
          }, e3.opacity = t3, e3.multiplyOpacity = function(e4, i3) {
            return n = 255 & e4.rgba, t3(e4, n * i3 / 255);
          }, e3.toColorRGB = function(e4) {
            return [e4.rgba >> 24 & 255, e4.rgba >> 16 & 255, e4.rgba >> 8 & 255];
          };
        }(a || (t2.color = a = {})), function(e3) {
          let t3, a2;
          try {
            const e4 = document.createElement("canvas");
            e4.width = 1, e4.height = 1;
            const i3 = e4.getContext("2d", { willReadFrequently: true });
            i3 && (t3 = i3, t3.globalCompositeOperation = "copy", a2 = t3.createLinearGradient(0, 0, 1, 1));
          } catch {
          }
          e3.toColor = function(e4) {
            if (e4.match(/#[\da-f]{3,8}/i))
              switch (e4.length) {
                case 4:
                  return i2 = parseInt(e4.slice(1, 2).repeat(2), 16), s2 = parseInt(e4.slice(2, 3).repeat(2), 16), r = parseInt(e4.slice(3, 4).repeat(2), 16), o.toColor(i2, s2, r);
                case 5:
                  return i2 = parseInt(e4.slice(1, 2).repeat(2), 16), s2 = parseInt(e4.slice(2, 3).repeat(2), 16), r = parseInt(e4.slice(3, 4).repeat(2), 16), n = parseInt(e4.slice(4, 5).repeat(2), 16), o.toColor(i2, s2, r, n);
                case 7:
                  return { css: e4, rgba: (parseInt(e4.slice(1), 16) << 8 | 255) >>> 0 };
                case 9:
                  return { css: e4, rgba: parseInt(e4.slice(1), 16) >>> 0 };
              }
            const h2 = e4.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
            if (h2)
              return i2 = parseInt(h2[1]), s2 = parseInt(h2[2]), r = parseInt(h2[3]), n = Math.round(255 * (void 0 === h2[5] ? 1 : parseFloat(h2[5]))), o.toColor(i2, s2, r, n);
            if (!t3 || !a2)
              throw new Error("css.toColor: Unsupported css format");
            if (t3.fillStyle = a2, t3.fillStyle = e4, "string" != typeof t3.fillStyle)
              throw new Error("css.toColor: Unsupported css format");
            if (t3.fillRect(0, 0, 1, 1), [i2, s2, r, n] = t3.getImageData(0, 0, 1, 1).data, 255 !== n)
              throw new Error("css.toColor: Unsupported css format");
            return { rgba: o.toRgba(i2, s2, r, n), css: e4 };
          };
        }(h || (t2.css = h = {})), function(e3) {
          function t3(e4, t4, i3) {
            const s3 = e4 / 255, r2 = t4 / 255, n2 = i3 / 255;
            return 0.2126 * (s3 <= 0.03928 ? s3 / 12.92 : Math.pow((s3 + 0.055) / 1.055, 2.4)) + 0.7152 * (r2 <= 0.03928 ? r2 / 12.92 : Math.pow((r2 + 0.055) / 1.055, 2.4)) + 0.0722 * (n2 <= 0.03928 ? n2 / 12.92 : Math.pow((n2 + 0.055) / 1.055, 2.4));
          }
          e3.relativeLuminance = function(e4) {
            return t3(e4 >> 16 & 255, e4 >> 8 & 255, 255 & e4);
          }, e3.relativeLuminance2 = t3;
        }(c || (t2.rgb = c = {})), function(e3) {
          function t3(e4, t4, i3) {
            const s3 = e4 >> 24 & 255, r2 = e4 >> 16 & 255, n2 = e4 >> 8 & 255;
            let o2 = t4 >> 24 & 255, a3 = t4 >> 16 & 255, h2 = t4 >> 8 & 255, l2 = _(c.relativeLuminance2(o2, a3, h2), c.relativeLuminance2(s3, r2, n2));
            for (; l2 < i3 && (o2 > 0 || a3 > 0 || h2 > 0); )
              o2 -= Math.max(0, Math.ceil(0.1 * o2)), a3 -= Math.max(0, Math.ceil(0.1 * a3)), h2 -= Math.max(0, Math.ceil(0.1 * h2)), l2 = _(c.relativeLuminance2(o2, a3, h2), c.relativeLuminance2(s3, r2, n2));
            return (o2 << 24 | a3 << 16 | h2 << 8 | 255) >>> 0;
          }
          function a2(e4, t4, i3) {
            const s3 = e4 >> 24 & 255, r2 = e4 >> 16 & 255, n2 = e4 >> 8 & 255;
            let o2 = t4 >> 24 & 255, a3 = t4 >> 16 & 255, h2 = t4 >> 8 & 255, l2 = _(c.relativeLuminance2(o2, a3, h2), c.relativeLuminance2(s3, r2, n2));
            for (; l2 < i3 && (o2 < 255 || a3 < 255 || h2 < 255); )
              o2 = Math.min(255, o2 + Math.ceil(0.1 * (255 - o2))), a3 = Math.min(255, a3 + Math.ceil(0.1 * (255 - a3))), h2 = Math.min(255, h2 + Math.ceil(0.1 * (255 - h2))), l2 = _(c.relativeLuminance2(o2, a3, h2), c.relativeLuminance2(s3, r2, n2));
            return (o2 << 24 | a3 << 16 | h2 << 8 | 255) >>> 0;
          }
          e3.blend = function(e4, t4) {
            if (n = (255 & t4) / 255, 1 === n)
              return t4;
            const a3 = t4 >> 24 & 255, h2 = t4 >> 16 & 255, c2 = t4 >> 8 & 255, l2 = e4 >> 24 & 255, d2 = e4 >> 16 & 255, _2 = e4 >> 8 & 255;
            return i2 = l2 + Math.round((a3 - l2) * n), s2 = d2 + Math.round((h2 - d2) * n), r = _2 + Math.round((c2 - _2) * n), o.toRgba(i2, s2, r);
          }, e3.ensureContrastRatio = function(e4, i3, s3) {
            const r2 = c.relativeLuminance(e4 >> 8), n2 = c.relativeLuminance(i3 >> 8);
            if (_(r2, n2) < s3) {
              if (n2 < r2) {
                const n3 = t3(e4, i3, s3), o3 = _(r2, c.relativeLuminance(n3 >> 8));
                if (o3 < s3) {
                  const t4 = a2(e4, i3, s3);
                  return o3 > _(r2, c.relativeLuminance(t4 >> 8)) ? n3 : t4;
                }
                return n3;
              }
              const o2 = a2(e4, i3, s3), h2 = _(r2, c.relativeLuminance(o2 >> 8));
              if (h2 < s3) {
                const n3 = t3(e4, i3, s3);
                return h2 > _(r2, c.relativeLuminance(n3 >> 8)) ? o2 : n3;
              }
              return o2;
            }
          }, e3.reduceLuminance = t3, e3.increaseLuminance = a2, e3.toChannels = function(e4) {
            return [e4 >> 24 & 255, e4 >> 16 & 255, e4 >> 8 & 255, 255 & e4];
          };
        }(l || (t2.rgba = l = {})), t2.toPaddedHex = d, t2.contrastRatio = _;
      }, 8969: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreTerminal = void 0;
        const s2 = i2(844), r = i2(2585), n = i2(4348), o = i2(7866), a = i2(744), h = i2(7302), c = i2(6975), l = i2(8460), d = i2(1753), _ = i2(1480), u = i2(7994), f = i2(9282), v = i2(5435), p = i2(5981), g = i2(2660);
        let m = false;
        class S extends s2.Disposable {
          get onScroll() {
            return this._onScrollApi || (this._onScrollApi = this.register(new l.EventEmitter()), this._onScroll.event((e3) => {
              this._onScrollApi?.fire(e3.position);
            })), this._onScrollApi.event;
          }
          get cols() {
            return this._bufferService.cols;
          }
          get rows() {
            return this._bufferService.rows;
          }
          get buffers() {
            return this._bufferService.buffers;
          }
          get options() {
            return this.optionsService.options;
          }
          set options(e3) {
            for (const t3 in e3)
              this.optionsService.options[t3] = e3[t3];
          }
          constructor(e3) {
            super(), this._windowsWrappingHeuristics = this.register(new s2.MutableDisposable()), this._onBinary = this.register(new l.EventEmitter()), this.onBinary = this._onBinary.event, this._onData = this.register(new l.EventEmitter()), this.onData = this._onData.event, this._onLineFeed = this.register(new l.EventEmitter()), this.onLineFeed = this._onLineFeed.event, this._onResize = this.register(new l.EventEmitter()), this.onResize = this._onResize.event, this._onWriteParsed = this.register(new l.EventEmitter()), this.onWriteParsed = this._onWriteParsed.event, this._onScroll = this.register(new l.EventEmitter()), this._instantiationService = new n.InstantiationService(), this.optionsService = this.register(new h.OptionsService(e3)), this._instantiationService.setService(r.IOptionsService, this.optionsService), this._bufferService = this.register(this._instantiationService.createInstance(a.BufferService)), this._instantiationService.setService(r.IBufferService, this._bufferService), this._logService = this.register(this._instantiationService.createInstance(o.LogService)), this._instantiationService.setService(r.ILogService, this._logService), this.coreService = this.register(this._instantiationService.createInstance(c.CoreService)), this._instantiationService.setService(r.ICoreService, this.coreService), this.coreMouseService = this.register(this._instantiationService.createInstance(d.CoreMouseService)), this._instantiationService.setService(r.ICoreMouseService, this.coreMouseService), this.unicodeService = this.register(this._instantiationService.createInstance(_.UnicodeService)), this._instantiationService.setService(r.IUnicodeService, this.unicodeService), this._charsetService = this._instantiationService.createInstance(u.CharsetService), this._instantiationService.setService(r.ICharsetService, this._charsetService), this._oscLinkService = this._instantiationService.createInstance(g.OscLinkService), this._instantiationService.setService(r.IOscLinkService, this._oscLinkService), this._inputHandler = this.register(new v.InputHandler(this._bufferService, this._charsetService, this.coreService, this._logService, this.optionsService, this._oscLinkService, this.coreMouseService, this.unicodeService)), this.register((0, l.forwardEvent)(this._inputHandler.onLineFeed, this._onLineFeed)), this.register(this._inputHandler), this.register((0, l.forwardEvent)(this._bufferService.onResize, this._onResize)), this.register((0, l.forwardEvent)(this.coreService.onData, this._onData)), this.register((0, l.forwardEvent)(this.coreService.onBinary, this._onBinary)), this.register(this.coreService.onRequestScrollToBottom(() => this.scrollToBottom())), this.register(this.coreService.onUserInput(() => this._writeBuffer.handleUserInput())), this.register(this.optionsService.onMultipleOptionChange(["windowsMode", "windowsPty"], () => this._handleWindowsPtyOptionChange())), this.register(this._bufferService.onScroll((e4) => {
              this._onScroll.fire({ position: this._bufferService.buffer.ydisp, source: 0 }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
            })), this.register(this._inputHandler.onScroll((e4) => {
              this._onScroll.fire({ position: this._bufferService.buffer.ydisp, source: 0 }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
            })), this._writeBuffer = this.register(new p.WriteBuffer((e4, t3) => this._inputHandler.parse(e4, t3))), this.register((0, l.forwardEvent)(this._writeBuffer.onWriteParsed, this._onWriteParsed));
          }
          write(e3, t3) {
            this._writeBuffer.write(e3, t3);
          }
          writeSync(e3, t3) {
            this._logService.logLevel <= r.LogLevelEnum.WARN && !m && (this._logService.warn("writeSync is unreliable and will be removed soon."), m = true), this._writeBuffer.writeSync(e3, t3);
          }
          input(e3, t3 = true) {
            this.coreService.triggerDataEvent(e3, t3);
          }
          resize(e3, t3) {
            isNaN(e3) || isNaN(t3) || (e3 = Math.max(e3, a.MINIMUM_COLS), t3 = Math.max(t3, a.MINIMUM_ROWS), this._bufferService.resize(e3, t3));
          }
          scroll(e3, t3 = false) {
            this._bufferService.scroll(e3, t3);
          }
          scrollLines(e3, t3, i3) {
            this._bufferService.scrollLines(e3, t3, i3);
          }
          scrollPages(e3) {
            this.scrollLines(e3 * (this.rows - 1));
          }
          scrollToTop() {
            this.scrollLines(-this._bufferService.buffer.ydisp);
          }
          scrollToBottom() {
            this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
          }
          scrollToLine(e3) {
            const t3 = e3 - this._bufferService.buffer.ydisp;
            0 !== t3 && this.scrollLines(t3);
          }
          registerEscHandler(e3, t3) {
            return this._inputHandler.registerEscHandler(e3, t3);
          }
          registerDcsHandler(e3, t3) {
            return this._inputHandler.registerDcsHandler(e3, t3);
          }
          registerCsiHandler(e3, t3) {
            return this._inputHandler.registerCsiHandler(e3, t3);
          }
          registerOscHandler(e3, t3) {
            return this._inputHandler.registerOscHandler(e3, t3);
          }
          _setup() {
            this._handleWindowsPtyOptionChange();
          }
          reset() {
            this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this.coreService.reset(), this.coreMouseService.reset();
          }
          _handleWindowsPtyOptionChange() {
            let e3 = false;
            const t3 = this.optionsService.rawOptions.windowsPty;
            t3 && void 0 !== t3.buildNumber && void 0 !== t3.buildNumber ? e3 = !!("conpty" === t3.backend && t3.buildNumber < 21376) : this.optionsService.rawOptions.windowsMode && (e3 = true), e3 ? this._enableWindowsWrappingHeuristics() : this._windowsWrappingHeuristics.clear();
          }
          _enableWindowsWrappingHeuristics() {
            if (!this._windowsWrappingHeuristics.value) {
              const e3 = [];
              e3.push(this.onLineFeed(f.updateWindowsModeWrappedState.bind(null, this._bufferService))), e3.push(this.registerCsiHandler({ final: "H" }, () => ((0, f.updateWindowsModeWrappedState)(this._bufferService), false))), this._windowsWrappingHeuristics.value = (0, s2.toDisposable)(() => {
                for (const t3 of e3)
                  t3.dispose();
              });
            }
          }
        }
        t2.CoreTerminal = S;
      }, 8460: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.runAndSubscribe = t2.forwardEvent = t2.EventEmitter = void 0, t2.EventEmitter = class {
          constructor() {
            this._listeners = [], this._disposed = false;
          }
          get event() {
            return this._event || (this._event = (e3) => (this._listeners.push(e3), { dispose: () => {
              if (!this._disposed) {
                for (let t3 = 0; t3 < this._listeners.length; t3++)
                  if (this._listeners[t3] === e3)
                    return void this._listeners.splice(t3, 1);
              }
            } })), this._event;
          }
          fire(e3, t3) {
            const i2 = [];
            for (let e4 = 0; e4 < this._listeners.length; e4++)
              i2.push(this._listeners[e4]);
            for (let s2 = 0; s2 < i2.length; s2++)
              i2[s2].call(void 0, e3, t3);
          }
          dispose() {
            this.clearListeners(), this._disposed = true;
          }
          clearListeners() {
            this._listeners && (this._listeners.length = 0);
          }
        }, t2.forwardEvent = function(e3, t3) {
          return e3((e4) => t3.fire(e4));
        }, t2.runAndSubscribe = function(e3, t3) {
          return t3(void 0), e3((e4) => t3(e4));
        };
      }, 5435: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.InputHandler = t2.WindowsOptionsReportType = void 0;
        const n = i2(2584), o = i2(7116), a = i2(2015), h = i2(844), c = i2(482), l = i2(8437), d = i2(8460), _ = i2(643), u = i2(511), f = i2(3734), v = i2(2585), p = i2(1480), g = i2(6242), m = i2(6351), S = i2(5941), C = { "(": 0, ")": 1, "*": 2, "+": 3, "-": 1, ".": 2 }, b = 131072;
        function w(e3, t3) {
          if (e3 > 24)
            return t3.setWinLines || false;
          switch (e3) {
            case 1:
              return !!t3.restoreWin;
            case 2:
              return !!t3.minimizeWin;
            case 3:
              return !!t3.setWinPosition;
            case 4:
              return !!t3.setWinSizePixels;
            case 5:
              return !!t3.raiseWin;
            case 6:
              return !!t3.lowerWin;
            case 7:
              return !!t3.refreshWin;
            case 8:
              return !!t3.setWinSizeChars;
            case 9:
              return !!t3.maximizeWin;
            case 10:
              return !!t3.fullscreenWin;
            case 11:
              return !!t3.getWinState;
            case 13:
              return !!t3.getWinPosition;
            case 14:
              return !!t3.getWinSizePixels;
            case 15:
              return !!t3.getScreenSizePixels;
            case 16:
              return !!t3.getCellSizePixels;
            case 18:
              return !!t3.getWinSizeChars;
            case 19:
              return !!t3.getScreenSizeChars;
            case 20:
              return !!t3.getIconTitle;
            case 21:
              return !!t3.getWinTitle;
            case 22:
              return !!t3.pushTitle;
            case 23:
              return !!t3.popTitle;
            case 24:
              return !!t3.setWinLines;
          }
          return false;
        }
        var y;
        !function(e3) {
          e3[e3.GET_WIN_SIZE_PIXELS = 0] = "GET_WIN_SIZE_PIXELS", e3[e3.GET_CELL_SIZE_PIXELS = 1] = "GET_CELL_SIZE_PIXELS";
        }(y || (t2.WindowsOptionsReportType = y = {}));
        let E = 0;
        class k extends h.Disposable {
          getAttrData() {
            return this._curAttrData;
          }
          constructor(e3, t3, i3, s3, r2, h2, _2, f2, v2 = new a.EscapeSequenceParser()) {
            super(), this._bufferService = e3, this._charsetService = t3, this._coreService = i3, this._logService = s3, this._optionsService = r2, this._oscLinkService = h2, this._coreMouseService = _2, this._unicodeService = f2, this._parser = v2, this._parseBuffer = new Uint32Array(4096), this._stringDecoder = new c.StringToUtf32(), this._utf8Decoder = new c.Utf8ToUtf32(), this._workCell = new u.CellData(), this._windowTitle = "", this._iconName = "", this._windowTitleStack = [], this._iconNameStack = [], this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = l.DEFAULT_ATTR_DATA.clone(), this._onRequestBell = this.register(new d.EventEmitter()), this.onRequestBell = this._onRequestBell.event, this._onRequestRefreshRows = this.register(new d.EventEmitter()), this.onRequestRefreshRows = this._onRequestRefreshRows.event, this._onRequestReset = this.register(new d.EventEmitter()), this.onRequestReset = this._onRequestReset.event, this._onRequestSendFocus = this.register(new d.EventEmitter()), this.onRequestSendFocus = this._onRequestSendFocus.event, this._onRequestSyncScrollBar = this.register(new d.EventEmitter()), this.onRequestSyncScrollBar = this._onRequestSyncScrollBar.event, this._onRequestWindowsOptionsReport = this.register(new d.EventEmitter()), this.onRequestWindowsOptionsReport = this._onRequestWindowsOptionsReport.event, this._onA11yChar = this.register(new d.EventEmitter()), this.onA11yChar = this._onA11yChar.event, this._onA11yTab = this.register(new d.EventEmitter()), this.onA11yTab = this._onA11yTab.event, this._onCursorMove = this.register(new d.EventEmitter()), this.onCursorMove = this._onCursorMove.event, this._onLineFeed = this.register(new d.EventEmitter()), this.onLineFeed = this._onLineFeed.event, this._onScroll = this.register(new d.EventEmitter()), this.onScroll = this._onScroll.event, this._onTitleChange = this.register(new d.EventEmitter()), this.onTitleChange = this._onTitleChange.event, this._onColor = this.register(new d.EventEmitter()), this.onColor = this._onColor.event, this._parseStack = { paused: false, cursorStartX: 0, cursorStartY: 0, decodedLength: 0, position: 0 }, this._specialColors = [256, 257, 258], this.register(this._parser), this._dirtyRowTracker = new L(this._bufferService), this._activeBuffer = this._bufferService.buffer, this.register(this._bufferService.buffers.onBufferActivate((e4) => this._activeBuffer = e4.activeBuffer)), this._parser.setCsiHandlerFallback((e4, t4) => {
              this._logService.debug("Unknown CSI code: ", { identifier: this._parser.identToString(e4), params: t4.toArray() });
            }), this._parser.setEscHandlerFallback((e4) => {
              this._logService.debug("Unknown ESC code: ", { identifier: this._parser.identToString(e4) });
            }), this._parser.setExecuteHandlerFallback((e4) => {
              this._logService.debug("Unknown EXECUTE code: ", { code: e4 });
            }), this._parser.setOscHandlerFallback((e4, t4, i4) => {
              this._logService.debug("Unknown OSC code: ", { identifier: e4, action: t4, data: i4 });
            }), this._parser.setDcsHandlerFallback((e4, t4, i4) => {
              "HOOK" === t4 && (i4 = i4.toArray()), this._logService.debug("Unknown DCS code: ", { identifier: this._parser.identToString(e4), action: t4, payload: i4 });
            }), this._parser.setPrintHandler((e4, t4, i4) => this.print(e4, t4, i4)), this._parser.registerCsiHandler({ final: "@" }, (e4) => this.insertChars(e4)), this._parser.registerCsiHandler({ intermediates: " ", final: "@" }, (e4) => this.scrollLeft(e4)), this._parser.registerCsiHandler({ final: "A" }, (e4) => this.cursorUp(e4)), this._parser.registerCsiHandler({ intermediates: " ", final: "A" }, (e4) => this.scrollRight(e4)), this._parser.registerCsiHandler({ final: "B" }, (e4) => this.cursorDown(e4)), this._parser.registerCsiHandler({ final: "C" }, (e4) => this.cursorForward(e4)), this._parser.registerCsiHandler({ final: "D" }, (e4) => this.cursorBackward(e4)), this._parser.registerCsiHandler({ final: "E" }, (e4) => this.cursorNextLine(e4)), this._parser.registerCsiHandler({ final: "F" }, (e4) => this.cursorPrecedingLine(e4)), this._parser.registerCsiHandler({ final: "G" }, (e4) => this.cursorCharAbsolute(e4)), this._parser.registerCsiHandler({ final: "H" }, (e4) => this.cursorPosition(e4)), this._parser.registerCsiHandler({ final: "I" }, (e4) => this.cursorForwardTab(e4)), this._parser.registerCsiHandler({ final: "J" }, (e4) => this.eraseInDisplay(e4, false)), this._parser.registerCsiHandler({ prefix: "?", final: "J" }, (e4) => this.eraseInDisplay(e4, true)), this._parser.registerCsiHandler({ final: "K" }, (e4) => this.eraseInLine(e4, false)), this._parser.registerCsiHandler({ prefix: "?", final: "K" }, (e4) => this.eraseInLine(e4, true)), this._parser.registerCsiHandler({ final: "L" }, (e4) => this.insertLines(e4)), this._parser.registerCsiHandler({ final: "M" }, (e4) => this.deleteLines(e4)), this._parser.registerCsiHandler({ final: "P" }, (e4) => this.deleteChars(e4)), this._parser.registerCsiHandler({ final: "S" }, (e4) => this.scrollUp(e4)), this._parser.registerCsiHandler({ final: "T" }, (e4) => this.scrollDown(e4)), this._parser.registerCsiHandler({ final: "X" }, (e4) => this.eraseChars(e4)), this._parser.registerCsiHandler({ final: "Z" }, (e4) => this.cursorBackwardTab(e4)), this._parser.registerCsiHandler({ final: "`" }, (e4) => this.charPosAbsolute(e4)), this._parser.registerCsiHandler({ final: "a" }, (e4) => this.hPositionRelative(e4)), this._parser.registerCsiHandler({ final: "b" }, (e4) => this.repeatPrecedingCharacter(e4)), this._parser.registerCsiHandler({ final: "c" }, (e4) => this.sendDeviceAttributesPrimary(e4)), this._parser.registerCsiHandler({ prefix: ">", final: "c" }, (e4) => this.sendDeviceAttributesSecondary(e4)), this._parser.registerCsiHandler({ final: "d" }, (e4) => this.linePosAbsolute(e4)), this._parser.registerCsiHandler({ final: "e" }, (e4) => this.vPositionRelative(e4)), this._parser.registerCsiHandler({ final: "f" }, (e4) => this.hVPosition(e4)), this._parser.registerCsiHandler({ final: "g" }, (e4) => this.tabClear(e4)), this._parser.registerCsiHandler({ final: "h" }, (e4) => this.setMode(e4)), this._parser.registerCsiHandler({ prefix: "?", final: "h" }, (e4) => this.setModePrivate(e4)), this._parser.registerCsiHandler({ final: "l" }, (e4) => this.resetMode(e4)), this._parser.registerCsiHandler({ prefix: "?", final: "l" }, (e4) => this.resetModePrivate(e4)), this._parser.registerCsiHandler({ final: "m" }, (e4) => this.charAttributes(e4)), this._parser.registerCsiHandler({ final: "n" }, (e4) => this.deviceStatus(e4)), this._parser.registerCsiHandler({ prefix: "?", final: "n" }, (e4) => this.deviceStatusPrivate(e4)), this._parser.registerCsiHandler({ intermediates: "!", final: "p" }, (e4) => this.softReset(e4)), this._parser.registerCsiHandler({ intermediates: " ", final: "q" }, (e4) => this.setCursorStyle(e4)), this._parser.registerCsiHandler({ final: "r" }, (e4) => this.setScrollRegion(e4)), this._parser.registerCsiHandler({ final: "s" }, (e4) => this.saveCursor(e4)), this._parser.registerCsiHandler({ final: "t" }, (e4) => this.windowOptions(e4)), this._parser.registerCsiHandler({ final: "u" }, (e4) => this.restoreCursor(e4)), this._parser.registerCsiHandler({ intermediates: "'", final: "}" }, (e4) => this.insertColumns(e4)), this._parser.registerCsiHandler({ intermediates: "'", final: "~" }, (e4) => this.deleteColumns(e4)), this._parser.registerCsiHandler({ intermediates: '"', final: "q" }, (e4) => this.selectProtected(e4)), this._parser.registerCsiHandler({ intermediates: "$", final: "p" }, (e4) => this.requestMode(e4, true)), this._parser.registerCsiHandler({ prefix: "?", intermediates: "$", final: "p" }, (e4) => this.requestMode(e4, false)), this._parser.setExecuteHandler(n.C0.BEL, () => this.bell()), this._parser.setExecuteHandler(n.C0.LF, () => this.lineFeed()), this._parser.setExecuteHandler(n.C0.VT, () => this.lineFeed()), this._parser.setExecuteHandler(n.C0.FF, () => this.lineFeed()), this._parser.setExecuteHandler(n.C0.CR, () => this.carriageReturn()), this._parser.setExecuteHandler(n.C0.BS, () => this.backspace()), this._parser.setExecuteHandler(n.C0.HT, () => this.tab()), this._parser.setExecuteHandler(n.C0.SO, () => this.shiftOut()), this._parser.setExecuteHandler(n.C0.SI, () => this.shiftIn()), this._parser.setExecuteHandler(n.C1.IND, () => this.index()), this._parser.setExecuteHandler(n.C1.NEL, () => this.nextLine()), this._parser.setExecuteHandler(n.C1.HTS, () => this.tabSet()), this._parser.registerOscHandler(0, new g.OscHandler((e4) => (this.setTitle(e4), this.setIconName(e4), true))), this._parser.registerOscHandler(1, new g.OscHandler((e4) => this.setIconName(e4))), this._parser.registerOscHandler(2, new g.OscHandler((e4) => this.setTitle(e4))), this._parser.registerOscHandler(4, new g.OscHandler((e4) => this.setOrReportIndexedColor(e4))), this._parser.registerOscHandler(8, new g.OscHandler((e4) => this.setHyperlink(e4))), this._parser.registerOscHandler(10, new g.OscHandler((e4) => this.setOrReportFgColor(e4))), this._parser.registerOscHandler(11, new g.OscHandler((e4) => this.setOrReportBgColor(e4))), this._parser.registerOscHandler(12, new g.OscHandler((e4) => this.setOrReportCursorColor(e4))), this._parser.registerOscHandler(104, new g.OscHandler((e4) => this.restoreIndexedColor(e4))), this._parser.registerOscHandler(110, new g.OscHandler((e4) => this.restoreFgColor(e4))), this._parser.registerOscHandler(111, new g.OscHandler((e4) => this.restoreBgColor(e4))), this._parser.registerOscHandler(112, new g.OscHandler((e4) => this.restoreCursorColor(e4))), this._parser.registerEscHandler({ final: "7" }, () => this.saveCursor()), this._parser.registerEscHandler({ final: "8" }, () => this.restoreCursor()), this._parser.registerEscHandler({ final: "D" }, () => this.index()), this._parser.registerEscHandler({ final: "E" }, () => this.nextLine()), this._parser.registerEscHandler({ final: "H" }, () => this.tabSet()), this._parser.registerEscHandler({ final: "M" }, () => this.reverseIndex()), this._parser.registerEscHandler({ final: "=" }, () => this.keypadApplicationMode()), this._parser.registerEscHandler({ final: ">" }, () => this.keypadNumericMode()), this._parser.registerEscHandler({ final: "c" }, () => this.fullReset()), this._parser.registerEscHandler({ final: "n" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "o" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "|" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "}" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "~" }, () => this.setgLevel(1)), this._parser.registerEscHandler({ intermediates: "%", final: "@" }, () => this.selectDefaultCharset()), this._parser.registerEscHandler({ intermediates: "%", final: "G" }, () => this.selectDefaultCharset());
            for (const e4 in o.CHARSETS)
              this._parser.registerEscHandler({ intermediates: "(", final: e4 }, () => this.selectCharset("(" + e4)), this._parser.registerEscHandler({ intermediates: ")", final: e4 }, () => this.selectCharset(")" + e4)), this._parser.registerEscHandler({ intermediates: "*", final: e4 }, () => this.selectCharset("*" + e4)), this._parser.registerEscHandler({ intermediates: "+", final: e4 }, () => this.selectCharset("+" + e4)), this._parser.registerEscHandler({ intermediates: "-", final: e4 }, () => this.selectCharset("-" + e4)), this._parser.registerEscHandler({ intermediates: ".", final: e4 }, () => this.selectCharset("." + e4)), this._parser.registerEscHandler({ intermediates: "/", final: e4 }, () => this.selectCharset("/" + e4));
            this._parser.registerEscHandler({ intermediates: "#", final: "8" }, () => this.screenAlignmentPattern()), this._parser.setErrorHandler((e4) => (this._logService.error("Parsing error: ", e4), e4)), this._parser.registerDcsHandler({ intermediates: "$", final: "q" }, new m.DcsHandler((e4, t4) => this.requestStatusString(e4, t4)));
          }
          _preserveStack(e3, t3, i3, s3) {
            this._parseStack.paused = true, this._parseStack.cursorStartX = e3, this._parseStack.cursorStartY = t3, this._parseStack.decodedLength = i3, this._parseStack.position = s3;
          }
          _logSlowResolvingAsync(e3) {
            this._logService.logLevel <= v.LogLevelEnum.WARN && Promise.race([e3, new Promise((e4, t3) => setTimeout(() => t3("#SLOW_TIMEOUT"), 5e3))]).catch((e4) => {
              if ("#SLOW_TIMEOUT" !== e4)
                throw e4;
              console.warn("async parser handler taking longer than 5000 ms");
            });
          }
          _getCurrentLinkId() {
            return this._curAttrData.extended.urlId;
          }
          parse(e3, t3) {
            let i3, s3 = this._activeBuffer.x, r2 = this._activeBuffer.y, n2 = 0;
            const o2 = this._parseStack.paused;
            if (o2) {
              if (i3 = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, t3))
                return this._logSlowResolvingAsync(i3), i3;
              s3 = this._parseStack.cursorStartX, r2 = this._parseStack.cursorStartY, this._parseStack.paused = false, e3.length > b && (n2 = this._parseStack.position + b);
            }
            if (this._logService.logLevel <= v.LogLevelEnum.DEBUG && this._logService.debug("parsing data" + ("string" == typeof e3 ? ` "${e3}"` : ` "${Array.prototype.map.call(e3, (e4) => String.fromCharCode(e4)).join("")}"`), "string" == typeof e3 ? e3.split("").map((e4) => e4.charCodeAt(0)) : e3), this._parseBuffer.length < e3.length && this._parseBuffer.length < b && (this._parseBuffer = new Uint32Array(Math.min(e3.length, b))), o2 || this._dirtyRowTracker.clearRange(), e3.length > b)
              for (let t4 = n2; t4 < e3.length; t4 += b) {
                const n3 = t4 + b < e3.length ? t4 + b : e3.length, o3 = "string" == typeof e3 ? this._stringDecoder.decode(e3.substring(t4, n3), this._parseBuffer) : this._utf8Decoder.decode(e3.subarray(t4, n3), this._parseBuffer);
                if (i3 = this._parser.parse(this._parseBuffer, o3))
                  return this._preserveStack(s3, r2, o3, t4), this._logSlowResolvingAsync(i3), i3;
              }
            else if (!o2) {
              const t4 = "string" == typeof e3 ? this._stringDecoder.decode(e3, this._parseBuffer) : this._utf8Decoder.decode(e3, this._parseBuffer);
              if (i3 = this._parser.parse(this._parseBuffer, t4))
                return this._preserveStack(s3, r2, t4, 0), this._logSlowResolvingAsync(i3), i3;
            }
            this._activeBuffer.x === s3 && this._activeBuffer.y === r2 || this._onCursorMove.fire();
            const a2 = this._dirtyRowTracker.end + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp), h2 = this._dirtyRowTracker.start + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
            h2 < this._bufferService.rows && this._onRequestRefreshRows.fire(Math.min(h2, this._bufferService.rows - 1), Math.min(a2, this._bufferService.rows - 1));
          }
          print(e3, t3, i3) {
            let s3, r2;
            const n2 = this._charsetService.charset, o2 = this._optionsService.rawOptions.screenReaderMode, a2 = this._bufferService.cols, h2 = this._coreService.decPrivateModes.wraparound, d2 = this._coreService.modes.insertMode, u2 = this._curAttrData;
            let f2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
            this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._activeBuffer.x && i3 - t3 > 0 && 2 === f2.getWidth(this._activeBuffer.x - 1) && f2.setCellFromCodepoint(this._activeBuffer.x - 1, 0, 1, u2);
            let v2 = this._parser.precedingJoinState;
            for (let g2 = t3; g2 < i3; ++g2) {
              if (s3 = e3[g2], s3 < 127 && n2) {
                const e4 = n2[String.fromCharCode(s3)];
                e4 && (s3 = e4.charCodeAt(0));
              }
              const t4 = this._unicodeService.charProperties(s3, v2);
              r2 = p.UnicodeService.extractWidth(t4);
              const i4 = p.UnicodeService.extractShouldJoin(t4), m2 = i4 ? p.UnicodeService.extractWidth(v2) : 0;
              if (v2 = t4, o2 && this._onA11yChar.fire((0, c.stringFromCodePoint)(s3)), this._getCurrentLinkId() && this._oscLinkService.addLineToLink(this._getCurrentLinkId(), this._activeBuffer.ybase + this._activeBuffer.y), this._activeBuffer.x + r2 - m2 > a2) {
                if (h2) {
                  const e4 = f2;
                  let t5 = this._activeBuffer.x - m2;
                  for (this._activeBuffer.x = m2, this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData(), true)) : (this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = true), f2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y), m2 > 0 && f2 instanceof l.BufferLine && f2.copyCellsFrom(e4, t5, 0, m2, false); t5 < a2; )
                    e4.setCellFromCodepoint(t5++, 0, 1, u2);
                } else if (this._activeBuffer.x = a2 - 1, 2 === r2)
                  continue;
              }
              if (i4 && this._activeBuffer.x) {
                const e4 = f2.getWidth(this._activeBuffer.x - 1) ? 1 : 2;
                f2.addCodepointToCell(this._activeBuffer.x - e4, s3, r2);
                for (let e5 = r2 - m2; --e5 >= 0; )
                  f2.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, u2);
              } else if (d2 && (f2.insertCells(this._activeBuffer.x, r2 - m2, this._activeBuffer.getNullCell(u2)), 2 === f2.getWidth(a2 - 1) && f2.setCellFromCodepoint(a2 - 1, _.NULL_CELL_CODE, _.NULL_CELL_WIDTH, u2)), f2.setCellFromCodepoint(this._activeBuffer.x++, s3, r2, u2), r2 > 0)
                for (; --r2; )
                  f2.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, u2);
            }
            this._parser.precedingJoinState = v2, this._activeBuffer.x < a2 && i3 - t3 > 0 && 0 === f2.getWidth(this._activeBuffer.x) && !f2.hasContent(this._activeBuffer.x) && f2.setCellFromCodepoint(this._activeBuffer.x, 0, 1, u2), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
          }
          registerCsiHandler(e3, t3) {
            return "t" !== e3.final || e3.prefix || e3.intermediates ? this._parser.registerCsiHandler(e3, t3) : this._parser.registerCsiHandler(e3, (e4) => !w(e4.params[0], this._optionsService.rawOptions.windowOptions) || t3(e4));
          }
          registerDcsHandler(e3, t3) {
            return this._parser.registerDcsHandler(e3, new m.DcsHandler(t3));
          }
          registerEscHandler(e3, t3) {
            return this._parser.registerEscHandler(e3, t3);
          }
          registerOscHandler(e3, t3) {
            return this._parser.registerOscHandler(e3, new g.OscHandler(t3));
          }
          bell() {
            return this._onRequestBell.fire(), true;
          }
          lineFeed() {
            return this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._optionsService.rawOptions.convertEol && (this._activeBuffer.x = 0), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows ? this._activeBuffer.y = this._bufferService.rows - 1 : this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false, this._activeBuffer.x >= this._bufferService.cols && this._activeBuffer.x--, this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._onLineFeed.fire(), true;
          }
          carriageReturn() {
            return this._activeBuffer.x = 0, true;
          }
          backspace() {
            if (!this._coreService.decPrivateModes.reverseWraparound)
              return this._restrictCursor(), this._activeBuffer.x > 0 && this._activeBuffer.x--, true;
            if (this._restrictCursor(this._bufferService.cols), this._activeBuffer.x > 0)
              this._activeBuffer.x--;
            else if (0 === this._activeBuffer.x && this._activeBuffer.y > this._activeBuffer.scrollTop && this._activeBuffer.y <= this._activeBuffer.scrollBottom && this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)?.isWrapped) {
              this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false, this._activeBuffer.y--, this._activeBuffer.x = this._bufferService.cols - 1;
              const e3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
              e3.hasWidth(this._activeBuffer.x) && !e3.hasContent(this._activeBuffer.x) && this._activeBuffer.x--;
            }
            return this._restrictCursor(), true;
          }
          tab() {
            if (this._activeBuffer.x >= this._bufferService.cols)
              return true;
            const e3 = this._activeBuffer.x;
            return this._activeBuffer.x = this._activeBuffer.nextStop(), this._optionsService.rawOptions.screenReaderMode && this._onA11yTab.fire(this._activeBuffer.x - e3), true;
          }
          shiftOut() {
            return this._charsetService.setgLevel(1), true;
          }
          shiftIn() {
            return this._charsetService.setgLevel(0), true;
          }
          _restrictCursor(e3 = this._bufferService.cols - 1) {
            this._activeBuffer.x = Math.min(e3, Math.max(0, this._activeBuffer.x)), this._activeBuffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._activeBuffer.scrollBottom, Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y)), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
          }
          _setCursor(e3, t3) {
            this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._coreService.decPrivateModes.origin ? (this._activeBuffer.x = e3, this._activeBuffer.y = this._activeBuffer.scrollTop + t3) : (this._activeBuffer.x = e3, this._activeBuffer.y = t3), this._restrictCursor(), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
          }
          _moveCursor(e3, t3) {
            this._restrictCursor(), this._setCursor(this._activeBuffer.x + e3, this._activeBuffer.y + t3);
          }
          cursorUp(e3) {
            const t3 = this._activeBuffer.y - this._activeBuffer.scrollTop;
            return t3 >= 0 ? this._moveCursor(0, -Math.min(t3, e3.params[0] || 1)) : this._moveCursor(0, -(e3.params[0] || 1)), true;
          }
          cursorDown(e3) {
            const t3 = this._activeBuffer.scrollBottom - this._activeBuffer.y;
            return t3 >= 0 ? this._moveCursor(0, Math.min(t3, e3.params[0] || 1)) : this._moveCursor(0, e3.params[0] || 1), true;
          }
          cursorForward(e3) {
            return this._moveCursor(e3.params[0] || 1, 0), true;
          }
          cursorBackward(e3) {
            return this._moveCursor(-(e3.params[0] || 1), 0), true;
          }
          cursorNextLine(e3) {
            return this.cursorDown(e3), this._activeBuffer.x = 0, true;
          }
          cursorPrecedingLine(e3) {
            return this.cursorUp(e3), this._activeBuffer.x = 0, true;
          }
          cursorCharAbsolute(e3) {
            return this._setCursor((e3.params[0] || 1) - 1, this._activeBuffer.y), true;
          }
          cursorPosition(e3) {
            return this._setCursor(e3.length >= 2 ? (e3.params[1] || 1) - 1 : 0, (e3.params[0] || 1) - 1), true;
          }
          charPosAbsolute(e3) {
            return this._setCursor((e3.params[0] || 1) - 1, this._activeBuffer.y), true;
          }
          hPositionRelative(e3) {
            return this._moveCursor(e3.params[0] || 1, 0), true;
          }
          linePosAbsolute(e3) {
            return this._setCursor(this._activeBuffer.x, (e3.params[0] || 1) - 1), true;
          }
          vPositionRelative(e3) {
            return this._moveCursor(0, e3.params[0] || 1), true;
          }
          hVPosition(e3) {
            return this.cursorPosition(e3), true;
          }
          tabClear(e3) {
            const t3 = e3.params[0];
            return 0 === t3 ? delete this._activeBuffer.tabs[this._activeBuffer.x] : 3 === t3 && (this._activeBuffer.tabs = {}), true;
          }
          cursorForwardTab(e3) {
            if (this._activeBuffer.x >= this._bufferService.cols)
              return true;
            let t3 = e3.params[0] || 1;
            for (; t3--; )
              this._activeBuffer.x = this._activeBuffer.nextStop();
            return true;
          }
          cursorBackwardTab(e3) {
            if (this._activeBuffer.x >= this._bufferService.cols)
              return true;
            let t3 = e3.params[0] || 1;
            for (; t3--; )
              this._activeBuffer.x = this._activeBuffer.prevStop();
            return true;
          }
          selectProtected(e3) {
            const t3 = e3.params[0];
            return 1 === t3 && (this._curAttrData.bg |= 536870912), 2 !== t3 && 0 !== t3 || (this._curAttrData.bg &= -536870913), true;
          }
          _eraseInBufferLine(e3, t3, i3, s3 = false, r2 = false) {
            const n2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e3);
            n2.replaceCells(t3, i3, this._activeBuffer.getNullCell(this._eraseAttrData()), r2), s3 && (n2.isWrapped = false);
          }
          _resetBufferLine(e3, t3 = false) {
            const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e3);
            i3 && (i3.fill(this._activeBuffer.getNullCell(this._eraseAttrData()), t3), this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase + e3), i3.isWrapped = false);
          }
          eraseInDisplay(e3, t3 = false) {
            let i3;
            switch (this._restrictCursor(this._bufferService.cols), e3.params[0]) {
              case 0:
                for (i3 = this._activeBuffer.y, this._dirtyRowTracker.markDirty(i3), this._eraseInBufferLine(i3++, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x, t3); i3 < this._bufferService.rows; i3++)
                  this._resetBufferLine(i3, t3);
                this._dirtyRowTracker.markDirty(i3);
                break;
              case 1:
                for (i3 = this._activeBuffer.y, this._dirtyRowTracker.markDirty(i3), this._eraseInBufferLine(i3, 0, this._activeBuffer.x + 1, true, t3), this._activeBuffer.x + 1 >= this._bufferService.cols && (this._activeBuffer.lines.get(i3 + 1).isWrapped = false); i3--; )
                  this._resetBufferLine(i3, t3);
                this._dirtyRowTracker.markDirty(0);
                break;
              case 2:
                for (i3 = this._bufferService.rows, this._dirtyRowTracker.markDirty(i3 - 1); i3--; )
                  this._resetBufferLine(i3, t3);
                this._dirtyRowTracker.markDirty(0);
                break;
              case 3:
                const e4 = this._activeBuffer.lines.length - this._bufferService.rows;
                e4 > 0 && (this._activeBuffer.lines.trimStart(e4), this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - e4, 0), this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - e4, 0), this._onScroll.fire(0));
            }
            return true;
          }
          eraseInLine(e3, t3 = false) {
            switch (this._restrictCursor(this._bufferService.cols), e3.params[0]) {
              case 0:
                this._eraseInBufferLine(this._activeBuffer.y, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x, t3);
                break;
              case 1:
                this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, false, t3);
                break;
              case 2:
                this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, true, t3);
            }
            return this._dirtyRowTracker.markDirty(this._activeBuffer.y), true;
          }
          insertLines(e3) {
            this._restrictCursor();
            let t3 = e3.params[0] || 1;
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
              return true;
            const i3 = this._activeBuffer.ybase + this._activeBuffer.y, s3 = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, r2 = this._bufferService.rows - 1 + this._activeBuffer.ybase - s3 + 1;
            for (; t3--; )
              this._activeBuffer.lines.splice(r2 - 1, 1), this._activeBuffer.lines.splice(i3, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
          }
          deleteLines(e3) {
            this._restrictCursor();
            let t3 = e3.params[0] || 1;
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
              return true;
            const i3 = this._activeBuffer.ybase + this._activeBuffer.y;
            let s3;
            for (s3 = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, s3 = this._bufferService.rows - 1 + this._activeBuffer.ybase - s3; t3--; )
              this._activeBuffer.lines.splice(i3, 1), this._activeBuffer.lines.splice(s3, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
          }
          insertChars(e3) {
            this._restrictCursor();
            const t3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
            return t3 && (t3.insertCells(this._activeBuffer.x, e3.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
          }
          deleteChars(e3) {
            this._restrictCursor();
            const t3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
            return t3 && (t3.deleteCells(this._activeBuffer.x, e3.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
          }
          scrollUp(e3) {
            let t3 = e3.params[0] || 1;
            for (; t3--; )
              this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
          }
          scrollDown(e3) {
            let t3 = e3.params[0] || 1;
            for (; t3--; )
              this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 0, this._activeBuffer.getBlankLine(l.DEFAULT_ATTR_DATA));
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
          }
          scrollLeft(e3) {
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
              return true;
            const t3 = e3.params[0] || 1;
            for (let e4 = this._activeBuffer.scrollTop; e4 <= this._activeBuffer.scrollBottom; ++e4) {
              const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
              i3.deleteCells(0, t3, this._activeBuffer.getNullCell(this._eraseAttrData())), i3.isWrapped = false;
            }
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
          }
          scrollRight(e3) {
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
              return true;
            const t3 = e3.params[0] || 1;
            for (let e4 = this._activeBuffer.scrollTop; e4 <= this._activeBuffer.scrollBottom; ++e4) {
              const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
              i3.insertCells(0, t3, this._activeBuffer.getNullCell(this._eraseAttrData())), i3.isWrapped = false;
            }
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
          }
          insertColumns(e3) {
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
              return true;
            const t3 = e3.params[0] || 1;
            for (let e4 = this._activeBuffer.scrollTop; e4 <= this._activeBuffer.scrollBottom; ++e4) {
              const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
              i3.insertCells(this._activeBuffer.x, t3, this._activeBuffer.getNullCell(this._eraseAttrData())), i3.isWrapped = false;
            }
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
          }
          deleteColumns(e3) {
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
              return true;
            const t3 = e3.params[0] || 1;
            for (let e4 = this._activeBuffer.scrollTop; e4 <= this._activeBuffer.scrollBottom; ++e4) {
              const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
              i3.deleteCells(this._activeBuffer.x, t3, this._activeBuffer.getNullCell(this._eraseAttrData())), i3.isWrapped = false;
            }
            return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
          }
          eraseChars(e3) {
            this._restrictCursor();
            const t3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
            return t3 && (t3.replaceCells(this._activeBuffer.x, this._activeBuffer.x + (e3.params[0] || 1), this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
          }
          repeatPrecedingCharacter(e3) {
            const t3 = this._parser.precedingJoinState;
            if (!t3)
              return true;
            const i3 = e3.params[0] || 1, s3 = p.UnicodeService.extractWidth(t3), r2 = this._activeBuffer.x - s3, n2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).getString(r2), o2 = new Uint32Array(n2.length * i3);
            let a2 = 0;
            for (let e4 = 0; e4 < n2.length; ) {
              const t4 = n2.codePointAt(e4) || 0;
              o2[a2++] = t4, e4 += t4 > 65535 ? 2 : 1;
            }
            let h2 = a2;
            for (let e4 = 1; e4 < i3; ++e4)
              o2.copyWithin(h2, 0, a2), h2 += a2;
            return this.print(o2, 0, h2), true;
          }
          sendDeviceAttributesPrimary(e3) {
            return e3.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent(n.C0.ESC + "[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent(n.C0.ESC + "[?6c")), true;
          }
          sendDeviceAttributesSecondary(e3) {
            return e3.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent(n.C0.ESC + "[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent(n.C0.ESC + "[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(e3.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent(n.C0.ESC + "[>83;40003;0c")), true;
          }
          _is(e3) {
            return 0 === (this._optionsService.rawOptions.termName + "").indexOf(e3);
          }
          setMode(e3) {
            for (let t3 = 0; t3 < e3.length; t3++)
              switch (e3.params[t3]) {
                case 4:
                  this._coreService.modes.insertMode = true;
                  break;
                case 20:
                  this._optionsService.options.convertEol = true;
              }
            return true;
          }
          setModePrivate(e3) {
            for (let t3 = 0; t3 < e3.length; t3++)
              switch (e3.params[t3]) {
                case 1:
                  this._coreService.decPrivateModes.applicationCursorKeys = true;
                  break;
                case 2:
                  this._charsetService.setgCharset(0, o.DEFAULT_CHARSET), this._charsetService.setgCharset(1, o.DEFAULT_CHARSET), this._charsetService.setgCharset(2, o.DEFAULT_CHARSET), this._charsetService.setgCharset(3, o.DEFAULT_CHARSET);
                  break;
                case 3:
                  this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
                  break;
                case 6:
                  this._coreService.decPrivateModes.origin = true, this._setCursor(0, 0);
                  break;
                case 7:
                  this._coreService.decPrivateModes.wraparound = true;
                  break;
                case 12:
                  this._optionsService.options.cursorBlink = true;
                  break;
                case 45:
                  this._coreService.decPrivateModes.reverseWraparound = true;
                  break;
                case 66:
                  this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire();
                  break;
                case 9:
                  this._coreMouseService.activeProtocol = "X10";
                  break;
                case 1e3:
                  this._coreMouseService.activeProtocol = "VT200";
                  break;
                case 1002:
                  this._coreMouseService.activeProtocol = "DRAG";
                  break;
                case 1003:
                  this._coreMouseService.activeProtocol = "ANY";
                  break;
                case 1004:
                  this._coreService.decPrivateModes.sendFocus = true, this._onRequestSendFocus.fire();
                  break;
                case 1005:
                  this._logService.debug("DECSET 1005 not supported (see #2507)");
                  break;
                case 1006:
                  this._coreMouseService.activeEncoding = "SGR";
                  break;
                case 1015:
                  this._logService.debug("DECSET 1015 not supported (see #2507)");
                  break;
                case 1016:
                  this._coreMouseService.activeEncoding = "SGR_PIXELS";
                  break;
                case 25:
                  this._coreService.isCursorHidden = false;
                  break;
                case 1048:
                  this.saveCursor();
                  break;
                case 1049:
                  this.saveCursor();
                case 47:
                case 1047:
                  this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                  break;
                case 2004:
                  this._coreService.decPrivateModes.bracketedPasteMode = true;
              }
            return true;
          }
          resetMode(e3) {
            for (let t3 = 0; t3 < e3.length; t3++)
              switch (e3.params[t3]) {
                case 4:
                  this._coreService.modes.insertMode = false;
                  break;
                case 20:
                  this._optionsService.options.convertEol = false;
              }
            return true;
          }
          resetModePrivate(e3) {
            for (let t3 = 0; t3 < e3.length; t3++)
              switch (e3.params[t3]) {
                case 1:
                  this._coreService.decPrivateModes.applicationCursorKeys = false;
                  break;
                case 3:
                  this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
                  break;
                case 6:
                  this._coreService.decPrivateModes.origin = false, this._setCursor(0, 0);
                  break;
                case 7:
                  this._coreService.decPrivateModes.wraparound = false;
                  break;
                case 12:
                  this._optionsService.options.cursorBlink = false;
                  break;
                case 45:
                  this._coreService.decPrivateModes.reverseWraparound = false;
                  break;
                case 66:
                  this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire();
                  break;
                case 9:
                case 1e3:
                case 1002:
                case 1003:
                  this._coreMouseService.activeProtocol = "NONE";
                  break;
                case 1004:
                  this._coreService.decPrivateModes.sendFocus = false;
                  break;
                case 1005:
                  this._logService.debug("DECRST 1005 not supported (see #2507)");
                  break;
                case 1006:
                case 1016:
                  this._coreMouseService.activeEncoding = "DEFAULT";
                  break;
                case 1015:
                  this._logService.debug("DECRST 1015 not supported (see #2507)");
                  break;
                case 25:
                  this._coreService.isCursorHidden = true;
                  break;
                case 1048:
                  this.restoreCursor();
                  break;
                case 1049:
                case 47:
                case 1047:
                  this._bufferService.buffers.activateNormalBuffer(), 1049 === e3.params[t3] && this.restoreCursor(), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                  break;
                case 2004:
                  this._coreService.decPrivateModes.bracketedPasteMode = false;
              }
            return true;
          }
          requestMode(e3, t3) {
            const i3 = this._coreService.decPrivateModes, { activeProtocol: s3, activeEncoding: r2 } = this._coreMouseService, o2 = this._coreService, { buffers: a2, cols: h2 } = this._bufferService, { active: c2, alt: l2 } = a2, d2 = this._optionsService.rawOptions, _2 = (e4) => e4 ? 1 : 2, u2 = e3.params[0];
            return f2 = u2, v2 = t3 ? 2 === u2 ? 4 : 4 === u2 ? _2(o2.modes.insertMode) : 12 === u2 ? 3 : 20 === u2 ? _2(d2.convertEol) : 0 : 1 === u2 ? _2(i3.applicationCursorKeys) : 3 === u2 ? d2.windowOptions.setWinLines ? 80 === h2 ? 2 : 132 === h2 ? 1 : 0 : 0 : 6 === u2 ? _2(i3.origin) : 7 === u2 ? _2(i3.wraparound) : 8 === u2 ? 3 : 9 === u2 ? _2("X10" === s3) : 12 === u2 ? _2(d2.cursorBlink) : 25 === u2 ? _2(!o2.isCursorHidden) : 45 === u2 ? _2(i3.reverseWraparound) : 66 === u2 ? _2(i3.applicationKeypad) : 67 === u2 ? 4 : 1e3 === u2 ? _2("VT200" === s3) : 1002 === u2 ? _2("DRAG" === s3) : 1003 === u2 ? _2("ANY" === s3) : 1004 === u2 ? _2(i3.sendFocus) : 1005 === u2 ? 4 : 1006 === u2 ? _2("SGR" === r2) : 1015 === u2 ? 4 : 1016 === u2 ? _2("SGR_PIXELS" === r2) : 1048 === u2 ? 1 : 47 === u2 || 1047 === u2 || 1049 === u2 ? _2(c2 === l2) : 2004 === u2 ? _2(i3.bracketedPasteMode) : 0, o2.triggerDataEvent(`${n.C0.ESC}[${t3 ? "" : "?"}${f2};${v2}$y`), true;
            var f2, v2;
          }
          _updateAttrColor(e3, t3, i3, s3, r2) {
            return 2 === t3 ? (e3 |= 50331648, e3 &= -16777216, e3 |= f.AttributeData.fromColorRGB([i3, s3, r2])) : 5 === t3 && (e3 &= -50331904, e3 |= 33554432 | 255 & i3), e3;
          }
          _extractColor(e3, t3, i3) {
            const s3 = [0, 0, -1, 0, 0, 0];
            let r2 = 0, n2 = 0;
            do {
              if (s3[n2 + r2] = e3.params[t3 + n2], e3.hasSubParams(t3 + n2)) {
                const i4 = e3.getSubParams(t3 + n2);
                let o2 = 0;
                do {
                  5 === s3[1] && (r2 = 1), s3[n2 + o2 + 1 + r2] = i4[o2];
                } while (++o2 < i4.length && o2 + n2 + 1 + r2 < s3.length);
                break;
              }
              if (5 === s3[1] && n2 + r2 >= 2 || 2 === s3[1] && n2 + r2 >= 5)
                break;
              s3[1] && (r2 = 1);
            } while (++n2 + t3 < e3.length && n2 + r2 < s3.length);
            for (let e4 = 2; e4 < s3.length; ++e4)
              -1 === s3[e4] && (s3[e4] = 0);
            switch (s3[0]) {
              case 38:
                i3.fg = this._updateAttrColor(i3.fg, s3[1], s3[3], s3[4], s3[5]);
                break;
              case 48:
                i3.bg = this._updateAttrColor(i3.bg, s3[1], s3[3], s3[4], s3[5]);
                break;
              case 58:
                i3.extended = i3.extended.clone(), i3.extended.underlineColor = this._updateAttrColor(i3.extended.underlineColor, s3[1], s3[3], s3[4], s3[5]);
            }
            return n2;
          }
          _processUnderline(e3, t3) {
            t3.extended = t3.extended.clone(), (!~e3 || e3 > 5) && (e3 = 1), t3.extended.underlineStyle = e3, t3.fg |= 268435456, 0 === e3 && (t3.fg &= -268435457), t3.updateExtended();
          }
          _processSGR0(e3) {
            e3.fg = l.DEFAULT_ATTR_DATA.fg, e3.bg = l.DEFAULT_ATTR_DATA.bg, e3.extended = e3.extended.clone(), e3.extended.underlineStyle = 0, e3.extended.underlineColor &= -67108864, e3.updateExtended();
          }
          charAttributes(e3) {
            if (1 === e3.length && 0 === e3.params[0])
              return this._processSGR0(this._curAttrData), true;
            const t3 = e3.length;
            let i3;
            const s3 = this._curAttrData;
            for (let r2 = 0; r2 < t3; r2++)
              i3 = e3.params[r2], i3 >= 30 && i3 <= 37 ? (s3.fg &= -50331904, s3.fg |= 16777216 | i3 - 30) : i3 >= 40 && i3 <= 47 ? (s3.bg &= -50331904, s3.bg |= 16777216 | i3 - 40) : i3 >= 90 && i3 <= 97 ? (s3.fg &= -50331904, s3.fg |= 16777224 | i3 - 90) : i3 >= 100 && i3 <= 107 ? (s3.bg &= -50331904, s3.bg |= 16777224 | i3 - 100) : 0 === i3 ? this._processSGR0(s3) : 1 === i3 ? s3.fg |= 134217728 : 3 === i3 ? s3.bg |= 67108864 : 4 === i3 ? (s3.fg |= 268435456, this._processUnderline(e3.hasSubParams(r2) ? e3.getSubParams(r2)[0] : 1, s3)) : 5 === i3 ? s3.fg |= 536870912 : 7 === i3 ? s3.fg |= 67108864 : 8 === i3 ? s3.fg |= 1073741824 : 9 === i3 ? s3.fg |= 2147483648 : 2 === i3 ? s3.bg |= 134217728 : 21 === i3 ? this._processUnderline(2, s3) : 22 === i3 ? (s3.fg &= -134217729, s3.bg &= -134217729) : 23 === i3 ? s3.bg &= -67108865 : 24 === i3 ? (s3.fg &= -268435457, this._processUnderline(0, s3)) : 25 === i3 ? s3.fg &= -536870913 : 27 === i3 ? s3.fg &= -67108865 : 28 === i3 ? s3.fg &= -1073741825 : 29 === i3 ? s3.fg &= 2147483647 : 39 === i3 ? (s3.fg &= -67108864, s3.fg |= 16777215 & l.DEFAULT_ATTR_DATA.fg) : 49 === i3 ? (s3.bg &= -67108864, s3.bg |= 16777215 & l.DEFAULT_ATTR_DATA.bg) : 38 === i3 || 48 === i3 || 58 === i3 ? r2 += this._extractColor(e3, r2, s3) : 53 === i3 ? s3.bg |= 1073741824 : 55 === i3 ? s3.bg &= -1073741825 : 59 === i3 ? (s3.extended = s3.extended.clone(), s3.extended.underlineColor = -1, s3.updateExtended()) : 100 === i3 ? (s3.fg &= -67108864, s3.fg |= 16777215 & l.DEFAULT_ATTR_DATA.fg, s3.bg &= -67108864, s3.bg |= 16777215 & l.DEFAULT_ATTR_DATA.bg) : this._logService.debug("Unknown SGR attribute: %d.", i3);
            return true;
          }
          deviceStatus(e3) {
            switch (e3.params[0]) {
              case 5:
                this._coreService.triggerDataEvent(`${n.C0.ESC}[0n`);
                break;
              case 6:
                const e4 = this._activeBuffer.y + 1, t3 = this._activeBuffer.x + 1;
                this._coreService.triggerDataEvent(`${n.C0.ESC}[${e4};${t3}R`);
            }
            return true;
          }
          deviceStatusPrivate(e3) {
            if (6 === e3.params[0]) {
              const e4 = this._activeBuffer.y + 1, t3 = this._activeBuffer.x + 1;
              this._coreService.triggerDataEvent(`${n.C0.ESC}[?${e4};${t3}R`);
            }
            return true;
          }
          softReset(e3) {
            return this._coreService.isCursorHidden = false, this._onRequestSyncScrollBar.fire(), this._activeBuffer.scrollTop = 0, this._activeBuffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._coreService.reset(), this._charsetService.reset(), this._activeBuffer.savedX = 0, this._activeBuffer.savedY = this._activeBuffer.ybase, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = false, true;
          }
          setCursorStyle(e3) {
            const t3 = e3.params[0] || 1;
            switch (t3) {
              case 1:
              case 2:
                this._optionsService.options.cursorStyle = "block";
                break;
              case 3:
              case 4:
                this._optionsService.options.cursorStyle = "underline";
                break;
              case 5:
              case 6:
                this._optionsService.options.cursorStyle = "bar";
            }
            const i3 = t3 % 2 == 1;
            return this._optionsService.options.cursorBlink = i3, true;
          }
          setScrollRegion(e3) {
            const t3 = e3.params[0] || 1;
            let i3;
            return (e3.length < 2 || (i3 = e3.params[1]) > this._bufferService.rows || 0 === i3) && (i3 = this._bufferService.rows), i3 > t3 && (this._activeBuffer.scrollTop = t3 - 1, this._activeBuffer.scrollBottom = i3 - 1, this._setCursor(0, 0)), true;
          }
          windowOptions(e3) {
            if (!w(e3.params[0], this._optionsService.rawOptions.windowOptions))
              return true;
            const t3 = e3.length > 1 ? e3.params[1] : 0;
            switch (e3.params[0]) {
              case 14:
                2 !== t3 && this._onRequestWindowsOptionsReport.fire(y.GET_WIN_SIZE_PIXELS);
                break;
              case 16:
                this._onRequestWindowsOptionsReport.fire(y.GET_CELL_SIZE_PIXELS);
                break;
              case 18:
                this._bufferService && this._coreService.triggerDataEvent(`${n.C0.ESC}[8;${this._bufferService.rows};${this._bufferService.cols}t`);
                break;
              case 22:
                0 !== t3 && 2 !== t3 || (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > 10 && this._windowTitleStack.shift()), 0 !== t3 && 1 !== t3 || (this._iconNameStack.push(this._iconName), this._iconNameStack.length > 10 && this._iconNameStack.shift());
                break;
              case 23:
                0 !== t3 && 2 !== t3 || this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), 0 !== t3 && 1 !== t3 || this._iconNameStack.length && this.setIconName(this._iconNameStack.pop());
            }
            return true;
          }
          saveCursor(e3) {
            return this._activeBuffer.savedX = this._activeBuffer.x, this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, true;
          }
          restoreCursor(e3) {
            return this._activeBuffer.x = this._activeBuffer.savedX || 0, this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0), this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg, this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._activeBuffer.savedCharset && (this._charsetService.charset = this._activeBuffer.savedCharset), this._restrictCursor(), true;
          }
          setTitle(e3) {
            return this._windowTitle = e3, this._onTitleChange.fire(e3), true;
          }
          setIconName(e3) {
            return this._iconName = e3, true;
          }
          setOrReportIndexedColor(e3) {
            const t3 = [], i3 = e3.split(";");
            for (; i3.length > 1; ) {
              const e4 = i3.shift(), s3 = i3.shift();
              if (/^\d+$/.exec(e4)) {
                const i4 = parseInt(e4);
                if (D(i4))
                  if ("?" === s3)
                    t3.push({ type: 0, index: i4 });
                  else {
                    const e5 = (0, S.parseColor)(s3);
                    e5 && t3.push({ type: 1, index: i4, color: e5 });
                  }
              }
            }
            return t3.length && this._onColor.fire(t3), true;
          }
          setHyperlink(e3) {
            const t3 = e3.split(";");
            return !(t3.length < 2) && (t3[1] ? this._createHyperlink(t3[0], t3[1]) : !t3[0] && this._finishHyperlink());
          }
          _createHyperlink(e3, t3) {
            this._getCurrentLinkId() && this._finishHyperlink();
            const i3 = e3.split(":");
            let s3;
            const r2 = i3.findIndex((e4) => e4.startsWith("id="));
            return -1 !== r2 && (s3 = i3[r2].slice(3) || void 0), this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = this._oscLinkService.registerLink({ id: s3, uri: t3 }), this._curAttrData.updateExtended(), true;
          }
          _finishHyperlink() {
            return this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = 0, this._curAttrData.updateExtended(), true;
          }
          _setOrReportSpecialColor(e3, t3) {
            const i3 = e3.split(";");
            for (let e4 = 0; e4 < i3.length && !(t3 >= this._specialColors.length); ++e4, ++t3)
              if ("?" === i3[e4])
                this._onColor.fire([{ type: 0, index: this._specialColors[t3] }]);
              else {
                const s3 = (0, S.parseColor)(i3[e4]);
                s3 && this._onColor.fire([{ type: 1, index: this._specialColors[t3], color: s3 }]);
              }
            return true;
          }
          setOrReportFgColor(e3) {
            return this._setOrReportSpecialColor(e3, 0);
          }
          setOrReportBgColor(e3) {
            return this._setOrReportSpecialColor(e3, 1);
          }
          setOrReportCursorColor(e3) {
            return this._setOrReportSpecialColor(e3, 2);
          }
          restoreIndexedColor(e3) {
            if (!e3)
              return this._onColor.fire([{ type: 2 }]), true;
            const t3 = [], i3 = e3.split(";");
            for (let e4 = 0; e4 < i3.length; ++e4)
              if (/^\d+$/.exec(i3[e4])) {
                const s3 = parseInt(i3[e4]);
                D(s3) && t3.push({ type: 2, index: s3 });
              }
            return t3.length && this._onColor.fire(t3), true;
          }
          restoreFgColor(e3) {
            return this._onColor.fire([{ type: 2, index: 256 }]), true;
          }
          restoreBgColor(e3) {
            return this._onColor.fire([{ type: 2, index: 257 }]), true;
          }
          restoreCursorColor(e3) {
            return this._onColor.fire([{ type: 2, index: 258 }]), true;
          }
          nextLine() {
            return this._activeBuffer.x = 0, this.index(), true;
          }
          keypadApplicationMode() {
            return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire(), true;
          }
          keypadNumericMode() {
            return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire(), true;
          }
          selectDefaultCharset() {
            return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, o.DEFAULT_CHARSET), true;
          }
          selectCharset(e3) {
            return 2 !== e3.length ? (this.selectDefaultCharset(), true) : ("/" === e3[0] || this._charsetService.setgCharset(C[e3[0]], o.CHARSETS[e3[1]] || o.DEFAULT_CHARSET), true);
          }
          index() {
            return this._restrictCursor(), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._restrictCursor(), true;
          }
          tabSet() {
            return this._activeBuffer.tabs[this._activeBuffer.x] = true, true;
          }
          reverseIndex() {
            if (this._restrictCursor(), this._activeBuffer.y === this._activeBuffer.scrollTop) {
              const e3 = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
              this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, e3, 1), this._activeBuffer.lines.set(this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.getBlankLine(this._eraseAttrData())), this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
            } else
              this._activeBuffer.y--, this._restrictCursor();
            return true;
          }
          fullReset() {
            return this._parser.reset(), this._onRequestReset.fire(), true;
          }
          reset() {
            this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = l.DEFAULT_ATTR_DATA.clone();
          }
          _eraseAttrData() {
            return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= 67108863 & this._curAttrData.bg, this._eraseAttrDataInternal;
          }
          setgLevel(e3) {
            return this._charsetService.setgLevel(e3), true;
          }
          screenAlignmentPattern() {
            const e3 = new u.CellData();
            e3.content = 1 << 22 | "E".charCodeAt(0), e3.fg = this._curAttrData.fg, e3.bg = this._curAttrData.bg, this._setCursor(0, 0);
            for (let t3 = 0; t3 < this._bufferService.rows; ++t3) {
              const i3 = this._activeBuffer.ybase + this._activeBuffer.y + t3, s3 = this._activeBuffer.lines.get(i3);
              s3 && (s3.fill(e3), s3.isWrapped = false);
            }
            return this._dirtyRowTracker.markAllDirty(), this._setCursor(0, 0), true;
          }
          requestStatusString(e3, t3) {
            const i3 = this._bufferService.buffer, s3 = this._optionsService.rawOptions;
            return ((e4) => (this._coreService.triggerDataEvent(`${n.C0.ESC}${e4}${n.C0.ESC}\\`), true))('"q' === e3 ? `P1$r${this._curAttrData.isProtected() ? 1 : 0}"q` : '"p' === e3 ? 'P1$r61;1"p' : "r" === e3 ? `P1$r${i3.scrollTop + 1};${i3.scrollBottom + 1}r` : "m" === e3 ? "P1$r0m" : " q" === e3 ? `P1$r${{ block: 2, underline: 4, bar: 6 }[s3.cursorStyle] - (s3.cursorBlink ? 1 : 0)} q` : "P0$r");
          }
          markRangeDirty(e3, t3) {
            this._dirtyRowTracker.markRangeDirty(e3, t3);
          }
        }
        t2.InputHandler = k;
        let L = class {
          constructor(e3) {
            this._bufferService = e3, this.clearRange();
          }
          clearRange() {
            this.start = this._bufferService.buffer.y, this.end = this._bufferService.buffer.y;
          }
          markDirty(e3) {
            e3 < this.start ? this.start = e3 : e3 > this.end && (this.end = e3);
          }
          markRangeDirty(e3, t3) {
            e3 > t3 && (E = e3, e3 = t3, t3 = E), e3 < this.start && (this.start = e3), t3 > this.end && (this.end = t3);
          }
          markAllDirty() {
            this.markRangeDirty(0, this._bufferService.rows - 1);
          }
        };
        function D(e3) {
          return 0 <= e3 && e3 < 256;
        }
        L = s2([r(0, v.IBufferService)], L);
      }, 844: (e2, t2) => {
        function i2(e3) {
          for (const t3 of e3)
            t3.dispose();
          e3.length = 0;
        }
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getDisposeArrayDisposable = t2.disposeArray = t2.toDisposable = t2.MutableDisposable = t2.Disposable = void 0, t2.Disposable = class {
          constructor() {
            this._disposables = [], this._isDisposed = false;
          }
          dispose() {
            this._isDisposed = true;
            for (const e3 of this._disposables)
              e3.dispose();
            this._disposables.length = 0;
          }
          register(e3) {
            return this._disposables.push(e3), e3;
          }
          unregister(e3) {
            const t3 = this._disposables.indexOf(e3);
            -1 !== t3 && this._disposables.splice(t3, 1);
          }
        }, t2.MutableDisposable = class {
          constructor() {
            this._isDisposed = false;
          }
          get value() {
            return this._isDisposed ? void 0 : this._value;
          }
          set value(e3) {
            this._isDisposed || e3 === this._value || (this._value?.dispose(), this._value = e3);
          }
          clear() {
            this.value = void 0;
          }
          dispose() {
            this._isDisposed = true, this._value?.dispose(), this._value = void 0;
          }
        }, t2.toDisposable = function(e3) {
          return { dispose: e3 };
        }, t2.disposeArray = i2, t2.getDisposeArrayDisposable = function(e3) {
          return { dispose: () => i2(e3) };
        };
      }, 1505: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.FourKeyMap = t2.TwoKeyMap = void 0;
        class i2 {
          constructor() {
            this._data = {};
          }
          set(e3, t3, i3) {
            this._data[e3] || (this._data[e3] = {}), this._data[e3][t3] = i3;
          }
          get(e3, t3) {
            return this._data[e3] ? this._data[e3][t3] : void 0;
          }
          clear() {
            this._data = {};
          }
        }
        t2.TwoKeyMap = i2, t2.FourKeyMap = class {
          constructor() {
            this._data = new i2();
          }
          set(e3, t3, s2, r, n) {
            this._data.get(e3, t3) || this._data.set(e3, t3, new i2()), this._data.get(e3, t3).set(s2, r, n);
          }
          get(e3, t3, i3, s2) {
            return this._data.get(e3, t3)?.get(i3, s2);
          }
          clear() {
            this._data.clear();
          }
        };
      }, 6114: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.isChromeOS = t2.isLinux = t2.isWindows = t2.isIphone = t2.isIpad = t2.isMac = t2.getSafariVersion = t2.isSafari = t2.isLegacyEdge = t2.isFirefox = t2.isNode = void 0, t2.isNode = "undefined" != typeof process && "title" in process;
        const i2 = t2.isNode ? "node" : navigator.userAgent, s2 = t2.isNode ? "node" : navigator.platform;
        t2.isFirefox = i2.includes("Firefox"), t2.isLegacyEdge = i2.includes("Edge"), t2.isSafari = /^((?!chrome|android).)*safari/i.test(i2), t2.getSafariVersion = function() {
          if (!t2.isSafari)
            return 0;
          const e3 = i2.match(/Version\/(\d+)/);
          return null === e3 || e3.length < 2 ? 0 : parseInt(e3[1]);
        }, t2.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(s2), t2.isIpad = "iPad" === s2, t2.isIphone = "iPhone" === s2, t2.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(s2), t2.isLinux = s2.indexOf("Linux") >= 0, t2.isChromeOS = /\bCrOS\b/.test(i2);
      }, 6106: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.SortedList = void 0;
        let i2 = 0;
        t2.SortedList = class {
          constructor(e3) {
            this._getKey = e3, this._array = [];
          }
          clear() {
            this._array.length = 0;
          }
          insert(e3) {
            0 !== this._array.length ? (i2 = this._search(this._getKey(e3)), this._array.splice(i2, 0, e3)) : this._array.push(e3);
          }
          delete(e3) {
            if (0 === this._array.length)
              return false;
            const t3 = this._getKey(e3);
            if (void 0 === t3)
              return false;
            if (i2 = this._search(t3), -1 === i2)
              return false;
            if (this._getKey(this._array[i2]) !== t3)
              return false;
            do {
              if (this._array[i2] === e3)
                return this._array.splice(i2, 1), true;
            } while (++i2 < this._array.length && this._getKey(this._array[i2]) === t3);
            return false;
          }
          *getKeyIterator(e3) {
            if (0 !== this._array.length && (i2 = this._search(e3), !(i2 < 0 || i2 >= this._array.length) && this._getKey(this._array[i2]) === e3))
              do {
                yield this._array[i2];
              } while (++i2 < this._array.length && this._getKey(this._array[i2]) === e3);
          }
          forEachByKey(e3, t3) {
            if (0 !== this._array.length && (i2 = this._search(e3), !(i2 < 0 || i2 >= this._array.length) && this._getKey(this._array[i2]) === e3))
              do {
                t3(this._array[i2]);
              } while (++i2 < this._array.length && this._getKey(this._array[i2]) === e3);
          }
          values() {
            return [...this._array].values();
          }
          _search(e3) {
            let t3 = 0, i3 = this._array.length - 1;
            for (; i3 >= t3; ) {
              let s2 = t3 + i3 >> 1;
              const r = this._getKey(this._array[s2]);
              if (r > e3)
                i3 = s2 - 1;
              else {
                if (!(r < e3)) {
                  for (; s2 > 0 && this._getKey(this._array[s2 - 1]) === e3; )
                    s2--;
                  return s2;
                }
                t3 = s2 + 1;
              }
            }
            return t3;
          }
        };
      }, 7226: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.DebouncedIdleTask = t2.IdleTaskQueue = t2.PriorityTaskQueue = void 0;
        const s2 = i2(6114);
        class r {
          constructor() {
            this._tasks = [], this._i = 0;
          }
          enqueue(e3) {
            this._tasks.push(e3), this._start();
          }
          flush() {
            for (; this._i < this._tasks.length; )
              this._tasks[this._i]() || this._i++;
            this.clear();
          }
          clear() {
            this._idleCallback && (this._cancelCallback(this._idleCallback), this._idleCallback = void 0), this._i = 0, this._tasks.length = 0;
          }
          _start() {
            this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
          }
          _process(e3) {
            this._idleCallback = void 0;
            let t3 = 0, i3 = 0, s3 = e3.timeRemaining(), r2 = 0;
            for (; this._i < this._tasks.length; ) {
              if (t3 = Date.now(), this._tasks[this._i]() || this._i++, t3 = Math.max(1, Date.now() - t3), i3 = Math.max(t3, i3), r2 = e3.timeRemaining(), 1.5 * i3 > r2)
                return s3 - t3 < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(s3 - t3))}ms`), void this._start();
              s3 = r2;
            }
            this.clear();
          }
        }
        class n extends r {
          _requestCallback(e3) {
            return setTimeout(() => e3(this._createDeadline(16)));
          }
          _cancelCallback(e3) {
            clearTimeout(e3);
          }
          _createDeadline(e3) {
            const t3 = Date.now() + e3;
            return { timeRemaining: () => Math.max(0, t3 - Date.now()) };
          }
        }
        t2.PriorityTaskQueue = n, t2.IdleTaskQueue = !s2.isNode && "requestIdleCallback" in window ? class extends r {
          _requestCallback(e3) {
            return requestIdleCallback(e3);
          }
          _cancelCallback(e3) {
            cancelIdleCallback(e3);
          }
        } : n, t2.DebouncedIdleTask = class {
          constructor() {
            this._queue = new t2.IdleTaskQueue();
          }
          set(e3) {
            this._queue.clear(), this._queue.enqueue(e3);
          }
          flush() {
            this._queue.flush();
          }
        };
      }, 9282: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.updateWindowsModeWrappedState = void 0;
        const s2 = i2(643);
        t2.updateWindowsModeWrappedState = function(e3) {
          const t3 = e3.buffer.lines.get(e3.buffer.ybase + e3.buffer.y - 1), i3 = t3?.get(e3.cols - 1), r = e3.buffer.lines.get(e3.buffer.ybase + e3.buffer.y);
          r && i3 && (r.isWrapped = i3[s2.CHAR_DATA_CODE_INDEX] !== s2.NULL_CELL_CODE && i3[s2.CHAR_DATA_CODE_INDEX] !== s2.WHITESPACE_CELL_CODE);
        };
      }, 3734: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ExtendedAttrs = t2.AttributeData = void 0;
        class i2 {
          constructor() {
            this.fg = 0, this.bg = 0, this.extended = new s2();
          }
          static toColorRGB(e3) {
            return [e3 >>> 16 & 255, e3 >>> 8 & 255, 255 & e3];
          }
          static fromColorRGB(e3) {
            return (255 & e3[0]) << 16 | (255 & e3[1]) << 8 | 255 & e3[2];
          }
          clone() {
            const e3 = new i2();
            return e3.fg = this.fg, e3.bg = this.bg, e3.extended = this.extended.clone(), e3;
          }
          isInverse() {
            return 67108864 & this.fg;
          }
          isBold() {
            return 134217728 & this.fg;
          }
          isUnderline() {
            return this.hasExtendedAttrs() && 0 !== this.extended.underlineStyle ? 1 : 268435456 & this.fg;
          }
          isBlink() {
            return 536870912 & this.fg;
          }
          isInvisible() {
            return 1073741824 & this.fg;
          }
          isItalic() {
            return 67108864 & this.bg;
          }
          isDim() {
            return 134217728 & this.bg;
          }
          isStrikethrough() {
            return 2147483648 & this.fg;
          }
          isProtected() {
            return 536870912 & this.bg;
          }
          isOverline() {
            return 1073741824 & this.bg;
          }
          getFgColorMode() {
            return 50331648 & this.fg;
          }
          getBgColorMode() {
            return 50331648 & this.bg;
          }
          isFgRGB() {
            return 50331648 == (50331648 & this.fg);
          }
          isBgRGB() {
            return 50331648 == (50331648 & this.bg);
          }
          isFgPalette() {
            return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg);
          }
          isBgPalette() {
            return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg);
          }
          isFgDefault() {
            return 0 == (50331648 & this.fg);
          }
          isBgDefault() {
            return 0 == (50331648 & this.bg);
          }
          isAttributeDefault() {
            return 0 === this.fg && 0 === this.bg;
          }
          getFgColor() {
            switch (50331648 & this.fg) {
              case 16777216:
              case 33554432:
                return 255 & this.fg;
              case 50331648:
                return 16777215 & this.fg;
              default:
                return -1;
            }
          }
          getBgColor() {
            switch (50331648 & this.bg) {
              case 16777216:
              case 33554432:
                return 255 & this.bg;
              case 50331648:
                return 16777215 & this.bg;
              default:
                return -1;
            }
          }
          hasExtendedAttrs() {
            return 268435456 & this.bg;
          }
          updateExtended() {
            this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
          }
          getUnderlineColor() {
            if (268435456 & this.bg && ~this.extended.underlineColor)
              switch (50331648 & this.extended.underlineColor) {
                case 16777216:
                case 33554432:
                  return 255 & this.extended.underlineColor;
                case 50331648:
                  return 16777215 & this.extended.underlineColor;
                default:
                  return this.getFgColor();
              }
            return this.getFgColor();
          }
          getUnderlineColorMode() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode();
          }
          isUnderlineColorRGB() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 == (50331648 & this.extended.underlineColor) : this.isFgRGB();
          }
          isUnderlineColorPalette() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? 16777216 == (50331648 & this.extended.underlineColor) || 33554432 == (50331648 & this.extended.underlineColor) : this.isFgPalette();
          }
          isUnderlineColorDefault() {
            return 268435456 & this.bg && ~this.extended.underlineColor ? 0 == (50331648 & this.extended.underlineColor) : this.isFgDefault();
          }
          getUnderlineStyle() {
            return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0;
          }
          getUnderlineVariantOffset() {
            return this.extended.underlineVariantOffset;
          }
        }
        t2.AttributeData = i2;
        class s2 {
          get ext() {
            return this._urlId ? -469762049 & this._ext | this.underlineStyle << 26 : this._ext;
          }
          set ext(e3) {
            this._ext = e3;
          }
          get underlineStyle() {
            return this._urlId ? 5 : (469762048 & this._ext) >> 26;
          }
          set underlineStyle(e3) {
            this._ext &= -469762049, this._ext |= e3 << 26 & 469762048;
          }
          get underlineColor() {
            return 67108863 & this._ext;
          }
          set underlineColor(e3) {
            this._ext &= -67108864, this._ext |= 67108863 & e3;
          }
          get urlId() {
            return this._urlId;
          }
          set urlId(e3) {
            this._urlId = e3;
          }
          get underlineVariantOffset() {
            const e3 = (3758096384 & this._ext) >> 29;
            return e3 < 0 ? 4294967288 ^ e3 : e3;
          }
          set underlineVariantOffset(e3) {
            this._ext &= 536870911, this._ext |= e3 << 29 & 3758096384;
          }
          constructor(e3 = 0, t3 = 0) {
            this._ext = 0, this._urlId = 0, this._ext = e3, this._urlId = t3;
          }
          clone() {
            return new s2(this._ext, this._urlId);
          }
          isEmpty() {
            return 0 === this.underlineStyle && 0 === this._urlId;
          }
        }
        t2.ExtendedAttrs = s2;
      }, 9092: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Buffer = t2.MAX_BUFFER_SIZE = void 0;
        const s2 = i2(6349), r = i2(7226), n = i2(3734), o = i2(8437), a = i2(4634), h = i2(511), c = i2(643), l = i2(4863), d = i2(7116);
        t2.MAX_BUFFER_SIZE = 4294967295, t2.Buffer = class {
          constructor(e3, t3, i3) {
            this._hasScrollback = e3, this._optionsService = t3, this._bufferService = i3, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.tabs = {}, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = o.DEFAULT_ATTR_DATA.clone(), this.savedCharset = d.DEFAULT_CHARSET, this.markers = [], this._nullCell = h.CellData.fromCharData([0, c.NULL_CELL_CHAR, c.NULL_CELL_WIDTH, c.NULL_CELL_CODE]), this._whitespaceCell = h.CellData.fromCharData([0, c.WHITESPACE_CELL_CHAR, c.WHITESPACE_CELL_WIDTH, c.WHITESPACE_CELL_CODE]), this._isClearing = false, this._memoryCleanupQueue = new r.IdleTaskQueue(), this._memoryCleanupPosition = 0, this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new s2.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
          }
          getNullCell(e3) {
            return e3 ? (this._nullCell.fg = e3.fg, this._nullCell.bg = e3.bg, this._nullCell.extended = e3.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new n.ExtendedAttrs()), this._nullCell;
          }
          getWhitespaceCell(e3) {
            return e3 ? (this._whitespaceCell.fg = e3.fg, this._whitespaceCell.bg = e3.bg, this._whitespaceCell.extended = e3.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new n.ExtendedAttrs()), this._whitespaceCell;
          }
          getBlankLine(e3, t3) {
            return new o.BufferLine(this._bufferService.cols, this.getNullCell(e3), t3);
          }
          get hasScrollback() {
            return this._hasScrollback && this.lines.maxLength > this._rows;
          }
          get isCursorInViewport() {
            const e3 = this.ybase + this.y - this.ydisp;
            return e3 >= 0 && e3 < this._rows;
          }
          _getCorrectBufferLength(e3) {
            if (!this._hasScrollback)
              return e3;
            const i3 = e3 + this._optionsService.rawOptions.scrollback;
            return i3 > t2.MAX_BUFFER_SIZE ? t2.MAX_BUFFER_SIZE : i3;
          }
          fillViewportRows(e3) {
            if (0 === this.lines.length) {
              void 0 === e3 && (e3 = o.DEFAULT_ATTR_DATA);
              let t3 = this._rows;
              for (; t3--; )
                this.lines.push(this.getBlankLine(e3));
            }
          }
          clear() {
            this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new s2.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
          }
          resize(e3, t3) {
            const i3 = this.getNullCell(o.DEFAULT_ATTR_DATA);
            let s3 = 0;
            const r2 = this._getCorrectBufferLength(t3);
            if (r2 > this.lines.maxLength && (this.lines.maxLength = r2), this.lines.length > 0) {
              if (this._cols < e3)
                for (let t4 = 0; t4 < this.lines.length; t4++)
                  s3 += +this.lines.get(t4).resize(e3, i3);
              let n2 = 0;
              if (this._rows < t3)
                for (let s4 = this._rows; s4 < t3; s4++)
                  this.lines.length < t3 + this.ybase && (this._optionsService.rawOptions.windowsMode || void 0 !== this._optionsService.rawOptions.windowsPty.backend || void 0 !== this._optionsService.rawOptions.windowsPty.buildNumber ? this.lines.push(new o.BufferLine(e3, i3)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + n2 + 1 ? (this.ybase--, n2++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new o.BufferLine(e3, i3)));
              else
                for (let e4 = this._rows; e4 > t3; e4--)
                  this.lines.length > t3 + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
              if (r2 < this.lines.maxLength) {
                const e4 = this.lines.length - r2;
                e4 > 0 && (this.lines.trimStart(e4), this.ybase = Math.max(this.ybase - e4, 0), this.ydisp = Math.max(this.ydisp - e4, 0), this.savedY = Math.max(this.savedY - e4, 0)), this.lines.maxLength = r2;
              }
              this.x = Math.min(this.x, e3 - 1), this.y = Math.min(this.y, t3 - 1), n2 && (this.y += n2), this.savedX = Math.min(this.savedX, e3 - 1), this.scrollTop = 0;
            }
            if (this.scrollBottom = t3 - 1, this._isReflowEnabled && (this._reflow(e3, t3), this._cols > e3))
              for (let t4 = 0; t4 < this.lines.length; t4++)
                s3 += +this.lines.get(t4).resize(e3, i3);
            this._cols = e3, this._rows = t3, this._memoryCleanupQueue.clear(), s3 > 0.1 * this.lines.length && (this._memoryCleanupPosition = 0, this._memoryCleanupQueue.enqueue(() => this._batchedMemoryCleanup()));
          }
          _batchedMemoryCleanup() {
            let e3 = true;
            this._memoryCleanupPosition >= this.lines.length && (this._memoryCleanupPosition = 0, e3 = false);
            let t3 = 0;
            for (; this._memoryCleanupPosition < this.lines.length; )
              if (t3 += this.lines.get(this._memoryCleanupPosition++).cleanupMemory(), t3 > 100)
                return true;
            return e3;
          }
          get _isReflowEnabled() {
            const e3 = this._optionsService.rawOptions.windowsPty;
            return e3 && e3.buildNumber ? this._hasScrollback && "conpty" === e3.backend && e3.buildNumber >= 21376 : this._hasScrollback && !this._optionsService.rawOptions.windowsMode;
          }
          _reflow(e3, t3) {
            this._cols !== e3 && (e3 > this._cols ? this._reflowLarger(e3, t3) : this._reflowSmaller(e3, t3));
          }
          _reflowLarger(e3, t3) {
            const i3 = (0, a.reflowLargerGetLinesToRemove)(this.lines, this._cols, e3, this.ybase + this.y, this.getNullCell(o.DEFAULT_ATTR_DATA));
            if (i3.length > 0) {
              const s3 = (0, a.reflowLargerCreateNewLayout)(this.lines, i3);
              (0, a.reflowLargerApplyNewLayout)(this.lines, s3.layout), this._reflowLargerAdjustViewport(e3, t3, s3.countRemoved);
            }
          }
          _reflowLargerAdjustViewport(e3, t3, i3) {
            const s3 = this.getNullCell(o.DEFAULT_ATTR_DATA);
            let r2 = i3;
            for (; r2-- > 0; )
              0 === this.ybase ? (this.y > 0 && this.y--, this.lines.length < t3 && this.lines.push(new o.BufferLine(e3, s3))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
            this.savedY = Math.max(this.savedY - i3, 0);
          }
          _reflowSmaller(e3, t3) {
            const i3 = this.getNullCell(o.DEFAULT_ATTR_DATA), s3 = [];
            let r2 = 0;
            for (let n2 = this.lines.length - 1; n2 >= 0; n2--) {
              let h2 = this.lines.get(n2);
              if (!h2 || !h2.isWrapped && h2.getTrimmedLength() <= e3)
                continue;
              const c2 = [h2];
              for (; h2.isWrapped && n2 > 0; )
                h2 = this.lines.get(--n2), c2.unshift(h2);
              const l2 = this.ybase + this.y;
              if (l2 >= n2 && l2 < n2 + c2.length)
                continue;
              const d2 = c2[c2.length - 1].getTrimmedLength(), _ = (0, a.reflowSmallerGetNewLineLengths)(c2, this._cols, e3), u = _.length - c2.length;
              let f;
              f = 0 === this.ybase && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + u) : Math.max(0, this.lines.length - this.lines.maxLength + u);
              const v = [];
              for (let e4 = 0; e4 < u; e4++) {
                const e5 = this.getBlankLine(o.DEFAULT_ATTR_DATA, true);
                v.push(e5);
              }
              v.length > 0 && (s3.push({ start: n2 + c2.length + r2, newLines: v }), r2 += v.length), c2.push(...v);
              let p = _.length - 1, g = _[p];
              0 === g && (p--, g = _[p]);
              let m = c2.length - u - 1, S = d2;
              for (; m >= 0; ) {
                const e4 = Math.min(S, g);
                if (void 0 === c2[p])
                  break;
                if (c2[p].copyCellsFrom(c2[m], S - e4, g - e4, e4, true), g -= e4, 0 === g && (p--, g = _[p]), S -= e4, 0 === S) {
                  m--;
                  const e5 = Math.max(m, 0);
                  S = (0, a.getWrappedLineTrimmedLength)(c2, e5, this._cols);
                }
              }
              for (let t4 = 0; t4 < c2.length; t4++)
                _[t4] < e3 && c2[t4].setCell(_[t4], i3);
              let C = u - f;
              for (; C-- > 0; )
                0 === this.ybase ? this.y < t3 - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + r2) - t3 && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
              this.savedY = Math.min(this.savedY + u, this.ybase + t3 - 1);
            }
            if (s3.length > 0) {
              const e4 = [], t4 = [];
              for (let e5 = 0; e5 < this.lines.length; e5++)
                t4.push(this.lines.get(e5));
              const i4 = this.lines.length;
              let n2 = i4 - 1, o2 = 0, a2 = s3[o2];
              this.lines.length = Math.min(this.lines.maxLength, this.lines.length + r2);
              let h2 = 0;
              for (let c3 = Math.min(this.lines.maxLength - 1, i4 + r2 - 1); c3 >= 0; c3--)
                if (a2 && a2.start > n2 + h2) {
                  for (let e5 = a2.newLines.length - 1; e5 >= 0; e5--)
                    this.lines.set(c3--, a2.newLines[e5]);
                  c3++, e4.push({ index: n2 + 1, amount: a2.newLines.length }), h2 += a2.newLines.length, a2 = s3[++o2];
                } else
                  this.lines.set(c3, t4[n2--]);
              let c2 = 0;
              for (let t5 = e4.length - 1; t5 >= 0; t5--)
                e4[t5].index += c2, this.lines.onInsertEmitter.fire(e4[t5]), c2 += e4[t5].amount;
              const l2 = Math.max(0, i4 + r2 - this.lines.maxLength);
              l2 > 0 && this.lines.onTrimEmitter.fire(l2);
            }
          }
          translateBufferLineToString(e3, t3, i3 = 0, s3) {
            const r2 = this.lines.get(e3);
            return r2 ? r2.translateToString(t3, i3, s3) : "";
          }
          getWrappedRangeForLine(e3) {
            let t3 = e3, i3 = e3;
            for (; t3 > 0 && this.lines.get(t3).isWrapped; )
              t3--;
            for (; i3 + 1 < this.lines.length && this.lines.get(i3 + 1).isWrapped; )
              i3++;
            return { first: t3, last: i3 };
          }
          setupTabStops(e3) {
            for (null != e3 ? this.tabs[e3] || (e3 = this.prevStop(e3)) : (this.tabs = {}, e3 = 0); e3 < this._cols; e3 += this._optionsService.rawOptions.tabStopWidth)
              this.tabs[e3] = true;
          }
          prevStop(e3) {
            for (null == e3 && (e3 = this.x); !this.tabs[--e3] && e3 > 0; )
              ;
            return e3 >= this._cols ? this._cols - 1 : e3 < 0 ? 0 : e3;
          }
          nextStop(e3) {
            for (null == e3 && (e3 = this.x); !this.tabs[++e3] && e3 < this._cols; )
              ;
            return e3 >= this._cols ? this._cols - 1 : e3 < 0 ? 0 : e3;
          }
          clearMarkers(e3) {
            this._isClearing = true;
            for (let t3 = 0; t3 < this.markers.length; t3++)
              this.markers[t3].line === e3 && (this.markers[t3].dispose(), this.markers.splice(t3--, 1));
            this._isClearing = false;
          }
          clearAllMarkers() {
            this._isClearing = true;
            for (let e3 = 0; e3 < this.markers.length; e3++)
              this.markers[e3].dispose(), this.markers.splice(e3--, 1);
            this._isClearing = false;
          }
          addMarker(e3) {
            const t3 = new l.Marker(e3);
            return this.markers.push(t3), t3.register(this.lines.onTrim((e4) => {
              t3.line -= e4, t3.line < 0 && t3.dispose();
            })), t3.register(this.lines.onInsert((e4) => {
              t3.line >= e4.index && (t3.line += e4.amount);
            })), t3.register(this.lines.onDelete((e4) => {
              t3.line >= e4.index && t3.line < e4.index + e4.amount && t3.dispose(), t3.line > e4.index && (t3.line -= e4.amount);
            })), t3.register(t3.onDispose(() => this._removeMarker(t3))), t3;
          }
          _removeMarker(e3) {
            this._isClearing || this.markers.splice(this.markers.indexOf(e3), 1);
          }
        };
      }, 8437: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferLine = t2.DEFAULT_ATTR_DATA = void 0;
        const s2 = i2(3734), r = i2(511), n = i2(643), o = i2(482);
        t2.DEFAULT_ATTR_DATA = Object.freeze(new s2.AttributeData());
        let a = 0;
        class h {
          constructor(e3, t3, i3 = false) {
            this.isWrapped = i3, this._combined = {}, this._extendedAttrs = {}, this._data = new Uint32Array(3 * e3);
            const s3 = t3 || r.CellData.fromCharData([0, n.NULL_CELL_CHAR, n.NULL_CELL_WIDTH, n.NULL_CELL_CODE]);
            for (let t4 = 0; t4 < e3; ++t4)
              this.setCell(t4, s3);
            this.length = e3;
          }
          get(e3) {
            const t3 = this._data[3 * e3 + 0], i3 = 2097151 & t3;
            return [this._data[3 * e3 + 1], 2097152 & t3 ? this._combined[e3] : i3 ? (0, o.stringFromCodePoint)(i3) : "", t3 >> 22, 2097152 & t3 ? this._combined[e3].charCodeAt(this._combined[e3].length - 1) : i3];
          }
          set(e3, t3) {
            this._data[3 * e3 + 1] = t3[n.CHAR_DATA_ATTR_INDEX], t3[n.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[e3] = t3[1], this._data[3 * e3 + 0] = 2097152 | e3 | t3[n.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[3 * e3 + 0] = t3[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t3[n.CHAR_DATA_WIDTH_INDEX] << 22;
          }
          getWidth(e3) {
            return this._data[3 * e3 + 0] >> 22;
          }
          hasWidth(e3) {
            return 12582912 & this._data[3 * e3 + 0];
          }
          getFg(e3) {
            return this._data[3 * e3 + 1];
          }
          getBg(e3) {
            return this._data[3 * e3 + 2];
          }
          hasContent(e3) {
            return 4194303 & this._data[3 * e3 + 0];
          }
          getCodePoint(e3) {
            const t3 = this._data[3 * e3 + 0];
            return 2097152 & t3 ? this._combined[e3].charCodeAt(this._combined[e3].length - 1) : 2097151 & t3;
          }
          isCombined(e3) {
            return 2097152 & this._data[3 * e3 + 0];
          }
          getString(e3) {
            const t3 = this._data[3 * e3 + 0];
            return 2097152 & t3 ? this._combined[e3] : 2097151 & t3 ? (0, o.stringFromCodePoint)(2097151 & t3) : "";
          }
          isProtected(e3) {
            return 536870912 & this._data[3 * e3 + 2];
          }
          loadCell(e3, t3) {
            return a = 3 * e3, t3.content = this._data[a + 0], t3.fg = this._data[a + 1], t3.bg = this._data[a + 2], 2097152 & t3.content && (t3.combinedData = this._combined[e3]), 268435456 & t3.bg && (t3.extended = this._extendedAttrs[e3]), t3;
          }
          setCell(e3, t3) {
            2097152 & t3.content && (this._combined[e3] = t3.combinedData), 268435456 & t3.bg && (this._extendedAttrs[e3] = t3.extended), this._data[3 * e3 + 0] = t3.content, this._data[3 * e3 + 1] = t3.fg, this._data[3 * e3 + 2] = t3.bg;
          }
          setCellFromCodepoint(e3, t3, i3, s3) {
            268435456 & s3.bg && (this._extendedAttrs[e3] = s3.extended), this._data[3 * e3 + 0] = t3 | i3 << 22, this._data[3 * e3 + 1] = s3.fg, this._data[3 * e3 + 2] = s3.bg;
          }
          addCodepointToCell(e3, t3, i3) {
            let s3 = this._data[3 * e3 + 0];
            2097152 & s3 ? this._combined[e3] += (0, o.stringFromCodePoint)(t3) : 2097151 & s3 ? (this._combined[e3] = (0, o.stringFromCodePoint)(2097151 & s3) + (0, o.stringFromCodePoint)(t3), s3 &= -2097152, s3 |= 2097152) : s3 = t3 | 1 << 22, i3 && (s3 &= -12582913, s3 |= i3 << 22), this._data[3 * e3 + 0] = s3;
          }
          insertCells(e3, t3, i3) {
            if ((e3 %= this.length) && 2 === this.getWidth(e3 - 1) && this.setCellFromCodepoint(e3 - 1, 0, 1, i3), t3 < this.length - e3) {
              const s3 = new r.CellData();
              for (let i4 = this.length - e3 - t3 - 1; i4 >= 0; --i4)
                this.setCell(e3 + t3 + i4, this.loadCell(e3 + i4, s3));
              for (let s4 = 0; s4 < t3; ++s4)
                this.setCell(e3 + s4, i3);
            } else
              for (let t4 = e3; t4 < this.length; ++t4)
                this.setCell(t4, i3);
            2 === this.getWidth(this.length - 1) && this.setCellFromCodepoint(this.length - 1, 0, 1, i3);
          }
          deleteCells(e3, t3, i3) {
            if (e3 %= this.length, t3 < this.length - e3) {
              const s3 = new r.CellData();
              for (let i4 = 0; i4 < this.length - e3 - t3; ++i4)
                this.setCell(e3 + i4, this.loadCell(e3 + t3 + i4, s3));
              for (let e4 = this.length - t3; e4 < this.length; ++e4)
                this.setCell(e4, i3);
            } else
              for (let t4 = e3; t4 < this.length; ++t4)
                this.setCell(t4, i3);
            e3 && 2 === this.getWidth(e3 - 1) && this.setCellFromCodepoint(e3 - 1, 0, 1, i3), 0 !== this.getWidth(e3) || this.hasContent(e3) || this.setCellFromCodepoint(e3, 0, 1, i3);
          }
          replaceCells(e3, t3, i3, s3 = false) {
            if (s3)
              for (e3 && 2 === this.getWidth(e3 - 1) && !this.isProtected(e3 - 1) && this.setCellFromCodepoint(e3 - 1, 0, 1, i3), t3 < this.length && 2 === this.getWidth(t3 - 1) && !this.isProtected(t3) && this.setCellFromCodepoint(t3, 0, 1, i3); e3 < t3 && e3 < this.length; )
                this.isProtected(e3) || this.setCell(e3, i3), e3++;
            else
              for (e3 && 2 === this.getWidth(e3 - 1) && this.setCellFromCodepoint(e3 - 1, 0, 1, i3), t3 < this.length && 2 === this.getWidth(t3 - 1) && this.setCellFromCodepoint(t3, 0, 1, i3); e3 < t3 && e3 < this.length; )
                this.setCell(e3++, i3);
          }
          resize(e3, t3) {
            if (e3 === this.length)
              return 4 * this._data.length * 2 < this._data.buffer.byteLength;
            const i3 = 3 * e3;
            if (e3 > this.length) {
              if (this._data.buffer.byteLength >= 4 * i3)
                this._data = new Uint32Array(this._data.buffer, 0, i3);
              else {
                const e4 = new Uint32Array(i3);
                e4.set(this._data), this._data = e4;
              }
              for (let i4 = this.length; i4 < e3; ++i4)
                this.setCell(i4, t3);
            } else {
              this._data = this._data.subarray(0, i3);
              const t4 = Object.keys(this._combined);
              for (let i4 = 0; i4 < t4.length; i4++) {
                const s4 = parseInt(t4[i4], 10);
                s4 >= e3 && delete this._combined[s4];
              }
              const s3 = Object.keys(this._extendedAttrs);
              for (let t5 = 0; t5 < s3.length; t5++) {
                const i4 = parseInt(s3[t5], 10);
                i4 >= e3 && delete this._extendedAttrs[i4];
              }
            }
            return this.length = e3, 4 * i3 * 2 < this._data.buffer.byteLength;
          }
          cleanupMemory() {
            if (4 * this._data.length * 2 < this._data.buffer.byteLength) {
              const e3 = new Uint32Array(this._data.length);
              return e3.set(this._data), this._data = e3, 1;
            }
            return 0;
          }
          fill(e3, t3 = false) {
            if (t3)
              for (let t4 = 0; t4 < this.length; ++t4)
                this.isProtected(t4) || this.setCell(t4, e3);
            else {
              this._combined = {}, this._extendedAttrs = {};
              for (let t4 = 0; t4 < this.length; ++t4)
                this.setCell(t4, e3);
            }
          }
          copyFrom(e3) {
            this.length !== e3.length ? this._data = new Uint32Array(e3._data) : this._data.set(e3._data), this.length = e3.length, this._combined = {};
            for (const t3 in e3._combined)
              this._combined[t3] = e3._combined[t3];
            this._extendedAttrs = {};
            for (const t3 in e3._extendedAttrs)
              this._extendedAttrs[t3] = e3._extendedAttrs[t3];
            this.isWrapped = e3.isWrapped;
          }
          clone() {
            const e3 = new h(0);
            e3._data = new Uint32Array(this._data), e3.length = this.length;
            for (const t3 in this._combined)
              e3._combined[t3] = this._combined[t3];
            for (const t3 in this._extendedAttrs)
              e3._extendedAttrs[t3] = this._extendedAttrs[t3];
            return e3.isWrapped = this.isWrapped, e3;
          }
          getTrimmedLength() {
            for (let e3 = this.length - 1; e3 >= 0; --e3)
              if (4194303 & this._data[3 * e3 + 0])
                return e3 + (this._data[3 * e3 + 0] >> 22);
            return 0;
          }
          getNoBgTrimmedLength() {
            for (let e3 = this.length - 1; e3 >= 0; --e3)
              if (4194303 & this._data[3 * e3 + 0] || 50331648 & this._data[3 * e3 + 2])
                return e3 + (this._data[3 * e3 + 0] >> 22);
            return 0;
          }
          copyCellsFrom(e3, t3, i3, s3, r2) {
            const n2 = e3._data;
            if (r2)
              for (let r3 = s3 - 1; r3 >= 0; r3--) {
                for (let e4 = 0; e4 < 3; e4++)
                  this._data[3 * (i3 + r3) + e4] = n2[3 * (t3 + r3) + e4];
                268435456 & n2[3 * (t3 + r3) + 2] && (this._extendedAttrs[i3 + r3] = e3._extendedAttrs[t3 + r3]);
              }
            else
              for (let r3 = 0; r3 < s3; r3++) {
                for (let e4 = 0; e4 < 3; e4++)
                  this._data[3 * (i3 + r3) + e4] = n2[3 * (t3 + r3) + e4];
                268435456 & n2[3 * (t3 + r3) + 2] && (this._extendedAttrs[i3 + r3] = e3._extendedAttrs[t3 + r3]);
              }
            const o2 = Object.keys(e3._combined);
            for (let s4 = 0; s4 < o2.length; s4++) {
              const r3 = parseInt(o2[s4], 10);
              r3 >= t3 && (this._combined[r3 - t3 + i3] = e3._combined[r3]);
            }
          }
          translateToString(e3, t3, i3, s3) {
            t3 = t3 ?? 0, i3 = i3 ?? this.length, e3 && (i3 = Math.min(i3, this.getTrimmedLength())), s3 && (s3.length = 0);
            let r2 = "";
            for (; t3 < i3; ) {
              const e4 = this._data[3 * t3 + 0], i4 = 2097151 & e4, a2 = 2097152 & e4 ? this._combined[t3] : i4 ? (0, o.stringFromCodePoint)(i4) : n.WHITESPACE_CELL_CHAR;
              if (r2 += a2, s3)
                for (let e5 = 0; e5 < a2.length; ++e5)
                  s3.push(t3);
              t3 += e4 >> 22 || 1;
            }
            return s3 && s3.push(t3), r2;
          }
        }
        t2.BufferLine = h;
      }, 4841: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getRangeLength = void 0, t2.getRangeLength = function(e3, t3) {
          if (e3.start.y > e3.end.y)
            throw new Error(`Buffer range end (${e3.end.x}, ${e3.end.y}) cannot be before start (${e3.start.x}, ${e3.start.y})`);
          return t3 * (e3.end.y - e3.start.y) + (e3.end.x - e3.start.x + 1);
        };
      }, 4634: (e2, t2) => {
        function i2(e3, t3, i3) {
          if (t3 === e3.length - 1)
            return e3[t3].getTrimmedLength();
          const s2 = !e3[t3].hasContent(i3 - 1) && 1 === e3[t3].getWidth(i3 - 1), r = 2 === e3[t3 + 1].getWidth(0);
          return s2 && r ? i3 - 1 : i3;
        }
        Object.defineProperty(t2, "__esModule", { value: true }), t2.getWrappedLineTrimmedLength = t2.reflowSmallerGetNewLineLengths = t2.reflowLargerApplyNewLayout = t2.reflowLargerCreateNewLayout = t2.reflowLargerGetLinesToRemove = void 0, t2.reflowLargerGetLinesToRemove = function(e3, t3, s2, r, n) {
          const o = [];
          for (let a = 0; a < e3.length - 1; a++) {
            let h = a, c = e3.get(++h);
            if (!c.isWrapped)
              continue;
            const l = [e3.get(a)];
            for (; h < e3.length && c.isWrapped; )
              l.push(c), c = e3.get(++h);
            if (r >= a && r < h) {
              a += l.length - 1;
              continue;
            }
            let d = 0, _ = i2(l, d, t3), u = 1, f = 0;
            for (; u < l.length; ) {
              const e4 = i2(l, u, t3), r2 = e4 - f, o2 = s2 - _, a2 = Math.min(r2, o2);
              l[d].copyCellsFrom(l[u], f, _, a2, false), _ += a2, _ === s2 && (d++, _ = 0), f += a2, f === e4 && (u++, f = 0), 0 === _ && 0 !== d && 2 === l[d - 1].getWidth(s2 - 1) && (l[d].copyCellsFrom(l[d - 1], s2 - 1, _++, 1, false), l[d - 1].setCell(s2 - 1, n));
            }
            l[d].replaceCells(_, s2, n);
            let v = 0;
            for (let e4 = l.length - 1; e4 > 0 && (e4 > d || 0 === l[e4].getTrimmedLength()); e4--)
              v++;
            v > 0 && (o.push(a + l.length - v), o.push(v)), a += l.length - 1;
          }
          return o;
        }, t2.reflowLargerCreateNewLayout = function(e3, t3) {
          const i3 = [];
          let s2 = 0, r = t3[s2], n = 0;
          for (let o = 0; o < e3.length; o++)
            if (r === o) {
              const i4 = t3[++s2];
              e3.onDeleteEmitter.fire({ index: o - n, amount: i4 }), o += i4 - 1, n += i4, r = t3[++s2];
            } else
              i3.push(o);
          return { layout: i3, countRemoved: n };
        }, t2.reflowLargerApplyNewLayout = function(e3, t3) {
          const i3 = [];
          for (let s2 = 0; s2 < t3.length; s2++)
            i3.push(e3.get(t3[s2]));
          for (let t4 = 0; t4 < i3.length; t4++)
            e3.set(t4, i3[t4]);
          e3.length = t3.length;
        }, t2.reflowSmallerGetNewLineLengths = function(e3, t3, s2) {
          const r = [], n = e3.map((s3, r2) => i2(e3, r2, t3)).reduce((e4, t4) => e4 + t4);
          let o = 0, a = 0, h = 0;
          for (; h < n; ) {
            if (n - h < s2) {
              r.push(n - h);
              break;
            }
            o += s2;
            const c = i2(e3, a, t3);
            o > c && (o -= c, a++);
            const l = 2 === e3[a].getWidth(o - 1);
            l && o--;
            const d = l ? s2 - 1 : s2;
            r.push(d), h += d;
          }
          return r;
        }, t2.getWrappedLineTrimmedLength = i2;
      }, 5295: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferSet = void 0;
        const s2 = i2(8460), r = i2(844), n = i2(9092);
        class o extends r.Disposable {
          constructor(e3, t3) {
            super(), this._optionsService = e3, this._bufferService = t3, this._onBufferActivate = this.register(new s2.EventEmitter()), this.onBufferActivate = this._onBufferActivate.event, this.reset(), this.register(this._optionsService.onSpecificOptionChange("scrollback", () => this.resize(this._bufferService.cols, this._bufferService.rows))), this.register(this._optionsService.onSpecificOptionChange("tabStopWidth", () => this.setupTabStops()));
          }
          reset() {
            this._normal = new n.Buffer(true, this._optionsService, this._bufferService), this._normal.fillViewportRows(), this._alt = new n.Buffer(false, this._optionsService, this._bufferService), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }), this.setupTabStops();
          }
          get alt() {
            return this._alt;
          }
          get active() {
            return this._activeBuffer;
          }
          get normal() {
            return this._normal;
          }
          activateNormalBuffer() {
            this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clearAllMarkers(), this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }));
          }
          activateAltBuffer(e3) {
            this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e3), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({ activeBuffer: this._alt, inactiveBuffer: this._normal }));
          }
          resize(e3, t3) {
            this._normal.resize(e3, t3), this._alt.resize(e3, t3), this.setupTabStops(e3);
          }
          setupTabStops(e3) {
            this._normal.setupTabStops(e3), this._alt.setupTabStops(e3);
          }
        }
        t2.BufferSet = o;
      }, 511: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CellData = void 0;
        const s2 = i2(482), r = i2(643), n = i2(3734);
        class o extends n.AttributeData {
          constructor() {
            super(...arguments), this.content = 0, this.fg = 0, this.bg = 0, this.extended = new n.ExtendedAttrs(), this.combinedData = "";
          }
          static fromCharData(e3) {
            const t3 = new o();
            return t3.setFromCharData(e3), t3;
          }
          isCombined() {
            return 2097152 & this.content;
          }
          getWidth() {
            return this.content >> 22;
          }
          getChars() {
            return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? (0, s2.stringFromCodePoint)(2097151 & this.content) : "";
          }
          getCode() {
            return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
          }
          setFromCharData(e3) {
            this.fg = e3[r.CHAR_DATA_ATTR_INDEX], this.bg = 0;
            let t3 = false;
            if (e3[r.CHAR_DATA_CHAR_INDEX].length > 2)
              t3 = true;
            else if (2 === e3[r.CHAR_DATA_CHAR_INDEX].length) {
              const i3 = e3[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
              if (55296 <= i3 && i3 <= 56319) {
                const s3 = e3[r.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                56320 <= s3 && s3 <= 57343 ? this.content = 1024 * (i3 - 55296) + s3 - 56320 + 65536 | e3[r.CHAR_DATA_WIDTH_INDEX] << 22 : t3 = true;
              } else
                t3 = true;
            } else
              this.content = e3[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e3[r.CHAR_DATA_WIDTH_INDEX] << 22;
            t3 && (this.combinedData = e3[r.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e3[r.CHAR_DATA_WIDTH_INDEX] << 22);
          }
          getAsCharData() {
            return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
          }
        }
        t2.CellData = o;
      }, 643: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.WHITESPACE_CELL_CODE = t2.WHITESPACE_CELL_WIDTH = t2.WHITESPACE_CELL_CHAR = t2.NULL_CELL_CODE = t2.NULL_CELL_WIDTH = t2.NULL_CELL_CHAR = t2.CHAR_DATA_CODE_INDEX = t2.CHAR_DATA_WIDTH_INDEX = t2.CHAR_DATA_CHAR_INDEX = t2.CHAR_DATA_ATTR_INDEX = t2.DEFAULT_EXT = t2.DEFAULT_ATTR = t2.DEFAULT_COLOR = void 0, t2.DEFAULT_COLOR = 0, t2.DEFAULT_ATTR = 256 | t2.DEFAULT_COLOR << 9, t2.DEFAULT_EXT = 0, t2.CHAR_DATA_ATTR_INDEX = 0, t2.CHAR_DATA_CHAR_INDEX = 1, t2.CHAR_DATA_WIDTH_INDEX = 2, t2.CHAR_DATA_CODE_INDEX = 3, t2.NULL_CELL_CHAR = "", t2.NULL_CELL_WIDTH = 1, t2.NULL_CELL_CODE = 0, t2.WHITESPACE_CELL_CHAR = " ", t2.WHITESPACE_CELL_WIDTH = 1, t2.WHITESPACE_CELL_CODE = 32;
      }, 4863: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Marker = void 0;
        const s2 = i2(8460), r = i2(844);
        class n {
          get id() {
            return this._id;
          }
          constructor(e3) {
            this.line = e3, this.isDisposed = false, this._disposables = [], this._id = n._nextId++, this._onDispose = this.register(new s2.EventEmitter()), this.onDispose = this._onDispose.event;
          }
          dispose() {
            this.isDisposed || (this.isDisposed = true, this.line = -1, this._onDispose.fire(), (0, r.disposeArray)(this._disposables), this._disposables.length = 0);
          }
          register(e3) {
            return this._disposables.push(e3), e3;
          }
        }
        t2.Marker = n, n._nextId = 1;
      }, 7116: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.DEFAULT_CHARSET = t2.CHARSETS = void 0, t2.CHARSETS = {}, t2.DEFAULT_CHARSET = t2.CHARSETS.B, t2.CHARSETS[0] = { "`": "\u25C6", a: "\u2592", b: "\u2409", c: "\u240C", d: "\u240D", e: "\u240A", f: "\xB0", g: "\xB1", h: "\u2424", i: "\u240B", j: "\u2518", k: "\u2510", l: "\u250C", m: "\u2514", n: "\u253C", o: "\u23BA", p: "\u23BB", q: "\u2500", r: "\u23BC", s: "\u23BD", t: "\u251C", u: "\u2524", v: "\u2534", w: "\u252C", x: "\u2502", y: "\u2264", z: "\u2265", "{": "\u03C0", "|": "\u2260", "}": "\xA3", "~": "\xB7" }, t2.CHARSETS.A = { "#": "\xA3" }, t2.CHARSETS.B = void 0, t2.CHARSETS[4] = { "#": "\xA3", "@": "\xBE", "[": "ij", "\\": "\xBD", "]": "|", "{": "\xA8", "|": "f", "}": "\xBC", "~": "\xB4" }, t2.CHARSETS.C = t2.CHARSETS[5] = { "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS.R = { "#": "\xA3", "@": "\xE0", "[": "\xB0", "\\": "\xE7", "]": "\xA7", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xA8" }, t2.CHARSETS.Q = { "@": "\xE0", "[": "\xE2", "\\": "\xE7", "]": "\xEA", "^": "\xEE", "`": "\xF4", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xFB" }, t2.CHARSETS.K = { "@": "\xA7", "[": "\xC4", "\\": "\xD6", "]": "\xDC", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xDF" }, t2.CHARSETS.Y = { "#": "\xA3", "@": "\xA7", "[": "\xB0", "\\": "\xE7", "]": "\xE9", "`": "\xF9", "{": "\xE0", "|": "\xF2", "}": "\xE8", "~": "\xEC" }, t2.CHARSETS.E = t2.CHARSETS[6] = { "@": "\xC4", "[": "\xC6", "\\": "\xD8", "]": "\xC5", "^": "\xDC", "`": "\xE4", "{": "\xE6", "|": "\xF8", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS.Z = { "#": "\xA3", "@": "\xA7", "[": "\xA1", "\\": "\xD1", "]": "\xBF", "{": "\xB0", "|": "\xF1", "}": "\xE7" }, t2.CHARSETS.H = t2.CHARSETS[7] = { "@": "\xC9", "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS["="] = { "#": "\xF9", "@": "\xE0", "[": "\xE9", "\\": "\xE7", "]": "\xEA", "^": "\xEE", _: "\xE8", "`": "\xF4", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xFB" };
      }, 2584: (e2, t2) => {
        var i2, s2, r;
        Object.defineProperty(t2, "__esModule", { value: true }), t2.C1_ESCAPED = t2.C1 = t2.C0 = void 0, function(e3) {
          e3.NUL = "\0", e3.SOH = "", e3.STX = "", e3.ETX = "", e3.EOT = "", e3.ENQ = "", e3.ACK = "", e3.BEL = "\x07", e3.BS = "\b", e3.HT = "	", e3.LF = "\n", e3.VT = "\v", e3.FF = "\f", e3.CR = "\r", e3.SO = "", e3.SI = "", e3.DLE = "", e3.DC1 = "", e3.DC2 = "", e3.DC3 = "", e3.DC4 = "", e3.NAK = "", e3.SYN = "", e3.ETB = "", e3.CAN = "", e3.EM = "", e3.SUB = "", e3.ESC = "\x1B", e3.FS = "", e3.GS = "", e3.RS = "", e3.US = "", e3.SP = " ", e3.DEL = "\x7F";
        }(i2 || (t2.C0 = i2 = {})), function(e3) {
          e3.PAD = "\x80", e3.HOP = "\x81", e3.BPH = "\x82", e3.NBH = "\x83", e3.IND = "\x84", e3.NEL = "\x85", e3.SSA = "\x86", e3.ESA = "\x87", e3.HTS = "\x88", e3.HTJ = "\x89", e3.VTS = "\x8A", e3.PLD = "\x8B", e3.PLU = "\x8C", e3.RI = "\x8D", e3.SS2 = "\x8E", e3.SS3 = "\x8F", e3.DCS = "\x90", e3.PU1 = "\x91", e3.PU2 = "\x92", e3.STS = "\x93", e3.CCH = "\x94", e3.MW = "\x95", e3.SPA = "\x96", e3.EPA = "\x97", e3.SOS = "\x98", e3.SGCI = "\x99", e3.SCI = "\x9A", e3.CSI = "\x9B", e3.ST = "\x9C", e3.OSC = "\x9D", e3.PM = "\x9E", e3.APC = "\x9F";
        }(s2 || (t2.C1 = s2 = {})), function(e3) {
          e3.ST = `${i2.ESC}\\`;
        }(r || (t2.C1_ESCAPED = r = {}));
      }, 7399: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.evaluateKeyboardEvent = void 0;
        const s2 = i2(2584), r = { 48: ["0", ")"], 49: ["1", "!"], 50: ["2", "@"], 51: ["3", "#"], 52: ["4", "$"], 53: ["5", "%"], 54: ["6", "^"], 55: ["7", "&"], 56: ["8", "*"], 57: ["9", "("], 186: [";", ":"], 187: ["=", "+"], 188: [",", "<"], 189: ["-", "_"], 190: [".", ">"], 191: ["/", "?"], 192: ["`", "~"], 219: ["[", "{"], 220: ["\\", "|"], 221: ["]", "}"], 222: ["'", '"'] };
        t2.evaluateKeyboardEvent = function(e3, t3, i3, n) {
          const o = { type: 0, cancel: false, key: void 0 }, a = (e3.shiftKey ? 1 : 0) | (e3.altKey ? 2 : 0) | (e3.ctrlKey ? 4 : 0) | (e3.metaKey ? 8 : 0);
          switch (e3.keyCode) {
            case 0:
              "UIKeyInputUpArrow" === e3.key ? o.key = t3 ? s2.C0.ESC + "OA" : s2.C0.ESC + "[A" : "UIKeyInputLeftArrow" === e3.key ? o.key = t3 ? s2.C0.ESC + "OD" : s2.C0.ESC + "[D" : "UIKeyInputRightArrow" === e3.key ? o.key = t3 ? s2.C0.ESC + "OC" : s2.C0.ESC + "[C" : "UIKeyInputDownArrow" === e3.key && (o.key = t3 ? s2.C0.ESC + "OB" : s2.C0.ESC + "[B");
              break;
            case 8:
              o.key = e3.ctrlKey ? "\b" : s2.C0.DEL, e3.altKey && (o.key = s2.C0.ESC + o.key);
              break;
            case 9:
              if (e3.shiftKey) {
                o.key = s2.C0.ESC + "[Z";
                break;
              }
              o.key = s2.C0.HT, o.cancel = true;
              break;
            case 13:
              o.key = e3.altKey ? s2.C0.ESC + s2.C0.CR : s2.C0.CR, o.cancel = true;
              break;
            case 27:
              o.key = s2.C0.ESC, e3.altKey && (o.key = s2.C0.ESC + s2.C0.ESC), o.cancel = true;
              break;
            case 37:
              if (e3.metaKey)
                break;
              a ? (o.key = s2.C0.ESC + "[1;" + (a + 1) + "D", o.key === s2.C0.ESC + "[1;3D" && (o.key = s2.C0.ESC + (i3 ? "b" : "[1;5D"))) : o.key = t3 ? s2.C0.ESC + "OD" : s2.C0.ESC + "[D";
              break;
            case 39:
              if (e3.metaKey)
                break;
              a ? (o.key = s2.C0.ESC + "[1;" + (a + 1) + "C", o.key === s2.C0.ESC + "[1;3C" && (o.key = s2.C0.ESC + (i3 ? "f" : "[1;5C"))) : o.key = t3 ? s2.C0.ESC + "OC" : s2.C0.ESC + "[C";
              break;
            case 38:
              if (e3.metaKey)
                break;
              a ? (o.key = s2.C0.ESC + "[1;" + (a + 1) + "A", i3 || o.key !== s2.C0.ESC + "[1;3A" || (o.key = s2.C0.ESC + "[1;5A")) : o.key = t3 ? s2.C0.ESC + "OA" : s2.C0.ESC + "[A";
              break;
            case 40:
              if (e3.metaKey)
                break;
              a ? (o.key = s2.C0.ESC + "[1;" + (a + 1) + "B", i3 || o.key !== s2.C0.ESC + "[1;3B" || (o.key = s2.C0.ESC + "[1;5B")) : o.key = t3 ? s2.C0.ESC + "OB" : s2.C0.ESC + "[B";
              break;
            case 45:
              e3.shiftKey || e3.ctrlKey || (o.key = s2.C0.ESC + "[2~");
              break;
            case 46:
              o.key = a ? s2.C0.ESC + "[3;" + (a + 1) + "~" : s2.C0.ESC + "[3~";
              break;
            case 36:
              o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "H" : t3 ? s2.C0.ESC + "OH" : s2.C0.ESC + "[H";
              break;
            case 35:
              o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "F" : t3 ? s2.C0.ESC + "OF" : s2.C0.ESC + "[F";
              break;
            case 33:
              e3.shiftKey ? o.type = 2 : e3.ctrlKey ? o.key = s2.C0.ESC + "[5;" + (a + 1) + "~" : o.key = s2.C0.ESC + "[5~";
              break;
            case 34:
              e3.shiftKey ? o.type = 3 : e3.ctrlKey ? o.key = s2.C0.ESC + "[6;" + (a + 1) + "~" : o.key = s2.C0.ESC + "[6~";
              break;
            case 112:
              o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "P" : s2.C0.ESC + "OP";
              break;
            case 113:
              o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "Q" : s2.C0.ESC + "OQ";
              break;
            case 114:
              o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "R" : s2.C0.ESC + "OR";
              break;
            case 115:
              o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "S" : s2.C0.ESC + "OS";
              break;
            case 116:
              o.key = a ? s2.C0.ESC + "[15;" + (a + 1) + "~" : s2.C0.ESC + "[15~";
              break;
            case 117:
              o.key = a ? s2.C0.ESC + "[17;" + (a + 1) + "~" : s2.C0.ESC + "[17~";
              break;
            case 118:
              o.key = a ? s2.C0.ESC + "[18;" + (a + 1) + "~" : s2.C0.ESC + "[18~";
              break;
            case 119:
              o.key = a ? s2.C0.ESC + "[19;" + (a + 1) + "~" : s2.C0.ESC + "[19~";
              break;
            case 120:
              o.key = a ? s2.C0.ESC + "[20;" + (a + 1) + "~" : s2.C0.ESC + "[20~";
              break;
            case 121:
              o.key = a ? s2.C0.ESC + "[21;" + (a + 1) + "~" : s2.C0.ESC + "[21~";
              break;
            case 122:
              o.key = a ? s2.C0.ESC + "[23;" + (a + 1) + "~" : s2.C0.ESC + "[23~";
              break;
            case 123:
              o.key = a ? s2.C0.ESC + "[24;" + (a + 1) + "~" : s2.C0.ESC + "[24~";
              break;
            default:
              if (!e3.ctrlKey || e3.shiftKey || e3.altKey || e3.metaKey)
                if (i3 && !n || !e3.altKey || e3.metaKey)
                  !i3 || e3.altKey || e3.ctrlKey || e3.shiftKey || !e3.metaKey ? e3.key && !e3.ctrlKey && !e3.altKey && !e3.metaKey && e3.keyCode >= 48 && 1 === e3.key.length ? o.key = e3.key : e3.key && e3.ctrlKey && ("_" === e3.key && (o.key = s2.C0.US), "@" === e3.key && (o.key = s2.C0.NUL)) : 65 === e3.keyCode && (o.type = 1);
                else {
                  const t4 = r[e3.keyCode], i4 = t4?.[e3.shiftKey ? 1 : 0];
                  if (i4)
                    o.key = s2.C0.ESC + i4;
                  else if (e3.keyCode >= 65 && e3.keyCode <= 90) {
                    const t5 = e3.ctrlKey ? e3.keyCode - 64 : e3.keyCode + 32;
                    let i5 = String.fromCharCode(t5);
                    e3.shiftKey && (i5 = i5.toUpperCase()), o.key = s2.C0.ESC + i5;
                  } else if (32 === e3.keyCode)
                    o.key = s2.C0.ESC + (e3.ctrlKey ? s2.C0.NUL : " ");
                  else if ("Dead" === e3.key && e3.code.startsWith("Key")) {
                    let t5 = e3.code.slice(3, 4);
                    e3.shiftKey || (t5 = t5.toLowerCase()), o.key = s2.C0.ESC + t5, o.cancel = true;
                  }
                }
              else
                e3.keyCode >= 65 && e3.keyCode <= 90 ? o.key = String.fromCharCode(e3.keyCode - 64) : 32 === e3.keyCode ? o.key = s2.C0.NUL : e3.keyCode >= 51 && e3.keyCode <= 55 ? o.key = String.fromCharCode(e3.keyCode - 51 + 27) : 56 === e3.keyCode ? o.key = s2.C0.DEL : 219 === e3.keyCode ? o.key = s2.C0.ESC : 220 === e3.keyCode ? o.key = s2.C0.FS : 221 === e3.keyCode && (o.key = s2.C0.GS);
          }
          return o;
        };
      }, 482: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Utf8ToUtf32 = t2.StringToUtf32 = t2.utf32ToString = t2.stringFromCodePoint = void 0, t2.stringFromCodePoint = function(e3) {
          return e3 > 65535 ? (e3 -= 65536, String.fromCharCode(55296 + (e3 >> 10)) + String.fromCharCode(e3 % 1024 + 56320)) : String.fromCharCode(e3);
        }, t2.utf32ToString = function(e3, t3 = 0, i2 = e3.length) {
          let s2 = "";
          for (let r = t3; r < i2; ++r) {
            let t4 = e3[r];
            t4 > 65535 ? (t4 -= 65536, s2 += String.fromCharCode(55296 + (t4 >> 10)) + String.fromCharCode(t4 % 1024 + 56320)) : s2 += String.fromCharCode(t4);
          }
          return s2;
        }, t2.StringToUtf32 = class {
          constructor() {
            this._interim = 0;
          }
          clear() {
            this._interim = 0;
          }
          decode(e3, t3) {
            const i2 = e3.length;
            if (!i2)
              return 0;
            let s2 = 0, r = 0;
            if (this._interim) {
              const i3 = e3.charCodeAt(r++);
              56320 <= i3 && i3 <= 57343 ? t3[s2++] = 1024 * (this._interim - 55296) + i3 - 56320 + 65536 : (t3[s2++] = this._interim, t3[s2++] = i3), this._interim = 0;
            }
            for (let n = r; n < i2; ++n) {
              const r2 = e3.charCodeAt(n);
              if (55296 <= r2 && r2 <= 56319) {
                if (++n >= i2)
                  return this._interim = r2, s2;
                const o = e3.charCodeAt(n);
                56320 <= o && o <= 57343 ? t3[s2++] = 1024 * (r2 - 55296) + o - 56320 + 65536 : (t3[s2++] = r2, t3[s2++] = o);
              } else
                65279 !== r2 && (t3[s2++] = r2);
            }
            return s2;
          }
        }, t2.Utf8ToUtf32 = class {
          constructor() {
            this.interim = new Uint8Array(3);
          }
          clear() {
            this.interim.fill(0);
          }
          decode(e3, t3) {
            const i2 = e3.length;
            if (!i2)
              return 0;
            let s2, r, n, o, a = 0, h = 0, c = 0;
            if (this.interim[0]) {
              let s3 = false, r2 = this.interim[0];
              r2 &= 192 == (224 & r2) ? 31 : 224 == (240 & r2) ? 15 : 7;
              let n2, o2 = 0;
              for (; (n2 = 63 & this.interim[++o2]) && o2 < 4; )
                r2 <<= 6, r2 |= n2;
              const h2 = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, l2 = h2 - o2;
              for (; c < l2; ) {
                if (c >= i2)
                  return 0;
                if (n2 = e3[c++], 128 != (192 & n2)) {
                  c--, s3 = true;
                  break;
                }
                this.interim[o2++] = n2, r2 <<= 6, r2 |= 63 & n2;
              }
              s3 || (2 === h2 ? r2 < 128 ? c-- : t3[a++] = r2 : 3 === h2 ? r2 < 2048 || r2 >= 55296 && r2 <= 57343 || 65279 === r2 || (t3[a++] = r2) : r2 < 65536 || r2 > 1114111 || (t3[a++] = r2)), this.interim.fill(0);
            }
            const l = i2 - 4;
            let d = c;
            for (; d < i2; ) {
              for (; !(!(d < l) || 128 & (s2 = e3[d]) || 128 & (r = e3[d + 1]) || 128 & (n = e3[d + 2]) || 128 & (o = e3[d + 3])); )
                t3[a++] = s2, t3[a++] = r, t3[a++] = n, t3[a++] = o, d += 4;
              if (s2 = e3[d++], s2 < 128)
                t3[a++] = s2;
              else if (192 == (224 & s2)) {
                if (d >= i2)
                  return this.interim[0] = s2, a;
                if (r = e3[d++], 128 != (192 & r)) {
                  d--;
                  continue;
                }
                if (h = (31 & s2) << 6 | 63 & r, h < 128) {
                  d--;
                  continue;
                }
                t3[a++] = h;
              } else if (224 == (240 & s2)) {
                if (d >= i2)
                  return this.interim[0] = s2, a;
                if (r = e3[d++], 128 != (192 & r)) {
                  d--;
                  continue;
                }
                if (d >= i2)
                  return this.interim[0] = s2, this.interim[1] = r, a;
                if (n = e3[d++], 128 != (192 & n)) {
                  d--;
                  continue;
                }
                if (h = (15 & s2) << 12 | (63 & r) << 6 | 63 & n, h < 2048 || h >= 55296 && h <= 57343 || 65279 === h)
                  continue;
                t3[a++] = h;
              } else if (240 == (248 & s2)) {
                if (d >= i2)
                  return this.interim[0] = s2, a;
                if (r = e3[d++], 128 != (192 & r)) {
                  d--;
                  continue;
                }
                if (d >= i2)
                  return this.interim[0] = s2, this.interim[1] = r, a;
                if (n = e3[d++], 128 != (192 & n)) {
                  d--;
                  continue;
                }
                if (d >= i2)
                  return this.interim[0] = s2, this.interim[1] = r, this.interim[2] = n, a;
                if (o = e3[d++], 128 != (192 & o)) {
                  d--;
                  continue;
                }
                if (h = (7 & s2) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & o, h < 65536 || h > 1114111)
                  continue;
                t3[a++] = h;
              }
            }
            return a;
          }
        };
      }, 225: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeV6 = void 0;
        const s2 = i2(1480), r = [[768, 879], [1155, 1158], [1160, 1161], [1425, 1469], [1471, 1471], [1473, 1474], [1476, 1477], [1479, 1479], [1536, 1539], [1552, 1557], [1611, 1630], [1648, 1648], [1750, 1764], [1767, 1768], [1770, 1773], [1807, 1807], [1809, 1809], [1840, 1866], [1958, 1968], [2027, 2035], [2305, 2306], [2364, 2364], [2369, 2376], [2381, 2381], [2385, 2388], [2402, 2403], [2433, 2433], [2492, 2492], [2497, 2500], [2509, 2509], [2530, 2531], [2561, 2562], [2620, 2620], [2625, 2626], [2631, 2632], [2635, 2637], [2672, 2673], [2689, 2690], [2748, 2748], [2753, 2757], [2759, 2760], [2765, 2765], [2786, 2787], [2817, 2817], [2876, 2876], [2879, 2879], [2881, 2883], [2893, 2893], [2902, 2902], [2946, 2946], [3008, 3008], [3021, 3021], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3260, 3260], [3263, 3263], [3270, 3270], [3276, 3277], [3298, 3299], [3393, 3395], [3405, 3405], [3530, 3530], [3538, 3540], [3542, 3542], [3633, 3633], [3636, 3642], [3655, 3662], [3761, 3761], [3764, 3769], [3771, 3772], [3784, 3789], [3864, 3865], [3893, 3893], [3895, 3895], [3897, 3897], [3953, 3966], [3968, 3972], [3974, 3975], [3984, 3991], [3993, 4028], [4038, 4038], [4141, 4144], [4146, 4146], [4150, 4151], [4153, 4153], [4184, 4185], [4448, 4607], [4959, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6086, 6086], [6089, 6099], [6109, 6109], [6155, 6157], [6313, 6313], [6432, 6434], [6439, 6440], [6450, 6450], [6457, 6459], [6679, 6680], [6912, 6915], [6964, 6964], [6966, 6970], [6972, 6972], [6978, 6978], [7019, 7027], [7616, 7626], [7678, 7679], [8203, 8207], [8234, 8238], [8288, 8291], [8298, 8303], [8400, 8431], [12330, 12335], [12441, 12442], [43014, 43014], [43019, 43019], [43045, 43046], [64286, 64286], [65024, 65039], [65056, 65059], [65279, 65279], [65529, 65531]], n = [[68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68159, 68159], [119143, 119145], [119155, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [917505, 917505], [917536, 917631], [917760, 917999]];
        let o;
        t2.UnicodeV6 = class {
          constructor() {
            if (this.version = "6", !o) {
              o = new Uint8Array(65536), o.fill(1), o[0] = 0, o.fill(0, 1, 32), o.fill(0, 127, 160), o.fill(2, 4352, 4448), o[9001] = 2, o[9002] = 2, o.fill(2, 11904, 42192), o[12351] = 1, o.fill(2, 44032, 55204), o.fill(2, 63744, 64256), o.fill(2, 65040, 65050), o.fill(2, 65072, 65136), o.fill(2, 65280, 65377), o.fill(2, 65504, 65511);
              for (let e3 = 0; e3 < r.length; ++e3)
                o.fill(0, r[e3][0], r[e3][1] + 1);
            }
          }
          wcwidth(e3) {
            return e3 < 32 ? 0 : e3 < 127 ? 1 : e3 < 65536 ? o[e3] : function(e4, t3) {
              let i3, s3 = 0, r2 = t3.length - 1;
              if (e4 < t3[0][0] || e4 > t3[r2][1])
                return false;
              for (; r2 >= s3; )
                if (i3 = s3 + r2 >> 1, e4 > t3[i3][1])
                  s3 = i3 + 1;
                else {
                  if (!(e4 < t3[i3][0]))
                    return true;
                  r2 = i3 - 1;
                }
              return false;
            }(e3, n) ? 0 : e3 >= 131072 && e3 <= 196605 || e3 >= 196608 && e3 <= 262141 ? 2 : 1;
          }
          charProperties(e3, t3) {
            let i3 = this.wcwidth(e3), r2 = 0 === i3 && 0 !== t3;
            if (r2) {
              const e4 = s2.UnicodeService.extractWidth(t3);
              0 === e4 ? r2 = false : e4 > i3 && (i3 = e4);
            }
            return s2.UnicodeService.createPropertyValue(0, i3, r2);
          }
        };
      }, 5981: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.WriteBuffer = void 0;
        const s2 = i2(8460), r = i2(844);
        class n extends r.Disposable {
          constructor(e3) {
            super(), this._action = e3, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0, this._isSyncWriting = false, this._syncCalls = 0, this._didUserInput = false, this._onWriteParsed = this.register(new s2.EventEmitter()), this.onWriteParsed = this._onWriteParsed.event;
          }
          handleUserInput() {
            this._didUserInput = true;
          }
          writeSync(e3, t3) {
            if (void 0 !== t3 && this._syncCalls > t3)
              return void (this._syncCalls = 0);
            if (this._pendingData += e3.length, this._writeBuffer.push(e3), this._callbacks.push(void 0), this._syncCalls++, this._isSyncWriting)
              return;
            let i3;
            for (this._isSyncWriting = true; i3 = this._writeBuffer.shift(); ) {
              this._action(i3);
              const e4 = this._callbacks.shift();
              e4 && e4();
            }
            this._pendingData = 0, this._bufferOffset = 2147483647, this._isSyncWriting = false, this._syncCalls = 0;
          }
          write(e3, t3) {
            if (this._pendingData > 5e7)
              throw new Error("write data discarded, use flow control to avoid losing data");
            if (!this._writeBuffer.length) {
              if (this._bufferOffset = 0, this._didUserInput)
                return this._didUserInput = false, this._pendingData += e3.length, this._writeBuffer.push(e3), this._callbacks.push(t3), void this._innerWrite();
              setTimeout(() => this._innerWrite());
            }
            this._pendingData += e3.length, this._writeBuffer.push(e3), this._callbacks.push(t3);
          }
          _innerWrite(e3 = 0, t3 = true) {
            const i3 = e3 || Date.now();
            for (; this._writeBuffer.length > this._bufferOffset; ) {
              const e4 = this._writeBuffer[this._bufferOffset], s3 = this._action(e4, t3);
              if (s3) {
                const e5 = (e6) => Date.now() - i3 >= 12 ? setTimeout(() => this._innerWrite(0, e6)) : this._innerWrite(i3, e6);
                return void s3.catch((e6) => (queueMicrotask(() => {
                  throw e6;
                }), Promise.resolve(false))).then(e5);
              }
              const r2 = this._callbacks[this._bufferOffset];
              if (r2 && r2(), this._bufferOffset++, this._pendingData -= e4.length, Date.now() - i3 >= 12)
                break;
            }
            this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(() => this._innerWrite())) : (this._writeBuffer.length = 0, this._callbacks.length = 0, this._pendingData = 0, this._bufferOffset = 0), this._onWriteParsed.fire();
          }
        }
        t2.WriteBuffer = n;
      }, 5941: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.toRgbString = t2.parseColor = void 0;
        const i2 = /^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/, s2 = /^[\da-f]+$/;
        function r(e3, t3) {
          const i3 = e3.toString(16), s3 = i3.length < 2 ? "0" + i3 : i3;
          switch (t3) {
            case 4:
              return i3[0];
            case 8:
              return s3;
            case 12:
              return (s3 + s3).slice(0, 3);
            default:
              return s3 + s3;
          }
        }
        t2.parseColor = function(e3) {
          if (!e3)
            return;
          let t3 = e3.toLowerCase();
          if (0 === t3.indexOf("rgb:")) {
            t3 = t3.slice(4);
            const e4 = i2.exec(t3);
            if (e4) {
              const t4 = e4[1] ? 15 : e4[4] ? 255 : e4[7] ? 4095 : 65535;
              return [Math.round(parseInt(e4[1] || e4[4] || e4[7] || e4[10], 16) / t4 * 255), Math.round(parseInt(e4[2] || e4[5] || e4[8] || e4[11], 16) / t4 * 255), Math.round(parseInt(e4[3] || e4[6] || e4[9] || e4[12], 16) / t4 * 255)];
            }
          } else if (0 === t3.indexOf("#") && (t3 = t3.slice(1), s2.exec(t3) && [3, 6, 9, 12].includes(t3.length))) {
            const e4 = t3.length / 3, i3 = [0, 0, 0];
            for (let s3 = 0; s3 < 3; ++s3) {
              const r2 = parseInt(t3.slice(e4 * s3, e4 * s3 + e4), 16);
              i3[s3] = 1 === e4 ? r2 << 4 : 2 === e4 ? r2 : 3 === e4 ? r2 >> 4 : r2 >> 8;
            }
            return i3;
          }
        }, t2.toRgbString = function(e3, t3 = 16) {
          const [i3, s3, n] = e3;
          return `rgb:${r(i3, t3)}/${r(s3, t3)}/${r(n, t3)}`;
        };
      }, 5770: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.PAYLOAD_LIMIT = void 0, t2.PAYLOAD_LIMIT = 1e7;
      }, 6351: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.DcsHandler = t2.DcsParser = void 0;
        const s2 = i2(482), r = i2(8742), n = i2(5770), o = [];
        t2.DcsParser = class {
          constructor() {
            this._handlers = /* @__PURE__ */ Object.create(null), this._active = o, this._ident = 0, this._handlerFb = () => {
            }, this._stack = { paused: false, loopPosition: 0, fallThrough: false };
          }
          dispose() {
            this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
            }, this._active = o;
          }
          registerHandler(e3, t3) {
            void 0 === this._handlers[e3] && (this._handlers[e3] = []);
            const i3 = this._handlers[e3];
            return i3.push(t3), { dispose: () => {
              const e4 = i3.indexOf(t3);
              -1 !== e4 && i3.splice(e4, 1);
            } };
          }
          clearHandler(e3) {
            this._handlers[e3] && delete this._handlers[e3];
          }
          setHandlerFallback(e3) {
            this._handlerFb = e3;
          }
          reset() {
            if (this._active.length)
              for (let e3 = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e3 >= 0; --e3)
                this._active[e3].unhook(false);
            this._stack.paused = false, this._active = o, this._ident = 0;
          }
          hook(e3, t3) {
            if (this.reset(), this._ident = e3, this._active = this._handlers[e3] || o, this._active.length)
              for (let e4 = this._active.length - 1; e4 >= 0; e4--)
                this._active[e4].hook(t3);
            else
              this._handlerFb(this._ident, "HOOK", t3);
          }
          put(e3, t3, i3) {
            if (this._active.length)
              for (let s3 = this._active.length - 1; s3 >= 0; s3--)
                this._active[s3].put(e3, t3, i3);
            else
              this._handlerFb(this._ident, "PUT", (0, s2.utf32ToString)(e3, t3, i3));
          }
          unhook(e3, t3 = true) {
            if (this._active.length) {
              let i3 = false, s3 = this._active.length - 1, r2 = false;
              if (this._stack.paused && (s3 = this._stack.loopPosition - 1, i3 = t3, r2 = this._stack.fallThrough, this._stack.paused = false), !r2 && false === i3) {
                for (; s3 >= 0 && (i3 = this._active[s3].unhook(e3), true !== i3); s3--)
                  if (i3 instanceof Promise)
                    return this._stack.paused = true, this._stack.loopPosition = s3, this._stack.fallThrough = false, i3;
                s3--;
              }
              for (; s3 >= 0; s3--)
                if (i3 = this._active[s3].unhook(false), i3 instanceof Promise)
                  return this._stack.paused = true, this._stack.loopPosition = s3, this._stack.fallThrough = true, i3;
            } else
              this._handlerFb(this._ident, "UNHOOK", e3);
            this._active = o, this._ident = 0;
          }
        };
        const a = new r.Params();
        a.addParam(0), t2.DcsHandler = class {
          constructor(e3) {
            this._handler = e3, this._data = "", this._params = a, this._hitLimit = false;
          }
          hook(e3) {
            this._params = e3.length > 1 || e3.params[0] ? e3.clone() : a, this._data = "", this._hitLimit = false;
          }
          put(e3, t3, i3) {
            this._hitLimit || (this._data += (0, s2.utf32ToString)(e3, t3, i3), this._data.length > n.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = true));
          }
          unhook(e3) {
            let t3 = false;
            if (this._hitLimit)
              t3 = false;
            else if (e3 && (t3 = this._handler(this._data, this._params), t3 instanceof Promise))
              return t3.then((e4) => (this._params = a, this._data = "", this._hitLimit = false, e4));
            return this._params = a, this._data = "", this._hitLimit = false, t3;
          }
        };
      }, 2015: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.EscapeSequenceParser = t2.VT500_TRANSITION_TABLE = t2.TransitionTable = void 0;
        const s2 = i2(844), r = i2(8742), n = i2(6242), o = i2(6351);
        class a {
          constructor(e3) {
            this.table = new Uint8Array(e3);
          }
          setDefault(e3, t3) {
            this.table.fill(e3 << 4 | t3);
          }
          add(e3, t3, i3, s3) {
            this.table[t3 << 8 | e3] = i3 << 4 | s3;
          }
          addMany(e3, t3, i3, s3) {
            for (let r2 = 0; r2 < e3.length; r2++)
              this.table[t3 << 8 | e3[r2]] = i3 << 4 | s3;
          }
        }
        t2.TransitionTable = a;
        const h = 160;
        t2.VT500_TRANSITION_TABLE = function() {
          const e3 = new a(4095), t3 = Array.apply(null, Array(256)).map((e4, t4) => t4), i3 = (e4, i4) => t3.slice(e4, i4), s3 = i3(32, 127), r2 = i3(0, 24);
          r2.push(25), r2.push.apply(r2, i3(28, 32));
          const n2 = i3(0, 14);
          let o2;
          for (o2 in e3.setDefault(1, 0), e3.addMany(s3, 0, 2, 0), n2)
            e3.addMany([24, 26, 153, 154], o2, 3, 0), e3.addMany(i3(128, 144), o2, 3, 0), e3.addMany(i3(144, 152), o2, 3, 0), e3.add(156, o2, 0, 0), e3.add(27, o2, 11, 1), e3.add(157, o2, 4, 8), e3.addMany([152, 158, 159], o2, 0, 7), e3.add(155, o2, 11, 3), e3.add(144, o2, 11, 9);
          return e3.addMany(r2, 0, 3, 0), e3.addMany(r2, 1, 3, 1), e3.add(127, 1, 0, 1), e3.addMany(r2, 8, 0, 8), e3.addMany(r2, 3, 3, 3), e3.add(127, 3, 0, 3), e3.addMany(r2, 4, 3, 4), e3.add(127, 4, 0, 4), e3.addMany(r2, 6, 3, 6), e3.addMany(r2, 5, 3, 5), e3.add(127, 5, 0, 5), e3.addMany(r2, 2, 3, 2), e3.add(127, 2, 0, 2), e3.add(93, 1, 4, 8), e3.addMany(s3, 8, 5, 8), e3.add(127, 8, 5, 8), e3.addMany([156, 27, 24, 26, 7], 8, 6, 0), e3.addMany(i3(28, 32), 8, 0, 8), e3.addMany([88, 94, 95], 1, 0, 7), e3.addMany(s3, 7, 0, 7), e3.addMany(r2, 7, 0, 7), e3.add(156, 7, 0, 0), e3.add(127, 7, 0, 7), e3.add(91, 1, 11, 3), e3.addMany(i3(64, 127), 3, 7, 0), e3.addMany(i3(48, 60), 3, 8, 4), e3.addMany([60, 61, 62, 63], 3, 9, 4), e3.addMany(i3(48, 60), 4, 8, 4), e3.addMany(i3(64, 127), 4, 7, 0), e3.addMany([60, 61, 62, 63], 4, 0, 6), e3.addMany(i3(32, 64), 6, 0, 6), e3.add(127, 6, 0, 6), e3.addMany(i3(64, 127), 6, 0, 0), e3.addMany(i3(32, 48), 3, 9, 5), e3.addMany(i3(32, 48), 5, 9, 5), e3.addMany(i3(48, 64), 5, 0, 6), e3.addMany(i3(64, 127), 5, 7, 0), e3.addMany(i3(32, 48), 4, 9, 5), e3.addMany(i3(32, 48), 1, 9, 2), e3.addMany(i3(32, 48), 2, 9, 2), e3.addMany(i3(48, 127), 2, 10, 0), e3.addMany(i3(48, 80), 1, 10, 0), e3.addMany(i3(81, 88), 1, 10, 0), e3.addMany([89, 90, 92], 1, 10, 0), e3.addMany(i3(96, 127), 1, 10, 0), e3.add(80, 1, 11, 9), e3.addMany(r2, 9, 0, 9), e3.add(127, 9, 0, 9), e3.addMany(i3(28, 32), 9, 0, 9), e3.addMany(i3(32, 48), 9, 9, 12), e3.addMany(i3(48, 60), 9, 8, 10), e3.addMany([60, 61, 62, 63], 9, 9, 10), e3.addMany(r2, 11, 0, 11), e3.addMany(i3(32, 128), 11, 0, 11), e3.addMany(i3(28, 32), 11, 0, 11), e3.addMany(r2, 10, 0, 10), e3.add(127, 10, 0, 10), e3.addMany(i3(28, 32), 10, 0, 10), e3.addMany(i3(48, 60), 10, 8, 10), e3.addMany([60, 61, 62, 63], 10, 0, 11), e3.addMany(i3(32, 48), 10, 9, 12), e3.addMany(r2, 12, 0, 12), e3.add(127, 12, 0, 12), e3.addMany(i3(28, 32), 12, 0, 12), e3.addMany(i3(32, 48), 12, 9, 12), e3.addMany(i3(48, 64), 12, 0, 11), e3.addMany(i3(64, 127), 12, 12, 13), e3.addMany(i3(64, 127), 10, 12, 13), e3.addMany(i3(64, 127), 9, 12, 13), e3.addMany(r2, 13, 13, 13), e3.addMany(s3, 13, 13, 13), e3.add(127, 13, 0, 13), e3.addMany([27, 156, 24, 26], 13, 14, 0), e3.add(h, 0, 2, 0), e3.add(h, 8, 5, 8), e3.add(h, 6, 0, 6), e3.add(h, 11, 0, 11), e3.add(h, 13, 13, 13), e3;
        }();
        class c extends s2.Disposable {
          constructor(e3 = t2.VT500_TRANSITION_TABLE) {
            super(), this._transitions = e3, this._parseStack = { state: 0, handlers: [], handlerPos: 0, transition: 0, chunkPos: 0 }, this.initialState = 0, this.currentState = this.initialState, this._params = new r.Params(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, this._printHandlerFb = (e4, t3, i3) => {
            }, this._executeHandlerFb = (e4) => {
            }, this._csiHandlerFb = (e4, t3) => {
            }, this._escHandlerFb = (e4) => {
            }, this._errorHandlerFb = (e4) => e4, this._printHandler = this._printHandlerFb, this._executeHandlers = /* @__PURE__ */ Object.create(null), this._csiHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null), this.register((0, s2.toDisposable)(() => {
              this._csiHandlers = /* @__PURE__ */ Object.create(null), this._executeHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null);
            })), this._oscParser = this.register(new n.OscParser()), this._dcsParser = this.register(new o.DcsParser()), this._errorHandler = this._errorHandlerFb, this.registerEscHandler({ final: "\\" }, () => true);
          }
          _identifier(e3, t3 = [64, 126]) {
            let i3 = 0;
            if (e3.prefix) {
              if (e3.prefix.length > 1)
                throw new Error("only one byte as prefix supported");
              if (i3 = e3.prefix.charCodeAt(0), i3 && 60 > i3 || i3 > 63)
                throw new Error("prefix must be in range 0x3c .. 0x3f");
            }
            if (e3.intermediates) {
              if (e3.intermediates.length > 2)
                throw new Error("only two bytes as intermediates are supported");
              for (let t4 = 0; t4 < e3.intermediates.length; ++t4) {
                const s4 = e3.intermediates.charCodeAt(t4);
                if (32 > s4 || s4 > 47)
                  throw new Error("intermediate must be in range 0x20 .. 0x2f");
                i3 <<= 8, i3 |= s4;
              }
            }
            if (1 !== e3.final.length)
              throw new Error("final must be a single byte");
            const s3 = e3.final.charCodeAt(0);
            if (t3[0] > s3 || s3 > t3[1])
              throw new Error(`final must be in range ${t3[0]} .. ${t3[1]}`);
            return i3 <<= 8, i3 |= s3, i3;
          }
          identToString(e3) {
            const t3 = [];
            for (; e3; )
              t3.push(String.fromCharCode(255 & e3)), e3 >>= 8;
            return t3.reverse().join("");
          }
          setPrintHandler(e3) {
            this._printHandler = e3;
          }
          clearPrintHandler() {
            this._printHandler = this._printHandlerFb;
          }
          registerEscHandler(e3, t3) {
            const i3 = this._identifier(e3, [48, 126]);
            void 0 === this._escHandlers[i3] && (this._escHandlers[i3] = []);
            const s3 = this._escHandlers[i3];
            return s3.push(t3), { dispose: () => {
              const e4 = s3.indexOf(t3);
              -1 !== e4 && s3.splice(e4, 1);
            } };
          }
          clearEscHandler(e3) {
            this._escHandlers[this._identifier(e3, [48, 126])] && delete this._escHandlers[this._identifier(e3, [48, 126])];
          }
          setEscHandlerFallback(e3) {
            this._escHandlerFb = e3;
          }
          setExecuteHandler(e3, t3) {
            this._executeHandlers[e3.charCodeAt(0)] = t3;
          }
          clearExecuteHandler(e3) {
            this._executeHandlers[e3.charCodeAt(0)] && delete this._executeHandlers[e3.charCodeAt(0)];
          }
          setExecuteHandlerFallback(e3) {
            this._executeHandlerFb = e3;
          }
          registerCsiHandler(e3, t3) {
            const i3 = this._identifier(e3);
            void 0 === this._csiHandlers[i3] && (this._csiHandlers[i3] = []);
            const s3 = this._csiHandlers[i3];
            return s3.push(t3), { dispose: () => {
              const e4 = s3.indexOf(t3);
              -1 !== e4 && s3.splice(e4, 1);
            } };
          }
          clearCsiHandler(e3) {
            this._csiHandlers[this._identifier(e3)] && delete this._csiHandlers[this._identifier(e3)];
          }
          setCsiHandlerFallback(e3) {
            this._csiHandlerFb = e3;
          }
          registerDcsHandler(e3, t3) {
            return this._dcsParser.registerHandler(this._identifier(e3), t3);
          }
          clearDcsHandler(e3) {
            this._dcsParser.clearHandler(this._identifier(e3));
          }
          setDcsHandlerFallback(e3) {
            this._dcsParser.setHandlerFallback(e3);
          }
          registerOscHandler(e3, t3) {
            return this._oscParser.registerHandler(e3, t3);
          }
          clearOscHandler(e3) {
            this._oscParser.clearHandler(e3);
          }
          setOscHandlerFallback(e3) {
            this._oscParser.setHandlerFallback(e3);
          }
          setErrorHandler(e3) {
            this._errorHandler = e3;
          }
          clearErrorHandler() {
            this._errorHandler = this._errorHandlerFb;
          }
          reset() {
            this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, 0 !== this._parseStack.state && (this._parseStack.state = 2, this._parseStack.handlers = []);
          }
          _preserveStack(e3, t3, i3, s3, r2) {
            this._parseStack.state = e3, this._parseStack.handlers = t3, this._parseStack.handlerPos = i3, this._parseStack.transition = s3, this._parseStack.chunkPos = r2;
          }
          parse(e3, t3, i3) {
            let s3, r2 = 0, n2 = 0, o2 = 0;
            if (this._parseStack.state)
              if (2 === this._parseStack.state)
                this._parseStack.state = 0, o2 = this._parseStack.chunkPos + 1;
              else {
                if (void 0 === i3 || 1 === this._parseStack.state)
                  throw this._parseStack.state = 1, new Error("improper continuation due to previous async handler, giving up parsing");
                const t4 = this._parseStack.handlers;
                let n3 = this._parseStack.handlerPos - 1;
                switch (this._parseStack.state) {
                  case 3:
                    if (false === i3 && n3 > -1) {
                      for (; n3 >= 0 && (s3 = t4[n3](this._params), true !== s3); n3--)
                        if (s3 instanceof Promise)
                          return this._parseStack.handlerPos = n3, s3;
                    }
                    this._parseStack.handlers = [];
                    break;
                  case 4:
                    if (false === i3 && n3 > -1) {
                      for (; n3 >= 0 && (s3 = t4[n3](), true !== s3); n3--)
                        if (s3 instanceof Promise)
                          return this._parseStack.handlerPos = n3, s3;
                    }
                    this._parseStack.handlers = [];
                    break;
                  case 6:
                    if (r2 = e3[this._parseStack.chunkPos], s3 = this._dcsParser.unhook(24 !== r2 && 26 !== r2, i3), s3)
                      return s3;
                    27 === r2 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                    break;
                  case 5:
                    if (r2 = e3[this._parseStack.chunkPos], s3 = this._oscParser.end(24 !== r2 && 26 !== r2, i3), s3)
                      return s3;
                    27 === r2 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                }
                this._parseStack.state = 0, o2 = this._parseStack.chunkPos + 1, this.precedingJoinState = 0, this.currentState = 15 & this._parseStack.transition;
              }
            for (let i4 = o2; i4 < t3; ++i4) {
              switch (r2 = e3[i4], n2 = this._transitions.table[this.currentState << 8 | (r2 < 160 ? r2 : h)], n2 >> 4) {
                case 2:
                  for (let s4 = i4 + 1; ; ++s4) {
                    if (s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 126 && r2 < h) {
                      this._printHandler(e3, i4, s4), i4 = s4 - 1;
                      break;
                    }
                    if (++s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 126 && r2 < h) {
                      this._printHandler(e3, i4, s4), i4 = s4 - 1;
                      break;
                    }
                    if (++s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 126 && r2 < h) {
                      this._printHandler(e3, i4, s4), i4 = s4 - 1;
                      break;
                    }
                    if (++s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 126 && r2 < h) {
                      this._printHandler(e3, i4, s4), i4 = s4 - 1;
                      break;
                    }
                  }
                  break;
                case 3:
                  this._executeHandlers[r2] ? this._executeHandlers[r2]() : this._executeHandlerFb(r2), this.precedingJoinState = 0;
                  break;
                case 0:
                  break;
                case 1:
                  if (this._errorHandler({ position: i4, code: r2, currentState: this.currentState, collect: this._collect, params: this._params, abort: false }).abort)
                    return;
                  break;
                case 7:
                  const o3 = this._csiHandlers[this._collect << 8 | r2];
                  let a2 = o3 ? o3.length - 1 : -1;
                  for (; a2 >= 0 && (s3 = o3[a2](this._params), true !== s3); a2--)
                    if (s3 instanceof Promise)
                      return this._preserveStack(3, o3, a2, n2, i4), s3;
                  a2 < 0 && this._csiHandlerFb(this._collect << 8 | r2, this._params), this.precedingJoinState = 0;
                  break;
                case 8:
                  do {
                    switch (r2) {
                      case 59:
                        this._params.addParam(0);
                        break;
                      case 58:
                        this._params.addSubParam(-1);
                        break;
                      default:
                        this._params.addDigit(r2 - 48);
                    }
                  } while (++i4 < t3 && (r2 = e3[i4]) > 47 && r2 < 60);
                  i4--;
                  break;
                case 9:
                  this._collect <<= 8, this._collect |= r2;
                  break;
                case 10:
                  const c2 = this._escHandlers[this._collect << 8 | r2];
                  let l = c2 ? c2.length - 1 : -1;
                  for (; l >= 0 && (s3 = c2[l](), true !== s3); l--)
                    if (s3 instanceof Promise)
                      return this._preserveStack(4, c2, l, n2, i4), s3;
                  l < 0 && this._escHandlerFb(this._collect << 8 | r2), this.precedingJoinState = 0;
                  break;
                case 11:
                  this._params.reset(), this._params.addParam(0), this._collect = 0;
                  break;
                case 12:
                  this._dcsParser.hook(this._collect << 8 | r2, this._params);
                  break;
                case 13:
                  for (let s4 = i4 + 1; ; ++s4)
                    if (s4 >= t3 || 24 === (r2 = e3[s4]) || 26 === r2 || 27 === r2 || r2 > 127 && r2 < h) {
                      this._dcsParser.put(e3, i4, s4), i4 = s4 - 1;
                      break;
                    }
                  break;
                case 14:
                  if (s3 = this._dcsParser.unhook(24 !== r2 && 26 !== r2), s3)
                    return this._preserveStack(6, [], 0, n2, i4), s3;
                  27 === r2 && (n2 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
                  break;
                case 4:
                  this._oscParser.start();
                  break;
                case 5:
                  for (let s4 = i4 + 1; ; s4++)
                    if (s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 127 && r2 < h) {
                      this._oscParser.put(e3, i4, s4), i4 = s4 - 1;
                      break;
                    }
                  break;
                case 6:
                  if (s3 = this._oscParser.end(24 !== r2 && 26 !== r2), s3)
                    return this._preserveStack(5, [], 0, n2, i4), s3;
                  27 === r2 && (n2 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0;
              }
              this.currentState = 15 & n2;
            }
          }
        }
        t2.EscapeSequenceParser = c;
      }, 6242: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.OscHandler = t2.OscParser = void 0;
        const s2 = i2(5770), r = i2(482), n = [];
        t2.OscParser = class {
          constructor() {
            this._state = 0, this._active = n, this._id = -1, this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
            }, this._stack = { paused: false, loopPosition: 0, fallThrough: false };
          }
          registerHandler(e3, t3) {
            void 0 === this._handlers[e3] && (this._handlers[e3] = []);
            const i3 = this._handlers[e3];
            return i3.push(t3), { dispose: () => {
              const e4 = i3.indexOf(t3);
              -1 !== e4 && i3.splice(e4, 1);
            } };
          }
          clearHandler(e3) {
            this._handlers[e3] && delete this._handlers[e3];
          }
          setHandlerFallback(e3) {
            this._handlerFb = e3;
          }
          dispose() {
            this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
            }, this._active = n;
          }
          reset() {
            if (2 === this._state)
              for (let e3 = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e3 >= 0; --e3)
                this._active[e3].end(false);
            this._stack.paused = false, this._active = n, this._id = -1, this._state = 0;
          }
          _start() {
            if (this._active = this._handlers[this._id] || n, this._active.length)
              for (let e3 = this._active.length - 1; e3 >= 0; e3--)
                this._active[e3].start();
            else
              this._handlerFb(this._id, "START");
          }
          _put(e3, t3, i3) {
            if (this._active.length)
              for (let s3 = this._active.length - 1; s3 >= 0; s3--)
                this._active[s3].put(e3, t3, i3);
            else
              this._handlerFb(this._id, "PUT", (0, r.utf32ToString)(e3, t3, i3));
          }
          start() {
            this.reset(), this._state = 1;
          }
          put(e3, t3, i3) {
            if (3 !== this._state) {
              if (1 === this._state)
                for (; t3 < i3; ) {
                  const i4 = e3[t3++];
                  if (59 === i4) {
                    this._state = 2, this._start();
                    break;
                  }
                  if (i4 < 48 || 57 < i4)
                    return void (this._state = 3);
                  -1 === this._id && (this._id = 0), this._id = 10 * this._id + i4 - 48;
                }
              2 === this._state && i3 - t3 > 0 && this._put(e3, t3, i3);
            }
          }
          end(e3, t3 = true) {
            if (0 !== this._state) {
              if (3 !== this._state)
                if (1 === this._state && this._start(), this._active.length) {
                  let i3 = false, s3 = this._active.length - 1, r2 = false;
                  if (this._stack.paused && (s3 = this._stack.loopPosition - 1, i3 = t3, r2 = this._stack.fallThrough, this._stack.paused = false), !r2 && false === i3) {
                    for (; s3 >= 0 && (i3 = this._active[s3].end(e3), true !== i3); s3--)
                      if (i3 instanceof Promise)
                        return this._stack.paused = true, this._stack.loopPosition = s3, this._stack.fallThrough = false, i3;
                    s3--;
                  }
                  for (; s3 >= 0; s3--)
                    if (i3 = this._active[s3].end(false), i3 instanceof Promise)
                      return this._stack.paused = true, this._stack.loopPosition = s3, this._stack.fallThrough = true, i3;
                } else
                  this._handlerFb(this._id, "END", e3);
              this._active = n, this._id = -1, this._state = 0;
            }
          }
        }, t2.OscHandler = class {
          constructor(e3) {
            this._handler = e3, this._data = "", this._hitLimit = false;
          }
          start() {
            this._data = "", this._hitLimit = false;
          }
          put(e3, t3, i3) {
            this._hitLimit || (this._data += (0, r.utf32ToString)(e3, t3, i3), this._data.length > s2.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = true));
          }
          end(e3) {
            let t3 = false;
            if (this._hitLimit)
              t3 = false;
            else if (e3 && (t3 = this._handler(this._data), t3 instanceof Promise))
              return t3.then((e4) => (this._data = "", this._hitLimit = false, e4));
            return this._data = "", this._hitLimit = false, t3;
          }
        };
      }, 8742: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.Params = void 0;
        const i2 = 2147483647;
        class s2 {
          static fromArray(e3) {
            const t3 = new s2();
            if (!e3.length)
              return t3;
            for (let i3 = Array.isArray(e3[0]) ? 1 : 0; i3 < e3.length; ++i3) {
              const s3 = e3[i3];
              if (Array.isArray(s3))
                for (let e4 = 0; e4 < s3.length; ++e4)
                  t3.addSubParam(s3[e4]);
              else
                t3.addParam(s3);
            }
            return t3;
          }
          constructor(e3 = 32, t3 = 32) {
            if (this.maxLength = e3, this.maxSubParamsLength = t3, t3 > 256)
              throw new Error("maxSubParamsLength must not be greater than 256");
            this.params = new Int32Array(e3), this.length = 0, this._subParams = new Int32Array(t3), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(e3), this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
          }
          clone() {
            const e3 = new s2(this.maxLength, this.maxSubParamsLength);
            return e3.params.set(this.params), e3.length = this.length, e3._subParams.set(this._subParams), e3._subParamsLength = this._subParamsLength, e3._subParamsIdx.set(this._subParamsIdx), e3._rejectDigits = this._rejectDigits, e3._rejectSubDigits = this._rejectSubDigits, e3._digitIsSub = this._digitIsSub, e3;
          }
          toArray() {
            const e3 = [];
            for (let t3 = 0; t3 < this.length; ++t3) {
              e3.push(this.params[t3]);
              const i3 = this._subParamsIdx[t3] >> 8, s3 = 255 & this._subParamsIdx[t3];
              s3 - i3 > 0 && e3.push(Array.prototype.slice.call(this._subParams, i3, s3));
            }
            return e3;
          }
          reset() {
            this.length = 0, this._subParamsLength = 0, this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
          }
          addParam(e3) {
            if (this._digitIsSub = false, this.length >= this.maxLength)
              this._rejectDigits = true;
            else {
              if (e3 < -1)
                throw new Error("values lesser than -1 are not allowed");
              this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = e3 > i2 ? i2 : e3;
            }
          }
          addSubParam(e3) {
            if (this._digitIsSub = true, this.length)
              if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength)
                this._rejectSubDigits = true;
              else {
                if (e3 < -1)
                  throw new Error("values lesser than -1 are not allowed");
                this._subParams[this._subParamsLength++] = e3 > i2 ? i2 : e3, this._subParamsIdx[this.length - 1]++;
              }
          }
          hasSubParams(e3) {
            return (255 & this._subParamsIdx[e3]) - (this._subParamsIdx[e3] >> 8) > 0;
          }
          getSubParams(e3) {
            const t3 = this._subParamsIdx[e3] >> 8, i3 = 255 & this._subParamsIdx[e3];
            return i3 - t3 > 0 ? this._subParams.subarray(t3, i3) : null;
          }
          getSubParamsAll() {
            const e3 = {};
            for (let t3 = 0; t3 < this.length; ++t3) {
              const i3 = this._subParamsIdx[t3] >> 8, s3 = 255 & this._subParamsIdx[t3];
              s3 - i3 > 0 && (e3[t3] = this._subParams.slice(i3, s3));
            }
            return e3;
          }
          addDigit(e3) {
            let t3;
            if (this._rejectDigits || !(t3 = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits)
              return;
            const s3 = this._digitIsSub ? this._subParams : this.params, r = s3[t3 - 1];
            s3[t3 - 1] = ~r ? Math.min(10 * r + e3, i2) : e3;
          }
        }
        t2.Params = s2;
      }, 5741: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.AddonManager = void 0, t2.AddonManager = class {
          constructor() {
            this._addons = [];
          }
          dispose() {
            for (let e3 = this._addons.length - 1; e3 >= 0; e3--)
              this._addons[e3].instance.dispose();
          }
          loadAddon(e3, t3) {
            const i2 = { instance: t3, dispose: t3.dispose, isDisposed: false };
            this._addons.push(i2), t3.dispose = () => this._wrappedAddonDispose(i2), t3.activate(e3);
          }
          _wrappedAddonDispose(e3) {
            if (e3.isDisposed)
              return;
            let t3 = -1;
            for (let i2 = 0; i2 < this._addons.length; i2++)
              if (this._addons[i2] === e3) {
                t3 = i2;
                break;
              }
            if (-1 === t3)
              throw new Error("Could not dispose an addon that has not been loaded");
            e3.isDisposed = true, e3.dispose.apply(e3.instance), this._addons.splice(t3, 1);
          }
        };
      }, 8771: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferApiView = void 0;
        const s2 = i2(3785), r = i2(511);
        t2.BufferApiView = class {
          constructor(e3, t3) {
            this._buffer = e3, this.type = t3;
          }
          init(e3) {
            return this._buffer = e3, this;
          }
          get cursorY() {
            return this._buffer.y;
          }
          get cursorX() {
            return this._buffer.x;
          }
          get viewportY() {
            return this._buffer.ydisp;
          }
          get baseY() {
            return this._buffer.ybase;
          }
          get length() {
            return this._buffer.lines.length;
          }
          getLine(e3) {
            const t3 = this._buffer.lines.get(e3);
            if (t3)
              return new s2.BufferLineApiView(t3);
          }
          getNullCell() {
            return new r.CellData();
          }
        };
      }, 3785: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferLineApiView = void 0;
        const s2 = i2(511);
        t2.BufferLineApiView = class {
          constructor(e3) {
            this._line = e3;
          }
          get isWrapped() {
            return this._line.isWrapped;
          }
          get length() {
            return this._line.length;
          }
          getCell(e3, t3) {
            if (!(e3 < 0 || e3 >= this._line.length))
              return t3 ? (this._line.loadCell(e3, t3), t3) : this._line.loadCell(e3, new s2.CellData());
          }
          translateToString(e3, t3, i3) {
            return this._line.translateToString(e3, t3, i3);
          }
        };
      }, 8285: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferNamespaceApi = void 0;
        const s2 = i2(8771), r = i2(8460), n = i2(844);
        class o extends n.Disposable {
          constructor(e3) {
            super(), this._core = e3, this._onBufferChange = this.register(new r.EventEmitter()), this.onBufferChange = this._onBufferChange.event, this._normal = new s2.BufferApiView(this._core.buffers.normal, "normal"), this._alternate = new s2.BufferApiView(this._core.buffers.alt, "alternate"), this._core.buffers.onBufferActivate(() => this._onBufferChange.fire(this.active));
          }
          get active() {
            if (this._core.buffers.active === this._core.buffers.normal)
              return this.normal;
            if (this._core.buffers.active === this._core.buffers.alt)
              return this.alternate;
            throw new Error("Active buffer is neither normal nor alternate");
          }
          get normal() {
            return this._normal.init(this._core.buffers.normal);
          }
          get alternate() {
            return this._alternate.init(this._core.buffers.alt);
          }
        }
        t2.BufferNamespaceApi = o;
      }, 7975: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.ParserApi = void 0, t2.ParserApi = class {
          constructor(e3) {
            this._core = e3;
          }
          registerCsiHandler(e3, t3) {
            return this._core.registerCsiHandler(e3, (e4) => t3(e4.toArray()));
          }
          addCsiHandler(e3, t3) {
            return this.registerCsiHandler(e3, t3);
          }
          registerDcsHandler(e3, t3) {
            return this._core.registerDcsHandler(e3, (e4, i2) => t3(e4, i2.toArray()));
          }
          addDcsHandler(e3, t3) {
            return this.registerDcsHandler(e3, t3);
          }
          registerEscHandler(e3, t3) {
            return this._core.registerEscHandler(e3, t3);
          }
          addEscHandler(e3, t3) {
            return this.registerEscHandler(e3, t3);
          }
          registerOscHandler(e3, t3) {
            return this._core.registerOscHandler(e3, t3);
          }
          addOscHandler(e3, t3) {
            return this.registerOscHandler(e3, t3);
          }
        };
      }, 7090: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeApi = void 0, t2.UnicodeApi = class {
          constructor(e3) {
            this._core = e3;
          }
          register(e3) {
            this._core.unicodeService.register(e3);
          }
          get versions() {
            return this._core.unicodeService.versions;
          }
          get activeVersion() {
            return this._core.unicodeService.activeVersion;
          }
          set activeVersion(e3) {
            this._core.unicodeService.activeVersion = e3;
          }
        };
      }, 744: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferService = t2.MINIMUM_ROWS = t2.MINIMUM_COLS = void 0;
        const n = i2(8460), o = i2(844), a = i2(5295), h = i2(2585);
        t2.MINIMUM_COLS = 2, t2.MINIMUM_ROWS = 1;
        let c = t2.BufferService = class extends o.Disposable {
          get buffer() {
            return this.buffers.active;
          }
          constructor(e3) {
            super(), this.isUserScrolling = false, this._onResize = this.register(new n.EventEmitter()), this.onResize = this._onResize.event, this._onScroll = this.register(new n.EventEmitter()), this.onScroll = this._onScroll.event, this.cols = Math.max(e3.rawOptions.cols || 0, t2.MINIMUM_COLS), this.rows = Math.max(e3.rawOptions.rows || 0, t2.MINIMUM_ROWS), this.buffers = this.register(new a.BufferSet(e3, this));
          }
          resize(e3, t3) {
            this.cols = e3, this.rows = t3, this.buffers.resize(e3, t3), this._onResize.fire({ cols: e3, rows: t3 });
          }
          reset() {
            this.buffers.reset(), this.isUserScrolling = false;
          }
          scroll(e3, t3 = false) {
            const i3 = this.buffer;
            let s3;
            s3 = this._cachedBlankLine, s3 && s3.length === this.cols && s3.getFg(0) === e3.fg && s3.getBg(0) === e3.bg || (s3 = i3.getBlankLine(e3, t3), this._cachedBlankLine = s3), s3.isWrapped = t3;
            const r2 = i3.ybase + i3.scrollTop, n2 = i3.ybase + i3.scrollBottom;
            if (0 === i3.scrollTop) {
              const e4 = i3.lines.isFull;
              n2 === i3.lines.length - 1 ? e4 ? i3.lines.recycle().copyFrom(s3) : i3.lines.push(s3.clone()) : i3.lines.splice(n2 + 1, 0, s3.clone()), e4 ? this.isUserScrolling && (i3.ydisp = Math.max(i3.ydisp - 1, 0)) : (i3.ybase++, this.isUserScrolling || i3.ydisp++);
            } else {
              const e4 = n2 - r2 + 1;
              i3.lines.shiftElements(r2 + 1, e4 - 1, -1), i3.lines.set(n2, s3.clone());
            }
            this.isUserScrolling || (i3.ydisp = i3.ybase), this._onScroll.fire(i3.ydisp);
          }
          scrollLines(e3, t3, i3) {
            const s3 = this.buffer;
            if (e3 < 0) {
              if (0 === s3.ydisp)
                return;
              this.isUserScrolling = true;
            } else
              e3 + s3.ydisp >= s3.ybase && (this.isUserScrolling = false);
            const r2 = s3.ydisp;
            s3.ydisp = Math.max(Math.min(s3.ydisp + e3, s3.ybase), 0), r2 !== s3.ydisp && (t3 || this._onScroll.fire(s3.ydisp));
          }
        };
        t2.BufferService = c = s2([r(0, h.IOptionsService)], c);
      }, 7994: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CharsetService = void 0, t2.CharsetService = class {
          constructor() {
            this.glevel = 0, this._charsets = [];
          }
          reset() {
            this.charset = void 0, this._charsets = [], this.glevel = 0;
          }
          setgLevel(e3) {
            this.glevel = e3, this.charset = this._charsets[e3];
          }
          setgCharset(e3, t3) {
            this._charsets[e3] = t3, this.glevel === e3 && (this.charset = t3);
          }
        };
      }, 1753: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreMouseService = void 0;
        const n = i2(2585), o = i2(8460), a = i2(844), h = { NONE: { events: 0, restrict: () => false }, X10: { events: 1, restrict: (e3) => 4 !== e3.button && 1 === e3.action && (e3.ctrl = false, e3.alt = false, e3.shift = false, true) }, VT200: { events: 19, restrict: (e3) => 32 !== e3.action }, DRAG: { events: 23, restrict: (e3) => 32 !== e3.action || 3 !== e3.button }, ANY: { events: 31, restrict: (e3) => true } };
        function c(e3, t3) {
          let i3 = (e3.ctrl ? 16 : 0) | (e3.shift ? 4 : 0) | (e3.alt ? 8 : 0);
          return 4 === e3.button ? (i3 |= 64, i3 |= e3.action) : (i3 |= 3 & e3.button, 4 & e3.button && (i3 |= 64), 8 & e3.button && (i3 |= 128), 32 === e3.action ? i3 |= 32 : 0 !== e3.action || t3 || (i3 |= 3)), i3;
        }
        const l = String.fromCharCode, d = { DEFAULT: (e3) => {
          const t3 = [c(e3, false) + 32, e3.col + 32, e3.row + 32];
          return t3[0] > 255 || t3[1] > 255 || t3[2] > 255 ? "" : `\x1B[M${l(t3[0])}${l(t3[1])}${l(t3[2])}`;
        }, SGR: (e3) => {
          const t3 = 0 === e3.action && 4 !== e3.button ? "m" : "M";
          return `\x1B[<${c(e3, true)};${e3.col};${e3.row}${t3}`;
        }, SGR_PIXELS: (e3) => {
          const t3 = 0 === e3.action && 4 !== e3.button ? "m" : "M";
          return `\x1B[<${c(e3, true)};${e3.x};${e3.y}${t3}`;
        } };
        let _ = t2.CoreMouseService = class extends a.Disposable {
          constructor(e3, t3) {
            super(), this._bufferService = e3, this._coreService = t3, this._protocols = {}, this._encodings = {}, this._activeProtocol = "", this._activeEncoding = "", this._lastEvent = null, this._onProtocolChange = this.register(new o.EventEmitter()), this.onProtocolChange = this._onProtocolChange.event;
            for (const e4 of Object.keys(h))
              this.addProtocol(e4, h[e4]);
            for (const e4 of Object.keys(d))
              this.addEncoding(e4, d[e4]);
            this.reset();
          }
          addProtocol(e3, t3) {
            this._protocols[e3] = t3;
          }
          addEncoding(e3, t3) {
            this._encodings[e3] = t3;
          }
          get activeProtocol() {
            return this._activeProtocol;
          }
          get areMouseEventsActive() {
            return 0 !== this._protocols[this._activeProtocol].events;
          }
          set activeProtocol(e3) {
            if (!this._protocols[e3])
              throw new Error(`unknown protocol "${e3}"`);
            this._activeProtocol = e3, this._onProtocolChange.fire(this._protocols[e3].events);
          }
          get activeEncoding() {
            return this._activeEncoding;
          }
          set activeEncoding(e3) {
            if (!this._encodings[e3])
              throw new Error(`unknown encoding "${e3}"`);
            this._activeEncoding = e3;
          }
          reset() {
            this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null;
          }
          triggerMouseEvent(e3) {
            if (e3.col < 0 || e3.col >= this._bufferService.cols || e3.row < 0 || e3.row >= this._bufferService.rows)
              return false;
            if (4 === e3.button && 32 === e3.action)
              return false;
            if (3 === e3.button && 32 !== e3.action)
              return false;
            if (4 !== e3.button && (2 === e3.action || 3 === e3.action))
              return false;
            if (e3.col++, e3.row++, 32 === e3.action && this._lastEvent && this._equalEvents(this._lastEvent, e3, "SGR_PIXELS" === this._activeEncoding))
              return false;
            if (!this._protocols[this._activeProtocol].restrict(e3))
              return false;
            const t3 = this._encodings[this._activeEncoding](e3);
            return t3 && ("DEFAULT" === this._activeEncoding ? this._coreService.triggerBinaryEvent(t3) : this._coreService.triggerDataEvent(t3, true)), this._lastEvent = e3, true;
          }
          explainEvents(e3) {
            return { down: !!(1 & e3), up: !!(2 & e3), drag: !!(4 & e3), move: !!(8 & e3), wheel: !!(16 & e3) };
          }
          _equalEvents(e3, t3, i3) {
            if (i3) {
              if (e3.x !== t3.x)
                return false;
              if (e3.y !== t3.y)
                return false;
            } else {
              if (e3.col !== t3.col)
                return false;
              if (e3.row !== t3.row)
                return false;
            }
            return e3.button === t3.button && e3.action === t3.action && e3.ctrl === t3.ctrl && e3.alt === t3.alt && e3.shift === t3.shift;
          }
        };
        t2.CoreMouseService = _ = s2([r(0, n.IBufferService), r(1, n.ICoreService)], _);
      }, 6975: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreService = void 0;
        const n = i2(1439), o = i2(8460), a = i2(844), h = i2(2585), c = Object.freeze({ insertMode: false }), l = Object.freeze({ applicationCursorKeys: false, applicationKeypad: false, bracketedPasteMode: false, origin: false, reverseWraparound: false, sendFocus: false, wraparound: true });
        let d = t2.CoreService = class extends a.Disposable {
          constructor(e3, t3, i3) {
            super(), this._bufferService = e3, this._logService = t3, this._optionsService = i3, this.isCursorInitialized = false, this.isCursorHidden = false, this._onData = this.register(new o.EventEmitter()), this.onData = this._onData.event, this._onUserInput = this.register(new o.EventEmitter()), this.onUserInput = this._onUserInput.event, this._onBinary = this.register(new o.EventEmitter()), this.onBinary = this._onBinary.event, this._onRequestScrollToBottom = this.register(new o.EventEmitter()), this.onRequestScrollToBottom = this._onRequestScrollToBottom.event, this.modes = (0, n.clone)(c), this.decPrivateModes = (0, n.clone)(l);
          }
          reset() {
            this.modes = (0, n.clone)(c), this.decPrivateModes = (0, n.clone)(l);
          }
          triggerDataEvent(e3, t3 = false) {
            if (this._optionsService.rawOptions.disableStdin)
              return;
            const i3 = this._bufferService.buffer;
            t3 && this._optionsService.rawOptions.scrollOnUserInput && i3.ybase !== i3.ydisp && this._onRequestScrollToBottom.fire(), t3 && this._onUserInput.fire(), this._logService.debug(`sending data "${e3}"`, () => e3.split("").map((e4) => e4.charCodeAt(0))), this._onData.fire(e3);
          }
          triggerBinaryEvent(e3) {
            this._optionsService.rawOptions.disableStdin || (this._logService.debug(`sending binary "${e3}"`, () => e3.split("").map((e4) => e4.charCodeAt(0))), this._onBinary.fire(e3));
          }
        };
        t2.CoreService = d = s2([r(0, h.IBufferService), r(1, h.ILogService), r(2, h.IOptionsService)], d);
      }, 9074: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.DecorationService = void 0;
        const s2 = i2(8055), r = i2(8460), n = i2(844), o = i2(6106);
        let a = 0, h = 0;
        class c extends n.Disposable {
          get decorations() {
            return this._decorations.values();
          }
          constructor() {
            super(), this._decorations = new o.SortedList((e3) => e3?.marker.line), this._onDecorationRegistered = this.register(new r.EventEmitter()), this.onDecorationRegistered = this._onDecorationRegistered.event, this._onDecorationRemoved = this.register(new r.EventEmitter()), this.onDecorationRemoved = this._onDecorationRemoved.event, this.register((0, n.toDisposable)(() => this.reset()));
          }
          registerDecoration(e3) {
            if (e3.marker.isDisposed)
              return;
            const t3 = new l(e3);
            if (t3) {
              const e4 = t3.marker.onDispose(() => t3.dispose());
              t3.onDispose(() => {
                t3 && (this._decorations.delete(t3) && this._onDecorationRemoved.fire(t3), e4.dispose());
              }), this._decorations.insert(t3), this._onDecorationRegistered.fire(t3);
            }
            return t3;
          }
          reset() {
            for (const e3 of this._decorations.values())
              e3.dispose();
            this._decorations.clear();
          }
          *getDecorationsAtCell(e3, t3, i3) {
            let s3 = 0, r2 = 0;
            for (const n2 of this._decorations.getKeyIterator(t3))
              s3 = n2.options.x ?? 0, r2 = s3 + (n2.options.width ?? 1), e3 >= s3 && e3 < r2 && (!i3 || (n2.options.layer ?? "bottom") === i3) && (yield n2);
          }
          forEachDecorationAtCell(e3, t3, i3, s3) {
            this._decorations.forEachByKey(t3, (t4) => {
              a = t4.options.x ?? 0, h = a + (t4.options.width ?? 1), e3 >= a && e3 < h && (!i3 || (t4.options.layer ?? "bottom") === i3) && s3(t4);
            });
          }
        }
        t2.DecorationService = c;
        class l extends n.Disposable {
          get isDisposed() {
            return this._isDisposed;
          }
          get backgroundColorRGB() {
            return null === this._cachedBg && (this.options.backgroundColor ? this._cachedBg = s2.css.toColor(this.options.backgroundColor) : this._cachedBg = void 0), this._cachedBg;
          }
          get foregroundColorRGB() {
            return null === this._cachedFg && (this.options.foregroundColor ? this._cachedFg = s2.css.toColor(this.options.foregroundColor) : this._cachedFg = void 0), this._cachedFg;
          }
          constructor(e3) {
            super(), this.options = e3, this.onRenderEmitter = this.register(new r.EventEmitter()), this.onRender = this.onRenderEmitter.event, this._onDispose = this.register(new r.EventEmitter()), this.onDispose = this._onDispose.event, this._cachedBg = null, this._cachedFg = null, this.marker = e3.marker, this.options.overviewRulerOptions && !this.options.overviewRulerOptions.position && (this.options.overviewRulerOptions.position = "full");
          }
          dispose() {
            this._onDispose.fire(), super.dispose();
          }
        }
      }, 4348: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.InstantiationService = t2.ServiceCollection = void 0;
        const s2 = i2(2585), r = i2(8343);
        class n {
          constructor(...e3) {
            this._entries = /* @__PURE__ */ new Map();
            for (const [t3, i3] of e3)
              this.set(t3, i3);
          }
          set(e3, t3) {
            const i3 = this._entries.get(e3);
            return this._entries.set(e3, t3), i3;
          }
          forEach(e3) {
            for (const [t3, i3] of this._entries.entries())
              e3(t3, i3);
          }
          has(e3) {
            return this._entries.has(e3);
          }
          get(e3) {
            return this._entries.get(e3);
          }
        }
        t2.ServiceCollection = n, t2.InstantiationService = class {
          constructor() {
            this._services = new n(), this._services.set(s2.IInstantiationService, this);
          }
          setService(e3, t3) {
            this._services.set(e3, t3);
          }
          getService(e3) {
            return this._services.get(e3);
          }
          createInstance(e3, ...t3) {
            const i3 = (0, r.getServiceDependencies)(e3).sort((e4, t4) => e4.index - t4.index), s3 = [];
            for (const t4 of i3) {
              const i4 = this._services.get(t4.id);
              if (!i4)
                throw new Error(`[createInstance] ${e3.name} depends on UNKNOWN service ${t4.id}.`);
              s3.push(i4);
            }
            const n2 = i3.length > 0 ? i3[0].index : t3.length;
            if (t3.length !== n2)
              throw new Error(`[createInstance] First service dependency of ${e3.name} at position ${n2 + 1} conflicts with ${t3.length} static arguments`);
            return new e3(...[...t3, ...s3]);
          }
        };
      }, 7866: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a2 = e3.length - 1; a2 >= 0; a2--)
              (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.traceCall = t2.setTraceLogger = t2.LogService = void 0;
        const n = i2(844), o = i2(2585), a = { trace: o.LogLevelEnum.TRACE, debug: o.LogLevelEnum.DEBUG, info: o.LogLevelEnum.INFO, warn: o.LogLevelEnum.WARN, error: o.LogLevelEnum.ERROR, off: o.LogLevelEnum.OFF };
        let h, c = t2.LogService = class extends n.Disposable {
          get logLevel() {
            return this._logLevel;
          }
          constructor(e3) {
            super(), this._optionsService = e3, this._logLevel = o.LogLevelEnum.OFF, this._updateLogLevel(), this.register(this._optionsService.onSpecificOptionChange("logLevel", () => this._updateLogLevel())), h = this;
          }
          _updateLogLevel() {
            this._logLevel = a[this._optionsService.rawOptions.logLevel];
          }
          _evalLazyOptionalParams(e3) {
            for (let t3 = 0; t3 < e3.length; t3++)
              "function" == typeof e3[t3] && (e3[t3] = e3[t3]());
          }
          _log(e3, t3, i3) {
            this._evalLazyOptionalParams(i3), e3.call(console, (this._optionsService.options.logger ? "" : "xterm.js: ") + t3, ...i3);
          }
          trace(e3, ...t3) {
            this._logLevel <= o.LogLevelEnum.TRACE && this._log(this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger) ?? console.log, e3, t3);
          }
          debug(e3, ...t3) {
            this._logLevel <= o.LogLevelEnum.DEBUG && this._log(this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger) ?? console.log, e3, t3);
          }
          info(e3, ...t3) {
            this._logLevel <= o.LogLevelEnum.INFO && this._log(this._optionsService.options.logger?.info.bind(this._optionsService.options.logger) ?? console.info, e3, t3);
          }
          warn(e3, ...t3) {
            this._logLevel <= o.LogLevelEnum.WARN && this._log(this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger) ?? console.warn, e3, t3);
          }
          error(e3, ...t3) {
            this._logLevel <= o.LogLevelEnum.ERROR && this._log(this._optionsService.options.logger?.error.bind(this._optionsService.options.logger) ?? console.error, e3, t3);
          }
        };
        t2.LogService = c = s2([r(0, o.IOptionsService)], c), t2.setTraceLogger = function(e3) {
          h = e3;
        }, t2.traceCall = function(e3, t3, i3) {
          if ("function" != typeof i3.value)
            throw new Error("not supported");
          const s3 = i3.value;
          i3.value = function(...e4) {
            if (h.logLevel !== o.LogLevelEnum.TRACE)
              return s3.apply(this, e4);
            h.trace(`GlyphRenderer#${s3.name}(${e4.map((e5) => JSON.stringify(e5)).join(", ")})`);
            const t4 = s3.apply(this, e4);
            return h.trace(`GlyphRenderer#${s3.name} return`, t4), t4;
          };
        };
      }, 7302: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.OptionsService = t2.DEFAULT_OPTIONS = void 0;
        const s2 = i2(8460), r = i2(844), n = i2(6114);
        t2.DEFAULT_OPTIONS = { cols: 80, rows: 24, cursorBlink: false, cursorStyle: "block", cursorWidth: 1, cursorInactiveStyle: "outline", customGlyphs: true, drawBoldTextInBrightColors: true, documentOverride: null, fastScrollModifier: "alt", fastScrollSensitivity: 5, fontFamily: "courier-new, courier, monospace", fontSize: 15, fontWeight: "normal", fontWeightBold: "bold", ignoreBracketedPasteMode: false, lineHeight: 1, letterSpacing: 0, linkHandler: null, logLevel: "info", logger: null, scrollback: 1e3, scrollOnUserInput: true, scrollSensitivity: 1, screenReaderMode: false, smoothScrollDuration: 0, macOptionIsMeta: false, macOptionClickForcesSelection: false, minimumContrastRatio: 1, disableStdin: false, allowProposedApi: false, allowTransparency: false, tabStopWidth: 8, theme: {}, rescaleOverlappingGlyphs: false, rightClickSelectsWord: n.isMac, windowOptions: {}, windowsMode: false, windowsPty: {}, wordSeparator: " ()[]{}',\"`", altClickMovesCursor: true, convertEol: false, termName: "xterm", cancelEvents: false, overviewRulerWidth: 0 };
        const o = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
        class a extends r.Disposable {
          constructor(e3) {
            super(), this._onOptionChange = this.register(new s2.EventEmitter()), this.onOptionChange = this._onOptionChange.event;
            const i3 = { ...t2.DEFAULT_OPTIONS };
            for (const t3 in e3)
              if (t3 in i3)
                try {
                  const s3 = e3[t3];
                  i3[t3] = this._sanitizeAndValidateOption(t3, s3);
                } catch (e4) {
                  console.error(e4);
                }
            this.rawOptions = i3, this.options = { ...i3 }, this._setupOptions(), this.register((0, r.toDisposable)(() => {
              this.rawOptions.linkHandler = null, this.rawOptions.documentOverride = null;
            }));
          }
          onSpecificOptionChange(e3, t3) {
            return this.onOptionChange((i3) => {
              i3 === e3 && t3(this.rawOptions[e3]);
            });
          }
          onMultipleOptionChange(e3, t3) {
            return this.onOptionChange((i3) => {
              -1 !== e3.indexOf(i3) && t3();
            });
          }
          _setupOptions() {
            const e3 = (e4) => {
              if (!(e4 in t2.DEFAULT_OPTIONS))
                throw new Error(`No option with key "${e4}"`);
              return this.rawOptions[e4];
            }, i3 = (e4, i4) => {
              if (!(e4 in t2.DEFAULT_OPTIONS))
                throw new Error(`No option with key "${e4}"`);
              i4 = this._sanitizeAndValidateOption(e4, i4), this.rawOptions[e4] !== i4 && (this.rawOptions[e4] = i4, this._onOptionChange.fire(e4));
            };
            for (const t3 in this.rawOptions) {
              const s3 = { get: e3.bind(this, t3), set: i3.bind(this, t3) };
              Object.defineProperty(this.options, t3, s3);
            }
          }
          _sanitizeAndValidateOption(e3, i3) {
            switch (e3) {
              case "cursorStyle":
                if (i3 || (i3 = t2.DEFAULT_OPTIONS[e3]), !/* @__PURE__ */ function(e4) {
                  return "block" === e4 || "underline" === e4 || "bar" === e4;
                }(i3))
                  throw new Error(`"${i3}" is not a valid value for ${e3}`);
                break;
              case "wordSeparator":
                i3 || (i3 = t2.DEFAULT_OPTIONS[e3]);
                break;
              case "fontWeight":
              case "fontWeightBold":
                if ("number" == typeof i3 && 1 <= i3 && i3 <= 1e3)
                  break;
                i3 = o.includes(i3) ? i3 : t2.DEFAULT_OPTIONS[e3];
                break;
              case "cursorWidth":
                i3 = Math.floor(i3);
              case "lineHeight":
              case "tabStopWidth":
                if (i3 < 1)
                  throw new Error(`${e3} cannot be less than 1, value: ${i3}`);
                break;
              case "minimumContrastRatio":
                i3 = Math.max(1, Math.min(21, Math.round(10 * i3) / 10));
                break;
              case "scrollback":
                if ((i3 = Math.min(i3, 4294967295)) < 0)
                  throw new Error(`${e3} cannot be less than 0, value: ${i3}`);
                break;
              case "fastScrollSensitivity":
              case "scrollSensitivity":
                if (i3 <= 0)
                  throw new Error(`${e3} cannot be less than or equal to 0, value: ${i3}`);
                break;
              case "rows":
              case "cols":
                if (!i3 && 0 !== i3)
                  throw new Error(`${e3} must be numeric, value: ${i3}`);
                break;
              case "windowsPty":
                i3 = i3 ?? {};
            }
            return i3;
          }
        }
        t2.OptionsService = a;
      }, 2660: function(e2, t2, i2) {
        var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
          var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            o2 = Reflect.decorate(e3, t3, i3, s3);
          else
            for (var a = e3.length - 1; a >= 0; a--)
              (r2 = e3[a]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
          return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
        }, r = this && this.__param || function(e3, t3) {
          return function(i3, s3) {
            t3(i3, s3, e3);
          };
        };
        Object.defineProperty(t2, "__esModule", { value: true }), t2.OscLinkService = void 0;
        const n = i2(2585);
        let o = t2.OscLinkService = class {
          constructor(e3) {
            this._bufferService = e3, this._nextId = 1, this._entriesWithId = /* @__PURE__ */ new Map(), this._dataByLinkId = /* @__PURE__ */ new Map();
          }
          registerLink(e3) {
            const t3 = this._bufferService.buffer;
            if (void 0 === e3.id) {
              const i4 = t3.addMarker(t3.ybase + t3.y), s4 = { data: e3, id: this._nextId++, lines: [i4] };
              return i4.onDispose(() => this._removeMarkerFromLink(s4, i4)), this._dataByLinkId.set(s4.id, s4), s4.id;
            }
            const i3 = e3, s3 = this._getEntryIdKey(i3), r2 = this._entriesWithId.get(s3);
            if (r2)
              return this.addLineToLink(r2.id, t3.ybase + t3.y), r2.id;
            const n2 = t3.addMarker(t3.ybase + t3.y), o2 = { id: this._nextId++, key: this._getEntryIdKey(i3), data: i3, lines: [n2] };
            return n2.onDispose(() => this._removeMarkerFromLink(o2, n2)), this._entriesWithId.set(o2.key, o2), this._dataByLinkId.set(o2.id, o2), o2.id;
          }
          addLineToLink(e3, t3) {
            const i3 = this._dataByLinkId.get(e3);
            if (i3 && i3.lines.every((e4) => e4.line !== t3)) {
              const e4 = this._bufferService.buffer.addMarker(t3);
              i3.lines.push(e4), e4.onDispose(() => this._removeMarkerFromLink(i3, e4));
            }
          }
          getLinkData(e3) {
            return this._dataByLinkId.get(e3)?.data;
          }
          _getEntryIdKey(e3) {
            return `${e3.id};;${e3.uri}`;
          }
          _removeMarkerFromLink(e3, t3) {
            const i3 = e3.lines.indexOf(t3);
            -1 !== i3 && (e3.lines.splice(i3, 1), 0 === e3.lines.length && (void 0 !== e3.data.id && this._entriesWithId.delete(e3.key), this._dataByLinkId.delete(e3.id)));
          }
        };
        t2.OscLinkService = o = s2([r(0, n.IBufferService)], o);
      }, 8343: (e2, t2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.createDecorator = t2.getServiceDependencies = t2.serviceRegistry = void 0;
        const i2 = "di$target", s2 = "di$dependencies";
        t2.serviceRegistry = /* @__PURE__ */ new Map(), t2.getServiceDependencies = function(e3) {
          return e3[s2] || [];
        }, t2.createDecorator = function(e3) {
          if (t2.serviceRegistry.has(e3))
            return t2.serviceRegistry.get(e3);
          const r = function(e4, t3, n) {
            if (3 !== arguments.length)
              throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
            !function(e5, t4, r2) {
              t4[i2] === t4 ? t4[s2].push({ id: e5, index: r2 }) : (t4[s2] = [{ id: e5, index: r2 }], t4[i2] = t4);
            }(r, e4, n);
          };
          return r.toString = () => e3, t2.serviceRegistry.set(e3, r), r;
        };
      }, 2585: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.IDecorationService = t2.IUnicodeService = t2.IOscLinkService = t2.IOptionsService = t2.ILogService = t2.LogLevelEnum = t2.IInstantiationService = t2.ICharsetService = t2.ICoreService = t2.ICoreMouseService = t2.IBufferService = void 0;
        const s2 = i2(8343);
        var r;
        t2.IBufferService = (0, s2.createDecorator)("BufferService"), t2.ICoreMouseService = (0, s2.createDecorator)("CoreMouseService"), t2.ICoreService = (0, s2.createDecorator)("CoreService"), t2.ICharsetService = (0, s2.createDecorator)("CharsetService"), t2.IInstantiationService = (0, s2.createDecorator)("InstantiationService"), function(e3) {
          e3[e3.TRACE = 0] = "TRACE", e3[e3.DEBUG = 1] = "DEBUG", e3[e3.INFO = 2] = "INFO", e3[e3.WARN = 3] = "WARN", e3[e3.ERROR = 4] = "ERROR", e3[e3.OFF = 5] = "OFF";
        }(r || (t2.LogLevelEnum = r = {})), t2.ILogService = (0, s2.createDecorator)("LogService"), t2.IOptionsService = (0, s2.createDecorator)("OptionsService"), t2.IOscLinkService = (0, s2.createDecorator)("OscLinkService"), t2.IUnicodeService = (0, s2.createDecorator)("UnicodeService"), t2.IDecorationService = (0, s2.createDecorator)("DecorationService");
      }, 1480: (e2, t2, i2) => {
        Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeService = void 0;
        const s2 = i2(8460), r = i2(225);
        class n {
          static extractShouldJoin(e3) {
            return 0 != (1 & e3);
          }
          static extractWidth(e3) {
            return e3 >> 1 & 3;
          }
          static extractCharKind(e3) {
            return e3 >> 3;
          }
          static createPropertyValue(e3, t3, i3 = false) {
            return (16777215 & e3) << 3 | (3 & t3) << 1 | (i3 ? 1 : 0);
          }
          constructor() {
            this._providers = /* @__PURE__ */ Object.create(null), this._active = "", this._onChange = new s2.EventEmitter(), this.onChange = this._onChange.event;
            const e3 = new r.UnicodeV6();
            this.register(e3), this._active = e3.version, this._activeProvider = e3;
          }
          dispose() {
            this._onChange.dispose();
          }
          get versions() {
            return Object.keys(this._providers);
          }
          get activeVersion() {
            return this._active;
          }
          set activeVersion(e3) {
            if (!this._providers[e3])
              throw new Error(`unknown Unicode version "${e3}"`);
            this._active = e3, this._activeProvider = this._providers[e3], this._onChange.fire(e3);
          }
          register(e3) {
            this._providers[e3.version] = e3;
          }
          wcwidth(e3) {
            return this._activeProvider.wcwidth(e3);
          }
          getStringCellWidth(e3) {
            let t3 = 0, i3 = 0;
            const s3 = e3.length;
            for (let r2 = 0; r2 < s3; ++r2) {
              let o = e3.charCodeAt(r2);
              if (55296 <= o && o <= 56319) {
                if (++r2 >= s3)
                  return t3 + this.wcwidth(o);
                const i4 = e3.charCodeAt(r2);
                56320 <= i4 && i4 <= 57343 ? o = 1024 * (o - 55296) + i4 - 56320 + 65536 : t3 += this.wcwidth(i4);
              }
              const a = this.charProperties(o, i3);
              let h = n.extractWidth(a);
              n.extractShouldJoin(a) && (h -= n.extractWidth(i3)), t3 += h, i3 = a;
            }
            return t3;
          }
          charProperties(e3, t3) {
            return this._activeProvider.charProperties(e3, t3);
          }
        }
        t2.UnicodeService = n;
      } }, t = {};
      function i(s2) {
        var r = t[s2];
        if (void 0 !== r)
          return r.exports;
        var n = t[s2] = { exports: {} };
        return e[s2].call(n.exports, n, n.exports, i), n.exports;
      }
      var s = {};
      return (() => {
        var e2 = s;
        Object.defineProperty(e2, "__esModule", { value: true }), e2.Terminal = void 0;
        const t2 = i(9042), r = i(3236), n = i(844), o = i(5741), a = i(8285), h = i(7975), c = i(7090), l = ["cols", "rows"];
        class d extends n.Disposable {
          constructor(e3) {
            super(), this._core = this.register(new r.Terminal(e3)), this._addonManager = this.register(new o.AddonManager()), this._publicOptions = { ...this._core.options };
            const t3 = (e4) => this._core.options[e4], i2 = (e4, t4) => {
              this._checkReadonlyOptions(e4), this._core.options[e4] = t4;
            };
            for (const e4 in this._core.options) {
              const s2 = { get: t3.bind(this, e4), set: i2.bind(this, e4) };
              Object.defineProperty(this._publicOptions, e4, s2);
            }
          }
          _checkReadonlyOptions(e3) {
            if (l.includes(e3))
              throw new Error(`Option "${e3}" can only be set in the constructor`);
          }
          _checkProposedApi() {
            if (!this._core.optionsService.rawOptions.allowProposedApi)
              throw new Error("You must set the allowProposedApi option to true to use proposed API");
          }
          get onBell() {
            return this._core.onBell;
          }
          get onBinary() {
            return this._core.onBinary;
          }
          get onCursorMove() {
            return this._core.onCursorMove;
          }
          get onData() {
            return this._core.onData;
          }
          get onKey() {
            return this._core.onKey;
          }
          get onLineFeed() {
            return this._core.onLineFeed;
          }
          get onRender() {
            return this._core.onRender;
          }
          get onResize() {
            return this._core.onResize;
          }
          get onScroll() {
            return this._core.onScroll;
          }
          get onSelectionChange() {
            return this._core.onSelectionChange;
          }
          get onTitleChange() {
            return this._core.onTitleChange;
          }
          get onWriteParsed() {
            return this._core.onWriteParsed;
          }
          get element() {
            return this._core.element;
          }
          get parser() {
            return this._parser || (this._parser = new h.ParserApi(this._core)), this._parser;
          }
          get unicode() {
            return this._checkProposedApi(), new c.UnicodeApi(this._core);
          }
          get textarea() {
            return this._core.textarea;
          }
          get rows() {
            return this._core.rows;
          }
          get cols() {
            return this._core.cols;
          }
          get buffer() {
            return this._buffer || (this._buffer = this.register(new a.BufferNamespaceApi(this._core))), this._buffer;
          }
          get markers() {
            return this._checkProposedApi(), this._core.markers;
          }
          get modes() {
            const e3 = this._core.coreService.decPrivateModes;
            let t3 = "none";
            switch (this._core.coreMouseService.activeProtocol) {
              case "X10":
                t3 = "x10";
                break;
              case "VT200":
                t3 = "vt200";
                break;
              case "DRAG":
                t3 = "drag";
                break;
              case "ANY":
                t3 = "any";
            }
            return { applicationCursorKeysMode: e3.applicationCursorKeys, applicationKeypadMode: e3.applicationKeypad, bracketedPasteMode: e3.bracketedPasteMode, insertMode: this._core.coreService.modes.insertMode, mouseTrackingMode: t3, originMode: e3.origin, reverseWraparoundMode: e3.reverseWraparound, sendFocusMode: e3.sendFocus, wraparoundMode: e3.wraparound };
          }
          get options() {
            return this._publicOptions;
          }
          set options(e3) {
            for (const t3 in e3)
              this._publicOptions[t3] = e3[t3];
          }
          blur() {
            this._core.blur();
          }
          focus() {
            this._core.focus();
          }
          input(e3, t3 = true) {
            this._core.input(e3, t3);
          }
          resize(e3, t3) {
            this._verifyIntegers(e3, t3), this._core.resize(e3, t3);
          }
          open(e3) {
            this._core.open(e3);
          }
          attachCustomKeyEventHandler(e3) {
            this._core.attachCustomKeyEventHandler(e3);
          }
          attachCustomWheelEventHandler(e3) {
            this._core.attachCustomWheelEventHandler(e3);
          }
          registerLinkProvider(e3) {
            return this._core.registerLinkProvider(e3);
          }
          registerCharacterJoiner(e3) {
            return this._checkProposedApi(), this._core.registerCharacterJoiner(e3);
          }
          deregisterCharacterJoiner(e3) {
            this._checkProposedApi(), this._core.deregisterCharacterJoiner(e3);
          }
          registerMarker(e3 = 0) {
            return this._verifyIntegers(e3), this._core.registerMarker(e3);
          }
          registerDecoration(e3) {
            return this._checkProposedApi(), this._verifyPositiveIntegers(e3.x ?? 0, e3.width ?? 0, e3.height ?? 0), this._core.registerDecoration(e3);
          }
          hasSelection() {
            return this._core.hasSelection();
          }
          select(e3, t3, i2) {
            this._verifyIntegers(e3, t3, i2), this._core.select(e3, t3, i2);
          }
          getSelection() {
            return this._core.getSelection();
          }
          getSelectionPosition() {
            return this._core.getSelectionPosition();
          }
          clearSelection() {
            this._core.clearSelection();
          }
          selectAll() {
            this._core.selectAll();
          }
          selectLines(e3, t3) {
            this._verifyIntegers(e3, t3), this._core.selectLines(e3, t3);
          }
          dispose() {
            super.dispose();
          }
          scrollLines(e3) {
            this._verifyIntegers(e3), this._core.scrollLines(e3);
          }
          scrollPages(e3) {
            this._verifyIntegers(e3), this._core.scrollPages(e3);
          }
          scrollToTop() {
            this._core.scrollToTop();
          }
          scrollToBottom() {
            this._core.scrollToBottom();
          }
          scrollToLine(e3) {
            this._verifyIntegers(e3), this._core.scrollToLine(e3);
          }
          clear() {
            this._core.clear();
          }
          write(e3, t3) {
            this._core.write(e3, t3);
          }
          writeln(e3, t3) {
            this._core.write(e3), this._core.write("\r\n", t3);
          }
          paste(e3) {
            this._core.paste(e3);
          }
          refresh(e3, t3) {
            this._verifyIntegers(e3, t3), this._core.refresh(e3, t3);
          }
          reset() {
            this._core.reset();
          }
          clearTextureAtlas() {
            this._core.clearTextureAtlas();
          }
          loadAddon(e3) {
            this._addonManager.loadAddon(this, e3);
          }
          static get strings() {
            return t2;
          }
          _verifyIntegers(...e3) {
            for (const t3 of e3)
              if (t3 === 1 / 0 || isNaN(t3) || t3 % 1 != 0)
                throw new Error("This API only accepts integers");
          }
          _verifyPositiveIntegers(...e3) {
            for (const t3 of e3)
              if (t3 && (t3 === 1 / 0 || isNaN(t3) || t3 % 1 != 0 || t3 < 0))
                throw new Error("This API only accepts positive integers");
          }
        }
        e2.Terminal = d;
      })(), s;
    })());
  }
});

// node_modules/@xterm/addon-fit/lib/addon-fit.js
var require_addon_fit = __commonJS({
  "node_modules/@xterm/addon-fit/lib/addon-fit.js"(exports2, module2) {
    !function(e, t) {
      "object" == typeof exports2 && "object" == typeof module2 ? module2.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports2 ? exports2.FitAddon = t() : e.FitAddon = t();
    }(self, () => (() => {
      "use strict";
      var e = {};
      return (() => {
        var t = e;
        Object.defineProperty(t, "__esModule", { value: true }), t.FitAddon = void 0, t.FitAddon = class {
          activate(e2) {
            this._terminal = e2;
          }
          dispose() {
          }
          fit() {
            const e2 = this.proposeDimensions();
            if (!e2 || !this._terminal || isNaN(e2.cols) || isNaN(e2.rows))
              return;
            const t2 = this._terminal._core;
            this._terminal.rows === e2.rows && this._terminal.cols === e2.cols || (t2._renderService.clear(), this._terminal.resize(e2.cols, e2.rows));
          }
          proposeDimensions() {
            if (!this._terminal)
              return;
            if (!this._terminal.element || !this._terminal.element.parentElement)
              return;
            const e2 = this._terminal._core, t2 = e2._renderService.dimensions;
            if (0 === t2.css.cell.width || 0 === t2.css.cell.height)
              return;
            const r = 0 === this._terminal.options.scrollback ? 0 : e2.viewport.scrollBarWidth, i = window.getComputedStyle(this._terminal.element.parentElement), o = parseInt(i.getPropertyValue("height")), s = Math.max(0, parseInt(i.getPropertyValue("width"))), n = window.getComputedStyle(this._terminal.element), l = o - (parseInt(n.getPropertyValue("padding-top")) + parseInt(n.getPropertyValue("padding-bottom"))), a = s - (parseInt(n.getPropertyValue("padding-right")) + parseInt(n.getPropertyValue("padding-left"))) - r;
            return { cols: Math.max(2, Math.floor(a / t2.css.cell.width)), rows: Math.max(1, Math.floor(l / t2.css.cell.height)) };
          }
        };
      })(), e;
    })());
  }
});
var require_addon_webgl = __commonJS({
  "node_modules/@xterm/addon-webgl/lib/addon-webgl.js"(exports, module) {
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WebglAddon=t():e.WebglAddon=t()}(globalThis,(()=>(()=>{"use strict";var e={6864:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CellColorResolver=void 0;const s=i(1564),n=i(7993),r=i(4959);let o,a=0,l=0,h=!1,c=!1,u=!1,d=0;t.CellColorResolver=class{constructor(e,t,i,s,n,r){this._terminal=e,this._optionService=t,this._selectionRenderModel=i,this._decorationService=s,this._coreBrowserService=n,this._themeService=r,this.result={fg:0,bg:0,ext:0}}resolve(e,t,i,_){if(this.result.bg=e.bg,this.result.fg=e.fg,this.result.ext=268435456&e.bg?e.extended.ext:0,l=0,a=0,c=!1,h=!1,u=!1,o=this._themeService.colors,d=0,e.getCode()!==s.NULL_CELL_CODE&&4===e.extended.underlineStyle){const e=Math.max(1,Math.floor(this._optionService.rawOptions.fontSize*this._coreBrowserService.dpr/15));d=t*_%(2*Math.round(e))}if(this._decorationService.forEachDecorationAtCell(t,i,"bottom",(e=>{e.backgroundColorRGB&&(l=e.backgroundColorRGB.rgba>>8&16777215,c=!0),e.foregroundColorRGB&&(a=e.foregroundColorRGB.rgba>>8&16777215,h=!0)})),u=this._selectionRenderModel.isCellSelected(this._terminal,t,i),u){if(67108864&this.result.fg||50331648&this.result.bg){if(67108864&this.result.fg)switch(50331648&this.result.fg){case 16777216:case 33554432:l=this._themeService.colors.ansi[255&this.result.fg].rgba;break;case 50331648:l=(16777215&this.result.fg)<<8|255;break;default:l=this._themeService.colors.foreground.rgba}else switch(50331648&this.result.bg){case 16777216:case 33554432:l=this._themeService.colors.ansi[255&this.result.bg].rgba;break;case 50331648:l=(16777215&this.result.bg)<<8|255}l=n.rgba.blend(l,4294967040&(this._coreBrowserService.isFocused?o.selectionBackgroundOpaque:o.selectionInactiveBackgroundOpaque).rgba|128)>>8&16777215}else l=(this._coreBrowserService.isFocused?o.selectionBackgroundOpaque:o.selectionInactiveBackgroundOpaque).rgba>>8&16777215;if(c=!0,o.selectionForeground&&(a=o.selectionForeground.rgba>>8&16777215,h=!0),(0,r.treatGlyphAsBackgroundColor)(e.getCode())){if(67108864&this.result.fg&&!(50331648&this.result.bg))a=(this._coreBrowserService.isFocused?o.selectionBackgroundOpaque:o.selectionInactiveBackgroundOpaque).rgba>>8&16777215;else{if(67108864&this.result.fg)switch(50331648&this.result.bg){case 16777216:case 33554432:a=this._themeService.colors.ansi[255&this.result.bg].rgba;break;case 50331648:a=(16777215&this.result.bg)<<8|255}else switch(50331648&this.result.fg){case 16777216:case 33554432:a=this._themeService.colors.ansi[255&this.result.fg].rgba;break;case 50331648:a=(16777215&this.result.fg)<<8|255;break;default:a=this._themeService.colors.foreground.rgba}a=n.rgba.blend(a,4294967040&(this._coreBrowserService.isFocused?o.selectionBackgroundOpaque:o.selectionInactiveBackgroundOpaque).rgba|128)>>8&16777215}h=!0}}this._decorationService.forEachDecorationAtCell(t,i,"top",(e=>{e.backgroundColorRGB&&(l=e.backgroundColorRGB.rgba>>8&16777215,c=!0),e.foregroundColorRGB&&(a=e.foregroundColorRGB.rgba>>8&16777215,h=!0)})),c&&(l=u?-16777216&e.bg&-134217729|l|50331648:-16777216&e.bg|l|50331648),h&&(a=-16777216&e.fg&-67108865|a|50331648),67108864&this.result.fg&&(c&&!h&&(a=50331648&this.result.bg?-134217728&this.result.fg|67108863&this.result.bg:-134217728&this.result.fg|16777215&o.background.rgba>>8|50331648,h=!0),!c&&h&&(l=50331648&this.result.fg?-67108864&this.result.bg|67108863&this.result.fg:-67108864&this.result.bg|16777215&o.foreground.rgba>>8|50331648,c=!0)),o=void 0,this.result.bg=c?l:this.result.bg,this.result.fg=h?a:this.result.fg,this.result.ext&=536870911,this.result.ext|=d<<29&3758096384}}},5670:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.acquireTextureAtlas=function(e,t,i,o,a,l,h,c,u){const d=(0,n.generateConfig)(o,a,l,h,t,i,c,u);for(let t=0;t<r.length;t++){const i=r[t],s=i.ownedBy.indexOf(e);if(s>=0){if((0,n.configEquals)(i.config,d))return i.atlas;1===i.ownedBy.length?(i.atlas.dispose(),r.splice(t,1)):i.ownedBy.splice(s,1);break}}for(let t=0;t<r.length;t++){const i=r[t];if((0,n.configEquals)(i.config,d))return i.ownedBy.push(e),i.atlas}const _=e._core,f={atlas:new s.TextureAtlas(document,d,_.unicodeService),config:d,ownedBy:[e]};return r.push(f),f.atlas},t.removeTerminalFromCache=function(e){for(let t=0;t<r.length;t++){const i=r[t].ownedBy.indexOf(e);if(-1!==i){1===r[t].ownedBy.length?(r[t].atlas.dispose(),r.splice(t,1)):r[t].ownedBy.splice(i,1);break}}};const s=i(2115),n=i(3657),r=[]},3657:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateConfig=function(e,t,i,n,r,o,a,l){const h={foreground:o.foreground,background:o.background,cursor:s.NULL_COLOR,cursorAccent:s.NULL_COLOR,selectionForeground:s.NULL_COLOR,selectionBackgroundTransparent:s.NULL_COLOR,selectionBackgroundOpaque:s.NULL_COLOR,selectionInactiveBackgroundTransparent:s.NULL_COLOR,selectionInactiveBackgroundOpaque:s.NULL_COLOR,overviewRulerBorder:s.NULL_COLOR,scrollbarSliderBackground:s.NULL_COLOR,scrollbarSliderHoverBackground:s.NULL_COLOR,scrollbarSliderActiveBackground:s.NULL_COLOR,ansi:o.ansi.slice(),contrastCache:o.contrastCache,halfContrastCache:o.halfContrastCache};return{customGlyphs:r.customGlyphs,devicePixelRatio:a,deviceMaxTextureSize:l,letterSpacing:r.letterSpacing,lineHeight:r.lineHeight,deviceCellWidth:e,deviceCellHeight:t,deviceCharWidth:i,deviceCharHeight:n,fontFamily:r.fontFamily,fontSize:r.fontSize,fontWeight:r.fontWeight,fontWeightBold:r.fontWeightBold,allowTransparency:r.allowTransparency,drawBoldTextInBrightColors:r.drawBoldTextInBrightColors,minimumContrastRatio:r.minimumContrastRatio,colors:h}},t.configEquals=function(e,t){for(let i=0;i<e.colors.ansi.length;i++)if(e.colors.ansi[i].rgba!==t.colors.ansi[i].rgba)return!1;return e.devicePixelRatio===t.devicePixelRatio&&e.customGlyphs===t.customGlyphs&&e.lineHeight===t.lineHeight&&e.letterSpacing===t.letterSpacing&&e.fontFamily===t.fontFamily&&e.fontSize===t.fontSize&&e.fontWeight===t.fontWeight&&e.fontWeightBold===t.fontWeightBold&&e.allowTransparency===t.allowTransparency&&e.deviceCharWidth===t.deviceCharWidth&&e.deviceCharHeight===t.deviceCharHeight&&e.drawBoldTextInBrightColors===t.drawBoldTextInBrightColors&&e.minimumContrastRatio===t.minimumContrastRatio&&e.colors.foreground.rgba===t.colors.foreground.rgba&&e.colors.background.rgba===t.colors.background.rgba},t.is256Color=function(e){return 16777216==(50331648&e)||33554432==(50331648&e)};const s=i(7993)},2e3:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TEXT_BASELINE=t.DIM_OPACITY=void 0;const s=i(7095);t.DIM_OPACITY=.5,t.TEXT_BASELINE=s.isFirefox||s.isLegacyEdge?"bottom":"ideographic"},3773:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CursorBlinkStateManager=void 0;t.CursorBlinkStateManager=class{constructor(e,t){this._renderCallback=e,this._coreBrowserService=t,this.isCursorVisible=!0,this._coreBrowserService.isFocused&&this._restartInterval()}get isPaused(){return!(this._blinkStartTimeout||this._blinkInterval)}dispose(){this._blinkInterval&&(this._coreBrowserService.window.clearInterval(this._blinkInterval),this._blinkInterval=void 0),this._blinkStartTimeout&&(this._coreBrowserService.window.clearTimeout(this._blinkStartTimeout),this._blinkStartTimeout=void 0),this._animationFrame&&(this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0)}restartBlinkAnimation(){this.isPaused||(this._animationTimeRestarted=Date.now(),this.isCursorVisible=!0,this._animationFrame||(this._animationFrame=this._coreBrowserService.window.requestAnimationFrame((()=>{this._renderCallback(),this._animationFrame=void 0}))))}_restartInterval(e=600){this._blinkInterval&&(this._coreBrowserService.window.clearInterval(this._blinkInterval),this._blinkInterval=void 0),this._blinkStartTimeout=this._coreBrowserService.window.setTimeout((()=>{if(this._animationTimeRestarted){const e=600-(Date.now()-this._animationTimeRestarted);if(this._animationTimeRestarted=void 0,e>0)return void this._restartInterval(e)}this.isCursorVisible=!1,this._animationFrame=this._coreBrowserService.window.requestAnimationFrame((()=>{this._renderCallback(),this._animationFrame=void 0})),this._blinkInterval=this._coreBrowserService.window.setInterval((()=>{if(this._animationTimeRestarted){const e=600-(Date.now()-this._animationTimeRestarted);return this._animationTimeRestarted=void 0,void this._restartInterval(e)}this.isCursorVisible=!this.isCursorVisible,this._animationFrame=this._coreBrowserService.window.requestAnimationFrame((()=>{this._renderCallback(),this._animationFrame=void 0}))}),600)}),e)}pause(){this.isCursorVisible=!0,this._blinkInterval&&(this._coreBrowserService.window.clearInterval(this._blinkInterval),this._blinkInterval=void 0),this._blinkStartTimeout&&(this._coreBrowserService.window.clearTimeout(this._blinkStartTimeout),this._blinkStartTimeout=void 0),this._animationFrame&&(this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0)}resume(){this.pause(),this._animationTimeRestarted=void 0,this._restartInterval(),this.restartBlinkAnimation()}}},9705:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.powerlineDefinitions=t.boxDrawingDefinitions=t.blockElementDefinitions=void 0,t.tryDrawCustomChar=function(e,i,o,h,c,u,d,_){const f=t.blockElementDefinitions[i];if(f)return function(e,t,i,s,n,r){for(let o=0;o<t.length;o++){const a=t[o],l=n/8,h=r/8;e.fillRect(i+a.x*l,s+a.y*h,a.w*l,a.h*h)}}(e,f,o,h,c,u),!0;const g=n[i];if(g)return function(e,t,i,n,o,a){let l=r.get(t);l||(l=new Map,r.set(t,l));const h=e.fillStyle;if("string"!=typeof h)throw new Error(`Unexpected fillStyle type "${h}"`);let c=l.get(h);if(!c){const i=t[0].length,n=t.length,r=e.canvas.ownerDocument.createElement("canvas");r.width=i,r.height=n;const o=(0,s.throwIfFalsy)(r.getContext("2d")),a=new ImageData(i,n);let u,d,_,f;if(h.startsWith("#"))u=parseInt(h.slice(1,3),16),d=parseInt(h.slice(3,5),16),_=parseInt(h.slice(5,7),16),f=h.length>7&&parseInt(h.slice(7,9),16)||1;else{if(!h.startsWith("rgba"))throw new Error(`Unexpected fillStyle color format "${h}" when drawing pattern glyph`);[u,d,_,f]=h.substring(5,h.length-1).split(",").map((e=>parseFloat(e)))}for(let e=0;e<n;e++)for(let s=0;s<i;s++)a.data[4*(e*i+s)]=u,a.data[4*(e*i+s)+1]=d,a.data[4*(e*i+s)+2]=_,a.data[4*(e*i+s)+3]=t[e][s]*(255*f);o.putImageData(a,0,0),c=(0,s.throwIfFalsy)(e.createPattern(r,null)),l.set(h,c)}e.fillStyle=c,e.fillRect(i,n,o,a)}(e,g,o,h,c,u),!0;const m=t.boxDrawingDefinitions[i];if(m)return function(e,t,i,s,n,r,o){e.strokeStyle=e.fillStyle;for(const[h,c]of Object.entries(t)){let t;e.beginPath(),e.lineWidth=o*Number.parseInt(h),t="function"==typeof c?c(.15,.15/r*n):c;for(const h of t.split(" ")){const t=h[0],c=a[t];if(!c){console.error(`Could not find drawing instructions for "${t}"`);continue}const u=h.substring(1).split(",");u[0]&&u[1]&&c(e,l(u,n,r,i,s,!0,o))}e.stroke(),e.closePath()}}(e,m,o,h,c,u,_),!0;const p=t.powerlineDefinitions[i];return!!p&&(function(e,t,i,s,n,r,o,h){const c=new Path2D;c.rect(i,s,n,r),e.clip(c),e.beginPath();const u=o/12;e.lineWidth=h*u;for(const o of t.d.split(" ")){const c=o[0],d=a[c];if(!d){console.error(`Could not find drawing instructions for "${c}"`);continue}const _=o.substring(1).split(",");_[0]&&_[1]&&d(e,l(_,n,r,i,s,!1,h,(t.leftPadding??0)*(u/2),(t.rightPadding??0)*(u/2)))}1===t.type?(e.strokeStyle=e.fillStyle,e.stroke()):e.fill(),e.closePath()}(e,p,o,h,c,u,d,_),!0)};const s=i(4959);t.blockElementDefinitions={"▀":[{x:0,y:0,w:8,h:4}],"▁":[{x:0,y:7,w:8,h:1}],"▂":[{x:0,y:6,w:8,h:2}],"▃":[{x:0,y:5,w:8,h:3}],"▄":[{x:0,y:4,w:8,h:4}],"▅":[{x:0,y:3,w:8,h:5}],"▆":[{x:0,y:2,w:8,h:6}],"▇":[{x:0,y:1,w:8,h:7}],"█":[{x:0,y:0,w:8,h:8}],"▉":[{x:0,y:0,w:7,h:8}],"▊":[{x:0,y:0,w:6,h:8}],"▋":[{x:0,y:0,w:5,h:8}],"▌":[{x:0,y:0,w:4,h:8}],"▍":[{x:0,y:0,w:3,h:8}],"▎":[{x:0,y:0,w:2,h:8}],"▏":[{x:0,y:0,w:1,h:8}],"▐":[{x:4,y:0,w:4,h:8}],"▔":[{x:0,y:0,w:8,h:1}],"▕":[{x:7,y:0,w:1,h:8}],"▖":[{x:0,y:4,w:4,h:4}],"▗":[{x:4,y:4,w:4,h:4}],"▘":[{x:0,y:0,w:4,h:4}],"▙":[{x:0,y:0,w:4,h:8},{x:0,y:4,w:8,h:4}],"▚":[{x:0,y:0,w:4,h:4},{x:4,y:4,w:4,h:4}],"▛":[{x:0,y:0,w:4,h:8},{x:4,y:0,w:4,h:4}],"▜":[{x:0,y:0,w:8,h:4},{x:4,y:0,w:4,h:8}],"▝":[{x:4,y:0,w:4,h:4}],"▞":[{x:4,y:0,w:4,h:4},{x:0,y:4,w:4,h:4}],"▟":[{x:4,y:0,w:4,h:8},{x:0,y:4,w:8,h:4}],"🭰":[{x:1,y:0,w:1,h:8}],"🭱":[{x:2,y:0,w:1,h:8}],"🭲":[{x:3,y:0,w:1,h:8}],"🭳":[{x:4,y:0,w:1,h:8}],"🭴":[{x:5,y:0,w:1,h:8}],"🭵":[{x:6,y:0,w:1,h:8}],"🭶":[{x:0,y:1,w:8,h:1}],"🭷":[{x:0,y:2,w:8,h:1}],"🭸":[{x:0,y:3,w:8,h:1}],"🭹":[{x:0,y:4,w:8,h:1}],"🭺":[{x:0,y:5,w:8,h:1}],"🭻":[{x:0,y:6,w:8,h:1}],"🭼":[{x:0,y:0,w:1,h:8},{x:0,y:7,w:8,h:1}],"🭽":[{x:0,y:0,w:1,h:8},{x:0,y:0,w:8,h:1}],"🭾":[{x:7,y:0,w:1,h:8},{x:0,y:0,w:8,h:1}],"🭿":[{x:7,y:0,w:1,h:8},{x:0,y:7,w:8,h:1}],"🮀":[{x:0,y:0,w:8,h:1},{x:0,y:7,w:8,h:1}],"🮁":[{x:0,y:0,w:8,h:1},{x:0,y:2,w:8,h:1},{x:0,y:4,w:8,h:1},{x:0,y:7,w:8,h:1}],"🮂":[{x:0,y:0,w:8,h:2}],"🮃":[{x:0,y:0,w:8,h:3}],"🮄":[{x:0,y:0,w:8,h:5}],"🮅":[{x:0,y:0,w:8,h:6}],"🮆":[{x:0,y:0,w:8,h:7}],"🮇":[{x:6,y:0,w:2,h:8}],"🮈":[{x:5,y:0,w:3,h:8}],"🮉":[{x:3,y:0,w:5,h:8}],"🮊":[{x:2,y:0,w:6,h:8}],"🮋":[{x:1,y:0,w:7,h:8}],"🮕":[{x:0,y:0,w:2,h:2},{x:4,y:0,w:2,h:2},{x:2,y:2,w:2,h:2},{x:6,y:2,w:2,h:2},{x:0,y:4,w:2,h:2},{x:4,y:4,w:2,h:2},{x:2,y:6,w:2,h:2},{x:6,y:6,w:2,h:2}],"🮖":[{x:2,y:0,w:2,h:2},{x:6,y:0,w:2,h:2},{x:0,y:2,w:2,h:2},{x:4,y:2,w:2,h:2},{x:2,y:4,w:2,h:2},{x:6,y:4,w:2,h:2},{x:0,y:6,w:2,h:2},{x:4,y:6,w:2,h:2}],"🮗":[{x:0,y:2,w:8,h:2},{x:0,y:6,w:8,h:2}]};const n={"░":[[1,0,0,0],[0,0,0,0],[0,0,1,0],[0,0,0,0]],"▒":[[1,0],[0,0],[0,1],[0,0]],"▓":[[0,1],[1,1],[1,0],[1,1]]};t.boxDrawingDefinitions={"─":{1:"M0,.5 L1,.5"},"━":{3:"M0,.5 L1,.5"},"│":{1:"M.5,0 L.5,1"},"┃":{3:"M.5,0 L.5,1"},"┌":{1:"M0.5,1 L.5,.5 L1,.5"},"┏":{3:"M0.5,1 L.5,.5 L1,.5"},"┐":{1:"M0,.5 L.5,.5 L.5,1"},"┓":{3:"M0,.5 L.5,.5 L.5,1"},"└":{1:"M.5,0 L.5,.5 L1,.5"},"┗":{3:"M.5,0 L.5,.5 L1,.5"},"┘":{1:"M.5,0 L.5,.5 L0,.5"},"┛":{3:"M.5,0 L.5,.5 L0,.5"},"├":{1:"M.5,0 L.5,1 M.5,.5 L1,.5"},"┣":{3:"M.5,0 L.5,1 M.5,.5 L1,.5"},"┤":{1:"M.5,0 L.5,1 M.5,.5 L0,.5"},"┫":{3:"M.5,0 L.5,1 M.5,.5 L0,.5"},"┬":{1:"M0,.5 L1,.5 M.5,.5 L.5,1"},"┳":{3:"M0,.5 L1,.5 M.5,.5 L.5,1"},"┴":{1:"M0,.5 L1,.5 M.5,.5 L.5,0"},"┻":{3:"M0,.5 L1,.5 M.5,.5 L.5,0"},"┼":{1:"M0,.5 L1,.5 M.5,0 L.5,1"},"╋":{3:"M0,.5 L1,.5 M.5,0 L.5,1"},"╴":{1:"M.5,.5 L0,.5"},"╸":{3:"M.5,.5 L0,.5"},"╵":{1:"M.5,.5 L.5,0"},"╹":{3:"M.5,.5 L.5,0"},"╶":{1:"M.5,.5 L1,.5"},"╺":{3:"M.5,.5 L1,.5"},"╷":{1:"M.5,.5 L.5,1"},"╻":{3:"M.5,.5 L.5,1"},"═":{1:(e,t)=>`M0,${.5-t} L1,${.5-t} M0,${.5+t} L1,${.5+t}`},"║":{1:(e,t)=>`M${.5-e},0 L${.5-e},1 M${.5+e},0 L${.5+e},1`},"╒":{1:(e,t)=>`M.5,1 L.5,${.5-t} L1,${.5-t} M.5,${.5+t} L1,${.5+t}`},"╓":{1:(e,t)=>`M${.5-e},1 L${.5-e},.5 L1,.5 M${.5+e},.5 L${.5+e},1`},"╔":{1:(e,t)=>`M1,${.5-t} L${.5-e},${.5-t} L${.5-e},1 M1,${.5+t} L${.5+e},${.5+t} L${.5+e},1`},"╕":{1:(e,t)=>`M0,${.5-t} L.5,${.5-t} L.5,1 M0,${.5+t} L.5,${.5+t}`},"╖":{1:(e,t)=>`M${.5+e},1 L${.5+e},.5 L0,.5 M${.5-e},.5 L${.5-e},1`},"╗":{1:(e,t)=>`M0,${.5+t} L${.5-e},${.5+t} L${.5-e},1 M0,${.5-t} L${.5+e},${.5-t} L${.5+e},1`},"╘":{1:(e,t)=>`M.5,0 L.5,${.5+t} L1,${.5+t} M.5,${.5-t} L1,${.5-t}`},"╙":{1:(e,t)=>`M1,.5 L${.5-e},.5 L${.5-e},0 M${.5+e},.5 L${.5+e},0`},"╚":{1:(e,t)=>`M1,${.5-t} L${.5+e},${.5-t} L${.5+e},0 M1,${.5+t} L${.5-e},${.5+t} L${.5-e},0`},"╛":{1:(e,t)=>`M0,${.5+t} L.5,${.5+t} L.5,0 M0,${.5-t} L.5,${.5-t}`},"╜":{1:(e,t)=>`M0,.5 L${.5+e},.5 L${.5+e},0 M${.5-e},.5 L${.5-e},0`},"╝":{1:(e,t)=>`M0,${.5-t} L${.5-e},${.5-t} L${.5-e},0 M0,${.5+t} L${.5+e},${.5+t} L${.5+e},0`},"╞":{1:(e,t)=>`M.5,0 L.5,1 M.5,${.5-t} L1,${.5-t} M.5,${.5+t} L1,${.5+t}`},"╟":{1:(e,t)=>`M${.5-e},0 L${.5-e},1 M${.5+e},0 L${.5+e},1 M${.5+e},.5 L1,.5`},"╠":{1:(e,t)=>`M${.5-e},0 L${.5-e},1 M1,${.5+t} L${.5+e},${.5+t} L${.5+e},1 M1,${.5-t} L${.5+e},${.5-t} L${.5+e},0`},"╡":{1:(e,t)=>`M.5,0 L.5,1 M0,${.5-t} L.5,${.5-t} M0,${.5+t} L.5,${.5+t}`},"╢":{1:(e,t)=>`M0,.5 L${.5-e},.5 M${.5-e},0 L${.5-e},1 M${.5+e},0 L${.5+e},1`},"╣":{1:(e,t)=>`M${.5+e},0 L${.5+e},1 M0,${.5+t} L${.5-e},${.5+t} L${.5-e},1 M0,${.5-t} L${.5-e},${.5-t} L${.5-e},0`},"╤":{1:(e,t)=>`M0,${.5-t} L1,${.5-t} M0,${.5+t} L1,${.5+t} M.5,${.5+t} L.5,1`},"╥":{1:(e,t)=>`M0,.5 L1,.5 M${.5-e},.5 L${.5-e},1 M${.5+e},.5 L${.5+e},1`},"╦":{1:(e,t)=>`M0,${.5-t} L1,${.5-t} M0,${.5+t} L${.5-e},${.5+t} L${.5-e},1 M1,${.5+t} L${.5+e},${.5+t} L${.5+e},1`},"╧":{1:(e,t)=>`M.5,0 L.5,${.5-t} M0,${.5-t} L1,${.5-t} M0,${.5+t} L1,${.5+t}`},"╨":{1:(e,t)=>`M0,.5 L1,.5 M${.5-e},.5 L${.5-e},0 M${.5+e},.5 L${.5+e},0`},"╩":{1:(e,t)=>`M0,${.5+t} L1,${.5+t} M0,${.5-t} L${.5-e},${.5-t} L${.5-e},0 M1,${.5-t} L${.5+e},${.5-t} L${.5+e},0`},"╪":{1:(e,t)=>`M.5,0 L.5,1 M0,${.5-t} L1,${.5-t} M0,${.5+t} L1,${.5+t}`},"╫":{1:(e,t)=>`M0,.5 L1,.5 M${.5-e},0 L${.5-e},1 M${.5+e},0 L${.5+e},1`},"╬":{1:(e,t)=>`M0,${.5+t} L${.5-e},${.5+t} L${.5-e},1 M1,${.5+t} L${.5+e},${.5+t} L${.5+e},1 M0,${.5-t} L${.5-e},${.5-t} L${.5-e},0 M1,${.5-t} L${.5+e},${.5-t} L${.5+e},0`},"╱":{1:"M1,0 L0,1"},"╲":{1:"M0,0 L1,1"},"╳":{1:"M1,0 L0,1 M0,0 L1,1"},"╼":{1:"M.5,.5 L0,.5",3:"M.5,.5 L1,.5"},"╽":{1:"M.5,.5 L.5,0",3:"M.5,.5 L.5,1"},"╾":{1:"M.5,.5 L1,.5",3:"M.5,.5 L0,.5"},"╿":{1:"M.5,.5 L.5,1",3:"M.5,.5 L.5,0"},"┍":{1:"M.5,.5 L.5,1",3:"M.5,.5 L1,.5"},"┎":{1:"M.5,.5 L1,.5",3:"M.5,.5 L.5,1"},"┑":{1:"M.5,.5 L.5,1",3:"M.5,.5 L0,.5"},"┒":{1:"M.5,.5 L0,.5",3:"M.5,.5 L.5,1"},"┕":{1:"M.5,.5 L.5,0",3:"M.5,.5 L1,.5"},"┖":{1:"M.5,.5 L1,.5",3:"M.5,.5 L.5,0"},"┙":{1:"M.5,.5 L.5,0",3:"M.5,.5 L0,.5"},"┚":{1:"M.5,.5 L0,.5",3:"M.5,.5 L.5,0"},"┝":{1:"M.5,0 L.5,1",3:"M.5,.5 L1,.5"},"┞":{1:"M0.5,1 L.5,.5 L1,.5",3:"M.5,.5 L.5,0"},"┟":{1:"M.5,0 L.5,.5 L1,.5",3:"M.5,.5 L.5,1"},"┠":{1:"M.5,.5 L1,.5",3:"M.5,0 L.5,1"},"┡":{1:"M.5,.5 L.5,1",3:"M.5,0 L.5,.5 L1,.5"},"┢":{1:"M.5,.5 L.5,0",3:"M0.5,1 L.5,.5 L1,.5"},"┥":{1:"M.5,0 L.5,1",3:"M.5,.5 L0,.5"},"┦":{1:"M0,.5 L.5,.5 L.5,1",3:"M.5,.5 L.5,0"},"┧":{1:"M.5,0 L.5,.5 L0,.5",3:"M.5,.5 L.5,1"},"┨":{1:"M.5,.5 L0,.5",3:"M.5,0 L.5,1"},"┩":{1:"M.5,.5 L.5,1",3:"M.5,0 L.5,.5 L0,.5"},"┪":{1:"M.5,.5 L.5,0",3:"M0,.5 L.5,.5 L.5,1"},"┭":{1:"M0.5,1 L.5,.5 L1,.5",3:"M.5,.5 L0,.5"},"┮":{1:"M0,.5 L.5,.5 L.5,1",3:"M.5,.5 L1,.5"},"┯":{1:"M.5,.5 L.5,1",3:"M0,.5 L1,.5"},"┰":{1:"M0,.5 L1,.5",3:"M.5,.5 L.5,1"},"┱":{1:"M.5,.5 L1,.5",3:"M0,.5 L.5,.5 L.5,1"},"┲":{1:"M.5,.5 L0,.5",3:"M0.5,1 L.5,.5 L1,.5"},"┵":{1:"M.5,0 L.5,.5 L1,.5",3:"M.5,.5 L0,.5"},"┶":{1:"M.5,0 L.5,.5 L0,.5",3:"M.5,.5 L1,.5"},"┷":{1:"M.5,.5 L.5,0",3:"M0,.5 L1,.5"},"┸":{1:"M0,.5 L1,.5",3:"M.5,.5 L.5,0"},"┹":{1:"M.5,.5 L1,.5",3:"M.5,0 L.5,.5 L0,.5"},"┺":{1:"M.5,.5 L0,.5",3:"M.5,0 L.5,.5 L1,.5"},"┽":{1:"M.5,0 L.5,1 M.5,.5 L1,.5",3:"M.5,.5 L0,.5"},"┾":{1:"M.5,0 L.5,1 M.5,.5 L0,.5",3:"M.5,.5 L1,.5"},"┿":{1:"M.5,0 L.5,1",3:"M0,.5 L1,.5"},"╀":{1:"M0,.5 L1,.5 M.5,.5 L.5,1",3:"M.5,.5 L.5,0"},"╁":{1:"M.5,.5 L.5,0 M0,.5 L1,.5",3:"M.5,.5 L.5,1"},"╂":{1:"M0,.5 L1,.5",3:"M.5,0 L.5,1"},"╃":{1:"M0.5,1 L.5,.5 L1,.5",3:"M.5,0 L.5,.5 L0,.5"},"╄":{1:"M0,.5 L.5,.5 L.5,1",3:"M.5,0 L.5,.5 L1,.5"},"╅":{1:"M.5,0 L.5,.5 L1,.5",3:"M0,.5 L.5,.5 L.5,1"},"╆":{1:"M.5,0 L.5,.5 L0,.5",3:"M0.5,1 L.5,.5 L1,.5"},"╇":{1:"M.5,.5 L.5,1",3:"M.5,.5 L.5,0 M0,.5 L1,.5"},"╈":{1:"M.5,.5 L.5,0",3:"M0,.5 L1,.5 M.5,.5 L.5,1"},"╉":{1:"M.5,.5 L1,.5",3:"M.5,0 L.5,1 M.5,.5 L0,.5"},"╊":{1:"M.5,.5 L0,.5",3:"M.5,0 L.5,1 M.5,.5 L1,.5"},"╌":{1:"M.1,.5 L.4,.5 M.6,.5 L.9,.5"},"╍":{3:"M.1,.5 L.4,.5 M.6,.5 L.9,.5"},"┄":{1:"M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5"},"┅":{3:"M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5"},"┈":{1:"M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5"},"┉":{3:"M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5"},"╎":{1:"M.5,.1 L.5,.4 M.5,.6 L.5,.9"},"╏":{3:"M.5,.1 L.5,.4 M.5,.6 L.5,.9"},"┆":{1:"M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333"},"┇":{3:"M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333"},"┊":{1:"M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95"},"┋":{3:"M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95"},"╭":{1:(e,t)=>`M.5,1 L.5,${.5+t/.15*.5} C.5,${.5+t/.15*.5},.5,.5,1,.5`},"╮":{1:(e,t)=>`M.5,1 L.5,${.5+t/.15*.5} C.5,${.5+t/.15*.5},.5,.5,0,.5`},"╯":{1:(e,t)=>`M.5,0 L.5,${.5-t/.15*.5} C.5,${.5-t/.15*.5},.5,.5,0,.5`},"╰":{1:(e,t)=>`M.5,0 L.5,${.5-t/.15*.5} C.5,${.5-t/.15*.5},.5,.5,1,.5`}},t.powerlineDefinitions={"":{d:"M.3,1 L.03,1 L.03,.88 C.03,.82,.06,.78,.11,.73 C.15,.7,.2,.68,.28,.65 L.43,.6 C.49,.58,.53,.56,.56,.53 C.59,.5,.6,.47,.6,.43 L.6,.27 L.4,.27 L.69,.1 L.98,.27 L.78,.27 L.78,.46 C.78,.52,.76,.56,.72,.61 C.68,.66,.63,.67,.56,.7 L.48,.72 C.42,.74,.38,.76,.35,.78 C.32,.8,.31,.84,.31,.88 L.31,1 M.3,.5 L.03,.59 L.03,.09 L.3,.09 L.3,.655",type:0},"":{d:"M.7,.4 L.7,.47 L.2,.47 L.2,.03 L.355,.03 L.355,.4 L.705,.4 M.7,.5 L.86,.5 L.86,.95 L.69,.95 L.44,.66 L.46,.86 L.46,.95 L.3,.95 L.3,.49 L.46,.49 L.71,.78 L.69,.565 L.69,.5",type:0},"":{d:"M.25,.94 C.16,.94,.11,.92,.11,.87 L.11,.53 C.11,.48,.15,.455,.23,.45 L.23,.3 C.23,.25,.26,.22,.31,.19 C.36,.16,.43,.15,.51,.15 C.59,.15,.66,.16,.71,.19 C.77,.22,.79,.26,.79,.3 L.79,.45 C.87,.45,.91,.48,.91,.53 L.91,.87 C.91,.92,.86,.94,.77,.94 L.24,.94 M.53,.2 C.49,.2,.45,.21,.42,.23 C.39,.25,.38,.27,.38,.3 L.38,.45 L.68,.45 L.68,.3 C.68,.27,.67,.25,.64,.23 C.61,.21,.58,.2,.53,.2 M.58,.82 L.58,.66 C.63,.65,.65,.63,.65,.6 C.65,.58,.64,.57,.61,.56 C.58,.55,.56,.54,.52,.54 C.48,.54,.46,.55,.43,.56 C.4,.57,.39,.59,.39,.6 C.39,.63,.41,.64,.46,.66 L.46,.82 L.57,.82",type:0},"":{d:"M0,0 L1,.5 L0,1",type:0,rightPadding:2},"":{d:"M-1,-.5 L1,.5 L-1,1.5",type:1,leftPadding:1,rightPadding:1},"":{d:"M1,0 L0,.5 L1,1",type:0,leftPadding:2},"":{d:"M2,-.5 L0,.5 L2,1.5",type:1,leftPadding:1,rightPadding:1},"":{d:"M0,0 L0,1 C0.552,1,1,0.776,1,.5 C1,0.224,0.552,0,0,0",type:0,rightPadding:1},"":{d:"M.2,1 C.422,1,.8,.826,.78,.5 C.8,.174,0.422,0,.2,0",type:1,rightPadding:1},"":{d:"M1,0 L1,1 C0.448,1,0,0.776,0,.5 C0,0.224,0.448,0,1,0",type:0,leftPadding:1},"":{d:"M.8,1 C0.578,1,0.2,.826,.22,.5 C0.2,0.174,0.578,0,0.8,0",type:1,leftPadding:1},"":{d:"M-.5,-.5 L1.5,1.5 L-.5,1.5",type:0},"":{d:"M-.5,-.5 L1.5,1.5",type:1,leftPadding:1,rightPadding:1},"":{d:"M1.5,-.5 L-.5,1.5 L1.5,1.5",type:0},"":{d:"M1.5,-.5 L-.5,1.5 L-.5,-.5",type:0},"":{d:"M1.5,-.5 L-.5,1.5",type:1,leftPadding:1,rightPadding:1},"":{d:"M-.5,-.5 L1.5,1.5 L1.5,-.5",type:0}},t.powerlineDefinitions[""]=t.powerlineDefinitions[""],t.powerlineDefinitions[""]=t.powerlineDefinitions[""];const r=new Map;function o(e,t,i=0){return Math.max(Math.min(e,t),i)}const a={C:(e,t)=>e.bezierCurveTo(t[0],t[1],t[2],t[3],t[4],t[5]),L:(e,t)=>e.lineTo(t[0],t[1]),M:(e,t)=>e.moveTo(t[0],t[1])};function l(e,t,i,s,n,r,a,l=0,h=0){const c=e.map((e=>parseFloat(e)||parseInt(e)));if(c.length<2)throw new Error("Too few arguments for instruction");for(let e=0;e<c.length;e+=2)c[e]*=t-l*a-h*a,r&&0!==c[e]&&(c[e]=o(Math.round(c[e]+.5)-.5,t,0)),c[e]+=s+l*a;for(let e=1;e<c.length;e+=2)c[e]*=i,r&&0!==c[e]&&(c[e]=o(Math.round(c[e]+.5)-.5,i,0)),c[e]+=n;return c}},697:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.observeDevicePixelDimensions=function(e,t,i){let n=new t.ResizeObserver((t=>{const s=t.find((t=>t.target===e));if(!s)return;if(!("devicePixelContentBoxSize"in s))return n?.disconnect(),void(n=void 0);const r=s.devicePixelContentBoxSize[0].inlineSize,o=s.devicePixelContentBoxSize[0].blockSize;r>0&&o>0&&i(r,o)}));try{n.observe(e,{box:["device-pixel-content-box"]})}catch{n.disconnect(),n=void 0}return(0,s.toDisposable)((()=>n?.disconnect()))};const s=i(2540)},3028:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GlyphRenderer=void 0;const s=i(2115),n=i(1564),r=i(2540),o=i(5719),a=i(4959),l=11,h=l*Float32Array.BYTES_PER_ELEMENT;let c,u=0,d=0,_=0;class f extends r.Disposable{constructor(e,t,i,n){super(),this._terminal=e,this._gl=t,this._dimensions=i,this._optionsService=n,this._activeBuffer=0,this._vertices={count:0,attributes:new Float32Array(0),attributesBuffers:[new Float32Array(0),new Float32Array(0)]};const l=this._gl;void 0===s.TextureAtlas.maxAtlasPages&&(s.TextureAtlas.maxAtlasPages=Math.min(32,(0,a.throwIfFalsy)(l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS))),s.TextureAtlas.maxTextureSize=(0,a.throwIfFalsy)(l.getParameter(l.MAX_TEXTURE_SIZE))),this._program=(0,a.throwIfFalsy)((0,o.createProgram)(l,"#version 300 es\nlayout (location = 0) in vec2 a_unitquad;\nlayout (location = 1) in vec2 a_cellpos;\nlayout (location = 2) in vec2 a_offset;\nlayout (location = 3) in vec2 a_size;\nlayout (location = 4) in float a_texpage;\nlayout (location = 5) in vec2 a_texcoord;\nlayout (location = 6) in vec2 a_texsize;\n\nuniform mat4 u_projection;\nuniform vec2 u_resolution;\n\nout vec2 v_texcoord;\nflat out int v_texpage;\n\nvoid main() {\n  vec2 zeroToOne = (a_offset / u_resolution) + a_cellpos + (a_unitquad * a_size);\n  gl_Position = u_projection * vec4(zeroToOne, 0.0, 1.0);\n  v_texpage = int(a_texpage);\n  v_texcoord = a_texcoord + a_unitquad * a_texsize;\n}",function(e){let t="";for(let i=1;i<e;i++)t+=` else if (v_texpage == ${i}) { outColor = texture(u_texture[${i}], v_texcoord); }`;return`#version 300 es\nprecision lowp float;\n\nin vec2 v_texcoord;\nflat in int v_texpage;\n\nuniform sampler2D u_texture[${e}];\n\nout vec4 outColor;\n\nvoid main() {\n  if (v_texpage == 0) {\n    outColor = texture(u_texture[0], v_texcoord);\n  } ${t}\n}`}(s.TextureAtlas.maxAtlasPages))),this._register((0,r.toDisposable)((()=>l.deleteProgram(this._program)))),this._projectionLocation=(0,a.throwIfFalsy)(l.getUniformLocation(this._program,"u_projection")),this._resolutionLocation=(0,a.throwIfFalsy)(l.getUniformLocation(this._program,"u_resolution")),this._textureLocation=(0,a.throwIfFalsy)(l.getUniformLocation(this._program,"u_texture")),this._vertexArrayObject=l.createVertexArray(),l.bindVertexArray(this._vertexArrayObject);const c=new Float32Array([0,0,1,0,0,1,1,1]),u=l.createBuffer();this._register((0,r.toDisposable)((()=>l.deleteBuffer(u)))),l.bindBuffer(l.ARRAY_BUFFER,u),l.bufferData(l.ARRAY_BUFFER,c,l.STATIC_DRAW),l.enableVertexAttribArray(0),l.vertexAttribPointer(0,2,this._gl.FLOAT,!1,0,0);const d=new Uint8Array([0,1,2,3]),_=l.createBuffer();this._register((0,r.toDisposable)((()=>l.deleteBuffer(_)))),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,_),l.bufferData(l.ELEMENT_ARRAY_BUFFER,d,l.STATIC_DRAW),this._attributesBuffer=(0,a.throwIfFalsy)(l.createBuffer()),this._register((0,r.toDisposable)((()=>l.deleteBuffer(this._attributesBuffer)))),l.bindBuffer(l.ARRAY_BUFFER,this._attributesBuffer),l.enableVertexAttribArray(2),l.vertexAttribPointer(2,2,l.FLOAT,!1,h,0),l.vertexAttribDivisor(2,1),l.enableVertexAttribArray(3),l.vertexAttribPointer(3,2,l.FLOAT,!1,h,2*Float32Array.BYTES_PER_ELEMENT),l.vertexAttribDivisor(3,1),l.enableVertexAttribArray(4),l.vertexAttribPointer(4,1,l.FLOAT,!1,h,4*Float32Array.BYTES_PER_ELEMENT),l.vertexAttribDivisor(4,1),l.enableVertexAttribArray(5),l.vertexAttribPointer(5,2,l.FLOAT,!1,h,5*Float32Array.BYTES_PER_ELEMENT),l.vertexAttribDivisor(5,1),l.enableVertexAttribArray(6),l.vertexAttribPointer(6,2,l.FLOAT,!1,h,7*Float32Array.BYTES_PER_ELEMENT),l.vertexAttribDivisor(6,1),l.enableVertexAttribArray(1),l.vertexAttribPointer(1,2,l.FLOAT,!1,h,9*Float32Array.BYTES_PER_ELEMENT),l.vertexAttribDivisor(1,1),l.useProgram(this._program);const f=new Int32Array(s.TextureAtlas.maxAtlasPages);for(let e=0;e<s.TextureAtlas.maxAtlasPages;e++)f[e]=e;l.uniform1iv(this._textureLocation,f),l.uniformMatrix4fv(this._projectionLocation,!1,o.PROJECTION_MATRIX),this._atlasTextures=[];for(let e=0;e<s.TextureAtlas.maxAtlasPages;e++){const t=new o.GLTexture((0,a.throwIfFalsy)(l.createTexture()));this._register((0,r.toDisposable)((()=>l.deleteTexture(t.texture)))),l.activeTexture(l.TEXTURE0+e),l.bindTexture(l.TEXTURE_2D,t.texture),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,new Uint8Array([255,0,0,255])),this._atlasTextures[e]=t}l.enable(l.BLEND),l.blendFunc(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA),this.handleResize()}beginFrame(){return!this._atlas||this._atlas.beginFrame()}updateCell(e,t,i,s,n,r,o,a,l){this._updateCell(this._vertices.attributes,e,t,i,s,n,r,o,a,l)}_updateCell(e,t,i,s,r,o,h,f,g,m){u=(i*this._terminal.cols+t)*l,s!==n.NULL_CELL_CODE&&void 0!==s?this._atlas&&(c=f&&f.length>1?this._atlas.getRasterizedGlyphCombinedChar(f,r,o,h,!1,this._terminal.element):this._atlas.getRasterizedGlyph(s,r,o,h,!1,this._terminal.element),d=Math.floor((this._dimensions.device.cell.width-this._dimensions.device.char.width)/2),r!==m&&c.offset.x>d?(_=c.offset.x-d,e[u]=-(c.offset.x-_)+this._dimensions.device.char.left,e[u+1]=-c.offset.y+this._dimensions.device.char.top,e[u+2]=(c.size.x-_)/this._dimensions.device.canvas.width,e[u+3]=c.size.y/this._dimensions.device.canvas.height,e[u+4]=c.texturePage,e[u+5]=c.texturePositionClipSpace.x+_/this._atlas.pages[c.texturePage].canvas.width,e[u+6]=c.texturePositionClipSpace.y,e[u+7]=c.sizeClipSpace.x-_/this._atlas.pages[c.texturePage].canvas.width,e[u+8]=c.sizeClipSpace.y):(e[u]=-c.offset.x+this._dimensions.device.char.left,e[u+1]=-c.offset.y+this._dimensions.device.char.top,e[u+2]=c.size.x/this._dimensions.device.canvas.width,e[u+3]=c.size.y/this._dimensions.device.canvas.height,e[u+4]=c.texturePage,e[u+5]=c.texturePositionClipSpace.x,e[u+6]=c.texturePositionClipSpace.y,e[u+7]=c.sizeClipSpace.x,e[u+8]=c.sizeClipSpace.y),this._optionsService.rawOptions.rescaleOverlappingGlyphs&&(0,a.allowRescaling)(s,g,c.size.x,this._dimensions.device.cell.width)&&(e[u+2]=(this._dimensions.device.cell.width-1)/this._dimensions.device.canvas.width)):e.fill(0,u,u+l-1-2)}clear(){const e=this._terminal,t=e.cols*e.rows*l;this._vertices.count!==t?this._vertices.attributes=new Float32Array(t):this._vertices.attributes.fill(0);let i=0;for(;i<this._vertices.attributesBuffers.length;i++)this._vertices.count!==t?this._vertices.attributesBuffers[i]=new Float32Array(t):this._vertices.attributesBuffers[i].fill(0);this._vertices.count=t,i=0;for(let t=0;t<e.rows;t++)for(let s=0;s<e.cols;s++)this._vertices.attributes[i+9]=s/e.cols,this._vertices.attributes[i+10]=t/e.rows,i+=l}handleResize(){const e=this._gl;e.useProgram(this._program),e.viewport(0,0,e.canvas.width,e.canvas.height),e.uniform2f(this._resolutionLocation,e.canvas.width,e.canvas.height),this.clear()}render(e){if(!this._atlas)return;const t=this._gl;t.useProgram(this._program),t.bindVertexArray(this._vertexArrayObject),this._activeBuffer=(this._activeBuffer+1)%2;const i=this._vertices.attributesBuffers[this._activeBuffer];let s=0;for(let t=0;t<e.lineLengths.length;t++){const n=t*this._terminal.cols*l,r=this._vertices.attributes.subarray(n,n+e.lineLengths[t]*l);i.set(r,s),s+=r.length}t.bindBuffer(t.ARRAY_BUFFER,this._attributesBuffer),t.bufferData(t.ARRAY_BUFFER,i.subarray(0,s),t.STREAM_DRAW);for(let e=0;e<this._atlas.pages.length;e++)this._atlas.pages[e].version!==this._atlasTextures[e].version&&this._bindAtlasPageTexture(t,this._atlas,e);t.drawElementsInstanced(t.TRIANGLE_STRIP,4,t.UNSIGNED_BYTE,0,s/l)}setAtlas(e){this._atlas=e;for(const e of this._atlasTextures)e.version=-1}_bindAtlasPageTexture(e,t,i){e.activeTexture(e.TEXTURE0+i),e.bindTexture(e.TEXTURE_2D,this._atlasTextures[i].texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t.pages[i].canvas),e.generateMipmap(e.TEXTURE_2D),this._atlasTextures[i].version=t.pages[i].version}setDimensions(e){this._dimensions=e}}t.GlyphRenderer=f},6203:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RectangleRenderer=void 0;const s=i(2540),n=i(4208),r=i(5719),o=i(4959),a=8*Float32Array.BYTES_PER_ELEMENT;class l{constructor(){this.attributes=new Float32Array(160),this.count=0}}let h=0,c=0,u=0,d=0,_=0,f=0,g=0;class m extends s.Disposable{constructor(e,t,i,n){super(),this._terminal=e,this._gl=t,this._dimensions=i,this._themeService=n,this._vertices=new l,this._verticesCursor=new l;const h=this._gl;this._program=(0,o.throwIfFalsy)((0,r.createProgram)(h,"#version 300 es\nlayout (location = 0) in vec2 a_position;\nlayout (location = 1) in vec2 a_size;\nlayout (location = 2) in vec4 a_color;\nlayout (location = 3) in vec2 a_unitquad;\n\nuniform mat4 u_projection;\n\nout vec4 v_color;\n\nvoid main() {\n  vec2 zeroToOne = a_position + (a_unitquad * a_size);\n  gl_Position = u_projection * vec4(zeroToOne, 0.0, 1.0);\n  v_color = a_color;\n}","#version 300 es\nprecision lowp float;\n\nin vec4 v_color;\n\nout vec4 outColor;\n\nvoid main() {\n  outColor = v_color;\n}")),this._register((0,s.toDisposable)((()=>h.deleteProgram(this._program)))),this._projectionLocation=(0,o.throwIfFalsy)(h.getUniformLocation(this._program,"u_projection")),this._vertexArrayObject=h.createVertexArray(),h.bindVertexArray(this._vertexArrayObject);const c=new Float32Array([0,0,1,0,0,1,1,1]),u=h.createBuffer();this._register((0,s.toDisposable)((()=>h.deleteBuffer(u)))),h.bindBuffer(h.ARRAY_BUFFER,u),h.bufferData(h.ARRAY_BUFFER,c,h.STATIC_DRAW),h.enableVertexAttribArray(3),h.vertexAttribPointer(3,2,this._gl.FLOAT,!1,0,0);const d=new Uint8Array([0,1,2,3]),_=h.createBuffer();this._register((0,s.toDisposable)((()=>h.deleteBuffer(_)))),h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,_),h.bufferData(h.ELEMENT_ARRAY_BUFFER,d,h.STATIC_DRAW),this._attributesBuffer=(0,o.throwIfFalsy)(h.createBuffer()),this._register((0,s.toDisposable)((()=>h.deleteBuffer(this._attributesBuffer)))),h.bindBuffer(h.ARRAY_BUFFER,this._attributesBuffer),h.enableVertexAttribArray(0),h.vertexAttribPointer(0,2,h.FLOAT,!1,a,0),h.vertexAttribDivisor(0,1),h.enableVertexAttribArray(1),h.vertexAttribPointer(1,2,h.FLOAT,!1,a,2*Float32Array.BYTES_PER_ELEMENT),h.vertexAttribDivisor(1,1),h.enableVertexAttribArray(2),h.vertexAttribPointer(2,4,h.FLOAT,!1,a,4*Float32Array.BYTES_PER_ELEMENT),h.vertexAttribDivisor(2,1),this._updateCachedColors(n.colors),this._register(this._themeService.onChangeColors((e=>{this._updateCachedColors(e),this._updateViewportRectangle()})))}renderBackgrounds(){this._renderVertices(this._vertices)}renderCursor(){this._renderVertices(this._verticesCursor)}_renderVertices(e){const t=this._gl;t.useProgram(this._program),t.bindVertexArray(this._vertexArrayObject),t.uniformMatrix4fv(this._projectionLocation,!1,r.PROJECTION_MATRIX),t.bindBuffer(t.ARRAY_BUFFER,this._attributesBuffer),t.bufferData(t.ARRAY_BUFFER,e.attributes,t.DYNAMIC_DRAW),t.drawElementsInstanced(this._gl.TRIANGLE_STRIP,4,t.UNSIGNED_BYTE,0,e.count)}handleResize(){this._updateViewportRectangle()}setDimensions(e){this._dimensions=e}_updateCachedColors(e){this._bgFloat=this._colorToFloat32Array(e.background),this._cursorFloat=this._colorToFloat32Array(e.cursor)}_updateViewportRectangle(){this._addRectangleFloat(this._vertices.attributes,0,0,0,this._terminal.cols*this._dimensions.device.cell.width,this._terminal.rows*this._dimensions.device.cell.height,this._bgFloat)}updateBackgrounds(e){const t=this._terminal,i=this._vertices;let s,r,o,a,l,h,c,u,d,_,f,g=1;for(s=0;s<t.rows;s++){for(o=-1,a=0,l=0,h=!1,r=0;r<t.cols;r++)c=(s*t.cols+r)*n.RENDER_MODEL_INDICIES_PER_CELL,u=e.cells[c+n.RENDER_MODEL_BG_OFFSET],d=e.cells[c+n.RENDER_MODEL_FG_OFFSET],_=!!(67108864&d),(u!==a||d!==l&&(h||_))&&((0!==a||h&&0!==l)&&(f=8*g++,this._updateRectangle(i,f,l,a,o,r,s)),o=r,a=u,l=d,h=_);(0!==a||h&&0!==l)&&(f=8*g++,this._updateRectangle(i,f,l,a,o,t.cols,s))}i.count=g}updateCursor(e){const t=this._verticesCursor,i=e.cursor;if(!i||"block"===i.style)return void(t.count=0);let s,n=0;"bar"!==i.style&&"outline"!==i.style||(s=8*n++,this._addRectangleFloat(t.attributes,s,i.x*this._dimensions.device.cell.width,i.y*this._dimensions.device.cell.height,"bar"===i.style?i.dpr*i.cursorWidth:i.dpr,this._dimensions.device.cell.height,this._cursorFloat)),"underline"!==i.style&&"outline"!==i.style||(s=8*n++,this._addRectangleFloat(t.attributes,s,i.x*this._dimensions.device.cell.width,(i.y+1)*this._dimensions.device.cell.height-i.dpr,i.width*this._dimensions.device.cell.width,i.dpr,this._cursorFloat)),"outline"===i.style&&(s=8*n++,this._addRectangleFloat(t.attributes,s,i.x*this._dimensions.device.cell.width,i.y*this._dimensions.device.cell.height,i.width*this._dimensions.device.cell.width,i.dpr,this._cursorFloat),s=8*n++,this._addRectangleFloat(t.attributes,s,(i.x+i.width)*this._dimensions.device.cell.width-i.dpr,i.y*this._dimensions.device.cell.height,i.dpr,this._dimensions.device.cell.height,this._cursorFloat)),t.count=n}_updateRectangle(e,t,i,s,n,o,a){if(67108864&i)switch(50331648&i){case 16777216:case 33554432:h=this._themeService.colors.ansi[255&i].rgba;break;case 50331648:h=(16777215&i)<<8;break;default:h=this._themeService.colors.foreground.rgba}else switch(50331648&s){case 16777216:case 33554432:h=this._themeService.colors.ansi[255&s].rgba;break;case 50331648:h=(16777215&s)<<8;break;default:h=this._themeService.colors.background.rgba}e.attributes.length<t+4&&(e.attributes=(0,r.expandFloat32Array)(e.attributes,this._terminal.rows*this._terminal.cols*8)),c=n*this._dimensions.device.cell.width,u=a*this._dimensions.device.cell.height,d=(h>>24&255)/255,_=(h>>16&255)/255,f=(h>>8&255)/255,g=1,this._addRectangle(e.attributes,t,c,u,(o-n)*this._dimensions.device.cell.width,this._dimensions.device.cell.height,d,_,f,g)}_addRectangle(e,t,i,s,n,r,o,a,l,h){e[t]=i/this._dimensions.device.canvas.width,e[t+1]=s/this._dimensions.device.canvas.height,e[t+2]=n/this._dimensions.device.canvas.width,e[t+3]=r/this._dimensions.device.canvas.height,e[t+4]=o,e[t+5]=a,e[t+6]=l,e[t+7]=h}_addRectangleFloat(e,t,i,s,n,r,o){e[t]=i/this._dimensions.device.canvas.width,e[t+1]=s/this._dimensions.device.canvas.height,e[t+2]=n/this._dimensions.device.canvas.width,e[t+3]=r/this._dimensions.device.canvas.height,e[t+4]=o[0],e[t+5]=o[1],e[t+6]=o[2],e[t+7]=o[3]}_colorToFloat32Array(e){return new Float32Array([(e.rgba>>24&255)/255,(e.rgba>>16&255)/255,(e.rgba>>8&255)/255,(255&e.rgba)/255])}}t.RectangleRenderer=m},4208:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RenderModel=t.COMBINED_CHAR_BIT_MASK=t.RENDER_MODEL_EXT_OFFSET=t.RENDER_MODEL_FG_OFFSET=t.RENDER_MODEL_BG_OFFSET=t.RENDER_MODEL_INDICIES_PER_CELL=void 0;const s=i(5948);t.RENDER_MODEL_INDICIES_PER_CELL=4,t.RENDER_MODEL_BG_OFFSET=1,t.RENDER_MODEL_FG_OFFSET=2,t.RENDER_MODEL_EXT_OFFSET=3,t.COMBINED_CHAR_BIT_MASK=2147483648,t.RenderModel=class{constructor(){this.cells=new Uint32Array(0),this.lineLengths=new Uint32Array(0),this.selection=(0,s.createSelectionRenderModel)()}resize(e,i){const s=e*i*t.RENDER_MODEL_INDICIES_PER_CELL;s!==this.cells.length&&(this.cells=new Uint32Array(s),this.lineLengths=new Uint32Array(i))}clear(){this.cells.fill(0,0),this.lineLengths.fill(0,0)}}},2115:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TextureAtlas=void 0;const s=i(2e3),n=i(9705),r=i(4959),o=i(7993),a=i(1836),l=i(9930),h=i(9917),c=i(1564),u=i(5276),d={texturePage:0,texturePosition:{x:0,y:0},texturePositionClipSpace:{x:0,y:0},offset:{x:0,y:0},size:{x:0,y:0},sizeClipSpace:{x:0,y:0}};let _;class f{get pages(){return this._pages}constructor(e,t,i){this._document=e,this._config=t,this._unicodeService=i,this._didWarmUp=!1,this._cacheMap=new a.FourKeyMap,this._cacheMapCombined=new a.FourKeyMap,this._pages=[],this._activePages=[],this._workBoundingBox={top:0,left:0,bottom:0,right:0},this._workAttributeData=new h.AttributeData,this._textureSize=512,this._onAddTextureAtlasCanvas=new u.Emitter,this.onAddTextureAtlasCanvas=this._onAddTextureAtlasCanvas.event,this._onRemoveTextureAtlasCanvas=new u.Emitter,this.onRemoveTextureAtlasCanvas=this._onRemoveTextureAtlasCanvas.event,this._requestClearModel=!1,this._createNewPage(),this._tmpCanvas=p(e,4*this._config.deviceCellWidth+4,this._config.deviceCellHeight+4),this._tmpCtx=(0,r.throwIfFalsy)(this._tmpCanvas.getContext("2d",{alpha:this._config.allowTransparency,willReadFrequently:!0}))}dispose(){this._tmpCanvas.remove();for(const e of this.pages)e.canvas.remove();this._onAddTextureAtlasCanvas.dispose()}warmUp(){this._didWarmUp||(this._doWarmUp(),this._didWarmUp=!0)}_doWarmUp(){const e=new l.IdleTaskQueue;for(let t=33;t<126;t++)e.enqueue((()=>{if(!this._cacheMap.get(t,c.DEFAULT_COLOR,c.DEFAULT_COLOR,c.DEFAULT_EXT)){const e=this._drawToCache(t,c.DEFAULT_COLOR,c.DEFAULT_COLOR,c.DEFAULT_EXT,!1,void 0);this._cacheMap.set(t,c.DEFAULT_COLOR,c.DEFAULT_COLOR,c.DEFAULT_EXT,e)}}))}beginFrame(){return this._requestClearModel}clearTexture(){if(0!==this._pages[0].currentRow.x||0!==this._pages[0].currentRow.y){for(const e of this._pages)e.clear();this._cacheMap.clear(),this._cacheMapCombined.clear(),this._didWarmUp=!1}}_createNewPage(){if(f.maxAtlasPages&&this._pages.length>=Math.max(4,f.maxAtlasPages)){const e=this._pages.filter((e=>2*e.canvas.width<=(f.maxTextureSize||4096))).sort(((e,t)=>t.canvas.width!==e.canvas.width?t.canvas.width-e.canvas.width:t.percentageUsed-e.percentageUsed));let t=-1,i=0;for(let s=0;s<e.length;s++)if(e[s].canvas.width!==i)t=s,i=e[s].canvas.width;else if(s-t==3)break;const s=e.slice(t,t+4),n=s.map((e=>e.glyphs[0].texturePage)).sort(((e,t)=>e>t?1:-1)),r=this.pages.length-s.length,o=this._mergePages(s,r);o.version++;for(let e=n.length-1;e>=0;e--)this._deletePage(n[e]);this.pages.push(o),this._requestClearModel=!0,this._onAddTextureAtlasCanvas.fire(o.canvas)}const e=new g(this._document,this._textureSize);return this._pages.push(e),this._activePages.push(e),this._onAddTextureAtlasCanvas.fire(e.canvas),e}_mergePages(e,t){const i=2*e[0].canvas.width,s=new g(this._document,i,e);for(const[n,r]of e.entries()){const e=n*r.canvas.width%i,o=Math.floor(n/2)*r.canvas.height;s.ctx.drawImage(r.canvas,e,o);for(const s of r.glyphs)s.texturePage=t,s.sizeClipSpace.x=s.size.x/i,s.sizeClipSpace.y=s.size.y/i,s.texturePosition.x+=e,s.texturePosition.y+=o,s.texturePositionClipSpace.x=s.texturePosition.x/i,s.texturePositionClipSpace.y=s.texturePosition.y/i;this._onRemoveTextureAtlasCanvas.fire(r.canvas);const a=this._activePages.indexOf(r);-1!==a&&this._activePages.splice(a,1)}return s}_deletePage(e){this._pages.splice(e,1);for(let t=e;t<this._pages.length;t++){const e=this._pages[t];for(const t of e.glyphs)t.texturePage--;e.version++}}getRasterizedGlyphCombinedChar(e,t,i,s,n,r){return this._getFromCacheMap(this._cacheMapCombined,e,t,i,s,n,r)}getRasterizedGlyph(e,t,i,s,n,r){return this._getFromCacheMap(this._cacheMap,e,t,i,s,n,r)}_getFromCacheMap(e,t,i,s,n,r,o){return _=e.get(t,i,s,n),_||(_=this._drawToCache(t,i,s,n,r,o),e.set(t,i,s,n,_)),_}_getColorFromAnsiIndex(e){if(e>=this._config.colors.ansi.length)throw new Error("No color found for idx "+e);return this._config.colors.ansi[e]}_getBackgroundColor(e,t,i,s){if(this._config.allowTransparency)return o.NULL_COLOR;let n;switch(e){case 16777216:case 33554432:n=this._getColorFromAnsiIndex(t);break;case 50331648:const e=h.AttributeData.toColorRGB(t);n=o.channels.toColor(e[0],e[1],e[2]);break;default:n=i?o.color.opaque(this._config.colors.foreground):this._config.colors.background}return this._config.allowTransparency||(n=o.color.opaque(n)),n}_getForegroundColor(e,t,i,n,r,a,l,c,u,d){const _=this._getMinimumContrastColor(e,t,i,n,r,a,l,u,c,d);if(_)return _;let f;switch(r){case 16777216:case 33554432:this._config.drawBoldTextInBrightColors&&u&&a<8&&(a+=8),f=this._getColorFromAnsiIndex(a);break;case 50331648:const e=h.AttributeData.toColorRGB(a);f=o.channels.toColor(e[0],e[1],e[2]);break;default:f=l?this._config.colors.background:this._config.colors.foreground}return this._config.allowTransparency&&(f=o.color.opaque(f)),c&&(f=o.color.multiplyOpacity(f,s.DIM_OPACITY)),f}_resolveBackgroundRgba(e,t,i){switch(e){case 16777216:case 33554432:return this._getColorFromAnsiIndex(t).rgba;case 50331648:return t<<8;default:return i?this._config.colors.foreground.rgba:this._config.colors.background.rgba}}_resolveForegroundRgba(e,t,i,s){switch(e){case 16777216:case 33554432:return this._config.drawBoldTextInBrightColors&&s&&t<8&&(t+=8),this._getColorFromAnsiIndex(t).rgba;case 50331648:return t<<8;default:return i?this._config.colors.background.rgba:this._config.colors.foreground.rgba}}_getMinimumContrastColor(e,t,i,s,n,r,a,l,h,c){if(1===this._config.minimumContrastRatio||c)return;const u=this._getContrastCache(h),d=u.getColor(e,s);if(void 0!==d)return d||void 0;const _=this._resolveBackgroundRgba(t,i,a),f=this._resolveForegroundRgba(n,r,a,l),g=o.rgba.ensureContrastRatio(_,f,this._config.minimumContrastRatio/(h?2:1));if(!g)return void u.setColor(e,s,null);const m=o.channels.toColor(g>>24&255,g>>16&255,g>>8&255);return u.setColor(e,s,m),m}_getContrastCache(e){return e?this._config.colors.halfContrastCache:this._config.colors.contrastCache}_drawToCache(e,t,i,o,a,l){const c="number"==typeof e?String.fromCharCode(e):e;l&&this._tmpCanvas.parentElement!==l&&(this._tmpCanvas.style.display="none",l.append(this._tmpCanvas));const u=Math.min(this._config.deviceCellWidth*Math.max(c.length,2)+4,this._config.deviceMaxTextureSize);this._tmpCanvas.width<u&&(this._tmpCanvas.width=u);const _=Math.min(this._config.deviceCellHeight+8,this._textureSize);if(this._tmpCanvas.height<_&&(this._tmpCanvas.height=_),this._tmpCtx.save(),this._workAttributeData.fg=i,this._workAttributeData.bg=t,this._workAttributeData.extended.ext=o,this._workAttributeData.isInvisible())return d;const p=!!this._workAttributeData.isBold(),v=!!this._workAttributeData.isInverse(),C=!!this._workAttributeData.isDim(),E=!!this._workAttributeData.isItalic(),w=!!this._workAttributeData.isUnderline(),b=!!this._workAttributeData.isStrikethrough(),y=!!this._workAttributeData.isOverline();let L=this._workAttributeData.getFgColor(),A=this._workAttributeData.getFgColorMode(),R=this._workAttributeData.getBgColor(),T=this._workAttributeData.getBgColorMode();if(v){const e=L;L=R,R=e;const t=A;A=T,T=t}const M=this._getBackgroundColor(T,R,v,C);this._tmpCtx.globalCompositeOperation="copy",this._tmpCtx.fillStyle=M.css,this._tmpCtx.fillRect(0,0,this._tmpCanvas.width,this._tmpCanvas.height),this._tmpCtx.globalCompositeOperation="source-over";const S=p?this._config.fontWeightBold:this._config.fontWeight,D=E?"italic":"";this._tmpCtx.font=`${D} ${S} ${this._config.fontSize*this._config.devicePixelRatio}px ${this._config.fontFamily}`,this._tmpCtx.textBaseline=s.TEXT_BASELINE;const x=1===c.length&&(0,r.isPowerlineGlyph)(c.charCodeAt(0)),I=1===c.length&&(0,r.isRestrictedPowerlineGlyph)(c.charCodeAt(0)),O=this._getForegroundColor(t,T,R,i,A,L,v,C,p,(0,r.treatGlyphAsBackgroundColor)(c.charCodeAt(0)));this._tmpCtx.fillStyle=O.css;const U=I?0:4;let k=!1;!1!==this._config.customGlyphs&&(k=(0,n.tryDrawCustomChar)(this._tmpCtx,c,U,U,this._config.deviceCellWidth,this._config.deviceCellHeight,this._config.fontSize,this._config.devicePixelRatio));let P,N=!x;if(P="number"==typeof e?this._unicodeService.wcwidth(e):this._unicodeService.getStringCellWidth(e),w){this._tmpCtx.save();const e=Math.max(1,Math.floor(this._config.fontSize*this._config.devicePixelRatio/15)),t=e%2==1?.5:0;if(this._tmpCtx.lineWidth=e,this._workAttributeData.isUnderlineColorDefault())this._tmpCtx.strokeStyle=this._tmpCtx.fillStyle;else if(this._workAttributeData.isUnderlineColorRGB())N=!1,this._tmpCtx.strokeStyle=`rgb(${h.AttributeData.toColorRGB(this._workAttributeData.getUnderlineColor()).join(",")})`;else{N=!1;let e=this._workAttributeData.getUnderlineColor();this._config.drawBoldTextInBrightColors&&this._workAttributeData.isBold()&&e<8&&(e+=8),this._tmpCtx.strokeStyle=this._getColorFromAnsiIndex(e).css}this._tmpCtx.beginPath();const i=U,s=Math.ceil(U+this._config.deviceCharHeight)-t-(a?2*e:0),n=s+e,o=s+2*e;let l=this._workAttributeData.getUnderlineVariantOffset();for(let a=0;a<P;a++){this._tmpCtx.save();const h=i+a*this._config.deviceCellWidth,c=i+(a+1)*this._config.deviceCellWidth,u=h+this._config.deviceCellWidth/2;switch(this._workAttributeData.extended.underlineStyle){case 2:this._tmpCtx.moveTo(h,s),this._tmpCtx.lineTo(c,s),this._tmpCtx.moveTo(h,o),this._tmpCtx.lineTo(c,o);break;case 3:const i=e<=1?o:Math.ceil(U+this._config.deviceCharHeight-e/2)-t,a=e<=1?s:Math.ceil(U+this._config.deviceCharHeight+e/2)-t,d=new Path2D;d.rect(h,s,this._config.deviceCellWidth,o-s),this._tmpCtx.clip(d),this._tmpCtx.moveTo(h-this._config.deviceCellWidth/2,n),this._tmpCtx.bezierCurveTo(h-this._config.deviceCellWidth/2,a,h,a,h,n),this._tmpCtx.bezierCurveTo(h,i,u,i,u,n),this._tmpCtx.bezierCurveTo(u,a,c,a,c,n),this._tmpCtx.bezierCurveTo(c,i,c+this._config.deviceCellWidth/2,i,c+this._config.deviceCellWidth/2,n);break;case 4:const _=0===l?0:l>=e?2*e-l:e-l;!1==!(l>=e)||0===_?(this._tmpCtx.setLineDash([Math.round(e),Math.round(e)]),this._tmpCtx.moveTo(h+_,s),this._tmpCtx.lineTo(c,s)):(this._tmpCtx.setLineDash([Math.round(e),Math.round(e)]),this._tmpCtx.moveTo(h,s),this._tmpCtx.lineTo(h+_,s),this._tmpCtx.moveTo(h+_+e,s),this._tmpCtx.lineTo(c,s)),l=(0,r.computeNextVariantOffset)(c-h,e,l);break;case 5:const f=.6,g=.3,m=c-h,p=Math.floor(f*m),v=Math.floor(g*m),C=m-p-v;this._tmpCtx.setLineDash([p,v,C]),this._tmpCtx.moveTo(h,s),this._tmpCtx.lineTo(c,s);break;default:this._tmpCtx.moveTo(h,s),this._tmpCtx.lineTo(c,s)}this._tmpCtx.stroke(),this._tmpCtx.restore()}if(this._tmpCtx.restore(),!k&&this._config.fontSize>=12&&!this._config.allowTransparency&&" "!==c){this._tmpCtx.save(),this._tmpCtx.textBaseline="alphabetic";const t=this._tmpCtx.measureText(c);if(this._tmpCtx.restore(),"actualBoundingBoxDescent"in t&&t.actualBoundingBoxDescent>0){this._tmpCtx.save();const t=new Path2D;t.rect(i,s-Math.ceil(e/2),this._config.deviceCellWidth*P,o-s+Math.ceil(e/2)),this._tmpCtx.clip(t),this._tmpCtx.lineWidth=3*this._config.devicePixelRatio,this._tmpCtx.strokeStyle=M.css,this._tmpCtx.strokeText(c,U,U+this._config.deviceCharHeight),this._tmpCtx.restore()}}}if(y){const e=Math.max(1,Math.floor(this._config.fontSize*this._config.devicePixelRatio/15)),t=e%2==1?.5:0;this._tmpCtx.lineWidth=e,this._tmpCtx.strokeStyle=this._tmpCtx.fillStyle,this._tmpCtx.beginPath(),this._tmpCtx.moveTo(U,U+t),this._tmpCtx.lineTo(U+this._config.deviceCharWidth*P,U+t),this._tmpCtx.stroke()}if(k||this._tmpCtx.fillText(c,U,U+this._config.deviceCharHeight),"_"===c&&!this._config.allowTransparency){let e=m(this._tmpCtx.getImageData(U,U,this._config.deviceCellWidth,this._config.deviceCellHeight),M,O,N);if(e)for(let t=1;t<=5&&(this._tmpCtx.save(),this._tmpCtx.fillStyle=M.css,this._tmpCtx.fillRect(0,0,this._tmpCanvas.width,this._tmpCanvas.height),this._tmpCtx.restore(),this._tmpCtx.fillText(c,U,U+this._config.deviceCharHeight-t),e=m(this._tmpCtx.getImageData(U,U,this._config.deviceCellWidth,this._config.deviceCellHeight),M,O,N),e);t++);}if(b){const e=Math.max(1,Math.floor(this._config.fontSize*this._config.devicePixelRatio/10)),t=this._tmpCtx.lineWidth%2==1?.5:0;this._tmpCtx.lineWidth=e,this._tmpCtx.strokeStyle=this._tmpCtx.fillStyle,this._tmpCtx.beginPath(),this._tmpCtx.moveTo(U,U+Math.floor(this._config.deviceCharHeight/2)-t),this._tmpCtx.lineTo(U+this._config.deviceCharWidth*P,U+Math.floor(this._config.deviceCharHeight/2)-t),this._tmpCtx.stroke()}this._tmpCtx.restore();const F=this._tmpCtx.getImageData(0,0,this._tmpCanvas.width,this._tmpCanvas.height);let B;if(B=this._config.allowTransparency?function(e){for(let t=0;t<e.data.length;t+=4)if(e.data[t+3]>0)return!1;return!0}(F):m(F,M,O,N),B)return d;const W=this._findGlyphBoundingBox(F,this._workBoundingBox,u,I,k,U);let K,H;for(;;){if(0===this._activePages.length){const e=this._createNewPage();K=e,H=e.currentRow,H.height=W.size.y;break}K=this._activePages[this._activePages.length-1],H=K.currentRow;for(const e of this._activePages)W.size.y<=e.currentRow.height&&(K=e,H=e.currentRow);for(let e=this._activePages.length-1;e>=0;e--)for(const t of this._activePages[e].fixedRows)t.height<=H.height&&W.size.y<=t.height&&(K=this._activePages[e],H=t);if(W.size.x>this._textureSize){this._overflowSizePage||(this._overflowSizePage=new g(this._document,this._config.deviceMaxTextureSize),this.pages.push(this._overflowSizePage),this._requestClearModel=!0,this._onAddTextureAtlasCanvas.fire(this._overflowSizePage.canvas)),K=this._overflowSizePage,H=this._overflowSizePage.currentRow,H.x+W.size.x>=K.canvas.width&&(H.x=0,H.y+=H.height,H.height=0);break}if(H.y+W.size.y>=K.canvas.height||H.height>W.size.y+2){let e=!1;if(K.currentRow.y+K.currentRow.height+W.size.y>=K.canvas.height){let t;for(const e of this._activePages)if(e.currentRow.y+e.currentRow.height+W.size.y<e.canvas.height){t=e;break}if(t)K=t;else if(f.maxAtlasPages&&this._pages.length>=f.maxAtlasPages&&H.y+W.size.y<=K.canvas.height&&H.height>=W.size.y&&H.x+W.size.x<=K.canvas.width)e=!0;else{const t=this._createNewPage();K=t,H=t.currentRow,H.height=W.size.y,e=!0}}e||(K.currentRow.height>0&&K.fixedRows.push(K.currentRow),H={x:0,y:K.currentRow.y+K.currentRow.height,height:W.size.y},K.fixedRows.push(H),K.currentRow={x:0,y:H.y+H.height,height:0})}if(H.x+W.size.x<=K.canvas.width)break;H===K.currentRow?(H.x=0,H.y+=H.height,H.height=0):K.fixedRows.splice(K.fixedRows.indexOf(H),1)}return W.texturePage=this._pages.indexOf(K),W.texturePosition.x=H.x,W.texturePosition.y=H.y,W.texturePositionClipSpace.x=H.x/K.canvas.width,W.texturePositionClipSpace.y=H.y/K.canvas.height,W.sizeClipSpace.x/=K.canvas.width,W.sizeClipSpace.y/=K.canvas.height,H.height=Math.max(H.height,W.size.y),H.x+=W.size.x,K.ctx.putImageData(F,W.texturePosition.x-this._workBoundingBox.left,W.texturePosition.y-this._workBoundingBox.top,this._workBoundingBox.left,this._workBoundingBox.top,W.size.x,W.size.y),K.addGlyph(W),K.version++,W}_findGlyphBoundingBox(e,t,i,s,n,r){t.top=0;const o=s?this._config.deviceCellHeight:this._tmpCanvas.height,a=s?this._config.deviceCellWidth:i;let l=!1;for(let i=0;i<o;i++){for(let s=0;s<a;s++){const n=i*this._tmpCanvas.width*4+4*s+3;if(0!==e.data[n]){t.top=i,l=!0;break}}if(l)break}t.left=0,l=!1;for(let i=0;i<r+a;i++){for(let s=0;s<o;s++){const n=s*this._tmpCanvas.width*4+4*i+3;if(0!==e.data[n]){t.left=i,l=!0;break}}if(l)break}t.right=a,l=!1;for(let i=r+a-1;i>=r;i--){for(let s=0;s<o;s++){const n=s*this._tmpCanvas.width*4+4*i+3;if(0!==e.data[n]){t.right=i,l=!0;break}}if(l)break}t.bottom=o,l=!1;for(let i=o-1;i>=0;i--){for(let s=0;s<a;s++){const n=i*this._tmpCanvas.width*4+4*s+3;if(0!==e.data[n]){t.bottom=i,l=!0;break}}if(l)break}return{texturePage:0,texturePosition:{x:0,y:0},texturePositionClipSpace:{x:0,y:0},size:{x:t.right-t.left+1,y:t.bottom-t.top+1},sizeClipSpace:{x:t.right-t.left+1,y:t.bottom-t.top+1},offset:{x:-t.left+r+(s||n?Math.floor((this._config.deviceCellWidth-this._config.deviceCharWidth)/2):0),y:-t.top+r+(s||n?1===this._config.lineHeight?0:Math.round((this._config.deviceCellHeight-this._config.deviceCharHeight)/2):0)}}}}t.TextureAtlas=f;class g{get percentageUsed(){return this._usedPixels/(this.canvas.width*this.canvas.height)}get glyphs(){return this._glyphs}addGlyph(e){this._glyphs.push(e),this._usedPixels+=e.size.x*e.size.y}constructor(e,t,i){if(this._usedPixels=0,this._glyphs=[],this.version=0,this.currentRow={x:0,y:0,height:0},this.fixedRows=[],i)for(const e of i)this._glyphs.push(...e.glyphs),this._usedPixels+=e._usedPixels;this.canvas=p(e,t,t),this.ctx=(0,r.throwIfFalsy)(this.canvas.getContext("2d",{alpha:!0}))}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.currentRow.x=0,this.currentRow.y=0,this.currentRow.height=0,this.fixedRows.length=0,this.version++}}function m(e,t,i,s){const n=t.rgba>>>24,r=t.rgba>>>16&255,o=t.rgba>>>8&255,a=i.rgba>>>24,l=i.rgba>>>16&255,h=i.rgba>>>8&255,c=Math.floor((Math.abs(n-a)+Math.abs(r-l)+Math.abs(o-h))/12);let u=!0;for(let t=0;t<e.data.length;t+=4)e.data[t]===n&&e.data[t+1]===r&&e.data[t+2]===o||s&&Math.abs(e.data[t]-n)+Math.abs(e.data[t+1]-r)+Math.abs(e.data[t+2]-o)<c?e.data[t+3]=0:u=!1;return u}function p(e,t,i){const s=e.createElement("canvas");return s.width=t,s.height=i,s}},3399:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.JoinedCellData=t.WebglRenderer=void 0;const s=i(6864),n=i(5670),r=i(3773),o=i(697),a=i(9917),l=i(5721),h=i(1564),c=i(3028),u=i(6203),d=i(4208),_=i(1306),f=i(5276),g=i(1375),m=i(2540),p=i(4959);class v extends m.Disposable{constructor(e,t,i,r,a,h,c,u,v){super(),this._terminal=e,this._characterJoinerService=t,this._charSizeService=i,this._coreBrowserService=r,this._coreService=a,this._decorationService=h,this._optionsService=c,this._themeService=u,this._cursorBlinkStateManager=new m.MutableDisposable,this._charAtlasDisposable=this._register(new m.MutableDisposable),this._observerDisposable=this._register(new m.MutableDisposable),this._model=new d.RenderModel,this._workCell=new l.CellData,this._workCell2=new l.CellData,this._rectangleRenderer=this._register(new m.MutableDisposable),this._glyphRenderer=this._register(new m.MutableDisposable),this._onChangeTextureAtlas=this._register(new f.Emitter),this.onChangeTextureAtlas=this._onChangeTextureAtlas.event,this._onAddTextureAtlasCanvas=this._register(new f.Emitter),this.onAddTextureAtlasCanvas=this._onAddTextureAtlasCanvas.event,this._onRemoveTextureAtlasCanvas=this._register(new f.Emitter),this.onRemoveTextureAtlasCanvas=this._onRemoveTextureAtlasCanvas.event,this._onRequestRedraw=this._register(new f.Emitter),this.onRequestRedraw=this._onRequestRedraw.event,this._onContextLoss=this._register(new f.Emitter),this.onContextLoss=this._onContextLoss.event,this._canvas=this._coreBrowserService.mainDocument.createElement("canvas");const C={antialias:!1,depth:!1,preserveDrawingBuffer:v};if(this._gl=this._canvas.getContext("webgl2",C),!this._gl)throw new Error("WebGL2 not supported "+this._gl);this._register(this._themeService.onChangeColors((()=>this._handleColorChange()))),this._cellColorResolver=new s.CellColorResolver(this._terminal,this._optionsService,this._model.selection,this._decorationService,this._coreBrowserService,this._themeService),this._core=this._terminal._core,this._renderLayers=[new _.LinkRenderLayer(this._core.screenElement,2,this._terminal,this._core.linkifier,this._coreBrowserService,c,this._themeService)],this.dimensions=(0,p.createRenderDimensions)(),this._devicePixelRatio=this._coreBrowserService.dpr,this._updateDimensions(),this._updateCursorBlink(),this._register(c.onOptionChange((()=>this._handleOptionsChanged()))),this._deviceMaxTextureSize=this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),this._register((0,g.addDisposableListener)(this._canvas,"webglcontextlost",(e=>{console.log("webglcontextlost event received"),e.preventDefault(),this._contextRestorationTimeout=setTimeout((()=>{this._contextRestorationTimeout=void 0,console.warn("webgl context not restored; firing onContextLoss"),this._onContextLoss.fire(e)}),3e3)}))),this._register((0,g.addDisposableListener)(this._canvas,"webglcontextrestored",(e=>{console.warn("webglcontextrestored event received"),clearTimeout(this._contextRestorationTimeout),this._contextRestorationTimeout=void 0,(0,n.removeTerminalFromCache)(this._terminal),this._initializeWebGLState(),this._requestRedrawViewport()}))),this._observerDisposable.value=(0,o.observeDevicePixelDimensions)(this._canvas,this._coreBrowserService.window,((e,t)=>this._setCanvasDevicePixelDimensions(e,t))),this._register(this._coreBrowserService.onWindowChange((e=>{this._observerDisposable.value=(0,o.observeDevicePixelDimensions)(this._canvas,e,((e,t)=>this._setCanvasDevicePixelDimensions(e,t)))}))),this._core.screenElement.appendChild(this._canvas),[this._rectangleRenderer.value,this._glyphRenderer.value]=this._initializeWebGLState(),this._isAttached=this._core.screenElement.isConnected,this._register((0,m.toDisposable)((()=>{for(const e of this._renderLayers)e.dispose();this._canvas.parentElement?.removeChild(this._canvas),(0,n.removeTerminalFromCache)(this._terminal)})))}get textureAtlas(){return this._charAtlas?.pages[0].canvas}_handleColorChange(){this._refreshCharAtlas(),this._clearModel(!0)}handleDevicePixelRatioChange(){this._devicePixelRatio!==this._coreBrowserService.dpr&&(this._devicePixelRatio=this._coreBrowserService.dpr,this.handleResize(this._terminal.cols,this._terminal.rows))}handleResize(e,t){this._updateDimensions(),this._model.resize(this._terminal.cols,this._terminal.rows);for(const e of this._renderLayers)e.resize(this._terminal,this.dimensions);this._canvas.width=this.dimensions.device.canvas.width,this._canvas.height=this.dimensions.device.canvas.height,this._canvas.style.width=`${this.dimensions.css.canvas.width}px`,this._canvas.style.height=`${this.dimensions.css.canvas.height}px`,this._core.screenElement.style.width=`${this.dimensions.css.canvas.width}px`,this._core.screenElement.style.height=`${this.dimensions.css.canvas.height}px`,this._rectangleRenderer.value?.setDimensions(this.dimensions),this._rectangleRenderer.value?.handleResize(),this._glyphRenderer.value?.setDimensions(this.dimensions),this._glyphRenderer.value?.handleResize(),this._refreshCharAtlas(),this._clearModel(!1)}handleCharSizeChanged(){this.handleResize(this._terminal.cols,this._terminal.rows)}handleBlur(){for(const e of this._renderLayers)e.handleBlur(this._terminal);this._cursorBlinkStateManager.value?.pause(),this._requestRedrawViewport()}handleFocus(){for(const e of this._renderLayers)e.handleFocus(this._terminal);this._cursorBlinkStateManager.value?.resume(),this._requestRedrawViewport()}handleSelectionChanged(e,t,i){for(const s of this._renderLayers)s.handleSelectionChanged(this._terminal,e,t,i);this._model.selection.update(this._core,e,t,i),this._requestRedrawViewport()}handleCursorMove(){for(const e of this._renderLayers)e.handleCursorMove(this._terminal);this._cursorBlinkStateManager.value?.restartBlinkAnimation()}_handleOptionsChanged(){this._updateDimensions(),this._refreshCharAtlas(),this._updateCursorBlink()}_initializeWebGLState(){return this._rectangleRenderer.value=new u.RectangleRenderer(this._terminal,this._gl,this.dimensions,this._themeService),this._glyphRenderer.value=new c.GlyphRenderer(this._terminal,this._gl,this.dimensions,this._optionsService),this.handleCharSizeChanged(),[this._rectangleRenderer.value,this._glyphRenderer.value]}_refreshCharAtlas(){if(this.dimensions.device.char.width<=0&&this.dimensions.device.char.height<=0)return void(this._isAttached=!1);const e=(0,n.acquireTextureAtlas)(this._terminal,this._optionsService.rawOptions,this._themeService.colors,this.dimensions.device.cell.width,this.dimensions.device.cell.height,this.dimensions.device.char.width,this.dimensions.device.char.height,this._coreBrowserService.dpr,this._deviceMaxTextureSize);this._charAtlas!==e&&(this._onChangeTextureAtlas.fire(e.pages[0].canvas),this._charAtlasDisposable.value=(0,m.combinedDisposable)(f.Event.forward(e.onAddTextureAtlasCanvas,this._onAddTextureAtlasCanvas),f.Event.forward(e.onRemoveTextureAtlasCanvas,this._onRemoveTextureAtlasCanvas))),this._charAtlas=e,this._charAtlas.warmUp(),this._glyphRenderer.value?.setAtlas(this._charAtlas)}_clearModel(e){this._model.clear(),e&&this._glyphRenderer.value?.clear()}clearTextureAtlas(){this._charAtlas?.clearTexture(),this._clearModel(!0),this._requestRedrawViewport()}clear(){this._clearModel(!0);for(const e of this._renderLayers)e.reset(this._terminal);this._cursorBlinkStateManager.value?.restartBlinkAnimation(),this._updateCursorBlink()}renderRows(e,t){if(!this._isAttached){if(!(this._core.screenElement?.isConnected&&this._charSizeService.width&&this._charSizeService.height))return;this._updateDimensions(),this._refreshCharAtlas(),this._isAttached=!0}for(const i of this._renderLayers)i.handleGridChanged(this._terminal,e,t);this._glyphRenderer.value&&this._rectangleRenderer.value&&(this._glyphRenderer.value.beginFrame()?(this._clearModel(!0),this._updateModel(0,this._terminal.rows-1)):this._updateModel(e,t),this._rectangleRenderer.value.renderBackgrounds(),this._glyphRenderer.value.render(this._model),this._cursorBlinkStateManager.value&&!this._cursorBlinkStateManager.value.isCursorVisible||this._rectangleRenderer.value.renderCursor())}_updateCursorBlink(){this._coreService.decPrivateModes.cursorBlink??this._terminal.options.cursorBlink?this._cursorBlinkStateManager.value=new r.CursorBlinkStateManager((()=>{this._requestRedrawCursor()}),this._coreBrowserService):this._cursorBlinkStateManager.clear(),this._requestRedrawCursor()}_updateModel(e,t){const i=this._core;let s,n,r,o,a,l,c,u,_,f,g,m,p,v,w,b=this._workCell,y=0,L=!0;e=E(e,i.rows-1,0),t=E(t,i.rows-1,0);const A=this._coreService.decPrivateModes.cursorStyle??i.options.cursorStyle??"block",R=this._terminal.buffer.active.baseY+this._terminal.buffer.active.cursorY,T=R-i.buffer.ydisp,M=Math.min(this._terminal.buffer.active.cursorX,i.cols-1);let S=-1;const D=this._coreService.isCursorInitialized&&!this._coreService.isCursorHidden&&(!this._cursorBlinkStateManager.value||this._cursorBlinkStateManager.value.isCursorVisible);this._model.cursor=void 0;let x=!1;for(n=e;n<=t;n++)for(r=n+i.buffer.ydisp,o=i.buffer.lines.get(r),this._model.lineLengths[n]=0,_=R===r,y=0,a=this._characterJoinerService.getJoinedCharacters(r),v=0;v<i.cols;v++){if(s=this._cellColorResolver.result.bg,o.loadCell(v,b),0===v&&(s=this._cellColorResolver.result.bg),l=!1,L=v>=y,c=v,a.length>0&&v===a[0][0]&&L){u=a.shift();const e=this._model.selection.isCellSelected(this._terminal,u[0],r);for(p=u[0]+1;p<u[1];p++)L&&=e===this._model.selection.isCellSelected(this._terminal,p,r);L&&=!_||M<u[0]||M>=u[1],L?(l=!0,b=new C(b,o.translateToString(!0,u[0],u[1]),u[1]-u[0]),c=u[1]-1):y=u[1]}if(f=b.getChars(),g=b.getCode(),p=(n*i.cols+v)*d.RENDER_MODEL_INDICIES_PER_CELL,this._cellColorResolver.resolve(b,v,r,this.dimensions.device.cell.width),D&&r===R&&(v===M&&(this._model.cursor={x:M,y:T,width:b.getWidth(),style:this._coreBrowserService.isFocused?A:i.options.cursorInactiveStyle,cursorWidth:i.options.cursorWidth,dpr:this._devicePixelRatio},S=M+b.getWidth()-1),v>=M&&v<=S&&(this._coreBrowserService.isFocused&&"block"===A||!1===this._coreBrowserService.isFocused&&"block"===i.options.cursorInactiveStyle)&&(this._cellColorResolver.result.fg=50331648|this._themeService.colors.cursorAccent.rgba>>8&16777215,this._cellColorResolver.result.bg=50331648|this._themeService.colors.cursor.rgba>>8&16777215)),g!==h.NULL_CELL_CODE&&(this._model.lineLengths[n]=v+1),(this._model.cells[p]!==g||this._model.cells[p+d.RENDER_MODEL_BG_OFFSET]!==this._cellColorResolver.result.bg||this._model.cells[p+d.RENDER_MODEL_FG_OFFSET]!==this._cellColorResolver.result.fg||this._model.cells[p+d.RENDER_MODEL_EXT_OFFSET]!==this._cellColorResolver.result.ext)&&(x=!0,f.length>1&&(g|=d.COMBINED_CHAR_BIT_MASK),this._model.cells[p]=g,this._model.cells[p+d.RENDER_MODEL_BG_OFFSET]=this._cellColorResolver.result.bg,this._model.cells[p+d.RENDER_MODEL_FG_OFFSET]=this._cellColorResolver.result.fg,this._model.cells[p+d.RENDER_MODEL_EXT_OFFSET]=this._cellColorResolver.result.ext,m=b.getWidth(),this._glyphRenderer.value.updateCell(v,n,g,this._cellColorResolver.result.bg,this._cellColorResolver.result.fg,this._cellColorResolver.result.ext,f,m,s),l)){for(b=this._workCell,v++;v<=c;v++)w=(n*i.cols+v)*d.RENDER_MODEL_INDICIES_PER_CELL,this._glyphRenderer.value.updateCell(v,n,h.NULL_CELL_CODE,0,0,0,h.NULL_CELL_CHAR,0,0),this._model.cells[w]=h.NULL_CELL_CODE,this._model.cells[w+d.RENDER_MODEL_BG_OFFSET]=this._cellColorResolver.result.bg,this._model.cells[w+d.RENDER_MODEL_FG_OFFSET]=this._cellColorResolver.result.fg,this._model.cells[w+d.RENDER_MODEL_EXT_OFFSET]=this._cellColorResolver.result.ext;v--}}x&&this._rectangleRenderer.value.updateBackgrounds(this._model),this._rectangleRenderer.value.updateCursor(this._model)}_updateDimensions(){this._charSizeService.width&&this._charSizeService.height&&(this.dimensions.device.char.width=Math.floor(this._charSizeService.width*this._devicePixelRatio),this.dimensions.device.char.height=Math.ceil(this._charSizeService.height*this._devicePixelRatio),this.dimensions.device.cell.height=Math.floor(this.dimensions.device.char.height*this._optionsService.rawOptions.lineHeight),this.dimensions.device.char.top=1===this._optionsService.rawOptions.lineHeight?0:Math.round((this.dimensions.device.cell.height-this.dimensions.device.char.height)/2),this.dimensions.device.cell.width=this.dimensions.device.char.width+Math.round(this._optionsService.rawOptions.letterSpacing),this.dimensions.device.char.left=Math.floor(this._optionsService.rawOptions.letterSpacing/2),this.dimensions.device.canvas.height=this._terminal.rows*this.dimensions.device.cell.height,this.dimensions.device.canvas.width=this._terminal.cols*this.dimensions.device.cell.width,this.dimensions.css.canvas.height=Math.round(this.dimensions.device.canvas.height/this._devicePixelRatio),this.dimensions.css.canvas.width=Math.round(this.dimensions.device.canvas.width/this._devicePixelRatio),this.dimensions.css.cell.height=this.dimensions.device.cell.height/this._devicePixelRatio,this.dimensions.css.cell.width=this.dimensions.device.cell.width/this._devicePixelRatio)}_setCanvasDevicePixelDimensions(e,t){this._canvas.width===e&&this._canvas.height===t||(this._canvas.width=e,this._canvas.height=t,this._requestRedrawViewport())}_requestRedrawViewport(){this._onRequestRedraw.fire({start:0,end:this._terminal.rows-1})}_requestRedrawCursor(){const e=this._terminal.buffer.active.cursorY;this._onRequestRedraw.fire({start:e,end:e})}}t.WebglRenderer=v;class C extends a.AttributeData{constructor(e,t,i){super(),this.content=0,this.combinedData="",this.fg=e.fg,this.bg=e.bg,this.combinedData=t,this._width=i}isCombined(){return 2097152}getWidth(){return this._width}getChars(){return this.combinedData}getCode(){return 2097151}setFromCharData(e){throw new Error("not implemented")}getAsCharData(){return[this.fg,this.getChars(),this.getWidth(),this.getCode()]}}function E(e,t,i=0){return Math.max(Math.min(e,t),i)}t.JoinedCellData=C},5719:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GLTexture=t.PROJECTION_MATRIX=void 0,t.createProgram=function(e,t,i){const r=(0,s.throwIfFalsy)(e.createProgram());if(e.attachShader(r,(0,s.throwIfFalsy)(n(e,e.VERTEX_SHADER,t))),e.attachShader(r,(0,s.throwIfFalsy)(n(e,e.FRAGMENT_SHADER,i))),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS))return r;console.error(e.getProgramInfoLog(r)),e.deleteProgram(r)},t.createShader=n,t.expandFloat32Array=function(e,t){const i=Math.min(2*e.length,t),s=new Float32Array(i);for(let t=0;t<e.length;t++)s[t]=e[t];return s};const s=i(4959);function n(e,t,i){const n=(0,s.throwIfFalsy)(e.createShader(t));if(e.shaderSource(n,i),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS))return n;console.error(e.getShaderInfoLog(n)),e.deleteShader(n)}t.PROJECTION_MATRIX=new Float32Array([2,0,0,0,0,-2,0,0,0,0,1,0,-1,1,0,1]),t.GLTexture=class{constructor(e){this.texture=e,this.version=-1}}},3133:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseRenderLayer=void 0;const s=i(5670),n=i(2540),r=i(4959),o=i(2e3);class a extends n.Disposable{constructor(e,t,i,s,r,o,a,l){super(),this._container=t,this._alpha=r,this._coreBrowserService=o,this._optionsService=a,this._themeService=l,this._deviceCharWidth=0,this._deviceCharHeight=0,this._deviceCellWidth=0,this._deviceCellHeight=0,this._deviceCharLeft=0,this._deviceCharTop=0,this._canvas=this._coreBrowserService.mainDocument.createElement("canvas"),this._canvas.classList.add(`xterm-${i}-layer`),this._canvas.style.zIndex=s.toString(),this._initCanvas(),this._container.appendChild(this._canvas),this._register(this._themeService.onChangeColors((t=>{this._refreshCharAtlas(e,t),this.reset(e)}))),this._register((0,n.toDisposable)((()=>{this._canvas.remove()})))}_initCanvas(){this._ctx=(0,r.throwIfFalsy)(this._canvas.getContext("2d",{alpha:this._alpha})),this._alpha||this._clearAll()}handleBlur(e){}handleFocus(e){}handleCursorMove(e){}handleGridChanged(e,t,i){}handleSelectionChanged(e,t,i,s=!1){}_setTransparency(e,t){if(t===this._alpha)return;const i=this._canvas;this._alpha=t,this._canvas=this._canvas.cloneNode(),this._initCanvas(),this._container.replaceChild(this._canvas,i),this._refreshCharAtlas(e,this._themeService.colors),this.handleGridChanged(e,0,e.rows-1)}_refreshCharAtlas(e,t){this._deviceCharWidth<=0&&this._deviceCharHeight<=0||(this._charAtlas=(0,s.acquireTextureAtlas)(e,this._optionsService.rawOptions,t,this._deviceCellWidth,this._deviceCellHeight,this._deviceCharWidth,this._deviceCharHeight,this._coreBrowserService.dpr,2048),this._charAtlas.warmUp())}resize(e,t){this._deviceCellWidth=t.device.cell.width,this._deviceCellHeight=t.device.cell.height,this._deviceCharWidth=t.device.char.width,this._deviceCharHeight=t.device.char.height,this._deviceCharLeft=t.device.char.left,this._deviceCharTop=t.device.char.top,this._canvas.width=t.device.canvas.width,this._canvas.height=t.device.canvas.height,this._canvas.style.width=`${t.css.canvas.width}px`,this._canvas.style.height=`${t.css.canvas.height}px`,this._alpha||this._clearAll(),this._refreshCharAtlas(e,this._themeService.colors)}_fillBottomLineAtCells(e,t,i=1){this._ctx.fillRect(e*this._deviceCellWidth,(t+1)*this._deviceCellHeight-this._coreBrowserService.dpr-1,i*this._deviceCellWidth,this._coreBrowserService.dpr)}_clearAll(){this._alpha?this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height):(this._ctx.fillStyle=this._themeService.colors.background.css,this._ctx.fillRect(0,0,this._canvas.width,this._canvas.height))}_clearCells(e,t,i,s){this._alpha?this._ctx.clearRect(e*this._deviceCellWidth,t*this._deviceCellHeight,i*this._deviceCellWidth,s*this._deviceCellHeight):(this._ctx.fillStyle=this._themeService.colors.background.css,this._ctx.fillRect(e*this._deviceCellWidth,t*this._deviceCellHeight,i*this._deviceCellWidth,s*this._deviceCellHeight))}_fillCharTrueColor(e,t,i,s){this._ctx.font=this._getFont(e,!1,!1),this._ctx.textBaseline=o.TEXT_BASELINE,this._clipCell(i,s,t.getWidth()),this._ctx.fillText(t.getChars(),i*this._deviceCellWidth+this._deviceCharLeft,s*this._deviceCellHeight+this._deviceCharTop+this._deviceCharHeight)}_clipCell(e,t,i){this._ctx.beginPath(),this._ctx.rect(e*this._deviceCellWidth,t*this._deviceCellHeight,i*this._deviceCellWidth,this._deviceCellHeight),this._ctx.clip()}_getFont(e,t,i){return`${i?"italic":""} ${t?e.options.fontWeightBold:e.options.fontWeight} ${e.options.fontSize*this._coreBrowserService.dpr}px ${e.options.fontFamily}`}}t.BaseRenderLayer=a},1306:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LinkRenderLayer=void 0;const s=i(3657),n=i(6814),r=i(3133);class o extends r.BaseRenderLayer{constructor(e,t,i,s,n,r,o){super(i,e,"link",t,!0,n,r,o),this._register(s.onShowLinkUnderline((e=>this._handleShowLinkUnderline(e)))),this._register(s.onHideLinkUnderline((e=>this._handleHideLinkUnderline(e))))}resize(e,t){super.resize(e,t),this._state=void 0}reset(e){this._clearCurrentLink()}_clearCurrentLink(){if(this._state){this._clearCells(this._state.x1,this._state.y1,this._state.cols-this._state.x1,1);const e=this._state.y2-this._state.y1-1;e>0&&this._clearCells(0,this._state.y1+1,this._state.cols,e),this._clearCells(0,this._state.y2,this._state.x2,1),this._state=void 0}}_handleShowLinkUnderline(e){if(e.fg===n.INVERTED_DEFAULT_COLOR?this._ctx.fillStyle=this._themeService.colors.background.css:void 0!==e.fg&&(0,s.is256Color)(e.fg)?this._ctx.fillStyle=this._themeService.colors.ansi[e.fg].css:this._ctx.fillStyle=this._themeService.colors.foreground.css,e.y1===e.y2)this._fillBottomLineAtCells(e.x1,e.y1,e.x2-e.x1);else{this._fillBottomLineAtCells(e.x1,e.y1,e.cols-e.x1);for(let t=e.y1+1;t<e.y2;t++)this._fillBottomLineAtCells(0,t,e.cols);this._fillBottomLineAtCells(0,e.y2,e.x2)}this._state=e}_handleHideLinkUnderline(e){this._clearCurrentLink()}}t.LinkRenderLayer=o},6814:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.INVERTED_DEFAULT_COLOR=void 0,t.INVERTED_DEFAULT_COLOR=257},4959:(e,t)=>{function i(e){return 57508<=e&&e<=57558}function s(e){return e>=128512&&e<=128591||e>=127744&&e<=128511||e>=128640&&e<=128767||e>=9728&&e<=9983||e>=9984&&e<=10175||e>=65024&&e<=65039||e>=129280&&e<=129535||e>=127462&&e<=127487}Object.defineProperty(t,"__esModule",{value:!0}),t.throwIfFalsy=function(e){if(!e)throw new Error("value must not be falsy");return e},t.isPowerlineGlyph=i,t.isRestrictedPowerlineGlyph=function(e){return 57520<=e&&e<=57527},t.isEmoji=s,t.allowRescaling=function(e,t,n,r){return 1===t&&n>Math.ceil(1.5*r)&&void 0!==e&&e>255&&!s(e)&&!i(e)&&!function(e){return 57344<=e&&e<=63743}(e)},t.treatGlyphAsBackgroundColor=function(e){return i(e)||function(e){return 9472<=e&&e<=9631}(e)},t.createRenderDimensions=function(){return{css:{canvas:{width:0,height:0},cell:{width:0,height:0}},device:{canvas:{width:0,height:0},cell:{width:0,height:0},char:{width:0,height:0,left:0,top:0}}}},t.computeNextVariantOffset=function(e,t,i=0){return(e-(2*Math.round(t)-i))%(2*Math.round(t))}},5948:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createSelectionRenderModel=function(){return new i};class i{constructor(){this.clear()}clear(){this.hasSelection=!1,this.columnSelectMode=!1,this.viewportStartRow=0,this.viewportEndRow=0,this.viewportCappedStartRow=0,this.viewportCappedEndRow=0,this.startCol=0,this.endCol=0,this.selectionStart=void 0,this.selectionEnd=void 0}update(e,t,i,s=!1){if(this.selectionStart=t,this.selectionEnd=i,!t||!i||t[0]===i[0]&&t[1]===i[1])return void this.clear();const n=e.buffers.active.ydisp,r=t[1]-n,o=i[1]-n,a=Math.max(r,0),l=Math.min(o,e.rows-1);a>=e.rows||l<0?this.clear():(this.hasSelection=!0,this.columnSelectMode=s,this.viewportStartRow=r,this.viewportEndRow=o,this.viewportCappedStartRow=a,this.viewportCappedEndRow=l,this.startCol=t[0],this.endCol=i[0])}isCellSelected(e,t,i){return!!this.hasSelection&&(i-=e.buffer.active.viewportY,this.columnSelectMode?this.startCol<=this.endCol?t>=this.startCol&&i>=this.viewportCappedStartRow&&t<this.endCol&&i<=this.viewportCappedEndRow:t<this.startCol&&i>=this.viewportCappedStartRow&&t>=this.endCol&&i<=this.viewportCappedEndRow:i>this.viewportStartRow&&i<this.viewportEndRow||this.viewportStartRow===this.viewportEndRow&&i===this.viewportStartRow&&t>=this.startCol&&t<this.endCol||this.viewportStartRow<this.viewportEndRow&&i===this.viewportEndRow&&t<this.endCol||this.viewportStartRow<this.viewportEndRow&&i===this.viewportStartRow&&t>=this.startCol)}}},7993:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.rgba=t.rgb=t.css=t.color=t.channels=t.NULL_COLOR=void 0,t.toPaddedHex=u,t.contrastRatio=d;let i=0,s=0,n=0,r=0;var o,a,l,h,c;function u(e){const t=e.toString(16);return t.length<2?"0"+t:t}function d(e,t){return e<t?(t+.05)/(e+.05):(e+.05)/(t+.05)}t.NULL_COLOR={css:"#00000000",rgba:0},function(e){e.toCss=function(e,t,i,s){return void 0!==s?`#${u(e)}${u(t)}${u(i)}${u(s)}`:`#${u(e)}${u(t)}${u(i)}`},e.toRgba=function(e,t,i,s=255){return(e<<24|t<<16|i<<8|s)>>>0},e.toColor=function(t,i,s,n){return{css:e.toCss(t,i,s,n),rgba:e.toRgba(t,i,s,n)}}}(o||(t.channels=o={})),function(e){function t(e,t){return r=Math.round(255*t),[i,s,n]=c.toChannels(e.rgba),{css:o.toCss(i,s,n,r),rgba:o.toRgba(i,s,n,r)}}e.blend=function(e,t){if(r=(255&t.rgba)/255,1===r)return{css:t.css,rgba:t.rgba};const a=t.rgba>>24&255,l=t.rgba>>16&255,h=t.rgba>>8&255,c=e.rgba>>24&255,u=e.rgba>>16&255,d=e.rgba>>8&255;return i=c+Math.round((a-c)*r),s=u+Math.round((l-u)*r),n=d+Math.round((h-d)*r),{css:o.toCss(i,s,n),rgba:o.toRgba(i,s,n)}},e.isOpaque=function(e){return!(255&~e.rgba)},e.ensureContrastRatio=function(e,t,i){const s=c.ensureContrastRatio(e.rgba,t.rgba,i);if(s)return o.toColor(s>>24&255,s>>16&255,s>>8&255)},e.opaque=function(e){const t=(255|e.rgba)>>>0;return[i,s,n]=c.toChannels(t),{css:o.toCss(i,s,n),rgba:t}},e.opacity=t,e.multiplyOpacity=function(e,i){return r=255&e.rgba,t(e,r*i/255)},e.toColorRGB=function(e){return[e.rgba>>24&255,e.rgba>>16&255,e.rgba>>8&255]}}(a||(t.color=a={})),function(e){let t,a;try{const e=document.createElement("canvas");e.width=1,e.height=1;const i=e.getContext("2d",{willReadFrequently:!0});i&&(t=i,t.globalCompositeOperation="copy",a=t.createLinearGradient(0,0,1,1))}catch{}e.toColor=function(e){if(e.match(/#[\da-f]{3,8}/i))switch(e.length){case 4:return i=parseInt(e.slice(1,2).repeat(2),16),s=parseInt(e.slice(2,3).repeat(2),16),n=parseInt(e.slice(3,4).repeat(2),16),o.toColor(i,s,n);case 5:return i=parseInt(e.slice(1,2).repeat(2),16),s=parseInt(e.slice(2,3).repeat(2),16),n=parseInt(e.slice(3,4).repeat(2),16),r=parseInt(e.slice(4,5).repeat(2),16),o.toColor(i,s,n,r);case 7:return{css:e,rgba:(parseInt(e.slice(1),16)<<8|255)>>>0};case 9:return{css:e,rgba:parseInt(e.slice(1),16)>>>0}}const l=e.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);if(l)return i=parseInt(l[1]),s=parseInt(l[2]),n=parseInt(l[3]),r=Math.round(255*(void 0===l[5]?1:parseFloat(l[5]))),o.toColor(i,s,n,r);if(!t||!a)throw new Error("css.toColor: Unsupported css format");if(t.fillStyle=a,t.fillStyle=e,"string"!=typeof t.fillStyle)throw new Error("css.toColor: Unsupported css format");if(t.fillRect(0,0,1,1),[i,s,n,r]=t.getImageData(0,0,1,1).data,255!==r)throw new Error("css.toColor: Unsupported css format");return{rgba:o.toRgba(i,s,n,r),css:e}}}(l||(t.css=l={})),function(e){function t(e,t,i){const s=e/255,n=t/255,r=i/255;return.2126*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))}e.relativeLuminance=function(e){return t(e>>16&255,e>>8&255,255&e)},e.relativeLuminance2=t}(h||(t.rgb=h={})),function(e){function t(e,t,i){const s=e>>24&255,n=e>>16&255,r=e>>8&255;let o=t>>24&255,a=t>>16&255,l=t>>8&255,c=d(h.relativeLuminance2(o,a,l),h.relativeLuminance2(s,n,r));for(;c<i&&(o>0||a>0||l>0);)o-=Math.max(0,Math.ceil(.1*o)),a-=Math.max(0,Math.ceil(.1*a)),l-=Math.max(0,Math.ceil(.1*l)),c=d(h.relativeLuminance2(o,a,l),h.relativeLuminance2(s,n,r));return(o<<24|a<<16|l<<8|255)>>>0}function a(e,t,i){const s=e>>24&255,n=e>>16&255,r=e>>8&255;let o=t>>24&255,a=t>>16&255,l=t>>8&255,c=d(h.relativeLuminance2(o,a,l),h.relativeLuminance2(s,n,r));for(;c<i&&(o<255||a<255||l<255);)o=Math.min(255,o+Math.ceil(.1*(255-o))),a=Math.min(255,a+Math.ceil(.1*(255-a))),l=Math.min(255,l+Math.ceil(.1*(255-l))),c=d(h.relativeLuminance2(o,a,l),h.relativeLuminance2(s,n,r));return(o<<24|a<<16|l<<8|255)>>>0}e.blend=function(e,t){if(r=(255&t)/255,1===r)return t;const a=t>>24&255,l=t>>16&255,h=t>>8&255,c=e>>24&255,u=e>>16&255,d=e>>8&255;return i=c+Math.round((a-c)*r),s=u+Math.round((l-u)*r),n=d+Math.round((h-d)*r),o.toRgba(i,s,n)},e.ensureContrastRatio=function(e,i,s){const n=h.relativeLuminance(e>>8),r=h.relativeLuminance(i>>8);if(d(n,r)<s){if(r<n){const r=t(e,i,s),o=d(n,h.relativeLuminance(r>>8));if(o<s){const t=a(e,i,s);return o>d(n,h.relativeLuminance(t>>8))?r:t}return r}const o=a(e,i,s),l=d(n,h.relativeLuminance(o>>8));if(l<s){const r=t(e,i,s);return l>d(n,h.relativeLuminance(r>>8))?o:r}return o}},e.reduceLuminance=t,e.increaseLuminance=a,e.toChannels=function(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}}(c||(t.rgba=c={}))},1836:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FourKeyMap=t.TwoKeyMap=void 0;class i{constructor(){this._data={}}set(e,t,i){this._data[e]||(this._data[e]={}),this._data[e][t]=i}get(e,t){return this._data[e]?this._data[e][t]:void 0}clear(){this._data={}}}t.TwoKeyMap=i,t.FourKeyMap=class{constructor(){this._data=new i}set(e,t,s,n,r){this._data.get(e,t)||this._data.set(e,t,new i),this._data.get(e,t).set(s,n,r)}get(e,t,i,s){return this._data.get(e,t)?.get(i,s)}clear(){this._data.clear()}}},7095:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isChromeOS=t.isLinux=t.isWindows=t.isIphone=t.isIpad=t.isMac=t.isSafari=t.isLegacyEdge=t.isFirefox=t.isNode=void 0,t.getSafariVersion=function(){if(!t.isSafari)return 0;const e=i.match(/Version\/(\d+)/);return null===e||e.length<2?0:parseInt(e[1])},t.isNode="undefined"!=typeof process&&"title"in process;const i=t.isNode?"node":navigator.userAgent,s=t.isNode?"node":navigator.platform;t.isFirefox=i.includes("Firefox"),t.isLegacyEdge=i.includes("Edge"),t.isSafari=/^((?!chrome|android).)*safari/i.test(i),t.isMac=["Macintosh","MacIntel","MacPPC","Mac68K"].includes(s),t.isIpad="iPad"===s,t.isIphone="iPhone"===s,t.isWindows=["Windows","Win16","Win32","WinCE"].includes(s),t.isLinux=s.indexOf("Linux")>=0,t.isChromeOS=/\bCrOS\b/.test(i)},9930:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DebouncedIdleTask=t.IdleTaskQueue=t.PriorityTaskQueue=void 0;const s=i(7095);class n{constructor(){this._tasks=[],this._i=0}enqueue(e){this._tasks.push(e),this._start()}flush(){for(;this._i<this._tasks.length;)this._tasks[this._i]()||this._i++;this.clear()}clear(){this._idleCallback&&(this._cancelCallback(this._idleCallback),this._idleCallback=void 0),this._i=0,this._tasks.length=0}_start(){this._idleCallback||(this._idleCallback=this._requestCallback(this._process.bind(this)))}_process(e){this._idleCallback=void 0;let t=0,i=0,s=e.timeRemaining(),n=0;for(;this._i<this._tasks.length;){if(t=performance.now(),this._tasks[this._i]()||this._i++,t=Math.max(1,performance.now()-t),i=Math.max(t,i),n=e.timeRemaining(),1.5*i>n)return s-t<-20&&console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(s-t))}ms`),void this._start();s=n}this.clear()}}class r extends n{_requestCallback(e){return setTimeout((()=>e(this._createDeadline(16))))}_cancelCallback(e){clearTimeout(e)}_createDeadline(e){const t=performance.now()+e;return{timeRemaining:()=>Math.max(0,t-performance.now())}}}t.PriorityTaskQueue=r,t.IdleTaskQueue=!s.isNode&&"requestIdleCallback"in window?class extends n{_requestCallback(e){return requestIdleCallback(e)}_cancelCallback(e){cancelIdleCallback(e)}}:r,t.DebouncedIdleTask=class{constructor(){this._queue=new t.IdleTaskQueue}set(e){this._queue.clear(),this._queue.enqueue(e)}flush(){this._queue.flush()}}},9917:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ExtendedAttrs=t.AttributeData=void 0;class i{constructor(){this.fg=0,this.bg=0,this.extended=new s}static toColorRGB(e){return[e>>>16&255,e>>>8&255,255&e]}static fromColorRGB(e){return(255&e[0])<<16|(255&e[1])<<8|255&e[2]}clone(){const e=new i;return e.fg=this.fg,e.bg=this.bg,e.extended=this.extended.clone(),e}isInverse(){return 67108864&this.fg}isBold(){return 134217728&this.fg}isUnderline(){return this.hasExtendedAttrs()&&0!==this.extended.underlineStyle?1:268435456&this.fg}isBlink(){return 536870912&this.fg}isInvisible(){return 1073741824&this.fg}isItalic(){return 67108864&this.bg}isDim(){return 134217728&this.bg}isStrikethrough(){return 2147483648&this.fg}isProtected(){return 536870912&this.bg}isOverline(){return 1073741824&this.bg}getFgColorMode(){return 50331648&this.fg}getBgColorMode(){return 50331648&this.bg}isFgRGB(){return!(50331648&~this.fg)}isBgRGB(){return!(50331648&~this.bg)}isFgPalette(){return 16777216==(50331648&this.fg)||33554432==(50331648&this.fg)}isBgPalette(){return 16777216==(50331648&this.bg)||33554432==(50331648&this.bg)}isFgDefault(){return!(50331648&this.fg)}isBgDefault(){return!(50331648&this.bg)}isAttributeDefault(){return 0===this.fg&&0===this.bg}getFgColor(){switch(50331648&this.fg){case 16777216:case 33554432:return 255&this.fg;case 50331648:return 16777215&this.fg;default:return-1}}getBgColor(){switch(50331648&this.bg){case 16777216:case 33554432:return 255&this.bg;case 50331648:return 16777215&this.bg;default:return-1}}hasExtendedAttrs(){return 268435456&this.bg}updateExtended(){this.extended.isEmpty()?this.bg&=-268435457:this.bg|=268435456}getUnderlineColor(){if(268435456&this.bg&&~this.extended.underlineColor)switch(50331648&this.extended.underlineColor){case 16777216:case 33554432:return 255&this.extended.underlineColor;case 50331648:return 16777215&this.extended.underlineColor;default:return this.getFgColor()}return this.getFgColor()}getUnderlineColorMode(){return 268435456&this.bg&&~this.extended.underlineColor?50331648&this.extended.underlineColor:this.getFgColorMode()}isUnderlineColorRGB(){return 268435456&this.bg&&~this.extended.underlineColor?!(50331648&~this.extended.underlineColor):this.isFgRGB()}isUnderlineColorPalette(){return 268435456&this.bg&&~this.extended.underlineColor?16777216==(50331648&this.extended.underlineColor)||33554432==(50331648&this.extended.underlineColor):this.isFgPalette()}isUnderlineColorDefault(){return 268435456&this.bg&&~this.extended.underlineColor?!(50331648&this.extended.underlineColor):this.isFgDefault()}getUnderlineStyle(){return 268435456&this.fg?268435456&this.bg?this.extended.underlineStyle:1:0}getUnderlineVariantOffset(){return this.extended.underlineVariantOffset}}t.AttributeData=i;class s{get ext(){return this._urlId?-469762049&this._ext|this.underlineStyle<<26:this._ext}set ext(e){this._ext=e}get underlineStyle(){return this._urlId?5:(469762048&this._ext)>>26}set underlineStyle(e){this._ext&=-469762049,this._ext|=e<<26&469762048}get underlineColor(){return 67108863&this._ext}set underlineColor(e){this._ext&=-67108864,this._ext|=67108863&e}get urlId(){return this._urlId}set urlId(e){this._urlId=e}get underlineVariantOffset(){const e=(3758096384&this._ext)>>29;return e<0?4294967288^e:e}set underlineVariantOffset(e){this._ext&=536870911,this._ext|=e<<29&3758096384}constructor(e=0,t=0){this._ext=0,this._urlId=0,this._ext=e,this._urlId=t}clone(){return new s(this._ext,this._urlId)}isEmpty(){return 0===this.underlineStyle&&0===this._urlId}}t.ExtendedAttrs=s},5721:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CellData=void 0;const s=i(6348),n=i(1564),r=i(9917);class o extends r.AttributeData{constructor(){super(...arguments),this.content=0,this.fg=0,this.bg=0,this.extended=new r.ExtendedAttrs,this.combinedData=""}static fromCharData(e){const t=new o;return t.setFromCharData(e),t}isCombined(){return 2097152&this.content}getWidth(){return this.content>>22}getChars(){return 2097152&this.content?this.combinedData:2097151&this.content?(0,s.stringFromCodePoint)(2097151&this.content):""}getCode(){return this.isCombined()?this.combinedData.charCodeAt(this.combinedData.length-1):2097151&this.content}setFromCharData(e){this.fg=e[n.CHAR_DATA_ATTR_INDEX],this.bg=0;let t=!1;if(e[n.CHAR_DATA_CHAR_INDEX].length>2)t=!0;else if(2===e[n.CHAR_DATA_CHAR_INDEX].length){const i=e[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0);if(55296<=i&&i<=56319){const s=e[n.CHAR_DATA_CHAR_INDEX].charCodeAt(1);56320<=s&&s<=57343?this.content=1024*(i-55296)+s-56320+65536|e[n.CHAR_DATA_WIDTH_INDEX]<<22:t=!0}else t=!0}else this.content=e[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0)|e[n.CHAR_DATA_WIDTH_INDEX]<<22;t&&(this.combinedData=e[n.CHAR_DATA_CHAR_INDEX],this.content=2097152|e[n.CHAR_DATA_WIDTH_INDEX]<<22)}getAsCharData(){return[this.fg,this.getChars(),this.getWidth(),this.getCode()]}}t.CellData=o},1564:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WHITESPACE_CELL_CODE=t.WHITESPACE_CELL_WIDTH=t.WHITESPACE_CELL_CHAR=t.NULL_CELL_CODE=t.NULL_CELL_WIDTH=t.NULL_CELL_CHAR=t.CHAR_DATA_CODE_INDEX=t.CHAR_DATA_WIDTH_INDEX=t.CHAR_DATA_CHAR_INDEX=t.CHAR_DATA_ATTR_INDEX=t.DEFAULT_EXT=t.DEFAULT_ATTR=t.DEFAULT_COLOR=void 0,t.DEFAULT_COLOR=0,t.DEFAULT_ATTR=t.DEFAULT_COLOR<<9|256,t.DEFAULT_EXT=0,t.CHAR_DATA_ATTR_INDEX=0,t.CHAR_DATA_CHAR_INDEX=1,t.CHAR_DATA_WIDTH_INDEX=2,t.CHAR_DATA_CODE_INDEX=3,t.NULL_CELL_CHAR="",t.NULL_CELL_WIDTH=1,t.NULL_CELL_CODE=0,t.WHITESPACE_CELL_CHAR=" ",t.WHITESPACE_CELL_WIDTH=1,t.WHITESPACE_CELL_CODE=32},6348:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Utf8ToUtf32=t.StringToUtf32=void 0,t.stringFromCodePoint=function(e){return e>65535?(e-=65536,String.fromCharCode(55296+(e>>10))+String.fromCharCode(e%1024+56320)):String.fromCharCode(e)},t.utf32ToString=function(e,t=0,i=e.length){let s="";for(let n=t;n<i;++n){let t=e[n];t>65535?(t-=65536,s+=String.fromCharCode(55296+(t>>10))+String.fromCharCode(t%1024+56320)):s+=String.fromCharCode(t)}return s},t.StringToUtf32=class{constructor(){this._interim=0}clear(){this._interim=0}decode(e,t){const i=e.length;if(!i)return 0;let s=0,n=0;if(this._interim){const i=e.charCodeAt(n++);56320<=i&&i<=57343?t[s++]=1024*(this._interim-55296)+i-56320+65536:(t[s++]=this._interim,t[s++]=i),this._interim=0}for(let r=n;r<i;++r){const n=e.charCodeAt(r);if(55296<=n&&n<=56319){if(++r>=i)return this._interim=n,s;const o=e.charCodeAt(r);56320<=o&&o<=57343?t[s++]=1024*(n-55296)+o-56320+65536:(t[s++]=n,t[s++]=o)}else 65279!==n&&(t[s++]=n)}return s}},t.Utf8ToUtf32=class{constructor(){this.interim=new Uint8Array(3)}clear(){this.interim.fill(0)}decode(e,t){const i=e.length;if(!i)return 0;let s,n,r,o,a=0,l=0,h=0;if(this.interim[0]){let s=!1,n=this.interim[0];n&=192==(224&n)?31:224==(240&n)?15:7;let r,o=0;for(;(r=63&this.interim[++o])&&o<4;)n<<=6,n|=r;const l=192==(224&this.interim[0])?2:224==(240&this.interim[0])?3:4,c=l-o;for(;h<c;){if(h>=i)return 0;if(r=e[h++],128!=(192&r)){h--,s=!0;break}this.interim[o++]=r,n<<=6,n|=63&r}s||(2===l?n<128?h--:t[a++]=n:3===l?n<2048||n>=55296&&n<=57343||65279===n||(t[a++]=n):n<65536||n>1114111||(t[a++]=n)),this.interim.fill(0)}const c=i-4;let u=h;for(;u<i;){for(;!(!(u<c)||128&(s=e[u])||128&(n=e[u+1])||128&(r=e[u+2])||128&(o=e[u+3]));)t[a++]=s,t[a++]=n,t[a++]=r,t[a++]=o,u+=4;if(s=e[u++],s<128)t[a++]=s;else if(192==(224&s)){if(u>=i)return this.interim[0]=s,a;if(n=e[u++],128!=(192&n)){u--;continue}if(l=(31&s)<<6|63&n,l<128){u--;continue}t[a++]=l}else if(224==(240&s)){if(u>=i)return this.interim[0]=s,a;if(n=e[u++],128!=(192&n)){u--;continue}if(u>=i)return this.interim[0]=s,this.interim[1]=n,a;if(r=e[u++],128!=(192&r)){u--;continue}if(l=(15&s)<<12|(63&n)<<6|63&r,l<2048||l>=55296&&l<=57343||65279===l)continue;t[a++]=l}else if(240==(248&s)){if(u>=i)return this.interim[0]=s,a;if(n=e[u++],128!=(192&n)){u--;continue}if(u>=i)return this.interim[0]=s,this.interim[1]=n,a;if(r=e[u++],128!=(192&r)){u--;continue}if(u>=i)return this.interim[0]=s,this.interim[1]=n,this.interim[2]=r,a;if(o=e[u++],128!=(192&o)){u--;continue}if(l=(7&s)<<18|(63&n)<<12|(63&r)<<6|63&o,l<65536||l>1114111)continue;t[a++]=l}}return a}}},6870:function(e,t,i){var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},n=this&&this.__param||function(e,t){return function(i,s){t(i,s,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.LogService=void 0,t.setTraceLogger=function(e){l=e},t.traceCall=function(e,t,i){if("function"!=typeof i.value)throw new Error("not supported");const s=i.value;i.value=function(...e){if(l.logLevel!==o.LogLevelEnum.TRACE)return s.apply(this,e);l.trace(`GlyphRenderer#${s.name}(${e.map((e=>JSON.stringify(e))).join(", ")})`);const t=s.apply(this,e);return l.trace(`GlyphRenderer#${s.name} return`,t),t}};const r=i(2540),o=i(1027),a={trace:o.LogLevelEnum.TRACE,debug:o.LogLevelEnum.DEBUG,info:o.LogLevelEnum.INFO,warn:o.LogLevelEnum.WARN,error:o.LogLevelEnum.ERROR,off:o.LogLevelEnum.OFF};let l,h=class extends r.Disposable{get logLevel(){return this._logLevel}constructor(e){super(),this._optionsService=e,this._logLevel=o.LogLevelEnum.OFF,this._updateLogLevel(),this._register(this._optionsService.onSpecificOptionChange("logLevel",(()=>this._updateLogLevel()))),l=this}_updateLogLevel(){this._logLevel=a[this._optionsService.rawOptions.logLevel]}_evalLazyOptionalParams(e){for(let t=0;t<e.length;t++)"function"==typeof e[t]&&(e[t]=e[t]())}_log(e,t,i){this._evalLazyOptionalParams(i),e.call(console,(this._optionsService.options.logger?"":"xterm.js: ")+t,...i)}trace(e,...t){this._logLevel<=o.LogLevelEnum.TRACE&&this._log(this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger)??console.log,e,t)}debug(e,...t){this._logLevel<=o.LogLevelEnum.DEBUG&&this._log(this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger)??console.log,e,t)}info(e,...t){this._logLevel<=o.LogLevelEnum.INFO&&this._log(this._optionsService.options.logger?.info.bind(this._optionsService.options.logger)??console.info,e,t)}warn(e,...t){this._logLevel<=o.LogLevelEnum.WARN&&this._log(this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger)??console.warn,e,t)}error(e,...t){this._logLevel<=o.LogLevelEnum.ERROR&&this._log(this._optionsService.options.logger?.error.bind(this._optionsService.options.logger)??console.error,e,t)}};t.LogService=h,t.LogService=h=s([n(0,o.IOptionsService)],h)},3727:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.serviceRegistry=void 0,t.getServiceDependencies=function(e){return e[s]||[]},t.createDecorator=function(e){if(t.serviceRegistry.has(e))return t.serviceRegistry.get(e);const n=function(e,t,r){if(3!==arguments.length)throw new Error("@IServiceName-decorator can only be used to decorate a parameter");!function(e,t,n){t[i]===t?t[s].push({id:e,index:n}):(t[s]=[{id:e,index:n}],t[i]=t)}(n,e,r)};return n._id=e,t.serviceRegistry.set(e,n),n};const i="di$target",s="di$dependencies";t.serviceRegistry=new Map},1027:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IDecorationService=t.IUnicodeService=t.IOscLinkService=t.IOptionsService=t.ILogService=t.LogLevelEnum=t.IInstantiationService=t.ICharsetService=t.ICoreService=t.ICoreMouseService=t.IBufferService=void 0;const s=i(3727);var n;t.IBufferService=(0,s.createDecorator)("BufferService"),t.ICoreMouseService=(0,s.createDecorator)("CoreMouseService"),t.ICoreService=(0,s.createDecorator)("CoreService"),t.ICharsetService=(0,s.createDecorator)("CharsetService"),t.IInstantiationService=(0,s.createDecorator)("InstantiationService"),function(e){e[e.TRACE=0]="TRACE",e[e.DEBUG=1]="DEBUG",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.OFF=5]="OFF"}(n||(t.LogLevelEnum=n={})),t.ILogService=(0,s.createDecorator)("LogService"),t.IOptionsService=(0,s.createDecorator)("OptionsService"),t.IOscLinkService=(0,s.createDecorator)("OscLinkService"),t.IUnicodeService=(0,s.createDecorator)("UnicodeService"),t.IDecorationService=(0,s.createDecorator)("DecorationService")},6835:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isAndroid=t.isElectron=t.isWebkitWebView=t.isSafari=t.isChrome=t.isWebKit=t.isFirefox=t.onDidChangeFullscreen=t.onDidChangeZoomLevel=void 0,t.addMatchMediaChangeListener=o,t.setZoomLevel=function(e,t){r.INSTANCE.setZoomLevel(e,t)},t.getZoomLevel=function(e){return r.INSTANCE.getZoomLevel(e)},t.getZoomFactor=function(e){return r.INSTANCE.getZoomFactor(e)},t.setZoomFactor=function(e,t){r.INSTANCE.setZoomFactor(e,t)},t.setFullscreen=function(e,t){r.INSTANCE.setFullscreen(e,t)},t.isFullscreen=function(e){return r.INSTANCE.isFullscreen(e)},t.isStandalone=function(){return l},t.isWCOEnabled=function(){return navigator?.windowControlsOverlay?.visible},t.getWCOBoundingRect=function(){return navigator?.windowControlsOverlay?.getTitlebarAreaRect()};const s=i(9199),n=i(5276);class r{constructor(){this.mapWindowIdToZoomLevel=new Map,this._onDidChangeZoomLevel=new n.Emitter,this.onDidChangeZoomLevel=this._onDidChangeZoomLevel.event,this.mapWindowIdToZoomFactor=new Map,this._onDidChangeFullscreen=new n.Emitter,this.onDidChangeFullscreen=this._onDidChangeFullscreen.event,this.mapWindowIdToFullScreen=new Map}static{this.INSTANCE=new r}getZoomLevel(e){return this.mapWindowIdToZoomLevel.get(this.getWindowId(e))??0}setZoomLevel(e,t){if(this.getZoomLevel(t)===e)return;const i=this.getWindowId(t);this.mapWindowIdToZoomLevel.set(i,e),this._onDidChangeZoomLevel.fire(i)}getZoomFactor(e){return this.mapWindowIdToZoomFactor.get(this.getWindowId(e))??1}setZoomFactor(e,t){this.mapWindowIdToZoomFactor.set(this.getWindowId(t),e)}setFullscreen(e,t){if(this.isFullscreen(t)===e)return;const i=this.getWindowId(t);this.mapWindowIdToFullScreen.set(i,e),this._onDidChangeFullscreen.fire(i)}isFullscreen(e){return!!this.mapWindowIdToFullScreen.get(this.getWindowId(e))}getWindowId(e){return e.vscodeWindowId}}function o(e,t,i){"string"==typeof t&&(t=e.matchMedia(t)),t.addEventListener("change",i)}t.onDidChangeZoomLevel=r.INSTANCE.onDidChangeZoomLevel,t.onDidChangeFullscreen=r.INSTANCE.onDidChangeFullscreen;const a="object"==typeof navigator?navigator.userAgent:"";t.isFirefox=a.indexOf("Firefox")>=0,t.isWebKit=a.indexOf("AppleWebKit")>=0,t.isChrome=a.indexOf("Chrome")>=0,t.isSafari=!t.isChrome&&a.indexOf("Safari")>=0,t.isWebkitWebView=!t.isChrome&&!t.isSafari&&t.isWebKit,t.isElectron=a.indexOf("Electron/")>=0,t.isAndroid=a.indexOf("Android")>=0;let l=!1;if("function"==typeof s.mainWindow.matchMedia){const e=s.mainWindow.matchMedia("(display-mode: standalone) or (display-mode: window-controls-overlay)"),t=s.mainWindow.matchMedia("(display-mode: fullscreen)");l=e.matches,o(s.mainWindow,e,(({matches:e})=>{l&&t.matches||(l=e)}))}},467:function(e,t,i){var s=this&&this.__createBinding||(Object.create?function(e,t,i,s){void 0===s&&(s=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,s,n)}:function(e,t,i,s){void 0===s&&(s=i),e[s]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&s(t,e,i);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserFeatures=t.KeyboardSupport=void 0;const o=r(i(6835)),a=i(9199),l=r(i(8973));var h;!function(e){e[e.Always=0]="Always",e[e.FullScreen=1]="FullScreen",e[e.None=2]="None"}(h||(t.KeyboardSupport=h={}));const c="object"==typeof navigator?navigator:{};t.BrowserFeatures={clipboard:{writeText:l.isNative||document.queryCommandSupported&&document.queryCommandSupported("copy")||!!(c&&c.clipboard&&c.clipboard.writeText),readText:l.isNative||!!(c&&c.clipboard&&c.clipboard.readText)},keyboard:l.isNative||o.isStandalone()?h.Always:c.keyboard||o.isSafari?h.FullScreen:h.None,touch:"ontouchstart"in a.mainWindow||c.maxTouchPoints>0,pointerEvents:a.mainWindow.PointerEvent&&("ontouchstart"in a.mainWindow||navigator.maxTouchPoints>0)}},1375:function(e,t,i){var s,n=this&&this.__createBinding||(Object.create?function(e,t,i,s){void 0===s&&(s=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,s,n)}:function(e,t,i,s){void 0===s&&(s=i),e[s]=t[i]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.SafeTriangle=t.DragAndDropObserver=t.ModifierKeyEmitter=t.DetectedFullscreenMode=t.Namespace=t.EventHelper=t.EventType=t.sharedMutationObserver=t.Dimension=t.WindowIntervalTimer=t.scheduleAtNextAnimationFrame=t.runAtThisOrScheduleAtNextAnimationFrame=t.WindowIdleValue=t.addStandardDisposableGenericMouseUpListener=t.addStandardDisposableGenericMouseDownListener=t.addStandardDisposableListener=t.onDidUnregisterWindow=t.onWillUnregisterWindow=t.onDidRegisterWindow=t.hasWindow=t.getWindowById=t.getWindowId=t.getWindowsCount=t.getWindows=t.getDocument=t.getWindow=t.registerWindow=void 0,t.clearNode=function(e){for(;e.firstChild;)e.firstChild.remove()},t.clearNodeRecursively=function e(t){for(;t.firstChild;){const i=t.firstChild;i.remove(),e(i)}},t.addDisposableListener=w,t.addDisposableGenericMouseDownListener=y,t.addDisposableGenericMouseMoveListener=function(e,i,s){return w(e,m.isIOS&&l.BrowserFeatures.pointerEvents?t.EventType.POINTER_MOVE:t.EventType.MOUSE_MOVE,i,s)},t.addDisposableGenericMouseUpListener=L,t.runWhenWindowIdle=function(e,t,i){return(0,u._runWhenIdle)(e,t,i)},t.disposableWindowInterval=function(e,t,i,s){let n=0;const r=e.setInterval((()=>{n++,("number"==typeof s&&n>=s||!0===t())&&o.dispose()}),i),o=(0,g.toDisposable)((()=>{e.clearInterval(r)}));return o},t.measure=function(e,i){return(0,t.scheduleAtNextAnimationFrame)(e,i,1e4)},t.modify=function(e,i){return(0,t.scheduleAtNextAnimationFrame)(e,i,-1e4)},t.addDisposableThrottledListener=function(e,t,i,s,n){return new S(e,t,i,s,n)},t.getComputedStyle=D,t.getClientArea=function e(i,s){const n=(0,t.getWindow)(i),r=n.document;if(i!==r.body)return new I(i.clientWidth,i.clientHeight);if(m.isIOS&&n?.visualViewport)return new I(n.visualViewport.width,n.visualViewport.height);if(n?.innerWidth&&n.innerHeight)return new I(n.innerWidth,n.innerHeight);if(r.body&&r.body.clientWidth&&r.body.clientHeight)return new I(r.body.clientWidth,r.body.clientHeight);if(r.documentElement&&r.documentElement.clientWidth&&r.documentElement.clientHeight)return new I(r.documentElement.clientWidth,r.documentElement.clientHeight);if(s)return e(s);throw new Error("Unable to figure out browser width and height")},t.getTopLeftOffset=O,t.size=function(e,t,i){"number"==typeof t&&(e.style.width=`${t}px`),"number"==typeof i&&(e.style.height=`${i}px`)},t.position=function(e,t,i,s,n,r="absolute"){"number"==typeof t&&(e.style.top=`${t}px`),"number"==typeof i&&(e.style.right=`${i}px`),"number"==typeof s&&(e.style.bottom=`${s}px`),"number"==typeof n&&(e.style.left=`${n}px`),e.style.position=r},t.getDomNodePagePosition=function(e){const i=e.getBoundingClientRect(),s=(0,t.getWindow)(e);return{left:i.left+s.scrollX,top:i.top+s.scrollY,width:i.width,height:i.height}},t.getDomNodeZoomLevel=function(e){let t=e,i=1;do{const e=D(t).zoom;null!=e&&"1"!==e&&(i*=e),t=t.parentElement}while(null!==t&&t!==t.ownerDocument.documentElement);return i},t.getTotalWidth=U,t.getContentWidth=function(e){const t=x.getBorderLeftWidth(e)+x.getBorderRightWidth(e),i=x.getPaddingLeft(e)+x.getPaddingRight(e);return e.offsetWidth-t-i},t.getTotalScrollWidth=k,t.getContentHeight=function(e){const t=x.getBorderTopWidth(e)+x.getBorderBottomWidth(e),i=x.getPaddingTop(e)+x.getPaddingBottom(e);return e.offsetHeight-t-i},t.getTotalHeight=function(e){const t=x.getMarginTop(e)+x.getMarginBottom(e);return e.offsetHeight+t},t.getLargestChildWidth=function(e,t){const i=t.map((t=>Math.max(k(t),U(t))+function(e,t){if(null===e)return 0;const i=O(e),s=O(t);return i.left-s.left}(t,e)||0));return Math.max(...i)},t.isAncestor=P,t.setParentFlowTo=function(e,t){e.dataset[N]=t.id},t.isAncestorUsingFlowTo=function(e,t){let i=e;for(;i;){if(i===t)return!0;if(J(i)){const e=F(i);if(e){i=e;continue}}i=i.parentNode}return!1},t.findParentWithClass=B,t.hasParentWithClass=function(e,t,i){return!!B(e,t,i)},t.isShadowRoot=W,t.isInShadowDOM=function(e){return!!K(e)},t.getShadowRoot=K,t.getActiveElement=H,t.isActiveElement=function(e){return H()===e},t.isAncestorOfActiveElement=function(e){return P(H(),e)},t.isActiveDocument=function(e){return e.ownerDocument===$()},t.getActiveDocument=$,t.getActiveWindow=function(){const e=$();return e.defaultView?.window??v.mainWindow},t.isGlobalStylesheet=function(e){return G.has(e)},t.createStyleSheet2=function(){return new j},t.createStyleSheet=z,t.cloneGlobalStylesheets=function(e){const t=new g.DisposableStore;for(const[i,s]of G)t.add(q(i,s,e));return t},t.createMetaElement=function(e=v.mainWindow.document.head){return V("meta",e)},t.createLinkElement=function(e=v.mainWindow.document.head){return V("link",e)},t.createCSSRule=function e(t,i,s=Y()){if(s&&i){s.sheet?.insertRule(`${t} {${i}}`,0);for(const n of G.get(s)??[])e(t,i,n)}},t.removeCSSRulesContainingSelector=function e(t,i=Y()){if(!i)return;const s=Q(i),n=[];for(let e=0;e<s.length;e++){const i=s[e];Z(i)&&-1!==i.selectorText.indexOf(t)&&n.push(e)}for(let e=n.length-1;e>=0;e--)i.sheet?.deleteRule(n[e]);for(const s of G.get(i)??[])e(t,s)},t.isHTMLElement=J,t.isHTMLAnchorElement=function(e){return e instanceof HTMLAnchorElement||e instanceof(0,t.getWindow)(e).HTMLAnchorElement},t.isHTMLSpanElement=function(e){return e instanceof HTMLSpanElement||e instanceof(0,t.getWindow)(e).HTMLSpanElement},t.isHTMLTextAreaElement=function(e){return e instanceof HTMLTextAreaElement||e instanceof(0,t.getWindow)(e).HTMLTextAreaElement},t.isHTMLInputElement=function(e){return e instanceof HTMLInputElement||e instanceof(0,t.getWindow)(e).HTMLInputElement},t.isHTMLButtonElement=function(e){return e instanceof HTMLButtonElement||e instanceof(0,t.getWindow)(e).HTMLButtonElement},t.isHTMLDivElement=function(e){return e instanceof HTMLDivElement||e instanceof(0,t.getWindow)(e).HTMLDivElement},t.isSVGElement=function(e){return e instanceof SVGElement||e instanceof(0,t.getWindow)(e).SVGElement},t.isMouseEvent=function(e){return e instanceof MouseEvent||e instanceof(0,t.getWindow)(e).MouseEvent},t.isKeyboardEvent=function(e){return e instanceof KeyboardEvent||e instanceof(0,t.getWindow)(e).KeyboardEvent},t.isPointerEvent=function(e){return e instanceof PointerEvent||e instanceof(0,t.getWindow)(e).PointerEvent},t.isDragEvent=function(e){return e instanceof DragEvent||e instanceof(0,t.getWindow)(e).DragEvent},t.isEventLike=function(e){const t=e;return!(!t||"function"!=typeof t.preventDefault||"function"!=typeof t.stopPropagation)},t.saveParentsScrollTop=function(e){const t=[];for(let i=0;e&&e.nodeType===e.ELEMENT_NODE;i++)t[i]=e.scrollTop,e=e.parentNode;return t},t.restoreParentsScrollTop=function(e,t){for(let i=0;e&&e.nodeType===e.ELEMENT_NODE;i++)e.scrollTop!==t[i]&&(e.scrollTop=t[i]),e=e.parentNode},t.trackFocus=function(e){return new ee(e)},t.after=function(e,t){return e.after(t),t},t.append=te,t.prepend=function(e,t){return e.insertBefore(t,e.firstChild),t},t.reset=function(e,...t){e.innerText="",te(e,...t)},t.$=re,t.join=function(e,t){const i=[];return e.forEach(((e,s)=>{s>0&&(t instanceof Node?i.push(t.cloneNode()):i.push(document.createTextNode(t))),i.push(e)})),i},t.setVisibility=function(e,...t){e?oe(...t):ae(...t)},t.show=oe,t.hide=ae,t.removeTabIndexAndUpdateFocus=function(e){if(e&&e.hasAttribute("tabIndex")){if(e.ownerDocument.activeElement===e){const t=function(e){for(;e&&e.nodeType===e.ELEMENT_NODE;){if(J(e)&&e.hasAttribute("tabIndex"))return e;e=e.parentNode}return null}(e.parentElement);t?.focus()}e.removeAttribute("tabindex")}},t.finalHandler=function(e){return t=>{t.preventDefault(),t.stopPropagation(),e(t)}},t.domContentLoaded=function(e){return new Promise((t=>{if("complete"===e.document.readyState||e.document&&null!==e.document.body)t(void 0);else{const i=()=>{e.window.removeEventListener("DOMContentLoaded",i,!1),t()};e.window.addEventListener("DOMContentLoaded",i,!1)}}))},t.computeScreenAwareSize=function(e,t){const i=e.devicePixelRatio*t;return Math.max(1,Math.floor(i))/e.devicePixelRatio},t.windowOpenNoOpener=function(e){v.mainWindow.open(e,"_blank","noopener")},t.windowOpenPopup=function(e){const t=Math.floor(v.mainWindow.screenLeft+v.mainWindow.innerWidth/2-le/2),i=Math.floor(v.mainWindow.screenTop+v.mainWindow.innerHeight/2-he/2);v.mainWindow.open(e,"_blank",`width=${le},height=${he},top=${i},left=${t}`)},t.windowOpenWithSuccess=function(e,t=!0){const i=v.mainWindow.open();return!!i&&(t&&(i.opener=null),i.location.href=e,!0)},t.animate=function(e,i){const s=()=>{i(),n=(0,t.scheduleAtNextAnimationFrame)(e,s)};let n=(0,t.scheduleAtNextAnimationFrame)(e,s);return(0,g.toDisposable)((()=>n.dispose()))},t.asCSSPropertyValue=function(e){return`'${e.replace(/'/g,"%27")}'`},t.asCssValueWithDefault=function e(t,i){if(void 0!==t){const s=t.match(/^\s*var\((.+)\)$/);if(s){const t=s[1].split(",",2);return 2===t.length&&(i=e(t[1].trim(),i)),`var(${t[0]}, ${i})`}return t}return i},t.detectFullscreen=function(e){return e.document.fullscreenElement||e.document.webkitFullscreenElement||e.document.webkitIsFullScreen?{mode:ce.DOCUMENT,guess:!1}:e.innerHeight===e.screen.height?{mode:ce.BROWSER,guess:!1}:(m.isMacintosh||m.isLinux)&&e.outerHeight===e.screen.height&&e.outerWidth===e.screen.width?{mode:ce.BROWSER,guess:!0}:null},t.multibyteAwareBtoa=function(e){return btoa(function(e){const t=new Uint16Array(e.length);for(let i=0;i<t.length;i++)t[i]=e.charCodeAt(i);let i="";const s=new Uint8Array(t.buffer);for(let e=0;e<s.length;e++)i+=String.fromCharCode(s[e]);return i}(e))},t.getCookieValue=function(e){const t=document.cookie.match("(^|[^;]+)\\s*"+e+"\\s*=\\s*([^;]+)");return t?t.pop():void 0},t.h=function(e,...t){let i,s;Array.isArray(t[0])?(i={},s=t[0]):(i=t[0]||{},s=t[1]);const n=_e.exec(e);if(!n||!n.groups)throw new Error("Bad use of h");const r=n.groups.tag||"div",o=document.createElement(r);n.groups.id&&(o.id=n.groups.id);const a=[];if(n.groups.class)for(const e of n.groups.class.split("."))""!==e&&a.push(e);if(void 0!==i.className)for(const e of i.className.split("."))""!==e&&a.push(e);a.length>0&&(o.className=a.join(" "));const l={};if(n.groups.name&&(l[n.groups.name]=o),s)for(const e of s)J(e)?o.appendChild(e):"string"==typeof e?o.append(e):"root"in e&&(Object.assign(l,e),o.appendChild(e.root));for(const[e,t]of Object.entries(i))if("className"!==e)if("style"===e)for(const[e,i]of Object.entries(t))o.style.setProperty(fe(e),"number"==typeof i?i+"px":""+i);else"tabIndex"===e?o.tabIndex=t:o.setAttribute(fe(e),t.toString());return l.root=o,l},t.svgElem=function(e,...t){let i,s;Array.isArray(t[0])?(i={},s=t[0]):(i=t[0]||{},s=t[1]);const n=_e.exec(e);if(!n||!n.groups)throw new Error("Bad use of h");const r=n.groups.tag||"div",o=document.createElementNS("http://www.w3.org/2000/svg",r);n.groups.id&&(o.id=n.groups.id);const a=[];if(n.groups.class)for(const e of n.groups.class.split("."))""!==e&&a.push(e);if(void 0!==i.className)for(const e of i.className.split("."))""!==e&&a.push(e);a.length>0&&(o.className=a.join(" "));const l={};if(n.groups.name&&(l[n.groups.name]=o),s)for(const e of s)J(e)?o.appendChild(e):"string"==typeof e?o.append(e):"root"in e&&(Object.assign(l,e),o.appendChild(e.root));for(const[e,t]of Object.entries(i))if("className"!==e)if("style"===e)for(const[e,i]of Object.entries(t))o.style.setProperty(fe(e),"number"==typeof i?i+"px":""+i);else"tabIndex"===e?o.tabIndex=t:o.setAttribute(fe(e),t.toString());return l.root=o,l},t.copyAttributes=ge,t.trackAttributes=function(e,i,s){ge(e,i,s);const n=new g.DisposableStore;return n.add(t.sharedMutationObserver.observe(e,n,{attributes:!0,attributeFilter:s})((t=>{for(const s of t)"attributes"===s.type&&s.attributeName&&me(e,i,s.attributeName)}))),n};const a=o(i(6835)),l=i(467),h=i(3648),c=i(3838),u=i(2940),d=i(4577),_=o(i(5276)),f=i(1513),g=i(2540),m=o(i(8973)),p=i(6506),v=i(9199),C=i(42);s=function(){const e=new Map;(0,v.ensureCodeWindow)(v.mainWindow,1);const i={window:v.mainWindow,disposables:new g.DisposableStore};e.set(v.mainWindow.vscodeWindowId,i);const s=new _.Emitter,n=new _.Emitter,r=new _.Emitter;return{onDidRegisterWindow:s.event,onWillUnregisterWindow:r.event,onDidUnregisterWindow:n.event,registerWindow(i){if(e.has(i.vscodeWindowId))return g.Disposable.None;const o=new g.DisposableStore,a={window:i,disposables:o.add(new g.DisposableStore)};return e.set(i.vscodeWindowId,a),o.add((0,g.toDisposable)((()=>{e.delete(i.vscodeWindowId),n.fire(i)}))),o.add(w(i,t.EventType.BEFORE_UNLOAD,(()=>{r.fire(i)}))),s.fire(a),o},getWindows:()=>e.values(),getWindowsCount:()=>e.size,getWindowId:e=>e.vscodeWindowId,hasWindow:t=>e.has(t),getWindowById:function(t,s){return("number"==typeof t?e.get(t):void 0)??(s?i:void 0)},getWindow(e){const t=e;if(t?.ownerDocument?.defaultView)return t.ownerDocument.defaultView.window;const i=e;return i?.view?i.view.window:v.mainWindow},getDocument(e){const i=e;return(0,t.getWindow)(i).document}}}(),t.registerWindow=s.registerWindow,t.getWindow=s.getWindow,t.getDocument=s.getDocument,t.getWindows=s.getWindows,t.getWindowsCount=s.getWindowsCount,t.getWindowId=s.getWindowId,t.getWindowById=s.getWindowById,t.hasWindow=s.hasWindow,t.onDidRegisterWindow=s.onDidRegisterWindow,t.onWillUnregisterWindow=s.onWillUnregisterWindow,t.onDidUnregisterWindow=s.onDidUnregisterWindow;class E{constructor(e,t,i,s){this._node=e,this._type=t,this._handler=i,this._options=s||!1,this._node.addEventListener(this._type,this._handler,this._options)}dispose(){this._handler&&(this._node.removeEventListener(this._type,this._handler,this._options),this._node=null,this._handler=null)}}function w(e,t,i,s){return new E(e,t,i,s)}function b(e,t){return function(i){return t(new c.StandardMouseEvent(e,i))}}function y(e,i,s){return w(e,m.isIOS&&l.BrowserFeatures.pointerEvents?t.EventType.POINTER_DOWN:t.EventType.MOUSE_DOWN,i,s)}function L(e,i,s){return w(e,m.isIOS&&l.BrowserFeatures.pointerEvents?t.EventType.POINTER_UP:t.EventType.MOUSE_UP,i,s)}t.addStandardDisposableListener=function(e,i,s,n){let r=s;return"click"===i||"mousedown"===i||"contextmenu"===i?r=b((0,t.getWindow)(e),s):"keydown"!==i&&"keypress"!==i&&"keyup"!==i||(r=function(e){return function(t){return e(new h.StandardKeyboardEvent(t))}}(s)),w(e,i,r,n)},t.addStandardDisposableGenericMouseDownListener=function(e,i,s){return y(e,b((0,t.getWindow)(e),i),s)},t.addStandardDisposableGenericMouseUpListener=function(e,i,s){return L(e,b((0,t.getWindow)(e),i),s)};class A extends u.AbstractIdleValue{constructor(e,t){super(e,t)}}t.WindowIdleValue=A;class R extends u.IntervalTimer{constructor(e){super(),this.defaultTarget=e&&(0,t.getWindow)(e)}cancelAndSet(e,t,i){return super.cancelAndSet(e,t,i??this.defaultTarget)}}t.WindowIntervalTimer=R;class T{constructor(e,t=0){this._runner=e,this.priority=t,this._canceled=!1}dispose(){this._canceled=!0}execute(){if(!this._canceled)try{this._runner()}catch(e){(0,d.onUnexpectedError)(e)}}static sort(e,t){return t.priority-e.priority}}!function(){const e=new Map,i=new Map,s=new Map,n=new Map;t.scheduleAtNextAnimationFrame=(r,o,a=0)=>{const l=(0,t.getWindowId)(r),h=new T(o,a);let c=e.get(l);return c||(c=[],e.set(l,c)),c.push(h),s.get(l)||(s.set(l,!0),r.requestAnimationFrame((()=>(t=>{s.set(t,!1);const r=e.get(t)??[];for(i.set(t,r),e.set(t,[]),n.set(t,!0);r.length>0;)r.sort(T.sort),r.shift().execute();n.set(t,!1)})(l)))),h},t.runAtThisOrScheduleAtNextAnimationFrame=(e,s,r)=>{const o=(0,t.getWindowId)(e);if(n.get(o)){const e=new T(s,r);let t=i.get(o);return t||(t=[],i.set(o,t)),t.push(e),e}return(0,t.scheduleAtNextAnimationFrame)(e,s,r)}}();const M=function(e,t){return t};class S extends g.Disposable{constructor(e,t,i,s=M,n=8){super();let r=null,o=0;const a=this._register(new u.TimeoutTimer),l=()=>{o=(new Date).getTime(),i(r),r=null};this._register(w(e,t,(e=>{r=s(r,e);const t=(new Date).getTime()-o;t>=n?(a.cancel(),l()):a.setIfNotSet(l,n-t)})))}}function D(e){return(0,t.getWindow)(e).getComputedStyle(e,null)}class x{static convertToPixels(e,t){return parseFloat(t)||0}static getDimension(e,t,i){const s=D(e),n=s?s.getPropertyValue(t):"0";return x.convertToPixels(e,n)}static getBorderLeftWidth(e){return x.getDimension(e,"border-left-width","borderLeftWidth")}static getBorderRightWidth(e){return x.getDimension(e,"border-right-width","borderRightWidth")}static getBorderTopWidth(e){return x.getDimension(e,"border-top-width","borderTopWidth")}static getBorderBottomWidth(e){return x.getDimension(e,"border-bottom-width","borderBottomWidth")}static getPaddingLeft(e){return x.getDimension(e,"padding-left","paddingLeft")}static getPaddingRight(e){return x.getDimension(e,"padding-right","paddingRight")}static getPaddingTop(e){return x.getDimension(e,"padding-top","paddingTop")}static getPaddingBottom(e){return x.getDimension(e,"padding-bottom","paddingBottom")}static getMarginLeft(e){return x.getDimension(e,"margin-left","marginLeft")}static getMarginTop(e){return x.getDimension(e,"margin-top","marginTop")}static getMarginRight(e){return x.getDimension(e,"margin-right","marginRight")}static getMarginBottom(e){return x.getDimension(e,"margin-bottom","marginBottom")}}class I{static{this.None=new I(0,0)}constructor(e,t){this.width=e,this.height=t}with(e=this.width,t=this.height){return e!==this.width||t!==this.height?new I(e,t):this}static is(e){return"object"==typeof e&&"number"==typeof e.height&&"number"==typeof e.width}static lift(e){return e instanceof I?e:new I(e.width,e.height)}static equals(e,t){return e===t||!(!e||!t)&&e.width===t.width&&e.height===t.height}}function O(e){let t=e.offsetParent,i=e.offsetTop,s=e.offsetLeft;for(;null!==(e=e.parentNode)&&e!==e.ownerDocument.body&&e!==e.ownerDocument.documentElement;){i-=e.scrollTop;const n=W(e)?null:D(e);n&&(s-="rtl"!==n.direction?e.scrollLeft:-e.scrollLeft),e===t&&(s+=x.getBorderLeftWidth(e),i+=x.getBorderTopWidth(e),i+=e.offsetTop,s+=e.offsetLeft,t=e.offsetParent)}return{left:s,top:i}}function U(e){const t=x.getMarginLeft(e)+x.getMarginRight(e);return e.offsetWidth+t}function k(e){const t=x.getMarginLeft(e)+x.getMarginRight(e);return e.scrollWidth+t}function P(e,t){return Boolean(t?.contains(e))}t.Dimension=I;const N="parentFlowToElementId";function F(e){const t=e.dataset[N];return"string"==typeof t?e.ownerDocument.getElementById(t):null}function B(e,t,i){for(;e&&e.nodeType===e.ELEMENT_NODE;){if(e.classList.contains(t))return e;if(i)if("string"==typeof i){if(e.classList.contains(i))return null}else if(e===i)return null;e=e.parentNode}return null}function W(e){return e&&!!e.host&&!!e.mode}function K(e){for(;e.parentNode;){if(e===e.ownerDocument?.body)return null;e=e.parentNode}return W(e)?e:null}function H(){let e=$().activeElement;for(;e?.shadowRoot;)e=e.shadowRoot.activeElement;return e}function $(){return(0,t.getWindowsCount)()<=1?v.mainWindow.document:Array.from((0,t.getWindows)()).map((({window:e})=>e.document)).find((e=>e.hasFocus()))??v.mainWindow.document}const G=new Map;class j{constructor(){this._currentCssStyle="",this._styleSheet=void 0}setStyle(e){e!==this._currentCssStyle&&(this._currentCssStyle=e,this._styleSheet?this._styleSheet.innerText=e:this._styleSheet=z(v.mainWindow.document.head,(t=>t.innerText=e)))}dispose(){this._styleSheet&&(this._styleSheet.remove(),this._styleSheet=void 0)}}function z(e=v.mainWindow.document.head,i,s){const n=document.createElement("style");if(n.type="text/css",n.media="screen",i?.(n),e.appendChild(n),s&&s.add((0,g.toDisposable)((()=>n.remove()))),e===v.mainWindow.document.head){const e=new Set;G.set(n,e);for(const{window:i,disposables:r}of(0,t.getWindows)()){if(i===v.mainWindow)continue;const t=r.add(q(n,e,i));s?.add(t)}}return n}function q(e,i,s){const n=new g.DisposableStore,r=e.cloneNode(!0);s.document.head.appendChild(r),n.add((0,g.toDisposable)((()=>r.remove())));for(const t of Q(e))r.sheet?.insertRule(t.cssText,r.sheet?.cssRules.length);return n.add(t.sharedMutationObserver.observe(e,n,{childList:!0})((()=>{r.textContent=e.textContent}))),i.add(r),n.add((0,g.toDisposable)((()=>i.delete(r)))),n}function V(e,t=v.mainWindow.document.head){const i=document.createElement(e);return t.appendChild(i),i}t.sharedMutationObserver=new class{constructor(){this.mutationObservers=new Map}observe(e,t,i){let s=this.mutationObservers.get(e);s||(s=new Map,this.mutationObservers.set(e,s));const n=(0,p.hash)(i);let r=s.get(n);if(r)r.users+=1;else{const o=new _.Emitter,a=new MutationObserver((e=>o.fire(e)));a.observe(e,i);const l=r={users:1,observer:a,onDidMutate:o.event};t.add((0,g.toDisposable)((()=>{l.users-=1,0===l.users&&(o.dispose(),a.disconnect(),s?.delete(n),0===s?.size&&this.mutationObservers.delete(e))}))),s.set(n,r)}return r.onDidMutate}};let X=null;function Y(){return X||(X=z()),X}function Q(e){return e?.sheet?.rules?e.sheet.rules:e?.sheet?.cssRules?e.sheet.cssRules:[]}function Z(e){return"string"==typeof e.selectorText}function J(e){return e instanceof HTMLElement||e instanceof(0,t.getWindow)(e).HTMLElement}t.EventType={CLICK:"click",AUXCLICK:"auxclick",DBLCLICK:"dblclick",MOUSE_UP:"mouseup",MOUSE_DOWN:"mousedown",MOUSE_OVER:"mouseover",MOUSE_MOVE:"mousemove",MOUSE_OUT:"mouseout",MOUSE_ENTER:"mouseenter",MOUSE_LEAVE:"mouseleave",MOUSE_WHEEL:"wheel",POINTER_UP:"pointerup",POINTER_DOWN:"pointerdown",POINTER_MOVE:"pointermove",POINTER_LEAVE:"pointerleave",CONTEXT_MENU:"contextmenu",WHEEL:"wheel",KEY_DOWN:"keydown",KEY_PRESS:"keypress",KEY_UP:"keyup",LOAD:"load",BEFORE_UNLOAD:"beforeunload",UNLOAD:"unload",PAGE_SHOW:"pageshow",PAGE_HIDE:"pagehide",PASTE:"paste",ABORT:"abort",ERROR:"error",RESIZE:"resize",SCROLL:"scroll",FULLSCREEN_CHANGE:"fullscreenchange",WK_FULLSCREEN_CHANGE:"webkitfullscreenchange",SELECT:"select",CHANGE:"change",SUBMIT:"submit",RESET:"reset",FOCUS:"focus",FOCUS_IN:"focusin",FOCUS_OUT:"focusout",BLUR:"blur",INPUT:"input",STORAGE:"storage",DRAG_START:"dragstart",DRAG:"drag",DRAG_ENTER:"dragenter",DRAG_LEAVE:"dragleave",DRAG_OVER:"dragover",DROP:"drop",DRAG_END:"dragend",ANIMATION_START:a.isWebKit?"webkitAnimationStart":"animationstart",ANIMATION_END:a.isWebKit?"webkitAnimationEnd":"animationend",ANIMATION_ITERATION:a.isWebKit?"webkitAnimationIteration":"animationiteration"},t.EventHelper={stop:(e,t)=>(e.preventDefault(),t&&e.stopPropagation(),e)};class ee extends g.Disposable{static hasFocusWithin(e){if(J(e)){const t=K(e);return P(t?t.activeElement:e.ownerDocument.activeElement,e)}{const t=e;return P(t.document.activeElement,t.document)}}constructor(e){super(),this._onDidFocus=this._register(new _.Emitter),this.onDidFocus=this._onDidFocus.event,this._onDidBlur=this._register(new _.Emitter),this.onDidBlur=this._onDidBlur.event;let i=ee.hasFocusWithin(e),s=!1;const n=()=>{s=!1,i||(i=!0,this._onDidFocus.fire())},r=()=>{i&&(s=!0,(J(e)?(0,t.getWindow)(e):e).setTimeout((()=>{s&&(s=!1,i=!1,this._onDidBlur.fire())}),0))};this._refreshStateHandler=()=>{ee.hasFocusWithin(e)!==i&&(i?r():n())},this._register(w(e,t.EventType.FOCUS,n,!0)),this._register(w(e,t.EventType.BLUR,r,!0)),J(e)&&(this._register(w(e,t.EventType.FOCUS_IN,(()=>this._refreshStateHandler()))),this._register(w(e,t.EventType.FOCUS_OUT,(()=>this._refreshStateHandler()))))}refreshState(){this._refreshStateHandler()}}function te(e,...t){if(e.append(...t),1===t.length&&"string"!=typeof t[0])return t[0]}const ie=/([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;var se;function ne(e,t,i,...s){const n=ie.exec(t);if(!n)throw new Error("Bad use of emmet");const r=n[1]||"div";let o;return o=e!==se.HTML?document.createElementNS(e,r):document.createElement(r),n[3]&&(o.id=n[3]),n[4]&&(o.className=n[4].replace(/\./g," ").trim()),i&&Object.entries(i).forEach((([e,t])=>{void 0!==t&&(/^on\w+$/.test(e)?o[e]=t:"selected"===e?t&&o.setAttribute(e,"true"):o.setAttribute(e,t))})),o.append(...s),o}function re(e,t,...i){return ne(se.HTML,e,t,...i)}function oe(...e){for(const t of e)t.style.display="",t.removeAttribute("aria-hidden")}function ae(...e){for(const t of e)t.style.display="none",t.setAttribute("aria-hidden","true")}!function(e){e.HTML="http://www.w3.org/1999/xhtml",e.SVG="http://www.w3.org/2000/svg"}(se||(t.Namespace=se={})),re.SVG=function(e,t,...i){return ne(se.SVG,e,t,...i)};const le=780,he=640;var ce;!function(e){e[e.DOCUMENT=1]="DOCUMENT",e[e.BROWSER=2]="BROWSER"}(ce||(t.DetectedFullscreenMode=ce={}));class ue extends _.Emitter{constructor(){super(),this._subscriptions=new g.DisposableStore,this._keyStatus={altKey:!1,shiftKey:!1,ctrlKey:!1,metaKey:!1},this._subscriptions.add(_.Event.runAndSubscribe(t.onDidRegisterWindow,(({window:e,disposables:t})=>this.registerListeners(e,t)),{window:v.mainWindow,disposables:this._subscriptions}))}registerListeners(e,t){t.add(w(e,"keydown",(e=>{if(e.defaultPrevented)return;const t=new h.StandardKeyboardEvent(e);if(t.keyCode!==f.KeyCode.Alt||!e.repeat){if(e.altKey&&!this._keyStatus.altKey)this._keyStatus.lastKeyPressed="alt";else if(e.ctrlKey&&!this._keyStatus.ctrlKey)this._keyStatus.lastKeyPressed="ctrl";else if(e.metaKey&&!this._keyStatus.metaKey)this._keyStatus.lastKeyPressed="meta";else if(e.shiftKey&&!this._keyStatus.shiftKey)this._keyStatus.lastKeyPressed="shift";else{if(t.keyCode===f.KeyCode.Alt)return;this._keyStatus.lastKeyPressed=void 0}this._keyStatus.altKey=e.altKey,this._keyStatus.ctrlKey=e.ctrlKey,this._keyStatus.metaKey=e.metaKey,this._keyStatus.shiftKey=e.shiftKey,this._keyStatus.lastKeyPressed&&(this._keyStatus.event=e,this.fire(this._keyStatus))}}),!0)),t.add(w(e,"keyup",(e=>{e.defaultPrevented||(!e.altKey&&this._keyStatus.altKey?this._keyStatus.lastKeyReleased="alt":!e.ctrlKey&&this._keyStatus.ctrlKey?this._keyStatus.lastKeyReleased="ctrl":!e.metaKey&&this._keyStatus.metaKey?this._keyStatus.lastKeyReleased="meta":!e.shiftKey&&this._keyStatus.shiftKey?this._keyStatus.lastKeyReleased="shift":this._keyStatus.lastKeyReleased=void 0,this._keyStatus.lastKeyPressed!==this._keyStatus.lastKeyReleased&&(this._keyStatus.lastKeyPressed=void 0),this._keyStatus.altKey=e.altKey,this._keyStatus.ctrlKey=e.ctrlKey,this._keyStatus.metaKey=e.metaKey,this._keyStatus.shiftKey=e.shiftKey,this._keyStatus.lastKeyReleased&&(this._keyStatus.event=e,this.fire(this._keyStatus)))}),!0)),t.add(w(e.document.body,"mousedown",(()=>{this._keyStatus.lastKeyPressed=void 0}),!0)),t.add(w(e.document.body,"mouseup",(()=>{this._keyStatus.lastKeyPressed=void 0}),!0)),t.add(w(e.document.body,"mousemove",(e=>{e.buttons&&(this._keyStatus.lastKeyPressed=void 0)}),!0)),t.add(w(e,"blur",(()=>{this.resetKeyStatus()})))}get keyStatus(){return this._keyStatus}get isModifierPressed(){return this._keyStatus.altKey||this._keyStatus.ctrlKey||this._keyStatus.metaKey||this._keyStatus.shiftKey}resetKeyStatus(){this.doResetKeyStatus(),this.fire(this._keyStatus)}doResetKeyStatus(){this._keyStatus={altKey:!1,shiftKey:!1,ctrlKey:!1,metaKey:!1}}static getInstance(){return ue.instance||(ue.instance=new ue),ue.instance}dispose(){super.dispose(),this._subscriptions.dispose()}}t.ModifierKeyEmitter=ue;class de extends g.Disposable{constructor(e,t){super(),this.element=e,this.callbacks=t,this.counter=0,this.dragStartTime=0,this.registerListeners()}registerListeners(){this.callbacks.onDragStart&&this._register(w(this.element,t.EventType.DRAG_START,(e=>{this.callbacks.onDragStart?.(e)}))),this.callbacks.onDrag&&this._register(w(this.element,t.EventType.DRAG,(e=>{this.callbacks.onDrag?.(e)}))),this._register(w(this.element,t.EventType.DRAG_ENTER,(e=>{this.counter++,this.dragStartTime=e.timeStamp,this.callbacks.onDragEnter?.(e)}))),this._register(w(this.element,t.EventType.DRAG_OVER,(e=>{e.preventDefault(),this.callbacks.onDragOver?.(e,e.timeStamp-this.dragStartTime)}))),this._register(w(this.element,t.EventType.DRAG_LEAVE,(e=>{this.counter--,0===this.counter&&(this.dragStartTime=0,this.callbacks.onDragLeave?.(e))}))),this._register(w(this.element,t.EventType.DRAG_END,(e=>{this.counter=0,this.dragStartTime=0,this.callbacks.onDragEnd?.(e)}))),this._register(w(this.element,t.EventType.DROP,(e=>{this.counter=0,this.dragStartTime=0,this.callbacks.onDrop?.(e)})))}}t.DragAndDropObserver=de;const _e=/(?<tag>[\w\-]+)?(?:#(?<id>[\w\-]+))?(?<class>(?:\.(?:[\w\-]+))*)(?:@(?<name>(?:[\w\_])+))?/;function fe(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function ge(e,t,i){for(const{name:s,value:n}of e.attributes)i&&!i.includes(s)||t.setAttribute(s,n)}function me(e,t,i){const s=e.getAttribute(i);s?t.setAttribute(i,s):t.removeAttribute(i)}t.SafeTriangle=class{constructor(e,t,i){this.originX=e,this.originY=t,this.triangles=[];const{top:s,left:n,right:r,bottom:o}=i.getBoundingClientRect(),a=this.triangles;let l=0;a[l++]=n,a[l++]=s,a[l++]=r,a[l++]=s,a[l++]=n,a[l++]=s,a[l++]=n,a[l++]=o,a[l++]=r,a[l++]=s,a[l++]=r,a[l++]=o,a[l++]=n,a[l++]=o,a[l++]=r,a[l++]=o}contains(e,t){const{triangles:i,originX:s,originY:n}=this;for(let r=0;r<4;r++)if((0,C.isPointWithinTriangle)(e,t,s,n,i[2*r],i[2*r+1],i[2*r+2],i[2*r+3]))return!0;return!1}}},9275:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IframeUtils=void 0,t.parentOriginHash=async function(e,t){if(!crypto.subtle)throw new Error("'crypto.subtle' is not available so webviews will not work. This is likely because the editor is not running in a secure context (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");const i=JSON.stringify({parentOrigin:e,salt:t}),s=(new TextEncoder).encode(i);return function(e){const t=Array.from(new Uint8Array(e)).map((e=>e.toString(16).padStart(2,"0"))).join("");return BigInt(`0x${t}`).toString(32).padStart(52,"0")}(await crypto.subtle.digest("sha-256",s))};const i=new WeakMap;function s(e){if(!e.parent||e.parent===e)return null;try{const t=e.location,i=e.parent.location;if("null"!==t.origin&&"null"!==i.origin&&t.origin!==i.origin)return null}catch(e){return null}return e.parent}t.IframeUtils=class{static getSameOriginWindowChain(e){let t=i.get(e);if(!t){t=[],i.set(e,t);let n,r=e;do{n=s(r),n?t.push({window:new WeakRef(r),iframeElement:r.frameElement||null}):t.push({window:new WeakRef(r),iframeElement:null}),r=n}while(r)}return t.slice(0)}static getPositionOfChildWindowRelativeToAncestorWindow(e,t){if(!t||e===t)return{top:0,left:0};let i=0,s=0;const n=this.getSameOriginWindowChain(e);for(const e of n){const n=e.window.deref();if(i+=n?.scrollY??0,s+=n?.scrollX??0,n===t)break;if(!e.iframeElement)break;const r=e.iframeElement.getBoundingClientRect();i+=r.top,s+=r.left}return{top:i,left:s}}}},3648:function(e,t,i){var s=this&&this.__createBinding||(Object.create?function(e,t,i,s){void 0===s&&(s=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,s,n)}:function(e,t,i,s){void 0===s&&(s=i),e[s]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&s(t,e,i);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.StandardKeyboardEvent=void 0,t.printKeyboardEvent=function(e){const t=[];return e.ctrlKey&&t.push("ctrl"),e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.metaKey&&t.push("meta"),`modifiers: [${t.join(",")}], code: ${e.code}, keyCode: ${e.keyCode}, key: ${e.key}`},t.printStandardKeyboardEvent=function(e){const t=[];return e.ctrlKey&&t.push("ctrl"),e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.metaKey&&t.push("meta"),`modifiers: [${t.join(",")}], code: ${e.code}, keyCode: ${e.keyCode} ('${a.KeyCodeUtils.toString(e.keyCode)}')`};const o=r(i(6835)),a=i(1513),l=i(7797),h=r(i(8973)),c=h.isMacintosh?a.KeyMod.WinCtrl:a.KeyMod.CtrlCmd,u=a.KeyMod.Alt,d=a.KeyMod.Shift,_=h.isMacintosh?a.KeyMod.CtrlCmd:a.KeyMod.WinCtrl;t.StandardKeyboardEvent=class{constructor(e){this._standardKeyboardEventBrand=!0;const t=e;this.browserEvent=t,this.target=t.target,this.ctrlKey=t.ctrlKey,this.shiftKey=t.shiftKey,this.altKey=t.altKey,this.metaKey=t.metaKey,this.altGraphKey=t.getModifierState?.("AltGraph"),this.keyCode=function(e){if(e.charCode){const t=String.fromCharCode(e.charCode).toUpperCase();return a.KeyCodeUtils.fromString(t)}const t=e.keyCode;if(3===t)return a.KeyCode.PauseBreak;if(o.isFirefox)switch(t){case 59:return a.KeyCode.Semicolon;case 60:if(h.isLinux)return a.KeyCode.IntlBackslash;break;case 61:return a.KeyCode.Equal;case 107:return a.KeyCode.NumpadAdd;case 109:return a.KeyCode.NumpadSubtract;case 173:return a.KeyCode.Minus;case 224:if(h.isMacintosh)return a.KeyCode.Meta}else if(o.isWebKit){if(h.isMacintosh&&93===t)return a.KeyCode.Meta;if(!h.isMacintosh&&92===t)return a.KeyCode.Meta}return a.EVENT_KEY_CODE_MAP[t]||a.KeyCode.Unknown}(t),this.code=t.code,this.ctrlKey=this.ctrlKey||this.keyCode===a.KeyCode.Ctrl,this.altKey=this.altKey||this.keyCode===a.KeyCode.Alt,this.shiftKey=this.shiftKey||this.keyCode===a.KeyCode.Shift,this.metaKey=this.metaKey||this.keyCode===a.KeyCode.Meta,this._asKeybinding=this._computeKeybinding(),this._asKeyCodeChord=this._computeKeyCodeChord()}preventDefault(){this.browserEvent&&this.browserEvent.preventDefault&&this.browserEvent.preventDefault()}stopPropagation(){this.browserEvent&&this.browserEvent.stopPropagation&&this.browserEvent.stopPropagation()}toKeyCodeChord(){return this._asKeyCodeChord}equals(e){return this._asKeybinding===e}_computeKeybinding(){let e=a.KeyCode.Unknown;this.keyCode!==a.KeyCode.Ctrl&&this.keyCode!==a.KeyCode.Shift&&this.keyCode!==a.KeyCode.Alt&&this.keyCode!==a.KeyCode.Meta&&(e=this.keyCode);let t=0;return this.ctrlKey&&(t|=c),this.altKey&&(t|=u),this.shiftKey&&(t|=d),this.metaKey&&(t|=_),t|=e,t}_computeKeyCodeChord(){let e=a.KeyCode.Unknown;return this.keyCode!==a.KeyCode.Ctrl&&this.keyCode!==a.KeyCode.Shift&&this.keyCode!==a.KeyCode.Alt&&this.keyCode!==a.KeyCode.Meta&&(e=this.keyCode),new l.KeyCodeChord(this.ctrlKey,this.shiftKey,this.altKey,this.metaKey,e)}}},3838:function(e,t,i){var s=this&&this.__createBinding||(Object.create?function(e,t,i,s){void 0===s&&(s=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,s,n)}:function(e,t,i,s){void 0===s&&(s=i),e[s]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&s(t,e,i);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.StandardWheelEvent=t.DragMouseEvent=t.StandardMouseEvent=void 0;const o=r(i(6835)),a=i(9275),l=r(i(8973));class h{constructor(e,t){this.timestamp=Date.now(),this.browserEvent=t,this.leftButton=0===t.button,this.middleButton=1===t.button,this.rightButton=2===t.button,this.buttons=t.buttons,this.target=t.target,this.detail=t.detail||1,"dblclick"===t.type&&(this.detail=2),this.ctrlKey=t.ctrlKey,this.shiftKey=t.shiftKey,this.altKey=t.altKey,this.metaKey=t.metaKey,"number"==typeof t.pageX?(this.posx=t.pageX,this.posy=t.pageY):(this.posx=t.clientX+this.target.ownerDocument.body.scrollLeft+this.target.ownerDocument.documentElement.scrollLeft,this.posy=t.clientY+this.target.ownerDocument.body.scrollTop+this.target.ownerDocument.documentElement.scrollTop);const i=a.IframeUtils.getPositionOfChildWindowRelativeToAncestorWindow(e,t.view);this.posx-=i.left,this.posy-=i.top}preventDefault(){this.browserEvent.preventDefault()}stopPropagation(){this.browserEvent.stopPropagation()}}t.StandardMouseEvent=h,t.DragMouseEvent=class extends h{constructor(e,t){super(e,t),this.dataTransfer=t.dataTransfer}},t.StandardWheelEvent=class{constructor(e,t=0,i=0){this.browserEvent=e||null,this.target=e?e.target||e.targetNode||e.srcElement:null,this.deltaY=i,this.deltaX=t;let s=!1;if(o.isChrome){const e=navigator.userAgent.match(/Chrome\/(\d+)/);s=(e?parseInt(e[1]):123)<=122}if(e){const t=e,i=e,n=e.view?.devicePixelRatio||1;if(void 0!==t.wheelDeltaY)this.deltaY=s?t.wheelDeltaY/(120*n):t.wheelDeltaY/120;else if(void 0!==i.VERTICAL_AXIS&&i.axis===i.VERTICAL_AXIS)this.deltaY=-i.detail/3;else if("wheel"===e.type){const t=e;t.deltaMode===t.DOM_DELTA_LINE?o.isFirefox&&!l.isMacintosh?this.deltaY=-e.deltaY/3:this.deltaY=-e.deltaY:this.deltaY=-e.deltaY/40}if(void 0!==t.wheelDeltaX)o.isSafari&&l.isWindows?this.deltaX=-t.wheelDeltaX/120:this.deltaX=s?t.wheelDeltaX/(120*n):t.wheelDeltaX/120;else if(void 0!==i.HORIZONTAL_AXIS&&i.axis===i.HORIZONTAL_AXIS)this.deltaX=-e.detail/3;else if("wheel"===e.type){const t=e;t.deltaMode===t.DOM_DELTA_LINE?o.isFirefox&&!l.isMacintosh?this.deltaX=-e.deltaX/3:this.deltaX=-e.deltaX:this.deltaX=-e.deltaX/40}0===this.deltaY&&0===this.deltaX&&e.wheelDelta&&(this.deltaY=s?e.wheelDelta/(120*n):e.wheelDelta/120)}}preventDefault(){this.browserEvent?.preventDefault()}stopPropagation(){this.browserEvent?.stopPropagation()}}},9199:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.mainWindow=void 0,t.ensureCodeWindow=function(e,t){},t.mainWindow="object"==typeof window?window:globalThis},6732:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Permutation=t.CallbackIterable=t.ArrayQueue=t.booleanComparator=t.numberComparator=t.CompareResult=void 0,t.tail=function(e,t=0){return e[e.length-(1+t)]},t.tail2=function(e){if(0===e.length)throw new Error("Invalid tail call");return[e.slice(0,e.length-1),e[e.length-1]]},t.equals=function(e,t,i=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;if(e.length!==t.length)return!1;for(let s=0,n=e.length;s<n;s++)if(!i(e[s],t[s]))return!1;return!0},t.removeFastWithoutKeepingOrder=function(e,t){const i=e.length-1;t<i&&(e[t]=e[i]),e.pop()},t.binarySearch=function(e,t,i){return r(e.length,(s=>i(e[s],t)))},t.binarySearch2=r,t.quickSelect=function e(t,i,s){if((t|=0)>=i.length)throw new TypeError("invalid index");const n=i[Math.floor(i.length*Math.random())],r=[],o=[],a=[];for(const e of i){const t=s(e,n);t<0?r.push(e):t>0?o.push(e):a.push(e)}return t<r.length?e(t,r,s):t<r.length+a.length?a[0]:e(t-(r.length+a.length),o,s)},t.groupBy=function(e,t){const i=[];let s;for(const n of e.slice(0).sort(t))s&&0===t(s[0],n)?s.push(n):(s=[n],i.push(s));return i},t.groupAdjacentBy=function*(e,t){let i,s;for(const n of e)void 0!==s&&t(s,n)?i.push(n):(i&&(yield i),i=[n]),s=n;i&&(yield i)},t.forEachAdjacent=function(e,t){for(let i=0;i<=e.length;i++)t(0===i?void 0:e[i-1],i===e.length?void 0:e[i])},t.forEachWithNeighbors=function(e,t){for(let i=0;i<e.length;i++)t(0===i?void 0:e[i-1],e[i],i+1===e.length?void 0:e[i+1])},t.sortedDiff=o,t.delta=function(e,t,i){const s=o(e,t,i),n=[],r=[];for(const t of s)n.push(...e.slice(t.start,t.start+t.deleteCount)),r.push(...t.toInsert);return{removed:n,added:r}},t.top=function(e,t,i){if(0===i)return[];const s=e.slice(0,i).sort(t);return a(e,t,s,i,e.length),s},t.topAsync=function(e,t,i,n,r){return 0===i?Promise.resolve([]):new Promise(((o,l)=>{(async()=>{const o=e.length,l=e.slice(0,i).sort(t);for(let h=i,c=Math.min(i+n,o);h<o;h=c,c=Math.min(c+n,o)){if(h>i&&await new Promise((e=>setTimeout(e))),r&&r.isCancellationRequested)throw new s.CancellationError;a(e,t,l,h,c)}return l})().then(o,l)}))},t.coalesce=function(e){return e.filter((e=>!!e))},t.coalesceInPlace=function(e){let t=0;for(let i=0;i<e.length;i++)e[i]&&(e[t]=e[i],t+=1);e.length=t},t.move=function(e,t,i){e.splice(i,0,e.splice(t,1)[0])},t.isFalsyOrEmpty=function(e){return!Array.isArray(e)||0===e.length},t.isNonEmptyArray=function(e){return Array.isArray(e)&&e.length>0},t.distinct=function(e,t=e=>e){const i=new Set;return e.filter((e=>{const s=t(e);return!i.has(s)&&(i.add(s),!0)}))},t.uniqueFilter=function(e){const t=new Set;return i=>{const s=e(i);return!t.has(s)&&(t.add(s),!0)}},t.firstOrDefault=function(e,t){return e.length>0?e[0]:t},t.lastOrDefault=function(e,t){return e.length>0?e[e.length-1]:t},t.commonPrefixLength=function(e,t,i=(e,t)=>e===t){let s=0;for(let n=0,r=Math.min(e.length,t.length);n<r&&i(e[n],t[n]);n++)s++;return s},t.range=function(e,t){let i="number"==typeof t?e:0;"number"==typeof t?i=e:(i=0,t=e);const s=[];if(i<=t)for(let e=i;e<t;e++)s.push(e);else for(let e=i;e>t;e--)s.push(e);return s},t.index=function(e,t,i){return e.reduce(((e,s)=>(e[t(s)]=i?i(s):s,e)),Object.create(null))},t.insert=function(e,t){return e.push(t),()=>l(e,t)},t.remove=l,t.arrayInsert=function(e,t,i){const s=e.slice(0,t),n=e.slice(t);return s.concat(i,n)},t.shuffle=function(e,t){let i;if("number"==typeof t){let e=t;i=()=>{const t=179426549*Math.sin(e++);return t-Math.floor(t)}}else i=Math.random;for(let t=e.length-1;t>0;t-=1){const s=Math.floor(i()*(t+1)),n=e[t];e[t]=e[s],e[s]=n}},t.pushToStart=function(e,t){const i=e.indexOf(t);i>-1&&(e.splice(i,1),e.unshift(t))},t.pushToEnd=function(e,t){const i=e.indexOf(t);i>-1&&(e.splice(i,1),e.push(t))},t.pushMany=function(e,t){for(const i of t)e.push(i)},t.mapArrayOrNot=function(e,t){return Array.isArray(e)?e.map(t):t(e)},t.asArray=function(e){return Array.isArray(e)?e:[e]},t.getRandomElement=function(e){return e[Math.floor(Math.random()*e.length)]},t.insertInto=h,t.splice=function(e,t,i,s){const n=c(e,t);let r=e.splice(n,i);return void 0===r&&(r=[]),h(e,n,s),r},t.compareBy=function(e,t){return(i,s)=>t(e(i),e(s))},t.tieBreakComparators=function(...e){return(t,i)=>{for(const s of e){const e=s(t,i);if(!u.isNeitherLessOrGreaterThan(e))return e}return u.neitherLessOrGreaterThan}},t.reverseOrder=function(e){return(t,i)=>-e(t,i)};const s=i(4577),n=i(9411);function r(e,t){let i=0,s=e-1;for(;i<=s;){const e=(i+s)/2|0,n=t(e);if(n<0)i=e+1;else{if(!(n>0))return e;s=e-1}}return-(i+1)}function o(e,t,i){const s=[];function n(e,t,i){if(0===t&&0===i.length)return;const n=s[s.length-1];n&&n.start+n.deleteCount===e?(n.deleteCount+=t,n.toInsert.push(...i)):s.push({start:e,deleteCount:t,toInsert:i})}let r=0,o=0;for(;;){if(r===e.length){n(r,0,t.slice(o));break}if(o===t.length){n(r,e.length-r,[]);break}const s=e[r],a=t[o],l=i(s,a);0===l?(r+=1,o+=1):l<0?(n(r,1,[]),r+=1):l>0&&(n(r,0,[a]),o+=1)}return s}function a(e,t,i,s,r){for(const o=i.length;s<r;s++){const r=e[s];if(t(r,i[o-1])<0){i.pop();const e=(0,n.findFirstIdxMonotonousOrArrLen)(i,(e=>t(r,e)<0));i.splice(e,0,r)}}}function l(e,t){const i=e.indexOf(t);if(i>-1)return e.splice(i,1),t}function h(e,t,i){const s=c(e,t),n=e.length,r=i.length;e.length=n+r;for(let t=n-1;t>=s;t--)e[t+r]=e[t];for(let t=0;t<r;t++)e[t+s]=i[t]}function c(e,t){return t<0?Math.max(t+e.length,0):Math.min(t,e.length)}var u;!function(e){e.isLessThan=function(e){return e<0},e.isLessThanOrEqual=function(e){return e<=0},e.isGreaterThan=function(e){return e>0},e.isNeitherLessOrGreaterThan=function(e){return 0===e},e.greaterThan=1,e.lessThan=-1,e.neitherLessOrGreaterThan=0}(u||(t.CompareResult=u={})),t.numberComparator=(e,t)=>e-t,t.booleanComparator=(e,i)=>(0,t.numberComparator)(e?1:0,i?1:0),t.ArrayQueue=class{constructor(e){this.items=e,this.firstIdx=0,this.lastIdx=this.items.length-1}get length(){return this.lastIdx-this.firstIdx+1}takeWhile(e){let t=this.firstIdx;for(;t<this.items.length&&e(this.items[t]);)t++;const i=t===this.firstIdx?null:this.items.slice(this.firstIdx,t);return this.firstIdx=t,i}takeFromEndWhile(e){let t=this.lastIdx;for(;t>=0&&e(this.items[t]);)t--;const i=t===this.lastIdx?null:this.items.slice(t+1,this.lastIdx+1);return this.lastIdx=t,i}peek(){if(0!==this.length)return this.items[this.firstIdx]}peekLast(){if(0!==this.length)return this.items[this.lastIdx]}dequeue(){const e=this.items[this.firstIdx];return this.firstIdx++,e}removeLast(){const e=this.items[this.lastIdx];return this.lastIdx--,e}takeCount(e){const t=this.items.slice(this.firstIdx,this.firstIdx+e);return this.firstIdx+=e,t}};class d{static{this.empty=new d((e=>{}))}constructor(e){this.iterate=e}forEach(e){this.iterate((t=>(e(t),!0)))}toArray(){const e=[];return this.iterate((t=>(e.push(t),!0))),e}filter(e){return new d((t=>this.iterate((i=>!e(i)||t(i)))))}map(e){return new d((t=>this.iterate((i=>t(e(i))))))}some(e){let t=!1;return this.iterate((i=>(t=e(i),!t))),t}findFirst(e){let t;return this.iterate((i=>!e(i)||(t=i,!1))),t}findLast(e){let t;return this.iterate((i=>(e(i)&&(t=i),!0))),t}findLastMaxBy(e){let t,i=!0;return this.iterate((s=>((i||u.isGreaterThan(e(s,t)))&&(i=!1,t=s),!0))),t}}t.CallbackIterable=d;class _{constructor(e){this._indexMap=e}static createSortPermutation(e,t){const i=Array.from(e.keys()).sort(((i,s)=>t(e[i],e[s])));return new _(i)}apply(e){return e.map(((t,i)=>e[this._indexMap[i]]))}inverse(){const e=this._indexMap.slice();for(let t=0;t<this._indexMap.length;t++)e[this._indexMap[t]]=t;return new _(e)}}t.Permutation=_},9411:(e,t)=>{function i(e,t,i=e.length-1){for(let s=i;s>=0;s--)if(t(e[s]))return s;return-1}function s(e,t,i=0,s=e.length){let n=i,r=s;for(;n<r;){const i=Math.floor((n+r)/2);t(e[i])?n=i+1:r=i}return n-1}function n(e,t,i=0,s=e.length){let n=i,r=s;for(;n<r;){const i=Math.floor((n+r)/2);t(e[i])?r=i:n=i+1}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.MonotonousArray=void 0,t.findLast=function(e,t){const s=i(e,t);if(-1!==s)return e[s]},t.findLastIdx=i,t.findLastMonotonous=function(e,t){const i=s(e,t);return-1===i?void 0:e[i]},t.findLastIdxMonotonous=s,t.findFirstMonotonous=function(e,t){const i=n(e,t);return i===e.length?void 0:e[i]},t.findFirstIdxMonotonousOrArrLen=n,t.findFirstIdxMonotonous=function(e,t,i=0,s=e.length){const r=n(e,t,i,s);return r===e.length?-1:r},t.findFirstMax=o,t.findLastMax=function(e,t){if(0===e.length)return;let i=e[0];for(let s=1;s<e.length;s++){const n=e[s];t(n,i)>=0&&(i=n)}return i},t.findFirstMin=function(e,t){return o(e,((e,i)=>-t(e,i)))},t.findMaxIdx=function(e,t){if(0===e.length)return-1;let i=0;for(let s=1;s<e.length;s++)t(e[s],e[i])>0&&(i=s);return i},t.mapFindFirst=function(e,t){for(const i of e){const e=t(i);if(void 0!==e)return e}};class r{static{this.assertInvariants=!1}constructor(e){this._array=e,this._findLastMonotonousLastIdx=0}findLastMonotonous(e){if(r.assertInvariants){if(this._prevFindLastPredicate)for(const t of this._array)if(this._prevFindLastPredicate(t)&&!e(t))throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");this._prevFindLastPredicate=e}const t=s(this._array,e,this._findLastMonotonousLastIdx);return this._findLastMonotonousLastIdx=t+1,-1===t?void 0:this._array[t]}}function o(e,t){if(0===e.length)return;let i=e[0];for(let s=1;s<e.length;s++){const n=e[s];t(n,i)>0&&(i=n)}return i}t.MonotonousArray=r},2940:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AsyncIterableSource=t.CancelableAsyncIterableObject=t.AsyncIterableObject=t.LazyStatefulPromise=t.StatefulPromise=t.Promises=t.DeferredPromise=t.IntervalCounter=t.TaskSequentializer=t.GlobalIdleValue=t.AbstractIdleValue=t._runWhenIdle=t.runWhenGlobalIdle=t.ThrottledWorker=t.RunOnceWorker=t.ProcessTimeRunOnceScheduler=t.RunOnceScheduler=t.IntervalTimer=t.TimeoutTimer=t.LimitedQueue=t.Queue=t.Limiter=t.AutoOpenBarrier=t.Barrier=t.ThrottledDelayer=t.Delayer=t.SequencerByKey=t.Sequencer=t.Throttler=void 0,t.isThenable=c,t.createCancelablePromise=u,t.raceCancellation=function(e,t,i){return new Promise(((s,n)=>{const r=t.onCancellationRequested((()=>{r.dispose(),s(i)}));e.then(s,n).finally((()=>r.dispose()))}))},t.raceCancellationError=function(e,t){return new Promise(((i,s)=>{const r=t.onCancellationRequested((()=>{r.dispose(),s(new n.CancellationError)}));e.then(i,s).finally((()=>r.dispose()))}))},t.raceCancellablePromises=async function(e){let t=-1;const i=e.map(((e,i)=>e.then((e=>(t=i,e)))));try{return await Promise.race(i)}finally{e.forEach(((e,i)=>{i!==t&&e.cancel()}))}},t.raceTimeout=function(e,t,i){let s;const n=setTimeout((()=>{s?.(void 0),i?.()}),t);return Promise.race([e.finally((()=>clearTimeout(n))),new Promise((e=>s=e))])},t.asPromise=function(e){return new Promise(((t,i)=>{const s=e();c(s)?s.then(t,i):t(s)}))},t.promiseWithResolvers=d,t.timeout=m,t.disposableTimeout=function(e,t=0,i){const s=setTimeout((()=>{e(),i&&n.dispose()}),t),n=(0,o.toDisposable)((()=>{clearTimeout(s),i?.deleteAndLeak(n)}));return i?.add(n),n},t.sequence=function(e){const t=[];let i=0;const s=e.length;return Promise.resolve(null).then((function n(r){null!=r&&t.push(r);const o=i<s?e[i++]():null;return o?o.then(n):Promise.resolve(t)}))},t.first=function(e,t=e=>!!e,i=null){let s=0;const n=e.length,r=()=>{if(s>=n)return Promise.resolve(i);const o=e[s++];return Promise.resolve(o()).then((e=>t(e)?Promise.resolve(e):r()))};return r()},t.firstParallel=function(e,t=e=>!!e,i=null){if(0===e.length)return Promise.resolve(i);let s=e.length;const n=()=>{s=-1;for(const t of e)t.cancel?.()};return new Promise(((r,o)=>{for(const a of e)a.then((e=>{--s>=0&&t(e)?(n(),r(e)):0===s&&r(i)})).catch((e=>{--s>=0&&(n(),o(e))}))}))},t.retry=async function(e,t,i){let s;for(let n=0;n<i;n++)try{return await e()}catch(e){s=e,await m(t)}throw s},t.createCancelableAsyncIterable=function(e){const t=new s.CancellationTokenSource,i=e(t.token);return new M(t,(async e=>{const s=t.token.onCancellationRequested((()=>{s.dispose(),t.dispose(),e.reject(new n.CancellationError)}));try{for await(const s of i){if(t.token.isCancellationRequested)return;e.emitOne(s)}s.dispose(),t.dispose()}catch(i){s.dispose(),t.dispose(),e.reject(i)}}))};const s=i(9473),n=i(4577),r=i(5276),o=i(2540),a=i(8973),l=i(1329),h=i(9764);function c(e){return!!e&&"function"==typeof e.then}function u(e){const t=new s.CancellationTokenSource,i=e(t.token),r=new Promise(((e,s)=>{const r=t.token.onCancellationRequested((()=>{r.dispose(),s(new n.CancellationError)}));Promise.resolve(i).then((i=>{r.dispose(),t.dispose(),e(i)}),(e=>{r.dispose(),t.dispose(),s(e)}))}));return new class{cancel(){t.cancel(),t.dispose()}then(e,t){return r.then(e,t)}catch(e){return this.then(void 0,e)}finally(e){return r.finally(e)}}}function d(){let e,t;return{promise:new Promise(((i,s)=>{e=i,t=s})),resolve:e,reject:t}}class _{constructor(){this.isDisposed=!1,this.activePromise=null,this.queuedPromise=null,this.queuedPromiseFactory=null}queue(e){if(this.isDisposed)return Promise.reject(new Error("Throttler is disposed"));if(this.activePromise){if(this.queuedPromiseFactory=e,!this.queuedPromise){const e=()=>{if(this.queuedPromise=null,this.isDisposed)return;const e=this.queue(this.queuedPromiseFactory);return this.queuedPromiseFactory=null,e};this.queuedPromise=new Promise((t=>{this.activePromise.then(e,e).then(t)}))}return new Promise(((e,t)=>{this.queuedPromise.then(e,t)}))}return this.activePromise=e(),new Promise(((e,t)=>{this.activePromise.then((t=>{this.activePromise=null,e(t)}),(e=>{this.activePromise=null,t(e)}))}))}dispose(){this.isDisposed=!0}}t.Throttler=_,t.Sequencer=class{constructor(){this.current=Promise.resolve(null)}queue(e){return this.current=this.current.then((()=>e()),(()=>e()))}},t.SequencerByKey=class{constructor(){this.promiseMap=new Map}queue(e,t){const i=(this.promiseMap.get(e)??Promise.resolve()).catch((()=>{})).then(t).finally((()=>{this.promiseMap.get(e)===i&&this.promiseMap.delete(e)}));return this.promiseMap.set(e,i),i}};class f{constructor(e){this.defaultDelay=e,this.deferred=null,this.completionPromise=null,this.doResolve=null,this.doReject=null,this.task=null}trigger(e,t=this.defaultDelay){this.task=e,this.cancelTimeout(),this.completionPromise||(this.completionPromise=new Promise(((e,t)=>{this.doResolve=e,this.doReject=t})).then((()=>{if(this.completionPromise=null,this.doResolve=null,this.task){const e=this.task;return this.task=null,e()}})));const i=()=>{this.deferred=null,this.doResolve?.(null)};return this.deferred=t===l.MicrotaskDelay?(e=>{let t=!0;return queueMicrotask((()=>{t&&(t=!1,e())})),{isTriggered:()=>t,dispose:()=>{t=!1}}})(i):((e,t)=>{let i=!0;const s=setTimeout((()=>{i=!1,t()}),e);return{isTriggered:()=>i,dispose:()=>{clearTimeout(s),i=!1}}})(t,i),this.completionPromise}isTriggered(){return!!this.deferred?.isTriggered()}cancel(){this.cancelTimeout(),this.completionPromise&&(this.doReject?.(new n.CancellationError),this.completionPromise=null)}cancelTimeout(){this.deferred?.dispose(),this.deferred=null}dispose(){this.cancel()}}t.Delayer=f,t.ThrottledDelayer=class{constructor(e){this.delayer=new f(e),this.throttler=new _}trigger(e,t){return this.delayer.trigger((()=>this.throttler.queue(e)),t)}isTriggered(){return this.delayer.isTriggered()}cancel(){this.delayer.cancel()}dispose(){this.delayer.dispose(),this.throttler.dispose()}};class g{constructor(){this._isOpen=!1,this._promise=new Promise(((e,t)=>{this._completePromise=e}))}isOpen(){return this._isOpen}open(){this._isOpen=!0,this._completePromise(!0)}wait(){return this._promise}}function m(e,t){return t?new Promise(((i,s)=>{const r=setTimeout((()=>{o.dispose(),i()}),e),o=t.onCancellationRequested((()=>{clearTimeout(r),o.dispose(),s(new n.CancellationError)}))})):u((t=>m(e,t)))}t.Barrier=g,t.AutoOpenBarrier=class extends g{constructor(e){super(),this._timeout=setTimeout((()=>this.open()),e)}open(){clearTimeout(this._timeout),super.open()}};class p{constructor(e){this._size=0,this._isDisposed=!1,this.maxDegreeOfParalellism=e,this.outstandingPromises=[],this.runningPromises=0,this._onDrained=new r.Emitter}whenIdle(){return this.size>0?r.Event.toPromise(this.onDrained):Promise.resolve()}get onDrained(){return this._onDrained.event}get size(){return this._size}queue(e){if(this._isDisposed)throw new Error("Object has been disposed");return this._size++,new Promise(((t,i)=>{this.outstandingPromises.push({factory:e,c:t,e:i}),this.consume()}))}consume(){for(;this.outstandingPromises.length&&this.runningPromises<this.maxDegreeOfParalellism;){const e=this.outstandingPromises.shift();this.runningPromises++;const t=e.factory();t.then(e.c,e.e),t.then((()=>this.consumed()),(()=>this.consumed()))}}consumed(){this._isDisposed||(this.runningPromises--,0==--this._size&&this._onDrained.fire(),this.outstandingPromises.length>0&&this.consume())}clear(){if(this._isDisposed)throw new Error("Object has been disposed");this.outstandingPromises.length=0,this._size=this.runningPromises}dispose(){this._isDisposed=!0,this.outstandingPromises.length=0,this._size=0,this._onDrained.dispose()}}t.Limiter=p,t.Queue=class extends p{constructor(){super(1)}},t.LimitedQueue=class{constructor(){this.sequentializer=new w,this.tasks=0}queue(e){return this.sequentializer.isRunning()?this.sequentializer.queue((()=>this.sequentializer.run(this.tasks++,e()))):this.sequentializer.run(this.tasks++,e())}},t.TimeoutTimer=class{constructor(e,t){this._isDisposed=!1,this._token=-1,"function"==typeof e&&"number"==typeof t&&this.setIfNotSet(e,t)}dispose(){this.cancel(),this._isDisposed=!0}cancel(){-1!==this._token&&(clearTimeout(this._token),this._token=-1)}cancelAndSet(e,t){if(this._isDisposed)throw new n.BugIndicatingError("Calling 'cancelAndSet' on a disposed TimeoutTimer");this.cancel(),this._token=setTimeout((()=>{this._token=-1,e()}),t)}setIfNotSet(e,t){if(this._isDisposed)throw new n.BugIndicatingError("Calling 'setIfNotSet' on a disposed TimeoutTimer");-1===this._token&&(this._token=setTimeout((()=>{this._token=-1,e()}),t))}},t.IntervalTimer=class{constructor(){this.disposable=void 0,this.isDisposed=!1}cancel(){this.disposable?.dispose(),this.disposable=void 0}cancelAndSet(e,t,i=globalThis){if(this.isDisposed)throw new n.BugIndicatingError("Calling 'cancelAndSet' on a disposed IntervalTimer");this.cancel();const s=i.setInterval((()=>{e()}),t);this.disposable=(0,o.toDisposable)((()=>{i.clearInterval(s),this.disposable=void 0}))}dispose(){this.cancel(),this.isDisposed=!0}};class v{constructor(e,t){this.timeoutToken=-1,this.runner=e,this.timeout=t,this.timeoutHandler=this.onTimeout.bind(this)}dispose(){this.cancel(),this.runner=null}cancel(){this.isScheduled()&&(clearTimeout(this.timeoutToken),this.timeoutToken=-1)}schedule(e=this.timeout){this.cancel(),this.timeoutToken=setTimeout(this.timeoutHandler,e)}get delay(){return this.timeout}set delay(e){this.timeout=e}isScheduled(){return-1!==this.timeoutToken}flush(){this.isScheduled()&&(this.cancel(),this.doRun())}onTimeout(){this.timeoutToken=-1,this.runner&&this.doRun()}doRun(){this.runner?.()}}t.RunOnceScheduler=v,t.ProcessTimeRunOnceScheduler=class{constructor(e,t){t%1e3!=0&&console.warn(`ProcessTimeRunOnceScheduler resolution is 1s, ${t}ms is not a multiple of 1000ms.`),this.runner=e,this.timeout=t,this.counter=0,this.intervalToken=-1,this.intervalHandler=this.onInterval.bind(this)}dispose(){this.cancel(),this.runner=null}cancel(){this.isScheduled()&&(clearInterval(this.intervalToken),this.intervalToken=-1)}schedule(e=this.timeout){e%1e3!=0&&console.warn(`ProcessTimeRunOnceScheduler resolution is 1s, ${e}ms is not a multiple of 1000ms.`),this.cancel(),this.counter=Math.ceil(e/1e3),this.intervalToken=setInterval(this.intervalHandler,1e3)}isScheduled(){return-1!==this.intervalToken}onInterval(){this.counter--,this.counter>0||(clearInterval(this.intervalToken),this.intervalToken=-1,this.runner?.())}},t.RunOnceWorker=class extends v{constructor(e,t){super(e,t),this.units=[]}work(e){this.units.push(e),this.isScheduled()||this.schedule()}doRun(){const e=this.units;this.units=[],this.runner?.(e)}dispose(){this.units=[],super.dispose()}};class C extends o.Disposable{constructor(e,t){super(),this.options=e,this.handler=t,this.pendingWork=[],this.throttler=this._register(new o.MutableDisposable),this.disposed=!1}get pending(){return this.pendingWork.length}work(e){if(this.disposed)return!1;if("number"==typeof this.options.maxBufferedWork)if(this.throttler.value){if(this.pending+e.length>this.options.maxBufferedWork)return!1}else if(this.pending+e.length-this.options.maxWorkChunkSize>this.options.maxBufferedWork)return!1;for(const t of e)this.pendingWork.push(t);return this.throttler.value||this.doWork(),!0}doWork(){this.handler(this.pendingWork.splice(0,this.options.maxWorkChunkSize)),this.pendingWork.length>0&&(this.throttler.value=new v((()=>{this.throttler.clear(),this.doWork()}),this.options.throttleDelay),this.throttler.value.schedule())}dispose(){super.dispose(),this.disposed=!0}}t.ThrottledWorker=C,"function"!=typeof globalThis.requestIdleCallback||"function"!=typeof globalThis.cancelIdleCallback?t._runWhenIdle=(e,t)=>{(0,a.setTimeout0)((()=>{if(i)return;const e=Date.now()+15,s={didTimeout:!0,timeRemaining:()=>Math.max(0,e-Date.now())};t(Object.freeze(s))}));let i=!1;return{dispose(){i||(i=!0)}}}:t._runWhenIdle=(e,t,i)=>{const s=e.requestIdleCallback(t,"number"==typeof i?{timeout:i}:void 0);let n=!1;return{dispose(){n||(n=!0,e.cancelIdleCallback(s))}}},t.runWhenGlobalIdle=e=>(0,t._runWhenIdle)(globalThis,e);class E{constructor(e,i){this._didRun=!1,this._executor=()=>{try{this._value=i()}catch(e){this._error=e}finally{this._didRun=!0}},this._handle=(0,t._runWhenIdle)(e,(()=>this._executor()))}dispose(){this._handle.dispose()}get value(){if(this._didRun||(this._handle.dispose(),this._executor()),this._error)throw this._error;return this._value}get isInitialized(){return this._didRun}}t.AbstractIdleValue=E,t.GlobalIdleValue=class extends E{constructor(e){super(globalThis,e)}};class w{isRunning(e){return"number"==typeof e?this._running?.taskId===e:!!this._running}get running(){return this._running?.promise}cancelRunning(){this._running?.cancel()}run(e,t,i){return this._running={taskId:e,cancel:()=>i?.(),promise:t},t.then((()=>this.doneRunning(e)),(()=>this.doneRunning(e))),t}doneRunning(e){this._running&&e===this._running.taskId&&(this._running=void 0,this.runQueued())}runQueued(){if(this._queued){const e=this._queued;this._queued=void 0,e.run().then(e.promiseResolve,e.promiseReject)}}queue(e){if(this._queued)this._queued.run=e;else{const{promise:t,resolve:i,reject:s}=d();this._queued={run:e,promise:t,promiseResolve:i,promiseReject:s}}return this._queued.promise}hasQueued(){return!!this._queued}async join(){return this._queued?.promise??this._running?.promise}}var b,y,L;t.TaskSequentializer=w,t.IntervalCounter=class{constructor(e,t=()=>Date.now()){this.interval=e,this.nowFn=t,this.lastIncrementTime=0,this.value=0}increment(){const e=this.nowFn();return e-this.lastIncrementTime>this.interval&&(this.lastIncrementTime=e,this.value=0),this.value++,this.value}},function(e){e[e.Resolved=0]="Resolved",e[e.Rejected=1]="Rejected"}(b||(b={}));class A{get isRejected(){return this.outcome?.outcome===b.Rejected}get isResolved(){return this.outcome?.outcome===b.Resolved}get isSettled(){return!!this.outcome}get value(){return this.outcome?.outcome===b.Resolved?this.outcome?.value:void 0}constructor(){this.p=new Promise(((e,t)=>{this.completeCallback=e,this.errorCallback=t}))}complete(e){return new Promise((t=>{this.completeCallback(e),this.outcome={outcome:b.Resolved,value:e},t()}))}error(e){return new Promise((t=>{this.errorCallback(e),this.outcome={outcome:b.Rejected,value:e},t()}))}cancel(){return this.error(new n.CancellationError)}}t.DeferredPromise=A,function(e){e.settled=async function(e){let t;const i=await Promise.all(e.map((e=>e.then((e=>e),(e=>{t||(t=e)})))));if(void 0!==t)throw t;return i},e.withAsyncBody=function(e){return new Promise((async(t,i)=>{try{await e(t,i)}catch(e){i(e)}}))}}(y||(t.Promises=y={}));class R{get value(){return this._value}get error(){return this._error}get isResolved(){return this._isResolved}constructor(e){this._value=void 0,this._error=void 0,this._isResolved=!1,this.promise=e.then((e=>(this._value=e,this._isResolved=!0,e)),(e=>{throw this._error=e,this._isResolved=!0,e}))}requireValue(){if(!this._isResolved)throw new n.BugIndicatingError("Promise is not resolved yet");if(this._error)throw this._error;return this._value}}t.StatefulPromise=R,t.LazyStatefulPromise=class{constructor(e){this._compute=e,this._promise=new h.Lazy((()=>new R(this._compute())))}requireValue(){return this._promise.value.requireValue()}getPromise(){return this._promise.value.promise}get currentValue(){return this._promise.rawValue?.value}},function(e){e[e.Initial=0]="Initial",e[e.DoneOK=1]="DoneOK",e[e.DoneError=2]="DoneError"}(L||(L={}));class T{static fromArray(e){return new T((t=>{t.emitMany(e)}))}static fromPromise(e){return new T((async t=>{t.emitMany(await e)}))}static fromPromises(e){return new T((async t=>{await Promise.all(e.map((async e=>t.emitOne(await e))))}))}static merge(e){return new T((async t=>{await Promise.all(e.map((async e=>{for await(const i of e)t.emitOne(i)})))}))}static{this.EMPTY=T.fromArray([])}constructor(e,t){this._state=L.Initial,this._results=[],this._error=null,this._onReturn=t,this._onStateChanged=new r.Emitter,queueMicrotask((async()=>{const t={emitOne:e=>this.emitOne(e),emitMany:e=>this.emitMany(e),reject:e=>this.reject(e)};try{await Promise.resolve(e(t)),this.resolve()}catch(e){this.reject(e)}finally{t.emitOne=void 0,t.emitMany=void 0,t.reject=void 0}}))}[Symbol.asyncIterator](){let e=0;return{next:async()=>{for(;;){if(this._state===L.DoneError)throw this._error;if(e<this._results.length)return{done:!1,value:this._results[e++]};if(this._state===L.DoneOK)return{done:!0,value:void 0};await r.Event.toPromise(this._onStateChanged.event)}},return:async()=>(this._onReturn?.(),{done:!0,value:void 0})}}static map(e,t){return new T((async i=>{for await(const s of e)i.emitOne(t(s))}))}map(e){return T.map(this,e)}static filter(e,t){return new T((async i=>{for await(const s of e)t(s)&&i.emitOne(s)}))}filter(e){return T.filter(this,e)}static coalesce(e){return T.filter(e,(e=>!!e))}coalesce(){return T.coalesce(this)}static async toPromise(e){const t=[];for await(const i of e)t.push(i);return t}toPromise(){return T.toPromise(this)}emitOne(e){this._state===L.Initial&&(this._results.push(e),this._onStateChanged.fire())}emitMany(e){this._state===L.Initial&&(this._results=this._results.concat(e),this._onStateChanged.fire())}resolve(){this._state===L.Initial&&(this._state=L.DoneOK,this._onStateChanged.fire())}reject(e){this._state===L.Initial&&(this._state=L.DoneError,this._error=e,this._onStateChanged.fire())}}t.AsyncIterableObject=T;class M extends T{constructor(e,t){super(t),this._source=e}cancel(){this._source.cancel()}}t.CancelableAsyncIterableObject=M,t.AsyncIterableSource=class{constructor(e){let t,i;this._deferred=new A,this._asyncIterable=new T((e=>{if(!t)return i&&e.emitMany(i),this._errorFn=t=>e.reject(t),this._emitFn=t=>e.emitOne(t),this._deferred.p;e.reject(t)}),e),this._emitFn=e=>{i||(i=[]),i.push(e)},this._errorFn=e=>{t||(t=e)}}get asyncIterable(){return this._asyncIterable}resolve(){this._deferred.complete()}reject(e){this._errorFn(e),this._deferred.complete()}emitOne(e){this._emitFn(e)}}},9473:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CancellationTokenSource=t.CancellationToken=void 0,t.cancelOnDispose=function(e){const t=new a;return e.add({dispose(){t.cancel()}}),t.token};const s=i(5276),n=Object.freeze((function(e,t){const i=setTimeout(e.bind(t),0);return{dispose(){clearTimeout(i)}}}));var r;!function(e){e.isCancellationToken=function(t){return t===e.None||t===e.Cancelled||t instanceof o||!(!t||"object"!=typeof t)&&"boolean"==typeof t.isCancellationRequested&&"function"==typeof t.onCancellationRequested},e.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:s.Event.None}),e.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:n})}(r||(t.CancellationToken=r={}));class o{constructor(){this._isCancelled=!1,this._emitter=null}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?n:(this._emitter||(this._emitter=new s.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=null)}}class a{constructor(e){this._token=void 0,this._parentListener=void 0,this._parentListener=e&&e.onCancellationRequested(this.cancel,this)}get token(){return this._token||(this._token=new o),this._token}cancel(){this._token?this._token instanceof o&&this._token.cancel():this._token=r.Cancelled}dispose(e=!1){e&&this.cancel(),this._parentListener?.dispose(),this._token?this._token instanceof o&&this._token.dispose():this._token=r.None}}t.CancellationTokenSource=a},2779:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.CharCode=void 0,function(e){e[e.Null=0]="Null",e[e.Backspace=8]="Backspace",e[e.Tab=9]="Tab",e[e.LineFeed=10]="LineFeed",e[e.CarriageReturn=13]="CarriageReturn",e[e.Space=32]="Space",e[e.ExclamationMark=33]="ExclamationMark",e[e.DoubleQuote=34]="DoubleQuote",e[e.Hash=35]="Hash",e[e.DollarSign=36]="DollarSign",e[e.PercentSign=37]="PercentSign",e[e.Ampersand=38]="Ampersand",e[e.SingleQuote=39]="SingleQuote",e[e.OpenParen=40]="OpenParen",e[e.CloseParen=41]="CloseParen",e[e.Asterisk=42]="Asterisk",e[e.Plus=43]="Plus",e[e.Comma=44]="Comma",e[e.Dash=45]="Dash",e[e.Period=46]="Period",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Colon=58]="Colon",e[e.Semicolon=59]="Semicolon",e[e.LessThan=60]="LessThan",e[e.Equals=61]="Equals",e[e.GreaterThan=62]="GreaterThan",e[e.QuestionMark=63]="QuestionMark",e[e.AtSign=64]="AtSign",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.OpenSquareBracket=91]="OpenSquareBracket",e[e.Backslash=92]="Backslash",e[e.CloseSquareBracket=93]="CloseSquareBracket",e[e.Caret=94]="Caret",e[e.Underline=95]="Underline",e[e.BackTick=96]="BackTick",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.OpenCurlyBrace=123]="OpenCurlyBrace",e[e.Pipe=124]="Pipe",e[e.CloseCurlyBrace=125]="CloseCurlyBrace",e[e.Tilde=126]="Tilde",e[e.NoBreakSpace=160]="NoBreakSpace",e[e.U_Combining_Grave_Accent=768]="U_Combining_Grave_Accent",e[e.U_Combining_Acute_Accent=769]="U_Combining_Acute_Accent",e[e.U_Combining_Circumflex_Accent=770]="U_Combining_Circumflex_Accent",e[e.U_Combining_Tilde=771]="U_Combining_Tilde",e[e.U_Combining_Macron=772]="U_Combining_Macron",e[e.U_Combining_Overline=773]="U_Combining_Overline",e[e.U_Combining_Breve=774]="U_Combining_Breve",e[e.U_Combining_Dot_Above=775]="U_Combining_Dot_Above",e[e.U_Combining_Diaeresis=776]="U_Combining_Diaeresis",e[e.U_Combining_Hook_Above=777]="U_Combining_Hook_Above",e[e.U_Combining_Ring_Above=778]="U_Combining_Ring_Above",e[e.U_Combining_Double_Acute_Accent=779]="U_Combining_Double_Acute_Accent",e[e.U_Combining_Caron=780]="U_Combining_Caron",e[e.U_Combining_Vertical_Line_Above=781]="U_Combining_Vertical_Line_Above",e[e.U_Combining_Double_Vertical_Line_Above=782]="U_Combining_Double_Vertical_Line_Above",e[e.U_Combining_Double_Grave_Accent=783]="U_Combining_Double_Grave_Accent",e[e.U_Combining_Candrabindu=784]="U_Combining_Candrabindu",e[e.U_Combining_Inverted_Breve=785]="U_Combining_Inverted_Breve",e[e.U_Combining_Turned_Comma_Above=786]="U_Combining_Turned_Comma_Above",e[e.U_Combining_Comma_Above=787]="U_Combining_Comma_Above",e[e.U_Combining_Reversed_Comma_Above=788]="U_Combining_Reversed_Comma_Above",e[e.U_Combining_Comma_Above_Right=789]="U_Combining_Comma_Above_Right",e[e.U_Combining_Grave_Accent_Below=790]="U_Combining_Grave_Accent_Below",e[e.U_Combining_Acute_Accent_Below=791]="U_Combining_Acute_Accent_Below",e[e.U_Combining_Left_Tack_Below=792]="U_Combining_Left_Tack_Below",e[e.U_Combining_Right_Tack_Below=793]="U_Combining_Right_Tack_Below",e[e.U_Combining_Left_Angle_Above=794]="U_Combining_Left_Angle_Above",e[e.U_Combining_Horn=795]="U_Combining_Horn",e[e.U_Combining_Left_Half_Ring_Below=796]="U_Combining_Left_Half_Ring_Below",e[e.U_Combining_Up_Tack_Below=797]="U_Combining_Up_Tack_Below",e[e.U_Combining_Down_Tack_Below=798]="U_Combining_Down_Tack_Below",e[e.U_Combining_Plus_Sign_Below=799]="U_Combining_Plus_Sign_Below",e[e.U_Combining_Minus_Sign_Below=800]="U_Combining_Minus_Sign_Below",e[e.U_Combining_Palatalized_Hook_Below=801]="U_Combining_Palatalized_Hook_Below",e[e.U_Combining_Retroflex_Hook_Below=802]="U_Combining_Retroflex_Hook_Below",e[e.U_Combining_Dot_Below=803]="U_Combining_Dot_Below",e[e.U_Combining_Diaeresis_Below=804]="U_Combining_Diaeresis_Below",e[e.U_Combining_Ring_Below=805]="U_Combining_Ring_Below",e[e.U_Combining_Comma_Below=806]="U_Combining_Comma_Below",e[e.U_Combining_Cedilla=807]="U_Combining_Cedilla",e[e.U_Combining_Ogonek=808]="U_Combining_Ogonek",e[e.U_Combining_Vertical_Line_Below=809]="U_Combining_Vertical_Line_Below",e[e.U_Combining_Bridge_Below=810]="U_Combining_Bridge_Below",e[e.U_Combining_Inverted_Double_Arch_Below=811]="U_Combining_Inverted_Double_Arch_Below",e[e.U_Combining_Caron_Below=812]="U_Combining_Caron_Below",e[e.U_Combining_Circumflex_Accent_Below=813]="U_Combining_Circumflex_Accent_Below",e[e.U_Combining_Breve_Below=814]="U_Combining_Breve_Below",e[e.U_Combining_Inverted_Breve_Below=815]="U_Combining_Inverted_Breve_Below",e[e.U_Combining_Tilde_Below=816]="U_Combining_Tilde_Below",e[e.U_Combining_Macron_Below=817]="U_Combining_Macron_Below",e[e.U_Combining_Low_Line=818]="U_Combining_Low_Line",e[e.U_Combining_Double_Low_Line=819]="U_Combining_Double_Low_Line",e[e.U_Combining_Tilde_Overlay=820]="U_Combining_Tilde_Overlay",e[e.U_Combining_Short_Stroke_Overlay=821]="U_Combining_Short_Stroke_Overlay",e[e.U_Combining_Long_Stroke_Overlay=822]="U_Combining_Long_Stroke_Overlay",e[e.U_Combining_Short_Solidus_Overlay=823]="U_Combining_Short_Solidus_Overlay",e[e.U_Combining_Long_Solidus_Overlay=824]="U_Combining_Long_Solidus_Overlay",e[e.U_Combining_Right_Half_Ring_Below=825]="U_Combining_Right_Half_Ring_Below",e[e.U_Combining_Inverted_Bridge_Below=826]="U_Combining_Inverted_Bridge_Below",e[e.U_Combining_Square_Below=827]="U_Combining_Square_Below",e[e.U_Combining_Seagull_Below=828]="U_Combining_Seagull_Below",e[e.U_Combining_X_Above=829]="U_Combining_X_Above",e[e.U_Combining_Vertical_Tilde=830]="U_Combining_Vertical_Tilde",e[e.U_Combining_Double_Overline=831]="U_Combining_Double_Overline",e[e.U_Combining_Grave_Tone_Mark=832]="U_Combining_Grave_Tone_Mark",e[e.U_Combining_Acute_Tone_Mark=833]="U_Combining_Acute_Tone_Mark",e[e.U_Combining_Greek_Perispomeni=834]="U_Combining_Greek_Perispomeni",e[e.U_Combining_Greek_Koronis=835]="U_Combining_Greek_Koronis",e[e.U_Combining_Greek_Dialytika_Tonos=836]="U_Combining_Greek_Dialytika_Tonos",e[e.U_Combining_Greek_Ypogegrammeni=837]="U_Combining_Greek_Ypogegrammeni",e[e.U_Combining_Bridge_Above=838]="U_Combining_Bridge_Above",e[e.U_Combining_Equals_Sign_Below=839]="U_Combining_Equals_Sign_Below",e[e.U_Combining_Double_Vertical_Line_Below=840]="U_Combining_Double_Vertical_Line_Below",e[e.U_Combining_Left_Angle_Below=841]="U_Combining_Left_Angle_Below",e[e.U_Combining_Not_Tilde_Above=842]="U_Combining_Not_Tilde_Above",e[e.U_Combining_Homothetic_Above=843]="U_Combining_Homothetic_Above",e[e.U_Combining_Almost_Equal_To_Above=844]="U_Combining_Almost_Equal_To_Above",e[e.U_Combining_Left_Right_Arrow_Below=845]="U_Combining_Left_Right_Arrow_Below",e[e.U_Combining_Upwards_Arrow_Below=846]="U_Combining_Upwards_Arrow_Below",e[e.U_Combining_Grapheme_Joiner=847]="U_Combining_Grapheme_Joiner",e[e.U_Combining_Right_Arrowhead_Above=848]="U_Combining_Right_Arrowhead_Above",e[e.U_Combining_Left_Half_Ring_Above=849]="U_Combining_Left_Half_Ring_Above",e[e.U_Combining_Fermata=850]="U_Combining_Fermata",e[e.U_Combining_X_Below=851]="U_Combining_X_Below",e[e.U_Combining_Left_Arrowhead_Below=852]="U_Combining_Left_Arrowhead_Below",e[e.U_Combining_Right_Arrowhead_Below=853]="U_Combining_Right_Arrowhead_Below",e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below=854]="U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below",e[e.U_Combining_Right_Half_Ring_Above=855]="U_Combining_Right_Half_Ring_Above",e[e.U_Combining_Dot_Above_Right=856]="U_Combining_Dot_Above_Right",e[e.U_Combining_Asterisk_Below=857]="U_Combining_Asterisk_Below",e[e.U_Combining_Double_Ring_Below=858]="U_Combining_Double_Ring_Below",e[e.U_Combining_Zigzag_Above=859]="U_Combining_Zigzag_Above",e[e.U_Combining_Double_Breve_Below=860]="U_Combining_Double_Breve_Below",e[e.U_Combining_Double_Breve=861]="U_Combining_Double_Breve",e[e.U_Combining_Double_Macron=862]="U_Combining_Double_Macron",e[e.U_Combining_Double_Macron_Below=863]="U_Combining_Double_Macron_Below",e[e.U_Combining_Double_Tilde=864]="U_Combining_Double_Tilde",e[e.U_Combining_Double_Inverted_Breve=865]="U_Combining_Double_Inverted_Breve",e[e.U_Combining_Double_Rightwards_Arrow_Below=866]="U_Combining_Double_Rightwards_Arrow_Below",e[e.U_Combining_Latin_Small_Letter_A=867]="U_Combining_Latin_Small_Letter_A",e[e.U_Combining_Latin_Small_Letter_E=868]="U_Combining_Latin_Small_Letter_E",e[e.U_Combining_Latin_Small_Letter_I=869]="U_Combining_Latin_Small_Letter_I",e[e.U_Combining_Latin_Small_Letter_O=870]="U_Combining_Latin_Small_Letter_O",e[e.U_Combining_Latin_Small_Letter_U=871]="U_Combining_Latin_Small_Letter_U",e[e.U_Combining_Latin_Small_Letter_C=872]="U_Combining_Latin_Small_Letter_C",e[e.U_Combining_Latin_Small_Letter_D=873]="U_Combining_Latin_Small_Letter_D",e[e.U_Combining_Latin_Small_Letter_H=874]="U_Combining_Latin_Small_Letter_H",e[e.U_Combining_Latin_Small_Letter_M=875]="U_Combining_Latin_Small_Letter_M",e[e.U_Combining_Latin_Small_Letter_R=876]="U_Combining_Latin_Small_Letter_R",e[e.U_Combining_Latin_Small_Letter_T=877]="U_Combining_Latin_Small_Letter_T",e[e.U_Combining_Latin_Small_Letter_V=878]="U_Combining_Latin_Small_Letter_V",e[e.U_Combining_Latin_Small_Letter_X=879]="U_Combining_Latin_Small_Letter_X",e[e.LINE_SEPARATOR=8232]="LINE_SEPARATOR",e[e.PARAGRAPH_SEPARATOR=8233]="PARAGRAPH_SEPARATOR",e[e.NEXT_LINE=133]="NEXT_LINE",e[e.U_CIRCUMFLEX=94]="U_CIRCUMFLEX",e[e.U_GRAVE_ACCENT=96]="U_GRAVE_ACCENT",e[e.U_DIAERESIS=168]="U_DIAERESIS",e[e.U_MACRON=175]="U_MACRON",e[e.U_ACUTE_ACCENT=180]="U_ACUTE_ACCENT",e[e.U_CEDILLA=184]="U_CEDILLA",e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD=706]="U_MODIFIER_LETTER_LEFT_ARROWHEAD",e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD=707]="U_MODIFIER_LETTER_RIGHT_ARROWHEAD",e[e.U_MODIFIER_LETTER_UP_ARROWHEAD=708]="U_MODIFIER_LETTER_UP_ARROWHEAD",e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD=709]="U_MODIFIER_LETTER_DOWN_ARROWHEAD",e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING=722]="U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING",e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING=723]="U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING",e[e.U_MODIFIER_LETTER_UP_TACK=724]="U_MODIFIER_LETTER_UP_TACK",e[e.U_MODIFIER_LETTER_DOWN_TACK=725]="U_MODIFIER_LETTER_DOWN_TACK",e[e.U_MODIFIER_LETTER_PLUS_SIGN=726]="U_MODIFIER_LETTER_PLUS_SIGN",e[e.U_MODIFIER_LETTER_MINUS_SIGN=727]="U_MODIFIER_LETTER_MINUS_SIGN",e[e.U_BREVE=728]="U_BREVE",e[e.U_DOT_ABOVE=729]="U_DOT_ABOVE",e[e.U_RING_ABOVE=730]="U_RING_ABOVE",e[e.U_OGONEK=731]="U_OGONEK",e[e.U_SMALL_TILDE=732]="U_SMALL_TILDE",e[e.U_DOUBLE_ACUTE_ACCENT=733]="U_DOUBLE_ACUTE_ACCENT",e[e.U_MODIFIER_LETTER_RHOTIC_HOOK=734]="U_MODIFIER_LETTER_RHOTIC_HOOK",e[e.U_MODIFIER_LETTER_CROSS_ACCENT=735]="U_MODIFIER_LETTER_CROSS_ACCENT",e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR=741]="U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR",e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR=742]="U_MODIFIER_LETTER_HIGH_TONE_BAR",e[e.U_MODIFIER_LETTER_MID_TONE_BAR=743]="U_MODIFIER_LETTER_MID_TONE_BAR",e[e.U_MODIFIER_LETTER_LOW_TONE_BAR=744]="U_MODIFIER_LETTER_LOW_TONE_BAR",e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR=745]="U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR",e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK=746]="U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK",e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK=747]="U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK",e[e.U_MODIFIER_LETTER_UNASPIRATED=749]="U_MODIFIER_LETTER_UNASPIRATED",e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD=751]="U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD",e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD=752]="U_MODIFIER_LETTER_LOW_UP_ARROWHEAD",e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD=753]="U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD",e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD=754]="U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD",e[e.U_MODIFIER_LETTER_LOW_RING=755]="U_MODIFIER_LETTER_LOW_RING",e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT=756]="U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT",e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT=757]="U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT",e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT=758]="U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT",e[e.U_MODIFIER_LETTER_LOW_TILDE=759]="U_MODIFIER_LETTER_LOW_TILDE",e[e.U_MODIFIER_LETTER_RAISED_COLON=760]="U_MODIFIER_LETTER_RAISED_COLON",e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE=761]="U_MODIFIER_LETTER_BEGIN_HIGH_TONE",e[e.U_MODIFIER_LETTER_END_HIGH_TONE=762]="U_MODIFIER_LETTER_END_HIGH_TONE",e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE=763]="U_MODIFIER_LETTER_BEGIN_LOW_TONE",e[e.U_MODIFIER_LETTER_END_LOW_TONE=764]="U_MODIFIER_LETTER_END_LOW_TONE",e[e.U_MODIFIER_LETTER_SHELF=765]="U_MODIFIER_LETTER_SHELF",e[e.U_MODIFIER_LETTER_OPEN_SHELF=766]="U_MODIFIER_LETTER_OPEN_SHELF",e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW=767]="U_MODIFIER_LETTER_LOW_LEFT_ARROW",e[e.U_GREEK_LOWER_NUMERAL_SIGN=885]="U_GREEK_LOWER_NUMERAL_SIGN",e[e.U_GREEK_TONOS=900]="U_GREEK_TONOS",e[e.U_GREEK_DIALYTIKA_TONOS=901]="U_GREEK_DIALYTIKA_TONOS",e[e.U_GREEK_KORONIS=8125]="U_GREEK_KORONIS",e[e.U_GREEK_PSILI=8127]="U_GREEK_PSILI",e[e.U_GREEK_PERISPOMENI=8128]="U_GREEK_PERISPOMENI",e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI=8129]="U_GREEK_DIALYTIKA_AND_PERISPOMENI",e[e.U_GREEK_PSILI_AND_VARIA=8141]="U_GREEK_PSILI_AND_VARIA",e[e.U_GREEK_PSILI_AND_OXIA=8142]="U_GREEK_PSILI_AND_OXIA",e[e.U_GREEK_PSILI_AND_PERISPOMENI=8143]="U_GREEK_PSILI_AND_PERISPOMENI",e[e.U_GREEK_DASIA_AND_VARIA=8157]="U_GREEK_DASIA_AND_VARIA",e[e.U_GREEK_DASIA_AND_OXIA=8158]="U_GREEK_DASIA_AND_OXIA",e[e.U_GREEK_DASIA_AND_PERISPOMENI=8159]="U_GREEK_DASIA_AND_PERISPOMENI",e[e.U_GREEK_DIALYTIKA_AND_VARIA=8173]="U_GREEK_DIALYTIKA_AND_VARIA",e[e.U_GREEK_DIALYTIKA_AND_OXIA=8174]="U_GREEK_DIALYTIKA_AND_OXIA",e[e.U_GREEK_VARIA=8175]="U_GREEK_VARIA",e[e.U_GREEK_OXIA=8189]="U_GREEK_OXIA",e[e.U_GREEK_DASIA=8190]="U_GREEK_DASIA",e[e.U_IDEOGRAPHIC_FULL_STOP=12290]="U_IDEOGRAPHIC_FULL_STOP",e[e.U_LEFT_CORNER_BRACKET=12300]="U_LEFT_CORNER_BRACKET",e[e.U_RIGHT_CORNER_BRACKET=12301]="U_RIGHT_CORNER_BRACKET",e[e.U_LEFT_BLACK_LENTICULAR_BRACKET=12304]="U_LEFT_BLACK_LENTICULAR_BRACKET",e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET=12305]="U_RIGHT_BLACK_LENTICULAR_BRACKET",e[e.U_OVERLINE=8254]="U_OVERLINE",e[e.UTF8_BOM=65279]="UTF8_BOM",e[e.U_FULLWIDTH_SEMICOLON=65307]="U_FULLWIDTH_SEMICOLON",e[e.U_FULLWIDTH_COMMA=65292]="U_FULLWIDTH_COMMA"}(i||(t.CharCode=i={}))},6033:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.SetWithKey=void 0,t.groupBy=function(e,t){const i=Object.create(null);for(const s of e){const e=t(s);let n=i[e];n||(n=i[e]=[]),n.push(s)}return i},t.diffSets=function(e,t){const i=[],s=[];for(const s of e)t.has(s)||i.push(s);for(const i of t)e.has(i)||s.push(i);return{removed:i,added:s}},t.diffMaps=function(e,t){const i=[],s=[];for(const[s,n]of e)t.has(s)||i.push(n);for(const[i,n]of t)e.has(i)||s.push(n);return{removed:i,added:s}},t.intersection=function(e,t){const i=new Set;for(const s of t)e.has(s)&&i.add(s);return i};class s{static{i=Symbol.toStringTag}constructor(e,t){this.toKey=t,this._map=new Map,this[i]="SetWithKey";for(const t of e)this.add(t)}get size(){return this._map.size}add(e){const t=this.toKey(e);return this._map.set(t,e),this}delete(e){return this._map.delete(this.toKey(e))}has(e){return this._map.has(this.toKey(e))}*entries(){for(const e of this._map.values())yield[e,e]}keys(){return this.values()}*values(){for(const e of this._map.values())yield e}clear(){this._map.clear()}forEach(e,t){this._map.forEach((i=>e.call(t,i,i,this)))}[Symbol.iterator](){return this.values()}}t.SetWithKey=s},4577:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BugIndicatingError=t.ErrorNoTelemetry=t.ExpectedError=t.NotSupportedError=t.NotImplementedError=t.ReadonlyError=t.CancellationError=t.errorHandler=t.ErrorHandler=void 0,t.setUnexpectedErrorHandler=function(e){t.errorHandler.setUnexpectedErrorHandler(e)},t.isSigPipeError=function(e){if(!e||"object"!=typeof e)return!1;const t=e;return"EPIPE"===t.code&&"WRITE"===t.syscall?.toUpperCase()},t.onUnexpectedError=function(e){n(e)||t.errorHandler.onUnexpectedError(e)},t.onUnexpectedExternalError=function(e){n(e)||t.errorHandler.onUnexpectedExternalError(e)},t.transformErrorForSerialization=function(e){if(e instanceof Error){const{name:t,message:i}=e;return{$isError:!0,name:t,message:i,stack:e.stacktrace||e.stack,noTelemetry:c.isErrorNoTelemetry(e)}}return e},t.transformErrorFromSerialization=function(e){let t;return e.noTelemetry?t=new c:(t=new Error,t.name=e.name),t.message=e.message,t.stack=e.stack,t},t.isCancellationError=n,t.canceled=function(){const e=new Error(s);return e.name=e.message,e},t.illegalArgument=function(e){return e?new Error(`Illegal argument: ${e}`):new Error("Illegal argument")},t.illegalState=function(e){return e?new Error(`Illegal state: ${e}`):new Error("Illegal state")},t.getErrorMessage=function(e){return e?e.message?e.message:e.stack?e.stack.split("\n")[0]:String(e):"Error"};class i{constructor(){this.listeners=[],this.unexpectedErrorHandler=function(e){setTimeout((()=>{if(e.stack){if(c.isErrorNoTelemetry(e))throw new c(e.message+"\n\n"+e.stack);throw new Error(e.message+"\n\n"+e.stack)}throw e}),0)}}addListener(e){return this.listeners.push(e),()=>{this._removeListener(e)}}emit(e){this.listeners.forEach((t=>{t(e)}))}_removeListener(e){this.listeners.splice(this.listeners.indexOf(e),1)}setUnexpectedErrorHandler(e){this.unexpectedErrorHandler=e}getUnexpectedErrorHandler(){return this.unexpectedErrorHandler}onUnexpectedError(e){this.unexpectedErrorHandler(e),this.emit(e)}onUnexpectedExternalError(e){this.unexpectedErrorHandler(e)}}t.ErrorHandler=i,t.errorHandler=new i;const s="Canceled";function n(e){return e instanceof r||e instanceof Error&&e.name===s&&e.message===s}class r extends Error{constructor(){super(s),this.name=this.message}}t.CancellationError=r;class o extends TypeError{constructor(e){super(e?`${e} is read-only and cannot be changed`:"Cannot change read-only property")}}t.ReadonlyError=o;class a extends Error{constructor(e){super("NotImplemented"),e&&(this.message=e)}}t.NotImplementedError=a;class l extends Error{constructor(e){super("NotSupported"),e&&(this.message=e)}}t.NotSupportedError=l;class h extends Error{constructor(){super(...arguments),this.isExpected=!0}}t.ExpectedError=h;class c extends Error{constructor(e){super(e),this.name="CodeExpectedError"}static fromError(e){if(e instanceof c)return e;const t=new c;return t.message=e.message,t.stack=e.stack,t}static isErrorNoTelemetry(e){return"CodeExpectedError"===e.name}}t.ErrorNoTelemetry=c;class u extends Error{constructor(e){super(e||"An unexpected bug occurred."),Object.setPrototypeOf(this,u.prototype)}}t.BugIndicatingError=u},5276:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ValueWithChangeEvent=t.Relay=t.EventBufferer=t.DynamicListEventMultiplexer=t.EventMultiplexer=t.MicrotaskEmitter=t.DebounceEmitter=t.PauseableEmitter=t.AsyncEmitter=t.createEventDeliveryQueue=t.Emitter=t.ListenerRefusalError=t.ListenerLeakError=t.EventProfiling=t.Event=void 0,t.setGlobalLeakWarningThreshold=function(e){const t=c;return c=e,{dispose(){c=t}}};const s=i(4577),n=i(7355),r=i(2540),o=i(4711),a=i(79);var l;!function(e){function t(e){return(t,i=null,s)=>{let n,r=!1;return n=e((e=>{if(!r)return n?n.dispose():r=!0,t.call(i,e)}),null,s),r&&n.dispose(),n}}function i(e,t,i){return n(((i,s=null,n)=>e((e=>i.call(s,t(e))),null,n)),i)}function s(e,t,i){return n(((i,s=null,n)=>e((e=>t(e)&&i.call(s,e)),null,n)),i)}function n(e,t){let i;const s=new p({onWillAddFirstListener(){i=e(s.fire,s)},onDidRemoveLastListener(){i?.dispose()}});return t?.add(s),s.event}function o(e,t,i=100,s=!1,n=!1,r,o){let a,l,h,c,u=0;const d=new p({leakWarningThreshold:r,onWillAddFirstListener(){a=e((e=>{u++,l=t(l,e),s&&!h&&(d.fire(l),l=void 0),c=()=>{const e=l;l=void 0,h=void 0,(!s||u>1)&&d.fire(e),u=0},"number"==typeof i?(clearTimeout(h),h=setTimeout(c,i)):void 0===h&&(h=0,queueMicrotask(c))}))},onWillRemoveListener(){n&&u>0&&c?.()},onDidRemoveLastListener(){c=void 0,a.dispose()}});return o?.add(d),d.event}e.None=()=>r.Disposable.None,e.defer=function(e,t){return o(e,(()=>{}),0,void 0,!0,void 0,t)},e.once=t,e.map=i,e.forEach=function(e,t,i){return n(((i,s=null,n)=>e((e=>{t(e),i.call(s,e)}),null,n)),i)},e.filter=s,e.signal=function(e){return e},e.any=function(...e){return(t,i=null,s)=>{return n=(0,r.combinedDisposable)(...e.map((e=>e((e=>t.call(i,e)))))),(o=s)instanceof Array?o.push(n):o&&o.add(n),n;var n,o}},e.reduce=function(e,t,s,n){let r=s;return i(e,(e=>(r=t(r,e),r)),n)},e.debounce=o,e.accumulate=function(t,i=0,s){return e.debounce(t,((e,t)=>e?(e.push(t),e):[t]),i,void 0,!0,void 0,s)},e.latch=function(e,t=(e,t)=>e===t,i){let n,r=!0;return s(e,(e=>{const i=r||!t(e,n);return r=!1,n=e,i}),i)},e.split=function(t,i,s){return[e.filter(t,i,s),e.filter(t,(e=>!i(e)),s)]},e.buffer=function(e,t=!1,i=[],s){let n=i.slice(),r=e((e=>{n?n.push(e):a.fire(e)}));s&&s.add(r);const o=()=>{n?.forEach((e=>a.fire(e))),n=null},a=new p({onWillAddFirstListener(){r||(r=e((e=>a.fire(e))),s&&s.add(r))},onDidAddFirstListener(){n&&(t?setTimeout(o):o())},onDidRemoveLastListener(){r&&r.dispose(),r=null}});return s&&s.add(a),a.event},e.chain=function(e,t){return(i,s,n)=>{const r=t(new l);return e((function(e){const t=r.evaluate(e);t!==a&&i.call(s,t)}),void 0,n)}};const a=Symbol("HaltChainable");class l{constructor(){this.steps=[]}map(e){return this.steps.push(e),this}forEach(e){return this.steps.push((t=>(e(t),t))),this}filter(e){return this.steps.push((t=>e(t)?t:a)),this}reduce(e,t){let i=t;return this.steps.push((t=>(i=e(i,t),i))),this}latch(e=(e,t)=>e===t){let t,i=!0;return this.steps.push((s=>{const n=i||!e(s,t);return i=!1,t=s,n?s:a})),this}evaluate(e){for(const t of this.steps)if((e=t(e))===a)break;return e}}e.fromNodeEventEmitter=function(e,t,i=e=>e){const s=(...e)=>n.fire(i(...e)),n=new p({onWillAddFirstListener:()=>e.on(t,s),onDidRemoveLastListener:()=>e.removeListener(t,s)});return n.event},e.fromDOMEventEmitter=function(e,t,i=e=>e){const s=(...e)=>n.fire(i(...e)),n=new p({onWillAddFirstListener:()=>e.addEventListener(t,s),onDidRemoveLastListener:()=>e.removeEventListener(t,s)});return n.event},e.toPromise=function(e){return new Promise((i=>t(e)(i)))},e.fromPromise=function(e){const t=new p;return e.then((e=>{t.fire(e)}),(()=>{t.fire(void 0)})).finally((()=>{t.dispose()})),t.event},e.forward=function(e,t){return e((e=>t.fire(e)))},e.runAndSubscribe=function(e,t,i){return t(i),e((e=>t(e)))};class h{constructor(e,t){this._observable=e,this._counter=0,this._hasChanged=!1;const i={onWillAddFirstListener:()=>{e.addObserver(this)},onDidRemoveLastListener:()=>{e.removeObserver(this)}};this.emitter=new p(i),t&&t.add(this.emitter)}beginUpdate(e){this._counter++}handlePossibleChange(e){}handleChange(e,t){this._hasChanged=!0}endUpdate(e){this._counter--,0===this._counter&&(this._observable.reportChanges(),this._hasChanged&&(this._hasChanged=!1,this.emitter.fire(this._observable.get())))}}e.fromObservable=function(e,t){return new h(e,t).emitter.event},e.fromObservableLight=function(e){return(t,i,s)=>{let n=0,o=!1;const a={beginUpdate(){n++},endUpdate(){n--,0===n&&(e.reportChanges(),o&&(o=!1,t.call(i)))},handlePossibleChange(){},handleChange(){o=!0}};e.addObserver(a),e.reportChanges();const l={dispose(){e.removeObserver(a)}};return s instanceof r.DisposableStore?s.add(l):Array.isArray(s)&&s.push(l),l}}}(l||(t.Event=l={}));class h{static{this.all=new Set}static{this._idPool=0}constructor(e){this.listenerCount=0,this.invocationCount=0,this.elapsedOverall=0,this.durations=[],this.name=`${e}_${h._idPool++}`,h.all.add(this)}start(e){this._stopWatch=new a.StopWatch,this.listenerCount=e}stop(){if(this._stopWatch){const e=this._stopWatch.elapsed();this.durations.push(e),this.elapsedOverall+=e,this.invocationCount+=1,this._stopWatch=void 0}}}t.EventProfiling=h;let c=-1;class u{static{this._idPool=1}constructor(e,t,i=(u._idPool++).toString(16).padStart(3,"0")){this._errorHandler=e,this.threshold=t,this.name=i,this._warnCountdown=0}dispose(){this._stacks?.clear()}check(e,t){const i=this.threshold;if(i<=0||t<i)return;this._stacks||(this._stacks=new Map);const s=this._stacks.get(e.value)||0;if(this._stacks.set(e.value,s+1),this._warnCountdown-=1,this._warnCountdown<=0){this._warnCountdown=.5*i;const[e,s]=this.getMostFrequentStack(),n=`[${this.name}] potential listener LEAK detected, having ${t} listeners already. MOST frequent listener (${s}):`;console.warn(n),console.warn(e);const r=new _(n,e);this._errorHandler(r)}return()=>{const t=this._stacks.get(e.value)||0;this._stacks.set(e.value,t-1)}}getMostFrequentStack(){if(!this._stacks)return;let e,t=0;for(const[i,s]of this._stacks)(!e||t<s)&&(e=[i,s],t=s);return e}}class d{static create(){const e=new Error;return new d(e.stack??"")}constructor(e){this.value=e}print(){console.warn(this.value.split("\n").slice(2).join("\n"))}}class _ extends Error{constructor(e,t){super(e),this.name="ListenerLeakError",this.stack=t}}t.ListenerLeakError=_;class f extends Error{constructor(e,t){super(e),this.name="ListenerRefusalError",this.stack=t}}t.ListenerRefusalError=f;let g=0;class m{constructor(e){this.value=e,this.id=g++}}class p{constructor(e){this._size=0,this._options=e,this._leakageMon=c>0||this._options?.leakWarningThreshold?new u(e?.onListenerError??s.onUnexpectedError,this._options?.leakWarningThreshold??c):void 0,this._perfMon=this._options?._profName?new h(this._options._profName):void 0,this._deliveryQueue=this._options?.deliveryQueue}dispose(){this._disposed||(this._disposed=!0,this._deliveryQueue?.current===this&&this._deliveryQueue.reset(),this._listeners&&(this._listeners=void 0,this._size=0),this._options?.onDidRemoveLastListener?.(),this._leakageMon?.dispose())}get event(){return this._event??=(e,t,i)=>{if(this._leakageMon&&this._size>this._leakageMon.threshold**2){const e=`[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;console.warn(e);const t=this._leakageMon.getMostFrequentStack()??["UNKNOWN stack",-1],i=new f(`${e}. HINT: Stack shows most frequent listener (${t[1]}-times)`,t[0]);return(this._options?.onListenerError||s.onUnexpectedError)(i),r.Disposable.None}if(this._disposed)return r.Disposable.None;t&&(e=e.bind(t));const n=new m(e);let o;this._leakageMon&&this._size>=Math.ceil(.2*this._leakageMon.threshold)&&(n.stack=d.create(),o=this._leakageMon.check(n.stack,this._size+1)),this._listeners?this._listeners instanceof m?(this._deliveryQueue??=new v,this._listeners=[this._listeners,n]):this._listeners.push(n):(this._options?.onWillAddFirstListener?.(this),this._listeners=n,this._options?.onDidAddFirstListener?.(this)),this._size++;const a=(0,r.toDisposable)((()=>{o?.(),this._removeListener(n)}));return i instanceof r.DisposableStore?i.add(a):Array.isArray(i)&&i.push(a),a},this._event}_removeListener(e){if(this._options?.onWillRemoveListener?.(this),!this._listeners)return;if(1===this._size)return this._listeners=void 0,this._options?.onDidRemoveLastListener?.(this),void(this._size=0);const t=this._listeners,i=t.indexOf(e);if(-1===i)throw console.log("disposed?",this._disposed),console.log("size?",this._size),console.log("arr?",JSON.stringify(this._listeners)),new Error("Attempted to dispose unknown listener");this._size--,t[i]=void 0;const s=this._deliveryQueue.current===this;if(2*this._size<=t.length){let e=0;for(let i=0;i<t.length;i++)t[i]?t[e++]=t[i]:s&&(this._deliveryQueue.end--,e<this._deliveryQueue.i&&this._deliveryQueue.i--);t.length=e}}_deliver(e,t){if(!e)return;const i=this._options?.onListenerError||s.onUnexpectedError;if(i)try{e.value(t)}catch(e){i(e)}else e.value(t)}_deliverQueue(e){const t=e.current._listeners;for(;e.i<e.end;)this._deliver(t[e.i++],e.value);e.reset()}fire(e){if(this._deliveryQueue?.current&&(this._deliverQueue(this._deliveryQueue),this._perfMon?.stop()),this._perfMon?.start(this._size),this._listeners)if(this._listeners instanceof m)this._deliver(this._listeners,e);else{const t=this._deliveryQueue;t.enqueue(this,e,this._listeners.length),this._deliverQueue(t)}this._perfMon?.stop()}hasListeners(){return this._size>0}}t.Emitter=p,t.createEventDeliveryQueue=()=>new v;class v{constructor(){this.i=-1,this.end=0}enqueue(e,t,i){this.i=0,this.end=i,this.current=e,this.value=t}reset(){this.i=this.end,this.current=void 0,this.value=void 0}}t.AsyncEmitter=class extends p{async fireAsync(e,t,i){if(this._listeners)for(this._asyncDeliveryQueue||(this._asyncDeliveryQueue=new o.LinkedList),((e,t)=>{if(e instanceof m)t(e);else for(let i=0;i<e.length;i++){const s=e[i];s&&t(s)}})(this._listeners,(t=>this._asyncDeliveryQueue.push([t.value,e])));this._asyncDeliveryQueue.size>0&&!t.isCancellationRequested;){const[e,n]=this._asyncDeliveryQueue.shift(),r=[],o={...n,token:t,waitUntil:t=>{if(Object.isFrozen(r))throw new Error("waitUntil can NOT be called asynchronous");i&&(t=i(t,e)),r.push(t)}};try{e(o)}catch(e){(0,s.onUnexpectedError)(e);continue}Object.freeze(r),await Promise.allSettled(r).then((e=>{for(const t of e)"rejected"===t.status&&(0,s.onUnexpectedError)(t.reason)}))}}};class C extends p{get isPaused(){return 0!==this._isPaused}constructor(e){super(e),this._isPaused=0,this._eventQueue=new o.LinkedList,this._mergeFn=e?.merge}pause(){this._isPaused++}resume(){if(0!==this._isPaused&&0==--this._isPaused)if(this._mergeFn){if(this._eventQueue.size>0){const e=Array.from(this._eventQueue);this._eventQueue.clear(),super.fire(this._mergeFn(e))}}else for(;!this._isPaused&&0!==this._eventQueue.size;)super.fire(this._eventQueue.shift())}fire(e){this._size&&(0!==this._isPaused?this._eventQueue.push(e):super.fire(e))}}t.PauseableEmitter=C,t.DebounceEmitter=class extends C{constructor(e){super(e),this._delay=e.delay??100}fire(e){this._handle||(this.pause(),this._handle=setTimeout((()=>{this._handle=void 0,this.resume()}),this._delay)),super.fire(e)}},t.MicrotaskEmitter=class extends p{constructor(e){super(e),this._queuedEvents=[],this._mergeFn=e?.merge}fire(e){this.hasListeners()&&(this._queuedEvents.push(e),1===this._queuedEvents.length&&queueMicrotask((()=>{this._mergeFn?super.fire(this._mergeFn(this._queuedEvents)):this._queuedEvents.forEach((e=>super.fire(e))),this._queuedEvents=[]})))}};class E{constructor(){this.hasListeners=!1,this.events=[],this.emitter=new p({onWillAddFirstListener:()=>this.onFirstListenerAdd(),onDidRemoveLastListener:()=>this.onLastListenerRemove()})}get event(){return this.emitter.event}add(e){const t={event:e,listener:null};return this.events.push(t),this.hasListeners&&this.hook(t),(0,r.toDisposable)((0,n.createSingleCallFunction)((()=>{this.hasListeners&&this.unhook(t);const e=this.events.indexOf(t);this.events.splice(e,1)})))}onFirstListenerAdd(){this.hasListeners=!0,this.events.forEach((e=>this.hook(e)))}onLastListenerRemove(){this.hasListeners=!1,this.events.forEach((e=>this.unhook(e)))}hook(e){e.listener=e.event((e=>this.emitter.fire(e)))}unhook(e){e.listener?.dispose(),e.listener=null}dispose(){this.emitter.dispose();for(const e of this.events)e.listener?.dispose();this.events=[]}}t.EventMultiplexer=E,t.DynamicListEventMultiplexer=class{constructor(e,t,i,s){this._store=new r.DisposableStore;const n=this._store.add(new E),o=this._store.add(new r.DisposableMap);function a(e){o.set(e,n.add(s(e)))}for(const t of e)a(t);this._store.add(t((e=>{a(e)}))),this._store.add(i((e=>{o.deleteAndDispose(e)}))),this.event=n.event}dispose(){this._store.dispose()}},t.EventBufferer=class{constructor(){this.data=[]}wrapEvent(e,t,i){return(s,n,r)=>e((e=>{const r=this.data[this.data.length-1];if(!t)return void(r?r.buffers.push((()=>s.call(n,e))):s.call(n,e));const o=r;o?(o.items??=[],o.items.push(e),0===o.buffers.length&&r.buffers.push((()=>{o.reducedResult??=i?o.items.reduce(t,i):o.items.reduce(t),s.call(n,o.reducedResult)}))):s.call(n,t(i,e))}),void 0,r)}bufferEvents(e){const t={buffers:new Array};this.data.push(t);const i=e();return this.data.pop(),t.buffers.forEach((e=>e())),i}},t.Relay=class{constructor(){this.listening=!1,this.inputEvent=l.None,this.inputEventListener=r.Disposable.None,this.emitter=new p({onDidAddFirstListener:()=>{this.listening=!0,this.inputEventListener=this.inputEvent(this.emitter.fire,this.emitter)},onDidRemoveLastListener:()=>{this.listening=!1,this.inputEventListener.dispose()}}),this.event=this.emitter.event}set input(e){this.inputEvent=e,this.listening&&(this.inputEventListener.dispose(),this.inputEventListener=e(this.emitter.fire,this.emitter))}dispose(){this.inputEventListener.dispose(),this.emitter.dispose()}},t.ValueWithChangeEvent=class{static const(e){return new w(e)}constructor(e){this._value=e,this._onDidChange=new p,this.onDidChange=this._onDidChange.event}get value(){return this._value}set value(e){e!==this._value&&(this._value=e,this._onDidChange.fire(void 0))}};class w{constructor(e){this.value=e,this.onDidChange=l.None}}},7355:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createSingleCallFunction=function(e,t){const i=this;let s,n=!1;return function(){if(n)return s;if(n=!0,t)try{s=e.apply(i,arguments)}finally{t()}else s=e.apply(i,arguments);return s}}},6506:function(e,t,i){var s=this&&this.__createBinding||(Object.create?function(e,t,i,s){void 0===s&&(s=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,s,n)}:function(e,t,i,s){void 0===s&&(s=i),e[s]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&s(t,e,i);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.StringSHA1=t.Hasher=void 0,t.hash=function(e){return a(e,0)},t.doHash=a,t.numberHash=l,t.stringHash=h,t.toHexString=_;const o=r(i(1130));function a(e,t){switch(typeof e){case"object":return null===e?l(349,t):Array.isArray(e)?(i=e,s=l(104579,s=t),i.reduce(((e,t)=>a(t,e)),s)):function(e,t){return t=l(181387,t),Object.keys(e).sort().reduce(((t,i)=>(t=h(i,t),a(e[i],t))),t)}(e,t);case"string":return h(e,t);case"boolean":return function(e,t){return l(e?433:863,t)}(e,t);case"number":return l(e,t);case"undefined":return l(937,t);default:return l(617,t)}var i,s}function l(e,t){return(t<<5)-t+e|0}function h(e,t){t=l(149417,t);for(let i=0,s=e.length;i<s;i++)t=l(e.charCodeAt(i),t);return t}var c;function u(e,t,i=32){const s=i-t;return(e<<t|(~((1<<s)-1)&e)>>>s)>>>0}function d(e,t=0,i=e.byteLength,s=0){for(let n=0;n<i;n++)e[t+n]=s}function _(e,t=32){return e instanceof ArrayBuffer?Array.from(new Uint8Array(e)).map((e=>e.toString(16).padStart(2,"0"))).join(""):function(e,t,i="0"){for(;e.length<t;)e=i+e;return e}((e>>>0).toString(16),t/4)}t.Hasher=class{constructor(){this._value=0}get value(){return this._value}hash(e){return this._value=a(e,this._value),this._value}},function(e){e[e.BLOCK_SIZE=64]="BLOCK_SIZE",e[e.UNICODE_REPLACEMENT=65533]="UNICODE_REPLACEMENT"}(c||(c={}));class f{static{this._bigBlock32=new DataView(new ArrayBuffer(320))}constructor(){this._h0=1732584193,this._h1=4023233417,this._h2=2562383102,this._h3=271733878,this._h4=3285377520,this._buff=new Uint8Array(c.BLOCK_SIZE+3),this._buffDV=new DataView(this._buff.buffer),this._buffLen=0,this._totalLen=0,this._leftoverHighSurrogate=0,this._finished=!1}update(e){const t=e.length;if(0===t)return;const i=this._buff;let s,n,r=this._buffLen,a=this._leftoverHighSurrogate;for(0!==a?(s=a,n=-1,a=0):(s=e.charCodeAt(0),n=0);;){let l=s;if(o.isHighSurrogate(s)){if(!(n+1<t)){a=s;break}{const t=e.charCodeAt(n+1);o.isLowSurrogate(t)?(n++,l=o.computeCodePoint(s,t)):l=c.UNICODE_REPLACEMENT}}else o.isLowSurrogate(s)&&(l=c.UNICODE_REPLACEMENT);if(r=this._push(i,r,l),n++,!(n<t))break;s=e.charCodeAt(n)}this._buffLen=r,this._leftoverHighSurrogate=a}_push(e,t,i){return i<128?e[t++]=i:i<2048?(e[t++]=192|(1984&i)>>>6,e[t++]=128|(63&i)>>>0):i<65536?(e[t++]=224|(61440&i)>>>12,e[t++]=128|(4032&i)>>>6,e[t++]=128|(63&i)>>>0):(e[t++]=240|(1835008&i)>>>18,e[t++]=128|(258048&i)>>>12,e[t++]=128|(4032&i)>>>6,e[t++]=128|(63&i)>>>0),t>=c.BLOCK_SIZE&&(this._step(),t-=c.BLOCK_SIZE,this._totalLen+=c.BLOCK_SIZE,e[0]=e[c.BLOCK_SIZE+0],e[1]=e[c.BLOCK_SIZE+1],e[2]=e[c.BLOCK_SIZE+2]),t}digest(){return this._finished||(this._finished=!0,this._leftoverHighSurrogate&&(this._leftoverHighSurrogate=0,this._buffLen=this._push(this._buff,this._buffLen,c.UNICODE_REPLACEMENT)),this._totalLen+=this._buffLen,this._wrapUp()),_(this._h0)+_(this._h1)+_(this._h2)+_(this._h3)+_(this._h4)}_wrapUp(){this._buff[this._buffLen++]=128,d(this._buff,this._buffLen),this._buffLen>56&&(this._step(),d(this._buff));const e=8*this._totalLen;this._buffDV.setUint32(56,Math.floor(e/4294967296),!1),this._buffDV.setUint32(60,e%4294967296,!1),this._step()}_step(){const e=f._bigBlock32,t=this._buffDV;for(let i=0;i<64;i+=4)e.setUint32(i,t.getUint32(i,!1),!1);for(let t=64;t<320;t+=4)e.setUint32(t,u(e.getUint32(t-12,!1)^e.getUint32(t-32,!1)^e.getUint32(t-56,!1)^e.getUint32(t-64,!1),1),!1);let i,s,n,r=this._h0,o=this._h1,a=this._h2,l=this._h3,h=this._h4;for(let t=0;t<80;t++)t<20?(i=o&a|~o&l,s=1518500249):t<40?(i=o^a^l,s=1859775393):t<60?(i=o&a|o&l|a&l,s=2400959708):(i=o^a^l,s=3395469782),n=u(r,5)+i+h+s+e.getUint32(4*t,!1)&4294967295,h=l,l=a,a=u(o,30),o=r,r=n;this._h0=this._h0+r&4294967295,this._h1=this._h1+o&4294967295,this._h2=this._h2+a&4294967295,this._h3=this._h3+l&4294967295,this._h4=this._h4+h&4294967295}}t.StringSHA1=f},8956:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.Iterable=void 0,function(e){function t(e){return e&&"object"==typeof e&&"function"==typeof e[Symbol.iterator]}e.is=t;const i=Object.freeze([]);function*s(e){yield e}e.empty=function(){return i},e.single=s,e.wrap=function(e){return t(e)?e:s(e)},e.from=function(e){return e||i},e.reverse=function*(e){for(let t=e.length-1;t>=0;t--)yield e[t]},e.isEmpty=function(e){return!e||!0===e[Symbol.iterator]().next().done},e.first=function(e){return e[Symbol.iterator]().next().value},e.some=function(e,t){let i=0;for(const s of e)if(t(s,i++))return!0;return!1},e.find=function(e,t){for(const i of e)if(t(i))return i},e.filter=function*(e,t){for(const i of e)t(i)&&(yield i)},e.map=function*(e,t){let i=0;for(const s of e)yield t(s,i++)},e.flatMap=function*(e,t){let i=0;for(const s of e)yield*t(s,i++)},e.concat=function*(...e){for(const t of e)yield*t},e.reduce=function(e,t,i){let s=i;for(const i of e)s=t(s,i);return s},e.slice=function*(e,t,i=e.length){for(t<0&&(t+=e.length),i<0?i+=e.length:i>e.length&&(i=e.length);t<i;t++)yield e[t]},e.consume=function(t,i=Number.POSITIVE_INFINITY){const s=[];if(0===i)return[s,t];const n=t[Symbol.iterator]();for(let t=0;t<i;t++){const t=n.next();if(t.done)return[s,e.empty()];s.push(t.value)}return[s,{[Symbol.iterator]:()=>n}]},e.asyncToArray=async function(e){const t=[];for await(const i of e)t.push(i);return Promise.resolve(t)}}(i||(t.Iterable=i={}))},1513:(e,t)=>{var i,s;Object.defineProperty(t,"__esModule",{value:!0}),t.KeyMod=t.KeyCodeUtils=t.ScanCodeUtils=t.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE=t.EVENT_KEY_CODE_MAP=t.ScanCode=t.KeyCode=void 0,t.KeyChord=function(e,t){return(e|(65535&t)<<16>>>0)>>>0},function(e){e[e.DependsOnKbLayout=-1]="DependsOnKbLayout",e[e.Unknown=0]="Unknown",e[e.Backspace=1]="Backspace",e[e.Tab=2]="Tab",e[e.Enter=3]="Enter",e[e.Shift=4]="Shift",e[e.Ctrl=5]="Ctrl",e[e.Alt=6]="Alt",e[e.PauseBreak=7]="PauseBreak",e[e.CapsLock=8]="CapsLock",e[e.Escape=9]="Escape",e[e.Space=10]="Space",e[e.PageUp=11]="PageUp",e[e.PageDown=12]="PageDown",e[e.End=13]="End",e[e.Home=14]="Home",e[e.LeftArrow=15]="LeftArrow",e[e.UpArrow=16]="UpArrow",e[e.RightArrow=17]="RightArrow",e[e.DownArrow=18]="DownArrow",e[e.Insert=19]="Insert",e[e.Delete=20]="Delete",e[e.Digit0=21]="Digit0",e[e.Digit1=22]="Digit1",e[e.Digit2=23]="Digit2",e[e.Digit3=24]="Digit3",e[e.Digit4=25]="Digit4",e[e.Digit5=26]="Digit5",e[e.Digit6=27]="Digit6",e[e.Digit7=28]="Digit7",e[e.Digit8=29]="Digit8",e[e.Digit9=30]="Digit9",e[e.KeyA=31]="KeyA",e[e.KeyB=32]="KeyB",e[e.KeyC=33]="KeyC",e[e.KeyD=34]="KeyD",e[e.KeyE=35]="KeyE",e[e.KeyF=36]="KeyF",e[e.KeyG=37]="KeyG",e[e.KeyH=38]="KeyH",e[e.KeyI=39]="KeyI",e[e.KeyJ=40]="KeyJ",e[e.KeyK=41]="KeyK",e[e.KeyL=42]="KeyL",e[e.KeyM=43]="KeyM",e[e.KeyN=44]="KeyN",e[e.KeyO=45]="KeyO",e[e.KeyP=46]="KeyP",e[e.KeyQ=47]="KeyQ",e[e.KeyR=48]="KeyR",e[e.KeyS=49]="KeyS",e[e.KeyT=50]="KeyT",e[e.KeyU=51]="KeyU",e[e.KeyV=52]="KeyV",e[e.KeyW=53]="KeyW",e[e.KeyX=54]="KeyX",e[e.KeyY=55]="KeyY",e[e.KeyZ=56]="KeyZ",e[e.Meta=57]="Meta",e[e.ContextMenu=58]="ContextMenu",e[e.F1=59]="F1",e[e.F2=60]="F2",e[e.F3=61]="F3",e[e.F4=62]="F4",e[e.F5=63]="F5",e[e.F6=64]="F6",e[e.F7=65]="F7",e[e.F8=66]="F8",e[e.F9=67]="F9",e[e.F10=68]="F10",e[e.F11=69]="F11",e[e.F12=70]="F12",e[e.F13=71]="F13",e[e.F14=72]="F14",e[e.F15=73]="F15",e[e.F16=74]="F16",e[e.F17=75]="F17",e[e.F18=76]="F18",e[e.F19=77]="F19",e[e.F20=78]="F20",e[e.F21=79]="F21",e[e.F22=80]="F22",e[e.F23=81]="F23",e[e.F24=82]="F24",e[e.NumLock=83]="NumLock",e[e.ScrollLock=84]="ScrollLock",e[e.Semicolon=85]="Semicolon",e[e.Equal=86]="Equal",e[e.Comma=87]="Comma",e[e.Minus=88]="Minus",e[e.Period=89]="Period",e[e.Slash=90]="Slash",e[e.Backquote=91]="Backquote",e[e.BracketLeft=92]="BracketLeft",e[e.Backslash=93]="Backslash",e[e.BracketRight=94]="BracketRight",e[e.Quote=95]="Quote",e[e.OEM_8=96]="OEM_8",e[e.IntlBackslash=97]="IntlBackslash",e[e.Numpad0=98]="Numpad0",e[e.Numpad1=99]="Numpad1",e[e.Numpad2=100]="Numpad2",e[e.Numpad3=101]="Numpad3",e[e.Numpad4=102]="Numpad4",e[e.Numpad5=103]="Numpad5",e[e.Numpad6=104]="Numpad6",e[e.Numpad7=105]="Numpad7",e[e.Numpad8=106]="Numpad8",e[e.Numpad9=107]="Numpad9",e[e.NumpadMultiply=108]="NumpadMultiply",e[e.NumpadAdd=109]="NumpadAdd",e[e.NUMPAD_SEPARATOR=110]="NUMPAD_SEPARATOR",e[e.NumpadSubtract=111]="NumpadSubtract",e[e.NumpadDecimal=112]="NumpadDecimal",e[e.NumpadDivide=113]="NumpadDivide",e[e.KEY_IN_COMPOSITION=114]="KEY_IN_COMPOSITION",e[e.ABNT_C1=115]="ABNT_C1",e[e.ABNT_C2=116]="ABNT_C2",e[e.AudioVolumeMute=117]="AudioVolumeMute",e[e.AudioVolumeUp=118]="AudioVolumeUp",e[e.AudioVolumeDown=119]="AudioVolumeDown",e[e.BrowserSearch=120]="BrowserSearch",e[e.BrowserHome=121]="BrowserHome",e[e.BrowserBack=122]="BrowserBack",e[e.BrowserForward=123]="BrowserForward",e[e.MediaTrackNext=124]="MediaTrackNext",e[e.MediaTrackPrevious=125]="MediaTrackPrevious",e[e.MediaStop=126]="MediaStop",e[e.MediaPlayPause=127]="MediaPlayPause",e[e.LaunchMediaPlayer=128]="LaunchMediaPlayer",e[e.LaunchMail=129]="LaunchMail",e[e.LaunchApp2=130]="LaunchApp2",e[e.Clear=131]="Clear",e[e.MAX_VALUE=132]="MAX_VALUE"}(i||(t.KeyCode=i={})),function(e){e[e.DependsOnKbLayout=-1]="DependsOnKbLayout",e[e.None=0]="None",e[e.Hyper=1]="Hyper",e[e.Super=2]="Super",e[e.Fn=3]="Fn",e[e.FnLock=4]="FnLock",e[e.Suspend=5]="Suspend",e[e.Resume=6]="Resume",e[e.Turbo=7]="Turbo",e[e.Sleep=8]="Sleep",e[e.WakeUp=9]="WakeUp",e[e.KeyA=10]="KeyA",e[e.KeyB=11]="KeyB",e[e.KeyC=12]="KeyC",e[e.KeyD=13]="KeyD",e[e.KeyE=14]="KeyE",e[e.KeyF=15]="KeyF",e[e.KeyG=16]="KeyG",e[e.KeyH=17]="KeyH",e[e.KeyI=18]="KeyI",e[e.KeyJ=19]="KeyJ",e[e.KeyK=20]="KeyK",e[e.KeyL=21]="KeyL",e[e.KeyM=22]="KeyM",e[e.KeyN=23]="KeyN",e[e.KeyO=24]="KeyO",e[e.KeyP=25]="KeyP",e[e.KeyQ=26]="KeyQ",e[e.KeyR=27]="KeyR",e[e.KeyS=28]="KeyS",e[e.KeyT=29]="KeyT",e[e.KeyU=30]="KeyU",e[e.KeyV=31]="KeyV",e[e.KeyW=32]="KeyW",e[e.KeyX=33]="KeyX",e[e.KeyY=34]="KeyY",e[e.KeyZ=35]="KeyZ",e[e.Digit1=36]="Digit1",e[e.Digit2=37]="Digit2",e[e.Digit3=38]="Digit3",e[e.Digit4=39]="Digit4",e[e.Digit5=40]="Digit5",e[e.Digit6=41]="Digit6",e[e.Digit7=42]="Digit7",e[e.Digit8=43]="Digit8",e[e.Digit9=44]="Digit9",e[e.Digit0=45]="Digit0",e[e.Enter=46]="Enter",e[e.Escape=47]="Escape",e[e.Backspace=48]="Backspace",e[e.Tab=49]="Tab",e[e.Space=50]="Space",e[e.Minus=51]="Minus",e[e.Equal=52]="Equal",e[e.BracketLeft=53]="BracketLeft",e[e.BracketRight=54]="BracketRight",e[e.Backslash=55]="Backslash",e[e.IntlHash=56]="IntlHash",e[e.Semicolon=57]="Semicolon",e[e.Quote=58]="Quote",e[e.Backquote=59]="Backquote",e[e.Comma=60]="Comma",e[e.Period=61]="Period",e[e.Slash=62]="Slash",e[e.CapsLock=63]="CapsLock",e[e.F1=64]="F1",e[e.F2=65]="F2",e[e.F3=66]="F3",e[e.F4=67]="F4",e[e.F5=68]="F5",e[e.F6=69]="F6",e[e.F7=70]="F7",e[e.F8=71]="F8",e[e.F9=72]="F9",e[e.F10=73]="F10",e[e.F11=74]="F11",e[e.F12=75]="F12",e[e.PrintScreen=76]="PrintScreen",e[e.ScrollLock=77]="ScrollLock",e[e.Pause=78]="Pause",e[e.Insert=79]="Insert",e[e.Home=80]="Home",e[e.PageUp=81]="PageUp",e[e.Delete=82]="Delete",e[e.End=83]="End",e[e.PageDown=84]="PageDown",e[e.ArrowRight=85]="ArrowRight",e[e.ArrowLeft=86]="ArrowLeft",e[e.ArrowDown=87]="ArrowDown",e[e.ArrowUp=88]="ArrowUp",e[e.NumLock=89]="NumLock",e[e.NumpadDivide=90]="NumpadDivide",e[e.NumpadMultiply=91]="NumpadMultiply",e[e.NumpadSubtract=92]="NumpadSubtract",e[e.NumpadAdd=93]="NumpadAdd",e[e.NumpadEnter=94]="NumpadEnter",e[e.Numpad1=95]="Numpad1",e[e.Numpad2=96]="Numpad2",e[e.Numpad3=97]="Numpad3",e[e.Numpad4=98]="Numpad4",e[e.Numpad5=99]="Numpad5",e[e.Numpad6=100]="Numpad6",e[e.Numpad7=101]="Numpad7",e[e.Numpad8=102]="Numpad8",e[e.Numpad9=103]="Numpad9",e[e.Numpad0=104]="Numpad0",e[e.NumpadDecimal=105]="NumpadDecimal",e[e.IntlBackslash=106]="IntlBackslash",e[e.ContextMenu=107]="ContextMenu",e[e.Power=108]="Power",e[e.NumpadEqual=109]="NumpadEqual",e[e.F13=110]="F13",e[e.F14=111]="F14",e[e.F15=112]="F15",e[e.F16=113]="F16",e[e.F17=114]="F17",e[e.F18=115]="F18",e[e.F19=116]="F19",e[e.F20=117]="F20",e[e.F21=118]="F21",e[e.F22=119]="F22",e[e.F23=120]="F23",e[e.F24=121]="F24",e[e.Open=122]="Open",e[e.Help=123]="Help",e[e.Select=124]="Select",e[e.Again=125]="Again",e[e.Undo=126]="Undo",e[e.Cut=127]="Cut",e[e.Copy=128]="Copy",e[e.Paste=129]="Paste",e[e.Find=130]="Find",e[e.AudioVolumeMute=131]="AudioVolumeMute",e[e.AudioVolumeUp=132]="AudioVolumeUp",e[e.AudioVolumeDown=133]="AudioVolumeDown",e[e.NumpadComma=134]="NumpadComma",e[e.IntlRo=135]="IntlRo",e[e.KanaMode=136]="KanaMode",e[e.IntlYen=137]="IntlYen",e[e.Convert=138]="Convert",e[e.NonConvert=139]="NonConvert",e[e.Lang1=140]="Lang1",e[e.Lang2=141]="Lang2",e[e.Lang3=142]="Lang3",e[e.Lang4=143]="Lang4",e[e.Lang5=144]="Lang5",e[e.Abort=145]="Abort",e[e.Props=146]="Props",e[e.NumpadParenLeft=147]="NumpadParenLeft",e[e.NumpadParenRight=148]="NumpadParenRight",e[e.NumpadBackspace=149]="NumpadBackspace",e[e.NumpadMemoryStore=150]="NumpadMemoryStore",e[e.NumpadMemoryRecall=151]="NumpadMemoryRecall",e[e.NumpadMemoryClear=152]="NumpadMemoryClear",e[e.NumpadMemoryAdd=153]="NumpadMemoryAdd",e[e.NumpadMemorySubtract=154]="NumpadMemorySubtract",e[e.NumpadClear=155]="NumpadClear",e[e.NumpadClearEntry=156]="NumpadClearEntry",e[e.ControlLeft=157]="ControlLeft",e[e.ShiftLeft=158]="ShiftLeft",e[e.AltLeft=159]="AltLeft",e[e.MetaLeft=160]="MetaLeft",e[e.ControlRight=161]="ControlRight",e[e.ShiftRight=162]="ShiftRight",e[e.AltRight=163]="AltRight",e[e.MetaRight=164]="MetaRight",e[e.BrightnessUp=165]="BrightnessUp",e[e.BrightnessDown=166]="BrightnessDown",e[e.MediaPlay=167]="MediaPlay",e[e.MediaRecord=168]="MediaRecord",e[e.MediaFastForward=169]="MediaFastForward",e[e.MediaRewind=170]="MediaRewind",e[e.MediaTrackNext=171]="MediaTrackNext",e[e.MediaTrackPrevious=172]="MediaTrackPrevious",e[e.MediaStop=173]="MediaStop",e[e.Eject=174]="Eject",e[e.MediaPlayPause=175]="MediaPlayPause",e[e.MediaSelect=176]="MediaSelect",e[e.LaunchMail=177]="LaunchMail",e[e.LaunchApp2=178]="LaunchApp2",e[e.LaunchApp1=179]="LaunchApp1",e[e.SelectTask=180]="SelectTask",e[e.LaunchScreenSaver=181]="LaunchScreenSaver",e[e.BrowserSearch=182]="BrowserSearch",e[e.BrowserHome=183]="BrowserHome",e[e.BrowserBack=184]="BrowserBack",e[e.BrowserForward=185]="BrowserForward",e[e.BrowserStop=186]="BrowserStop",e[e.BrowserRefresh=187]="BrowserRefresh",e[e.BrowserFavorites=188]="BrowserFavorites",e[e.ZoomToggle=189]="ZoomToggle",e[e.MailReply=190]="MailReply",e[e.MailForward=191]="MailForward",e[e.MailSend=192]="MailSend",e[e.MAX_VALUE=193]="MAX_VALUE"}(s||(t.ScanCode=s={}));class n{constructor(){this._keyCodeToStr=[],this._strToKeyCode=Object.create(null)}define(e,t){this._keyCodeToStr[e]=t,this._strToKeyCode[t.toLowerCase()]=e}keyCodeToStr(e){return this._keyCodeToStr[e]}strToKeyCode(e){return this._strToKeyCode[e.toLowerCase()]||i.Unknown}}const r=new n,o=new n,a=new n;t.EVENT_KEY_CODE_MAP=new Array(230),t.NATIVE_WINDOWS_KEY_CODE_TO_KEY_CODE={};const l=[],h=Object.create(null),c=Object.create(null);var u,d;t.ScanCodeUtils={lowerCaseToEnum:e=>c[e]||s.None,toEnum:e=>h[e]||s.None,toString:e=>l[e]||"None"},function(e){e.toString=function(e){return r.keyCodeToStr(e)},e.fromString=function(e){return r.strToKeyCode(e)},e.toUserSettingsUS=function(e){return o.keyCodeToStr(e)},e.toUserSettingsGeneral=function(e){return a.keyCodeToStr(e)},e.fromUserSettings=function(e){return o.strToKeyCode(e)||a.strToKeyCode(e)},e.toElectronAccelerator=function(e){if(e>=i.Numpad0&&e<=i.NumpadDivide)return null;switch(e){case i.UpArrow:return"Up";case i.DownArrow:return"Down";case i.LeftArrow:return"Left";case i.RightArrow:return"Right"}return r.keyCodeToStr(e)}}(u||(t.KeyCodeUtils=u={})),function(e){e[e.CtrlCmd=2048]="CtrlCmd",e[e.Shift=1024]="Shift",e[e.Alt=512]="Alt",e[e.WinCtrl=256]="WinCtrl"}(d||(t.KeyMod=d={}))},7797:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ResolvedKeybinding=t.ResolvedChord=t.Keybinding=t.ScanCodeChord=t.KeyCodeChord=void 0,t.decodeKeybinding=function(e,t){if("number"==typeof e){if(0===e)return null;const i=(65535&e)>>>0,s=(4294901760&e)>>>16;return new c(0!==s?[a(i,t),a(s,t)]:[a(i,t)])}{const i=[];for(let s=0;s<e.length;s++)i.push(a(e[s],t));return new c(i)}},t.createSimpleKeybinding=a;const s=i(4577),n=i(1513),r=i(8973);var o;function a(e,t){const i=!!(e&o.CtrlCmd),s=!!(e&o.WinCtrl),n=t===r.OperatingSystem.Macintosh?s:i,a=!!(e&o.Shift),h=!!(e&o.Alt),c=t===r.OperatingSystem.Macintosh?i:s,u=e&o.KeyCode;return new l(n,a,h,c,u)}!function(e){e[e.CtrlCmd=2048]="CtrlCmd",e[e.Shift=1024]="Shift",e[e.Alt=512]="Alt",e[e.WinCtrl=256]="WinCtrl",e[e.KeyCode=255]="KeyCode"}(o||(o={}));class l{constructor(e,t,i,s,n){this.ctrlKey=e,this.shiftKey=t,this.altKey=i,this.metaKey=s,this.keyCode=n}equals(e){return e instanceof l&&this.ctrlKey===e.ctrlKey&&this.shiftKey===e.shiftKey&&this.altKey===e.altKey&&this.metaKey===e.metaKey&&this.keyCode===e.keyCode}getHashCode(){return`K${this.ctrlKey?"1":"0"}${this.shiftKey?"1":"0"}${this.altKey?"1":"0"}${this.metaKey?"1":"0"}${this.keyCode}`}isModifierKey(){return this.keyCode===n.KeyCode.Unknown||this.keyCode===n.KeyCode.Ctrl||this.keyCode===n.KeyCode.Meta||this.keyCode===n.KeyCode.Alt||this.keyCode===n.KeyCode.Shift}toKeybinding(){return new c([this])}isDuplicateModifierCase(){return this.ctrlKey&&this.keyCode===n.KeyCode.Ctrl||this.shiftKey&&this.keyCode===n.KeyCode.Shift||this.altKey&&this.keyCode===n.KeyCode.Alt||this.metaKey&&this.keyCode===n.KeyCode.Meta}}t.KeyCodeChord=l;class h{constructor(e,t,i,s,n){this.ctrlKey=e,this.shiftKey=t,this.altKey=i,this.metaKey=s,this.scanCode=n}equals(e){return e instanceof h&&this.ctrlKey===e.ctrlKey&&this.shiftKey===e.shiftKey&&this.altKey===e.altKey&&this.metaKey===e.metaKey&&this.scanCode===e.scanCode}getHashCode(){return`S${this.ctrlKey?"1":"0"}${this.shiftKey?"1":"0"}${this.altKey?"1":"0"}${this.metaKey?"1":"0"}${this.scanCode}`}isDuplicateModifierCase(){return this.ctrlKey&&(this.scanCode===n.ScanCode.ControlLeft||this.scanCode===n.ScanCode.ControlRight)||this.shiftKey&&(this.scanCode===n.ScanCode.ShiftLeft||this.scanCode===n.ScanCode.ShiftRight)||this.altKey&&(this.scanCode===n.ScanCode.AltLeft||this.scanCode===n.ScanCode.AltRight)||this.metaKey&&(this.scanCode===n.ScanCode.MetaLeft||this.scanCode===n.ScanCode.MetaRight)}}t.ScanCodeChord=h;class c{constructor(e){if(0===e.length)throw(0,s.illegalArgument)("chords");this.chords=e}getHashCode(){let e="";for(let t=0,i=this.chords.length;t<i;t++)0!==t&&(e+=";"),e+=this.chords[t].getHashCode();return e}equals(e){if(null===e)return!1;if(this.chords.length!==e.chords.length)return!1;for(let t=0;t<this.chords.length;t++)if(!this.chords[t].equals(e.chords[t]))return!1;return!0}}t.Keybinding=c,t.ResolvedChord=class{constructor(e,t,i,s,n,r){this.ctrlKey=e,this.shiftKey=t,this.altKey=i,this.metaKey=s,this.keyLabel=n,this.keyAriaLabel=r}},t.ResolvedKeybinding=class{}},9764:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Lazy=void 0,t.Lazy=class{constructor(e){this.executor=e,this._didRun=!1}get hasValue(){return this._didRun}get value(){if(!this._didRun)try{this._value=this.executor()}catch(e){this._error=e}finally{this._didRun=!0}if(this._error)throw this._error;return this._value}get rawValue(){return this._value}}},2540:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DisposableMap=t.ImmortalReference=t.AsyncReferenceCollection=t.ReferenceCollection=t.SafeDisposable=t.RefCountedDisposable=t.MandatoryMutableDisposable=t.MutableDisposable=t.Disposable=t.DisposableStore=t.DisposableTracker=void 0,t.setDisposableTracker=function(e){l=e},t.trackDisposable=c,t.markAsDisposed=u,t.markAsSingleton=function(e){return l?.markAsSingleton(e),e},t.isDisposable=_,t.dispose=f,t.disposeIfDisposable=function(e){for(const t of e)_(t)&&t.dispose();return[]},t.combinedDisposable=function(...e){const t=g((()=>f(e)));return function(e,t){if(l)for(const i of e)l.setParent(i,t)}(e,t),t},t.toDisposable=g,t.disposeOnReturn=function(e){const t=new m;try{e(t)}finally{t.dispose()}};const s=i(6732),n=i(6033),r=i(714),o=i(7355),a=i(8956);let l=null;class h{constructor(){this.livingDisposables=new Map}static{this.idx=0}getDisposableData(e){let t=this.livingDisposables.get(e);return t||(t={parent:null,source:null,isSingleton:!1,value:e,idx:h.idx++},this.livingDisposables.set(e,t)),t}trackDisposable(e){const t=this.getDisposableData(e);t.source||(t.source=(new Error).stack)}setParent(e,t){this.getDisposableData(e).parent=t}markAsDisposed(e){this.livingDisposables.delete(e)}markAsSingleton(e){this.getDisposableData(e).isSingleton=!0}getRootParent(e,t){const i=t.get(e);if(i)return i;const s=e.parent?this.getRootParent(this.getDisposableData(e.parent),t):e;return t.set(e,s),s}getTrackedDisposables(){const e=new Map;return[...this.livingDisposables.entries()].filter((([,t])=>null!==t.source&&!this.getRootParent(t,e).isSingleton)).flatMap((([e])=>e))}computeLeakingDisposables(e=10,t){let i;if(t)i=t;else{const e=new Map,t=[...this.livingDisposables.values()].filter((t=>null!==t.source&&!this.getRootParent(t,e).isSingleton));if(0===t.length)return;const s=new Set(t.map((e=>e.value)));if(i=t.filter((e=>!(e.parent&&s.has(e.parent)))),0===i.length)throw new Error("There are cyclic diposable chains!")}if(!i)return;function o(e){const t=e.source.split("\n").map((e=>e.trim().replace("at ",""))).filter((e=>""!==e));return function(e,t){for(;e.length>0&&t.some((t=>"string"==typeof t?t===e[0]:e[0].match(t)));)e.shift()}(t,["Error",/^trackDisposable \(.*\)$/,/^DisposableTracker.trackDisposable \(.*\)$/]),t.reverse()}const a=new r.SetMap;for(const e of i){const t=o(e);for(let i=0;i<=t.length;i++)a.add(t.slice(0,i).join("\n"),e)}i.sort((0,s.compareBy)((e=>e.idx),s.numberComparator));let l="",h=0;for(const t of i.slice(0,e)){h++;const e=o(t),s=[];for(let t=0;t<e.length;t++){let r=e[t];r=`(shared with ${a.get(e.slice(0,t+1).join("\n")).size}/${i.length} leaks) at ${r}`;const l=a.get(e.slice(0,t).join("\n")),h=(0,n.groupBy)([...l].map((e=>o(e)[t])),(e=>e));delete h[e[t]];for(const[e,t]of Object.entries(h))s.unshift(`    - stacktraces of ${t.length} other leaks continue with ${e}`);s.unshift(r)}l+=`\n\n\n==================== Leaking disposable ${h}/${i.length}: ${t.value.constructor.name} ====================\n${s.join("\n")}\n============================================================\n\n`}return i.length>e&&(l+=`\n\n\n... and ${i.length-e} more leaking disposables\n\n`),{leaks:i,details:l}}}function c(e){return l?.trackDisposable(e),e}function u(e){l?.markAsDisposed(e)}function d(e,t){l?.setParent(e,t)}function _(e){return"object"==typeof e&&null!==e&&"function"==typeof e.dispose&&0===e.dispose.length}function f(e){if(a.Iterable.is(e)){const t=[];for(const i of e)if(i)try{i.dispose()}catch(e){t.push(e)}if(1===t.length)throw t[0];if(t.length>1)throw new AggregateError(t,"Encountered errors while disposing of store");return Array.isArray(e)?[]:e}if(e)return e.dispose(),e}function g(e){const t=c({dispose:(0,o.createSingleCallFunction)((()=>{u(t),e()}))});return t}t.DisposableTracker=h;class m{static{this.DISABLE_DISPOSED_WARNING=!1}constructor(){this._toDispose=new Set,this._isDisposed=!1,c(this)}dispose(){this._isDisposed||(u(this),this._isDisposed=!0,this.clear())}get isDisposed(){return this._isDisposed}clear(){if(0!==this._toDispose.size)try{f(this._toDispose)}finally{this._toDispose.clear()}}add(e){if(!e)return e;if(e===this)throw new Error("Cannot register a disposable on itself!");return d(e,this),this._isDisposed?m.DISABLE_DISPOSED_WARNING||console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack):this._toDispose.add(e),e}delete(e){if(e){if(e===this)throw new Error("Cannot dispose a disposable on itself!");this._toDispose.delete(e),e.dispose()}}deleteAndLeak(e){e&&this._toDispose.has(e)&&(this._toDispose.delete(e),d(e,null))}}t.DisposableStore=m;class p{static{this.None=Object.freeze({dispose(){}})}constructor(){this._store=new m,c(this),d(this._store,this)}dispose(){u(this),this._store.dispose()}_register(e){if(e===this)throw new Error("Cannot register a disposable on itself!");return this._store.add(e)}}t.Disposable=p;class v{constructor(){this._isDisposed=!1,c(this)}get value(){return this._isDisposed?void 0:this._value}set value(e){this._isDisposed||e===this._value||(this._value?.dispose(),e&&d(e,this),this._value=e)}clear(){this.value=void 0}dispose(){this._isDisposed=!0,u(this),this._value?.dispose(),this._value=void 0}clearAndLeak(){const e=this._value;return this._value=void 0,e&&d(e,null),e}}t.MutableDisposable=v,t.MandatoryMutableDisposable=class{constructor(e){this._disposable=new v,this._isDisposed=!1,this._disposable.value=e}get value(){return this._disposable.value}set value(e){this._isDisposed||e===this._disposable.value||(this._disposable.value=e)}dispose(){this._isDisposed=!0,this._disposable.dispose()}},t.RefCountedDisposable=class{constructor(e){this._disposable=e,this._counter=1}acquire(){return this._counter++,this}release(){return 0==--this._counter&&this._disposable.dispose(),this}},t.SafeDisposable=class{constructor(){this.dispose=()=>{},this.unset=()=>{},this.isset=()=>!1,c(this)}set(e){let t=e;return this.unset=()=>t=void 0,this.isset=()=>void 0!==t,this.dispose=()=>{t&&(t(),t=void 0,u(this))},this}},t.ReferenceCollection=class{constructor(){this.references=new Map}acquire(e,...t){let i=this.references.get(e);i||(i={counter:0,object:this.createReferencedObject(e,...t)},this.references.set(e,i));const{object:s}=i,n=(0,o.createSingleCallFunction)((()=>{0==--i.counter&&(this.destroyReferencedObject(e,i.object),this.references.delete(e))}));return i.counter++,{object:s,dispose:n}}},t.AsyncReferenceCollection=class{constructor(e){this.referenceCollection=e}async acquire(e,...t){const i=this.referenceCollection.acquire(e,...t);try{return{object:await i.object,dispose:()=>i.dispose()}}catch(e){throw i.dispose(),e}}},t.ImmortalReference=class{constructor(e){this.object=e}dispose(){}};class C{constructor(){this._store=new Map,this._isDisposed=!1,c(this)}dispose(){u(this),this._isDisposed=!0,this.clearAndDisposeAll()}clearAndDisposeAll(){if(this._store.size)try{f(this._store.values())}finally{this._store.clear()}}has(e){return this._store.has(e)}get size(){return this._store.size}get(e){return this._store.get(e)}set(e,t,i=!1){this._isDisposed&&console.warn(new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!").stack),i||this._store.get(e)?.dispose(),this._store.set(e,t)}deleteAndDispose(e){this._store.get(e)?.dispose(),this._store.delete(e)}deleteAndLeak(e){const t=this._store.get(e);return this._store.delete(e),t}keys(){return this._store.keys()}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}}t.DisposableMap=C},4711:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LinkedList=void 0;class i{static{this.Undefined=new i(void 0)}constructor(e){this.element=e,this.next=i.Undefined,this.prev=i.Undefined}}class s{constructor(){this._first=i.Undefined,this._last=i.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===i.Undefined}clear(){let e=this._first;for(;e!==i.Undefined;){const t=e.next;e.prev=i.Undefined,e.next=i.Undefined,e=t}this._first=i.Undefined,this._last=i.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const s=new i(e);if(this._first===i.Undefined)this._first=s,this._last=s;else if(t){const e=this._last;this._last=s,s.prev=e,e.next=s}else{const e=this._first;this._first=s,s.next=e,e.prev=s}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(s))}}shift(){if(this._first!==i.Undefined){const e=this._first.element;return this._remove(this._first),e}}pop(){if(this._last!==i.Undefined){const e=this._last.element;return this._remove(this._last),e}}_remove(e){if(e.prev!==i.Undefined&&e.next!==i.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===i.Undefined&&e.next===i.Undefined?(this._first=i.Undefined,this._last=i.Undefined):e.next===i.Undefined?(this._last=this._last.prev,this._last.next=i.Undefined):e.prev===i.Undefined&&(this._first=this._first.next,this._first.prev=i.Undefined);this._size-=1}*[Symbol.iterator](){let e=this._first;for(;e!==i.Undefined;)yield e.element,e=e.next}}t.LinkedList=s},714:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.SetMap=t.BidirectionalMap=t.CounterSet=t.Touch=void 0,t.getOrSet=function(e,t,i){let s=e.get(t);return void 0===s&&(s=i,e.set(t,s)),s},t.mapToString=function(e){const t=[];return e.forEach(((e,i)=>{t.push(`${i} => ${e}`)})),`Map(${e.size}) {${t.join(", ")}}`},t.setToString=function(e){const t=[];return e.forEach((e=>{t.push(e)})),`Set(${e.size}) {${t.join(", ")}}`},t.mapsStrictEqualIgnoreOrder=function(e,t){if(e===t)return!0;if(e.size!==t.size)return!1;for(const[i,s]of e)if(!t.has(i)||t.get(i)!==s)return!1;for(const[i]of t)if(!e.has(i))return!1;return!0},function(e){e[e.None=0]="None",e[e.AsOld=1]="AsOld",e[e.AsNew=2]="AsNew"}(i||(t.Touch=i={})),t.CounterSet=class{constructor(){this.map=new Map}add(e){return this.map.set(e,(this.map.get(e)||0)+1),this}delete(e){let t=this.map.get(e)||0;return 0!==t&&(t--,0===t?this.map.delete(e):this.map.set(e,t),!0)}has(e){return this.map.has(e)}},t.BidirectionalMap=class{constructor(e){if(this._m1=new Map,this._m2=new Map,e)for(const[t,i]of e)this.set(t,i)}clear(){this._m1.clear(),this._m2.clear()}set(e,t){this._m1.set(e,t),this._m2.set(t,e)}get(e){return this._m1.get(e)}getKey(e){return this._m2.get(e)}delete(e){const t=this._m1.get(e);return void 0!==t&&(this._m1.delete(e),this._m2.delete(t),!0)}forEach(e,t){this._m1.forEach(((i,s)=>{e.call(t,i,s,this)}))}keys(){return this._m1.keys()}values(){return this._m1.values()}},t.SetMap=class{constructor(){this.map=new Map}add(e,t){let i=this.map.get(e);i||(i=new Set,this.map.set(e,i)),i.add(t)}delete(e,t){const i=this.map.get(e);i&&(i.delete(t),0===i.size&&this.map.delete(e))}forEach(e,t){const i=this.map.get(e);i&&i.forEach(t)}get(e){return this.map.get(e)||new Set}}},42:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SlidingWindowAverage=t.MovingAverage=t.Counter=void 0,t.clamp=function(e,t,i){return Math.min(Math.max(e,t),i)},t.rot=function(e,t){return(t+e%t)%t},t.isPointWithinTriangle=function(e,t,i,s,n,r,o,a){const l=o-i,h=a-s,c=n-i,u=r-s,d=e-i,_=t-s,f=l*l+h*h,g=l*c+h*u,m=l*d+h*_,p=c*c+u*u,v=c*d+u*_,C=1/(f*p-g*g),E=(p*m-g*v)*C,w=(f*v-g*m)*C;return E>=0&&w>=0&&E+w<1},t.Counter=class{constructor(){this._next=0}getNext(){return this._next++}},t.MovingAverage=class{constructor(){this._n=1,this._val=0}update(e){return this._val=this._val+(e-this._val)/this._n,this._n+=1,this._val}get value(){return this._val}},t.SlidingWindowAverage=class{constructor(e){this._n=0,this._val=0,this._values=[],this._index=0,this._sum=0,this._values=new Array(e),this._values.fill(0,0,e)}update(e){const t=this._values[this._index];return this._values[this._index]=e,this._index=(this._index+1)%this._values.length,this._sum-=t,this._sum+=e,this._n<this._values.length&&(this._n+=1),this._val=this._sum/this._n,this._val}get value(){return this._val}}},8973:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isAndroid=t.isEdge=t.isSafari=t.isFirefox=t.isChrome=t.OS=t.OperatingSystem=t.setTimeout0=t.setTimeout0IsFaster=t.translationsConfigFile=t.platformLocale=t.locale=t.Language=t.language=t.userAgent=t.platform=t.isCI=t.isMobile=t.isIOS=t.webWorkerOrigin=t.isWebWorker=t.isWeb=t.isElectron=t.isNative=t.isLinuxSnap=t.isLinux=t.isMacintosh=t.isWindows=t.Platform=t.LANGUAGE_DEFAULT=void 0,t.PlatformToString=function(e){switch(e){case w.Web:return"Web";case w.Mac:return"Mac";case w.Linux:return"Linux";case w.Windows:return"Windows"}},t.isLittleEndian=function(){if(!R){R=!0;const e=new Uint8Array(2);e[0]=1,e[1]=2;const t=new Uint16Array(e.buffer);A=513===t[0]}return A},t.isBigSurOrNewer=function(e){return parseFloat(e)>=20},t.LANGUAGE_DEFAULT="en";let i,s,n,r=!1,o=!1,a=!1,l=!1,h=!1,c=!1,u=!1,d=!1,_=!1,f=!1,g=t.LANGUAGE_DEFAULT,m=t.LANGUAGE_DEFAULT;const p=globalThis;let v;void 0!==p.vscode&&void 0!==p.vscode.process?v=p.vscode.process:"undefined"!=typeof process&&"string"==typeof process?.versions?.node&&(v=process);const C="string"==typeof v?.versions?.electron,E=C&&"renderer"===v?.type;if("object"==typeof v){r="win32"===v.platform,o="darwin"===v.platform,a="linux"===v.platform,l=a&&!!v.env.SNAP&&!!v.env.SNAP_REVISION,u=C,_=!!v.env.CI||!!v.env.BUILD_ARTIFACTSTAGINGDIRECTORY,i=t.LANGUAGE_DEFAULT,g=t.LANGUAGE_DEFAULT;const e=v.env.VSCODE_NLS_CONFIG;if(e)try{const n=JSON.parse(e);i=n.userLocale,m=n.osLocale,g=n.resolvedLanguage||t.LANGUAGE_DEFAULT,s=n.languagePack?.translationsConfigFile}catch(e){}h=!0}else"object"!=typeof navigator||E?console.error("Unable to resolve platform."):(n=navigator.userAgent,r=n.indexOf("Windows")>=0,o=n.indexOf("Macintosh")>=0,d=(n.indexOf("Macintosh")>=0||n.indexOf("iPad")>=0||n.indexOf("iPhone")>=0)&&!!navigator.maxTouchPoints&&navigator.maxTouchPoints>0,a=n.indexOf("Linux")>=0,f=n?.indexOf("Mobi")>=0,c=!0,g=globalThis._VSCODE_NLS_LANGUAGE||t.LANGUAGE_DEFAULT,i=navigator.language.toLowerCase(),m=i);var w;!function(e){e[e.Web=0]="Web",e[e.Mac=1]="Mac",e[e.Linux=2]="Linux",e[e.Windows=3]="Windows"}(w||(t.Platform=w={}));let b=w.Web;var y,L;o?b=w.Mac:r?b=w.Windows:a&&(b=w.Linux),t.isWindows=r,t.isMacintosh=o,t.isLinux=a,t.isLinuxSnap=l,t.isNative=h,t.isElectron=u,t.isWeb=c,t.isWebWorker=c&&"function"==typeof p.importScripts,t.webWorkerOrigin=t.isWebWorker?p.origin:void 0,t.isIOS=d,t.isMobile=f,t.isCI=_,t.platform=b,t.userAgent=n,t.language=g,function(e){e.value=function(){return t.language},e.isDefaultVariant=function(){return 2===t.language.length?"en"===t.language:t.language.length>=3&&"e"===t.language[0]&&"n"===t.language[1]&&"-"===t.language[2]},e.isDefault=function(){return"en"===t.language}}(y||(t.Language=y={})),t.locale=i,t.platformLocale=m,t.translationsConfigFile=s,t.setTimeout0IsFaster="function"==typeof p.postMessage&&!p.importScripts,t.setTimeout0=(()=>{if(t.setTimeout0IsFaster){const e=[];p.addEventListener("message",(t=>{if(t.data&&t.data.vscodeScheduleAsyncWork)for(let i=0,s=e.length;i<s;i++){const s=e[i];if(s.id===t.data.vscodeScheduleAsyncWork)return e.splice(i,1),void s.callback()}}));let t=0;return i=>{const s=++t;e.push({id:s,callback:i}),p.postMessage({vscodeScheduleAsyncWork:s},"*")}}return e=>setTimeout(e)})(),function(e){e[e.Windows=1]="Windows",e[e.Macintosh=2]="Macintosh",e[e.Linux=3]="Linux"}(L||(t.OperatingSystem=L={})),t.OS=o||d?L.Macintosh:r?L.Windows:L.Linux;let A=!0,R=!1;t.isChrome=!!(t.userAgent&&t.userAgent.indexOf("Chrome")>=0),t.isFirefox=!!(t.userAgent&&t.userAgent.indexOf("Firefox")>=0),t.isSafari=!!(!t.isChrome&&t.userAgent&&t.userAgent.indexOf("Safari")>=0),t.isEdge=!!(t.userAgent&&t.userAgent.indexOf("Edg/")>=0),t.isAndroid=!!(t.userAgent&&t.userAgent.indexOf("Android")>=0)},79:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StopWatch=void 0;const i=globalThis.performance&&"function"==typeof globalThis.performance.now;class s{static create(e){return new s(e)}constructor(e){this._now=i&&!1===e?Date.now:globalThis.performance.now.bind(globalThis.performance),this._startTime=this._now(),this._stopTime=-1}stop(){this._stopTime=this._now()}reset(){this._startTime=this._now(),this._stopTime=-1}elapsed(){return-1!==this._stopTime?this._stopTime-this._startTime:this._now()-this._startTime}}t.StopWatch=s},1130:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.noBreakWhitespace=t.CodePointIterator=void 0,t.isFalsyOrWhitespace=function(e){return!e||"string"!=typeof e||0===e.trim().length},t.format=function(e,...t){return 0===t.length?e:e.replace(r,(function(e,i){const s=parseInt(i,10);return isNaN(s)||s<0||s>=t.length?e:t[s]}))},t.format2=function(e,t){return 0===Object.keys(t).length?e:e.replace(o,((e,i)=>t[i]??e))},t.htmlAttributeEncodeValue=function(e){return e.replace(/[<>"'&]/g,(e=>{switch(e){case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"'":return"&apos;";case"&":return"&amp;"}return e}))},t.escape=function(e){return e.replace(/[<>&]/g,(function(e){switch(e){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";default:return e}}))},t.escapeRegExpCharacters=a,t.count=function(e,t){let i=0,s=e.indexOf(t);for(;-1!==s;)i++,s=e.indexOf(t,s+t.length);return i},t.truncate=function(e,t,i="…"){return e.length<=t?e:`${e.substr(0,t)}${i}`},t.truncateMiddle=function(e,t,i="…"){if(e.length<=t)return e;const s=Math.ceil(t/2)-i.length/2,n=Math.floor(t/2)-i.length/2;return`${e.substr(0,s)}${i}${e.substr(e.length-n)}`},t.trim=function(e,t=" "){return h(l(e,t),t)},t.ltrim=l,t.rtrim=h,t.convertSimple2RegExpPattern=function(e){return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&").replace(/[\*]/g,".*")},t.stripWildcards=function(e){return e.replace(/\*/g,"")},t.createRegExp=function(e,t,i={}){if(!e)throw new Error("Cannot create regex from empty string");t||(e=a(e)),i.wholeWord&&(/\B/.test(e.charAt(0))||(e="\\b"+e),/\B/.test(e.charAt(e.length-1))||(e+="\\b"));let s="";return i.global&&(s+="g"),i.matchCase||(s+="i"),i.multiline&&(s+="m"),i.unicode&&(s+="u"),new RegExp(e,s)},t.regExpLeadsToEndlessLoop=function(e){return"^"!==e.source&&"^$"!==e.source&&"$"!==e.source&&"^\\s*$"!==e.source&&!(!e.exec("")||0!==e.lastIndex)},t.splitLines=function(e){return e.split(/\r\n|\r|\n/)},t.splitLinesIncludeSeparators=function(e){const t=[],i=e.split(/(\r\n|\r|\n)/);for(let e=0;e<Math.ceil(i.length/2);e++)t.push(i[2*e]+(i[2*e+1]??""));return t},t.firstNonWhitespaceIndex=function(e){for(let t=0,i=e.length;t<i;t++){const i=e.charCodeAt(t);if(i!==s.CharCode.Space&&i!==s.CharCode.Tab)return t}return-1},t.getLeadingWhitespace=function(e,t=0,i=e.length){for(let n=t;n<i;n++){const i=e.charCodeAt(n);if(i!==s.CharCode.Space&&i!==s.CharCode.Tab)return e.substring(t,n)}return e.substring(t,i)},t.lastNonWhitespaceIndex=function(e,t=e.length-1){for(let i=t;i>=0;i--){const t=e.charCodeAt(i);if(t!==s.CharCode.Space&&t!==s.CharCode.Tab)return i}return-1},t.replaceAsync=function(e,t,i){const s=[];let n=0;for(const r of e.matchAll(t)){if(s.push(e.slice(n,r.index)),void 0===r.index)throw new Error("match.index should be defined");n=r.index+r[0].length,s.push(i(r[0],...r.slice(1),r.index,e,r.groups))}return s.push(e.slice(n)),Promise.all(s).then((e=>e.join("")))},t.compare=function(e,t){return e<t?-1:e>t?1:0},t.compareSubstring=c,t.compareIgnoreCase=function(e,t){return u(e,t,0,e.length,0,t.length)},t.compareSubstringIgnoreCase=u,t.isAsciiDigit=function(e){return e>=s.CharCode.Digit0&&e<=s.CharCode.Digit9},t.isLowerAsciiLetter=d,t.isUpperAsciiLetter=function(e){return e>=s.CharCode.A&&e<=s.CharCode.Z},t.equalsIgnoreCase=function(e,t){return e.length===t.length&&0===u(e,t)},t.startsWithIgnoreCase=function(e,t){const i=t.length;return!(t.length>e.length)&&0===u(e,t,0,i)},t.commonPrefixLength=function(e,t){const i=Math.min(e.length,t.length);let s;for(s=0;s<i;s++)if(e.charCodeAt(s)!==t.charCodeAt(s))return s;return i},t.commonSuffixLength=function(e,t){const i=Math.min(e.length,t.length);let s;const n=e.length-1,r=t.length-1;for(s=0;s<i;s++)if(e.charCodeAt(n-s)!==t.charCodeAt(r-s))return s;return i},t.isHighSurrogate=_,t.isLowSurrogate=f,t.computeCodePoint=g,t.getNextCodePoint=m;const s=i(2779),n=i(4610),r=/{(\d+)}/g,o=/{([^}]+)}/g;function a(e){return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g,"\\$&")}function l(e,t){if(!e||!t)return e;const i=t.length;if(0===i||0===e.length)return e;let s=0;for(;e.indexOf(t,s)===s;)s+=i;return e.substring(s)}function h(e,t){if(!e||!t)return e;const i=t.length,s=e.length;if(0===i||0===s)return e;let n=s,r=-1;for(;r=e.lastIndexOf(t,n-1),-1!==r&&r+i===n;){if(0===r)return"";n=r}return e.substring(0,n)}function c(e,t,i=0,s=e.length,n=0,r=t.length){for(;i<s&&n<r;i++,n++){const s=e.charCodeAt(i),r=t.charCodeAt(n);if(s<r)return-1;if(s>r)return 1}const o=s-i,a=r-n;return o<a?-1:o>a?1:0}function u(e,t,i=0,s=e.length,n=0,r=t.length){for(;i<s&&n<r;i++,n++){let o=e.charCodeAt(i),a=t.charCodeAt(n);if(o===a)continue;if(o>=128||a>=128)return c(e.toLowerCase(),t.toLowerCase(),i,s,n,r);d(o)&&(o-=32),d(a)&&(a-=32);const l=o-a;if(0!==l)return l}const o=s-i,a=r-n;return o<a?-1:o>a?1:0}function d(e){return e>=s.CharCode.a&&e<=s.CharCode.z}function _(e){return 55296<=e&&e<=56319}function f(e){return 56320<=e&&e<=57343}function g(e,t){return t-56320+(e-55296<<10)+65536}function m(e,t,i){const s=e.charCodeAt(i);if(_(s)&&i+1<t){const t=e.charCodeAt(i+1);if(f(t))return g(s,t)}return s}t.CodePointIterator=class{get offset(){return this._offset}constructor(e,t=0){this._str=e,this._len=e.length,this._offset=t}setOffset(e){this._offset=e}prevCodePoint(){const e=function(e,t){const i=e.charCodeAt(t-1);if(f(i)&&t>1){const s=e.charCodeAt(t-2);if(_(s))return g(s,i)}return i}(this._str,this._offset);return this._offset-=e>=n.Constants.UNICODE_SUPPLEMENTARY_PLANE_BEGIN?2:1,e}nextCodePoint(){const e=m(this._str,this._len,this._offset);return this._offset+=e>=n.Constants.UNICODE_SUPPLEMENTARY_PLANE_BEGIN?2:1,e}eol(){return this._offset>=this._len}},t.noBreakWhitespace=" "},1329:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MicrotaskDelay=void 0,t.MicrotaskDelay=Symbol("MicrotaskDelay")},4610:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.Constants=void 0,t.toUint8=function(e){return e<0?0:e>i.MAX_UINT_8?i.MAX_UINT_8:0|e},t.toUint32=function(e){return e<0?0:e>i.MAX_UINT_32?i.MAX_UINT_32:0|e},function(e){e[e.MAX_SAFE_SMALL_INTEGER=1073741824]="MAX_SAFE_SMALL_INTEGER",e[e.MIN_SAFE_SMALL_INTEGER=-1073741824]="MIN_SAFE_SMALL_INTEGER",e[e.MAX_UINT_8=255]="MAX_UINT_8",e[e.MAX_UINT_16=65535]="MAX_UINT_16",e[e.MAX_UINT_32=4294967295]="MAX_UINT_32",e[e.UNICODE_SUPPLEMENTARY_PLANE_BEGIN=65536]="UNICODE_SUPPLEMENTARY_PLANE_BEGIN"}(i||(t.Constants=i={}))}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,i),r.exports}var s={};return(()=>{var e=s;Object.defineProperty(e,"__esModule",{value:!0}),e.WebglAddon=void 0;const t=i(2540),n=i(7095),r=i(3399),o=i(6870),a=i(5276);class l extends t.Disposable{constructor(e){if(n.isSafari&&(0,n.getSafariVersion)()<16){const e={antialias:!1,depth:!1,preserveDrawingBuffer:!0};if(!document.createElement("canvas").getContext("webgl2",e))throw new Error("Webgl2 is only supported on Safari 16 and above")}super(),this._preserveDrawingBuffer=e,this._onChangeTextureAtlas=this._register(new a.Emitter),this.onChangeTextureAtlas=this._onChangeTextureAtlas.event,this._onAddTextureAtlasCanvas=this._register(new a.Emitter),this.onAddTextureAtlasCanvas=this._onAddTextureAtlasCanvas.event,this._onRemoveTextureAtlasCanvas=this._register(new a.Emitter),this.onRemoveTextureAtlasCanvas=this._onRemoveTextureAtlasCanvas.event,this._onContextLoss=this._register(new a.Emitter),this.onContextLoss=this._onContextLoss.event}activate(e){const i=e._core;if(!e.element)return void this._register(i.onWillOpen((()=>this.activate(e))));this._terminal=e;const s=i.coreService,n=i.optionsService,l=i,h=l._renderService,c=l._characterJoinerService,u=l._charSizeService,d=l._coreBrowserService,_=l._decorationService,f=l._logService,g=l._themeService;(0,o.setTraceLogger)(f),this._renderer=this._register(new r.WebglRenderer(e,c,u,d,s,_,n,g,this._preserveDrawingBuffer)),this._register(a.Event.forward(this._renderer.onContextLoss,this._onContextLoss)),this._register(a.Event.forward(this._renderer.onChangeTextureAtlas,this._onChangeTextureAtlas)),this._register(a.Event.forward(this._renderer.onAddTextureAtlasCanvas,this._onAddTextureAtlasCanvas)),this._register(a.Event.forward(this._renderer.onRemoveTextureAtlasCanvas,this._onRemoveTextureAtlasCanvas)),h.setRenderer(this._renderer),this._register((0,t.toDisposable)((()=>{if(this._terminal._core._store._isDisposed)return;const t=this._terminal._core._renderService;t.setRenderer(this._terminal._core._createRenderer()),t.handleResize(e.cols,e.rows)})))}get textureAtlas(){return this._renderer?.textureAtlas}clearTextureAtlas(){this._renderer?.clearTextureAtlas()}}e.WebglAddon=l})(),s})()));
//# sourceMappingURL=addon-webgl.js.map
  }
});
// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => VaultTerminalPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var import_xterm = __toESM(require_xterm());
var import_addon_fit = __toESM(require_addon_fit());
var import_addon_webgl = __toESM(require_addon_webgl());
var import_child_process = require("child_process");
var path = __toESM(require("path"));
var fs = __toESM(require("fs"));
var { StringDecoder } = require("string_decoder");
var VIEW_TYPE = "vault-terminal";
var CLI_BACKENDS = {
  claude: {
    label: "Claude Code",
    binary: "claude",
    pathHints: ["~/.local/bin"],
    yoloFlag: "--dangerously-skip-permissions",
    resumeFlag: "--continue",
    resumeIsSubcommand: false,
  },
  codex: {
    label: "Codex",
    binary: "codex",
    pathHints: [],
    yoloFlag: "--yolo",
    resumeFlag: "resume --last",
    resumeIsSubcommand: true,
  },
  opencode: {
    label: "OpenCode",
    binary: "opencode",
    pathHints: ["/opt/homebrew/bin"],
    yoloFlag: null,
    resumeFlag: "--continue",
    resumeIsSubcommand: false,
  },
  gemini: {
    label: "Gemini CLI",
    binary: "gemini",
    pathHints: [],
    yoloFlag: "--approval-mode=yolo",
    resumeFlag: "--resume",
    resumeIsSubcommand: false,
  },
  kimi: {
    label: "Kimi Code",
    binary: "kimi",
    pathHints: [],
    yoloFlag: "--yolo",
    resumeFlag: "--continue",
    resumeIsSubcommand: false,
  },
  custom: {
    label: "Custom command",
    // binary is read from pluginData.customCommand at launch time
    binary: null,
    pathHints: [],
    yoloFlag: null,
    resumeFlag: null,
    resumeIsSubcommand: false,
  },
};
var TerminalView = class extends import_obsidian.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.term = null;
    this.fitAddon = null;
    this.proc = null;
    this.resizeObserver = null;
    this.termHost = null;
    this.plugin = plugin;
    this.escapeScope = null;
    this.fitTimeout = null;
    this.userScrolled = false;
    this.pendingFit = false;
    this.viewportEl = null;
    this.viewportScrollHandler = null;
    this.focusInHandler = null;
    this.focusOutHandler = null;
    this.stdoutDecoder = null;
    this.stderrDecoder = null;
    // Terminal ready detection
    this.hasOutput = false;
    // Scroll coordination: prevents stdout handler and fit() from fighting
    this._fitPending = false;
    this._scrollTarget = null;
    // Custom working directory (set via folder context menu)
    this.workingDir = null;
    // YOLO mode (--dangerously-skip-permissions)
    this.yoloMode = false;
  }
  getBackend() {
    const key = this.plugin.pluginData.cliBackend || "claude";
    return CLI_BACKENDS[key] || CLI_BACKENDS.claude;
  }
  getViewType() {
    return VIEW_TYPE;
  }
  getDisplayText() {
    return "Claude";
  }
  getIcon() {
    return "bot";
  }
  // Obsidian calls setState() with custom state from setViewState()
  async setState(state, result) {
    await super.setState(state, result);
    if (state?.workingDir) {
      this.workingDir = state.workingDir;
    }
    if (state?.yoloMode) {
      this.yoloMode = state.yoloMode;
    }
    if (state?.continueSession) {
      this.continueSession = state.continueSession;
    }
    // If shell already started, restart with new settings
    if (this.proc && (state?.workingDir || state?.yoloMode || state?.continueSession)) {
      this.startShell(this.workingDir, this.yoloMode, this.continueSession);
    }
  }
  getState() {
    const state = {};
    if (this.workingDir) state.workingDir = this.workingDir;
    if (this.yoloMode) state.yoloMode = this.yoloMode;
    // Don't persist continueSession — it's a one-time action
    return state;
  }
  async onOpen() {
    try {
      // If terminal is still alive from a prior onOpen, just reattach and focus.
      // Obsidian calls onOpen() each time the view becomes visible; without this
      // guard, switching panels spawns a fresh Claude process (and banner) every time.
      if (this.term && !this._isDisposed) {
        if (this.termHost && !this.termHost.isConnected) {
          this.buildUI();
          this.term.open(this.termHost);
          this.fitAddon?.fit();
        }
        this.term.focus();
        return;
      }
      this._isDisposed = false;
      this.injectCSS();
      this.buildUI();
      this.initTerminal();
      // Delay shell start slightly to allow setState() to be called first
      setTimeout(() => {
        try {
          if (!this.proc) {
            this.startShell(this.workingDir, this.yoloMode, this.continueSession);
          }
        } catch (err) {
          console.error("[Claude Sidebar] Failed to start shell:", err);
          this.term?.writeln(`\r\n[Failed to start shell: ${err.message}]`);
        }
      }, 10);
      this.setupEscapeHandler();
    } catch (err) {
      console.error("[Claude Sidebar] Failed to initialize terminal:", err);
    }
  }
  setupEscapeHandler() {
    // Use Obsidian's Scope API to intercept Escape at keymap level
    // This works above DOM events and can override Obsidian's built-in handlers
    this.escapeScope = new import_obsidian.Scope(this.app.scope);
    this.escapeScope.register([], 'Escape', () => {
      // Only intercept when terminal has focus
      if (this.containerEl.contains(document.activeElement)) {
        if (this.proc && !this.proc.killed) {
          this.proc.stdin?.write('\x1b');
        }
        return false; // Block further handling by Obsidian
      }
      return true; // Let Obsidian handle it normally
    });
    this.app.keymap.pushScope(this.escapeScope);
  }
  async onClose() {
    try {
      this.dispose();
    } catch (err) {
      console.error("[Claude Sidebar] Error during terminal cleanup:", err);
    }
  }
  injectCSS() {
    if (document.getElementById("xterm-css"))
      return;
    const style = document.createElement("style");
    style.id = "xterm-css";
    style.textContent = `/**
 * Copyright (c) 2014 The xterm.js authors. All rights reserved.
 * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
 * https://github.com/chjj/term.js
 * @license MIT
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Originally forked from (with the author's permission):
 *   Fabrice Bellard's javascript vt100 for jslinux:
 *   http://bellard.org/jslinux/
 *   Copyright (c) 2011 Fabrice Bellard
 *   The original design remains. The terminal itself
 *   has been extended to include xterm CSI codes, among
 *   other features.
 */

/**
 *  Default styles for xterm.js
 */

.xterm {
    cursor: text;
    position: relative;
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
}

.xterm.focus,
.xterm:focus {
    outline: none;
}

.xterm .xterm-helpers {
    position: absolute;
    top: 0;
    /**
     * The z-index of the helpers must be higher than the canvases in order for
     * IMEs to appear on top.
     */
    z-index: 5;
}

.xterm .xterm-helper-textarea {
    padding: 0;
    border: 0;
    margin: 0;
    /* Move textarea out of the screen to the far left, so that the cursor is not visible */
    position: absolute;
    opacity: 0;
    left: -9999em;
    top: 0;
    width: 0;
    height: 0;
    z-index: -5;
    /** Prevent wrapping so the IME appears against the textarea at the correct position */
    white-space: nowrap;
    overflow: hidden;
    resize: none;
}

.xterm .composition-view {
    /* TODO: Composition position got messed up somewhere */
    background: #000;
    color: #FFF;
    display: none;
    position: absolute;
    white-space: nowrap;
    z-index: 1;
}

.xterm .composition-view.active {
    display: block;
}

.xterm .xterm-viewport {
    /* On OS X this is required in order for the scroll bar to appear fully opaque */
    background-color: #000;
    overflow-y: scroll;
    cursor: default;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
}

.xterm .xterm-screen {
    position: relative;
}

.xterm .xterm-screen canvas {
    position: absolute;
    left: 0;
    top: 0;
}

.xterm .xterm-scroll-area {
    visibility: hidden;
}

.xterm-char-measure-element {
    display: inline-block;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: -9999em;
    line-height: normal;
}

.xterm.enable-mouse-events {
    /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */
    cursor: default;
}

.xterm.xterm-cursor-pointer,
.xterm .xterm-cursor-pointer {
    cursor: pointer;
}

.xterm.column-select.focus {
    /* Column selection mode */
    cursor: crosshair;
}

.xterm .xterm-accessibility:not(.debug),
.xterm .xterm-message {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    color: transparent;
    pointer-events: none;
}

.xterm .xterm-accessibility-tree:not(.debug) *::selection {
  color: transparent;
}

.xterm .xterm-accessibility-tree {
  user-select: text;
  white-space: pre;
}

.xterm .live-region {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
}

.xterm-dim {
    /* Dim should not apply to background, so the opacity of the foreground color is applied
     * explicitly in the generated class and reset to 1 here */
    opacity: 1 !important;
}

.xterm-underline-1 { text-decoration: underline; }
.xterm-underline-2 { text-decoration: double underline; }
.xterm-underline-3 { text-decoration: wavy underline; }
.xterm-underline-4 { text-decoration: dotted underline; }
.xterm-underline-5 { text-decoration: dashed underline; }

.xterm-overline {
    text-decoration: overline;
}

.xterm-overline.xterm-underline-1 { text-decoration: overline underline; }
.xterm-overline.xterm-underline-2 { text-decoration: overline double underline; }
.xterm-overline.xterm-underline-3 { text-decoration: overline wavy underline; }
.xterm-overline.xterm-underline-4 { text-decoration: overline dotted underline; }
.xterm-overline.xterm-underline-5 { text-decoration: overline dashed underline; }

.xterm-strikethrough {
    text-decoration: line-through;
}

.xterm-screen .xterm-decoration-container .xterm-decoration {
	z-index: 6;
	position: absolute;
}

.xterm-screen .xterm-decoration-container .xterm-decoration.xterm-decoration-top-layer {
	z-index: 7;
}

.xterm-decoration-overview-ruler {
    z-index: 8;
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
}

.xterm-decoration-top {
    z-index: 2;
    position: relative;
}
`;
    document.head.appendChild(style);
  }
  buildUI() {
    const container = this.containerEl;
    container.empty();
    container.addClass("vault-terminal");
    this.termHost = container.createDiv({ cls: "vault-terminal-host" });
  }
  getThemeColors() {
    const styles = getComputedStyle(document.body);
    const bg = styles.getPropertyValue("--background-secondary").trim() || "#1e1e1e";
    const fg = styles.getPropertyValue("--text-normal").trim() || "#d4d4d4";
    const cursor = styles.getPropertyValue("--text-accent").trim() || "#ffffff";
    // Light mode needs a more visible selection color
    const isLightMode = document.body.classList.contains("theme-light");
    const selectionBackground = isLightMode ? "rgba(0, 100, 200, 0.3)" : undefined;
    return { background: bg, foreground: fg, cursor, selectionBackground };
  }
  updateTheme() {
    if (!this.term) return;
    const newTheme = this.getThemeColors();
    const cur = this.term.options.theme;
    // Only update if theme actually changed
    if (cur?.background !== newTheme.background || cur?.foreground !== newTheme.foreground) {
      this.term.options.theme = newTheme;
    }
  }
  async saveImageToTemp(blob) {
    const os = require("os");
    const ext = blob.type.split("/")[1] || "png";
    const filename = `claude_paste_${Date.now()}.${ext}`;
    const tempPath = path.join(os.tmpdir(), filename);
    const buffer = Buffer.from(await blob.arrayBuffer());
    fs.writeFileSync(tempPath, buffer);
    return tempPath;
  }
  initTerminal() {
    if (!this.termHost)
      return;
    this.term = new import_xterm.Terminal({
      cursorBlink: true,
      fontSize: 13,
      fontFamily: "Menlo, Monaco, 'Cascadia Mono', 'Cascadia Code', Consolas, 'Courier New', 'Microsoft YaHei', 'SimHei', 'PingFang SC', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', monospace",
      theme: this.getThemeColors(),
      scrollback: 10000,
      macOptionIsMeta: false
    });
    this.fitAddon = new import_addon_fit.FitAddon();
    this.term.loadAddon(this.fitAddon);
    this.term.open(this.termHost);
    // WebGL renderer eliminates DOM-renderer ghosting/CJK artifacts. Falls back
    // to the default DOM renderer automatically if WebGL context is lost (GPU
    // sleep, too many contexts, headless, etc.) or if the user opts out.
    const rendererMode = this.plugin.pluginData.rendererMode || "webgl";
    if (rendererMode === "webgl") {
      try {
        const webglAddon = new import_addon_webgl.WebglAddon();
        webglAddon.onContextLoss?.(() => {
          try { webglAddon.dispose(); } catch (e) {}
          console.warn("[Claude Sidebar] WebGL context lost — reverting to DOM renderer.");
        });
        this.term.loadAddon(webglAddon);
        this.webglAddon = webglAddon;
      } catch (e) {
        console.warn("[Claude Sidebar] WebGL renderer unavailable, using DOM:", e);
      }
    }
    this.term.parser?.registerCsiHandler({ final: "I" }, () => true);
    this.term.parser?.registerCsiHandler({ final: "O" }, () => true);
    // Handle image paste - use capture phase to intercept before xterm's textarea
    this.imagePasteHandler = async (e) => {
      // Only handle if terminal has focus
      if (!this.containerEl.contains(document.activeElement)) return;
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const item of items) {
        if (item.type.startsWith("image/")) {
          e.preventDefault();
          e.stopPropagation();
          const blob = item.getAsFile();
          if (blob) {
            try {
              const imagePath = await this.saveImageToTemp(blob);
              // Insert the path into the terminal input (quoted for paths with spaces)
              if (this.proc && !this.proc.killed) {
                this.proc.stdin?.write(`"${imagePath}" `);
              }
            } catch (err) {
              this.term?.writeln(`\r\n[Image paste error: ${err.message}]`);
            }
          }
          return;
        }
      }
    };
    document.addEventListener("paste", this.imagePasteHandler, true);
    // Handle file drag-and-drop
    this.fileDragOverHandler = (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    };
    this.fileDropHandler = async (e) => {
      e.preventDefault();
      if (!this.proc || this.proc.killed) return;
      // Check for Obsidian internal file drag (obsidian:// URL)
      const textData = e.dataTransfer?.getData('text/plain');
      if (textData && textData.startsWith('obsidian://')) {
        try {
          const url = new URL(textData);
          const filePath = url.searchParams.get('file');
          if (filePath) {
            const decodedPath = decodeURIComponent(filePath);
            const absolutePath = this.app.vault.adapter.getFullPath(decodedPath);
            this.proc.stdin?.write(`"${absolutePath}" `);
            return;
          }
        } catch (err) {
          console.error('Failed to parse obsidian URL:', err);
        }
      }
      // Handle external file drops
      const files = e.dataTransfer?.files;
      if (files && files.length > 0) {
        const { webUtils } = require('electron');
        for (const file of files) {
          const filePath = webUtils.getPathForFile(file);
          if (filePath) {
            this.proc.stdin?.write(`"${filePath}" `);
          }
        }
      }
    };
    this.termHost.addEventListener('dragover', this.fileDragOverHandler);
    this.termHost.addEventListener('drop', this.fileDropHandler);
    // Windows right-click paste: Windows terminal convention is right-click = paste
    if (process.platform === 'win32') {
      this.termHost.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.readText().then((text) => {
          if (text) this.term.paste(text);
        }).catch(() => {});
      });
    }
    this.term.attachCustomKeyEventHandler((ev) => {
      // Shift+Enter: send Alt+Enter for multi-line input
      // Must block both keydown and keypress events to prevent xterm from sending normal Enter
      if (ev.key === 'Enter' && ev.shiftKey) {
        if (ev.type === 'keydown') {
          if (this.proc && !this.proc.killed) {
            this.proc.stdin?.write('\x1b\r');
          }
        }
        return false; // Block both keydown and keypress
      }
      if (ev.type === 'keydown') {
        // macOS: Option+key produces special characters on international keyboards (e.g. Opt+Q = @ on Spanish)
        // xterm's _isThirdLevelShift relies on keypress events which may not fire in Electron,
        // so we intercept the keydown and write the OS-transformed character directly.
        if (process.platform === 'darwin' && ev.altKey && !ev.metaKey && !ev.ctrlKey) {
          if (ev.key && ev.key.length === 1) {
            ev.preventDefault();
            this.term.paste(ev.key);
            return false;
          }
          return true;
        }
        // Windows Ctrl+V: paste from clipboard (Obsidian intercepts this before xterm sees it)
        if (ev.key === 'v' && ev.ctrlKey && !ev.shiftKey && !ev.altKey && !ev.metaKey) {
          ev.preventDefault();
          navigator.clipboard.readText().then((text) => {
            if (text) this.term.paste(text);
          }).catch(() => {});
          return false;
        }
        // Windows Ctrl+C: copy selection or send interrupt
        if (ev.key === 'c' && ev.ctrlKey && !ev.shiftKey && !ev.altKey && !ev.metaKey) {
          ev.preventDefault();
          const selection = this.term.getSelection();
          if (selection) {
            navigator.clipboard.writeText(selection).catch(() => {});
          } else {
            this.proc?.stdin?.write('\x03');
          }
          return false;
        }
        // Cmd+Arrow: readline shortcuts for line navigation
        if (ev.metaKey) {
          if (ev.key === 'ArrowRight') {
            this.proc?.stdin?.write('\x05'); // Ctrl+E = end of line
            return false;
          }
          if (ev.key === 'ArrowLeft') {
            this.proc?.stdin?.write('\x01'); // Ctrl+A = start of line
            return false;
          }
        }
      }
      return true;
    });
    this.term.onData((data) => {
      if (this.proc && !this.proc.killed) {
        // Filter out focus in/out sequences before sending to shell
        const filtered = data.replace(/\x1b\[I/g, '').replace(/\x1b\[O/g, '');
        if (filtered) {
          this.proc.stdin?.write(filtered);
        }
      }
    });
    this.ensureFitWithRetry();
    this.resizeObserver = new ResizeObserver(() => this.debouncedFit());
    this.resizeObserver.observe(this.termHost);
    // Track user scroll intent so auto-scroll doesn't fight the user
    this.userScrolledAt = 0;
    this.termHost.addEventListener("wheel", () => {
      this.userScrolledAt = Date.now();
    }, { passive: true });
    // Watch for theme changes
    this.themeObserver = new MutationObserver(() => this.updateTheme());
    this.themeObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    // Watch for Obsidian layout changes (sidebar resize, etc.)
    this.registerEvent(this.app.workspace.onLayoutChange(() => this.debouncedFit()));
  }
  fit() {
    if (!this.term || !this.fitAddon) return;
    try {
      const userScrolled = Date.now() - (this.userScrolledAt || 0) < 5000;
      const wasAtBottom = !userScrolled && this.term.buffer.active.baseY === this.term.buffer.active.viewportY;
      const savedViewportY = this._fitPending && this._scrollTarget !== null
        ? this._scrollTarget
        : this.term.buffer.active.viewportY;
      this._fitPending = false;
      this._scrollTarget = null;
      this.fitAddon.fit();
      if (wasAtBottom) {
        this.term.scrollToBottom();
      } else if (this.term.buffer.active.viewportY !== savedViewportY) {
        this.term.scrollToLine(savedViewportY);
      }
    } catch (e) {}
  }
  debouncedFit() {
    if (this.fitTimeout) clearTimeout(this.fitTimeout);
    this.fitTimeout = setTimeout(() => {
      this.fit();
      this.fitTimeout = null;
    }, 100);
  }
  async waitForHostReady() {
    if (!this.fitAddon)
      return false;
    for (let i = 0; i < 10; i++) {
      const dim = this.fitAddon.proposeDimensions();
      if (dim && dim.cols > 0 && dim.rows > 0) {
        return true;
      }
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    return false;
  }
  async ensureFitWithRetry() {
    for (let i = 0; i < 20; i++) {
      await new Promise((r) => setTimeout(r, 100));
      const dim = this.fitAddon?.proposeDimensions();
      if (dim && dim.rows > 0) {
        this.fit();
        // If shell already running, send resize
        if (this.proc && !this.proc.killed) {
          this.proc.stdin?.write(`\x1b]RESIZE;${dim.cols};${dim.rows}\x07`);
        }
        return;
      }
    }
  }
  startShell(workingDir = null, yoloMode = false, continueSession = false) {
    this.stopShell();
    const defaultDir = this.plugin.pluginData.defaultWorkingDir;
    const vaultPath = this.plugin.getVaultPath();
    const resolvedDefault = defaultDir ? path.resolve(vaultPath, defaultDir) : vaultPath;
    const cwd = workingDir || resolvedDefault;
    // Persist last working directory for resume
    this.plugin.pluginData.lastCwd = cwd;
    this.plugin.saveData(this.plugin.pluginData);
    const cols = this.term?.cols || 80;
    const rows = this.term?.rows || 24;
    const isWindows = process.platform === "win32";
    const shell = isWindows
      ? (process.env.COMSPEC || "cmd.exe")
      : (process.env.SHELL || "/bin/bash");
    // PTY scripts embedded as base64 for Obsidian plugin directory compatibility
    // See terminal_pty.py and terminal_win.py for readable source. Rebuild with: ./build.sh
    const PTY_SCRIPT_B64 = "IyEvdXNyL2Jpbi9lbnYgcHl0aG9uMwoiIiJQVFkgd3JhcHBlciB3aXRoIHJlc2l6ZSBzdXBwb3J0IGZvciBPYnNpZGlhbiB0ZXJtaW5hbCBwbHVnaW4uIiIiCmltcG9ydCBvcwppbXBvcnQgc3lzCmltcG9ydCBwdHkKaW1wb3J0IHN0cnVjdAppbXBvcnQgZmNudGwKaW1wb3J0IHRlcm1pb3MKaW1wb3J0IHNlbGVjdAppbXBvcnQgc2lnbmFsCmltcG9ydCB0aW1lCgojIEdsb2JhbCB0byB0cmFjayBjaGlsZCBQSUQgKGFsc28gdGhlIHByb2Nlc3MgZ3JvdXAgSUQpIGZvciBzaWduYWwgaGFuZGxlcgpjaGlsZF9waWQgPSBOb25lCgpkZWYga2lsbF9wcm9jZXNzX2dyb3VwKHBnaWQsIHNpZyk6CiAgICAiIiJLaWxsIGFuIGVudGlyZSBwcm9jZXNzIGdyb3VwLiIiIgogICAgdHJ5OgogICAgICAgIG9zLmtpbGxwZyhwZ2lkLCBzaWcpCiAgICBleGNlcHQgKFByb2Nlc3NMb29rdXBFcnJvciwgUGVybWlzc2lvbkVycm9yLCBPU0Vycm9yKToKICAgICAgICBwYXNzCgpkZWYgY2xlYW51cF9jaGlsZChzaWdudW0sIGZyYW1lKToKICAgICIiIktpbGwgdGhlIGVudGlyZSBwcm9jZXNzIGdyb3VwIHdoZW4gd2UgcmVjZWl2ZSBhIHNpZ25hbC4iIiIKICAgIGdsb2JhbCBjaGlsZF9waWQKICAgIGlmIGNoaWxkX3BpZDoKICAgICAgICAjIEtpbGwgZW50aXJlIHByb2Nlc3MgZ3JvdXAgKGNoaWxkIGlzIGdyb3VwIGxlYWRlcikKICAgICAgICBraWxsX3Byb2Nlc3NfZ3JvdXAoY2hpbGRfcGlkLCBzaWduYWwuU0lHVEVSTSkKICAgICAgICAjIEdpdmUgcHJvY2Vzc2VzIGEgbW9tZW50IHRvIGV4aXQgZ3JhY2VmdWxseQogICAgICAgIGZvciBfIGluIHJhbmdlKDEwKToKICAgICAgICAgICAgdHJ5OgogICAgICAgICAgICAgICAgcGlkLCBfID0gb3Mud2FpdHBpZCgtY2hpbGRfcGlkLCBvcy5XTk9IQU5HKQogICAgICAgICAgICAgICAgaWYgcGlkICE9IDA6CiAgICAgICAgICAgICAgICAgICAgYnJlYWsKICAgICAgICAgICAgZXhjZXB0IENoaWxkUHJvY2Vzc0Vycm9yOgogICAgICAgICAgICAgICAgYnJlYWsKICAgICAgICAgICAgdGltZS5zbGVlcCgwLjEpCiAgICAgICAgZWxzZToKICAgICAgICAgICAgIyBGb3JjZSBraWxsIHRoZSBlbnRpcmUgZ3JvdXAgaWYgc3RpbGwgcnVubmluZwogICAgICAgICAgICBraWxsX3Byb2Nlc3NfZ3JvdXAoY2hpbGRfcGlkLCBzaWduYWwuU0lHS0lMTCkKICAgIHN5cy5leGl0KDApCgpkZWYgc2V0X3NpemUoZmQsIGNvbHMsIHJvd3MpOgogICAgIiIiU2V0IHRoZSBQVFkgd2luZG93IHNpemUuIiIiCiAgICB3aW5zaXplID0gc3RydWN0LnBhY2soJ0hISEgnLCByb3dzLCBjb2xzLCAwLCAwKQogICAgZmNudGwuaW9jdGwoZmQsIHRlcm1pb3MuVElPQ1NXSU5TWiwgd2luc2l6ZSkKCmRlZiBtYWluKCk6CiAgICBnbG9iYWwgY2hpbGRfcGlkCgogICAgIyBQYXJzZSBhcmdzOiB0ZXJtaW5hbF9wdHkucHkgW2NvbHNdIFtyb3dzXSBbc2hlbGxdIFtzaGVsbF9hcmdzLi4uXQogICAgaWYgbGVuKHN5cy5hcmd2KSA8IDQ6CiAgICAgICAgcHJpbnQoZiJVc2FnZToge3N5cy5hcmd2WzBdfSBjb2xzIHJvd3Mgc2hlbGwgW2FyZ3MuLi5dIiwgZmlsZT1zeXMuc3RkZXJyKQogICAgICAgIHN5cy5leGl0KDEpCgogICAgY29scyA9IGludChzeXMuYXJndlsxXSkKICAgIHJvd3MgPSBpbnQoc3lzLmFyZ3ZbMl0pCiAgICBzaGVsbCA9IHN5cy5hcmd2WzNdCiAgICBzaGVsbF9hcmdzID0gc3lzLmFyZ3ZbMzpdICAjIEluY2x1ZGUgc2hlbGwgYXMgYXJndlswXQoKICAgICMgUmVnaXN0ZXIgc2lnbmFsIGhhbmRsZXJzIGZvciBjbGVhbnVwIEJFRk9SRSBmb3JrIHRvIGF2b2lkIHJhY2UgY29uZGl0aW9uCiAgICBzaWduYWwuc2lnbmFsKHNpZ25hbC5TSUdURVJNLCBjbGVhbnVwX2NoaWxkKQogICAgc2lnbmFsLnNpZ25hbChzaWduYWwuU0lHSU5ULCBjbGVhbnVwX2NoaWxkKQoKICAgIHBpZCwgZmQgPSBwdHkuZm9yaygpCiAgICBjaGlsZF9waWQgPSBwaWQgICMgU3RvcmUgZm9yIHNpZ25hbCBoYW5kbGVyCgogICAgaWYgcGlkID09IDA6CiAgICAgICAgIyBDaGlsZCBwcm9jZXNzIC0gYWxyZWFkeSBpbiBpdHMgb3duIHByb2Nlc3MgZ3JvdXAgdmlhIHB0eS5mb3JrKCkvc2V0c2lkKCkKICAgICAgICBvcy5leGVjdnAoc2hlbGwsIHNoZWxsX2FyZ3MpCiAgICAgICAgc3lzLmV4aXQoMSkKCiAgICAjIFBhcmVudCBwcm9jZXNzCgogICAgIyBTZXQgaW5pdGlhbCBzaXplCiAgICBzZXRfc2l6ZShmZCwgY29scywgcm93cykKCiAgICBzdGRpbl9mZCA9IHN5cy5zdGRpbi5maWxlbm8oKQoKICAgICMgTWFrZSBzdGRpbiBub24tYmxvY2tpbmcKICAgIG9sZF9mbGFncyA9IGZjbnRsLmZjbnRsKHN0ZGluX2ZkLCBmY250bC5GX0dFVEZMKQogICAgZmNudGwuZmNudGwoc3RkaW5fZmQsIGZjbnRsLkZfU0VURkwsIG9sZF9mbGFncyB8IG9zLk9fTk9OQkxPQ0spCgogICAgcnVubmluZyA9IFRydWUKICAgIHRyeToKICAgICAgICB3aGlsZSBydW5uaW5nOgogICAgICAgICAgICB0cnk6CiAgICAgICAgICAgICAgICBybGlzdCwgXywgXyA9IHNlbGVjdC5zZWxlY3QoW2ZkLCBzdGRpbl9mZF0sIFtdLCBbXSwgMC4wNSkKICAgICAgICAgICAgZXhjZXB0IHNlbGVjdC5lcnJvcjoKICAgICAgICAgICAgICAgIGJyZWFrCgogICAgICAgICAgICBmb3IgcmVhZHlfZmQgaW4gcmxpc3Q6CiAgICAgICAgICAgICAgICBpZiByZWFkeV9mZCA9PSBmZDoKICAgICAgICAgICAgICAgICAgICB0cnk6CiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBvcy5yZWFkKGZkLCAxNjM4NCkKICAgICAgICAgICAgICAgICAgICAgICAgaWYgbm90IGRhdGE6CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nID0gRmFsc2UKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrCiAgICAgICAgICAgICAgICAgICAgICAgIG9zLndyaXRlKHN5cy5zdGRvdXQuZmlsZW5vKCksIGRhdGEpCiAgICAgICAgICAgICAgICAgICAgICAgIHN5cy5zdGRvdXQuZmx1c2goKQogICAgICAgICAgICAgICAgICAgIGV4Y2VwdCBPU0Vycm9yOgogICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nID0gRmFsc2UKICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsKICAgICAgICAgICAgICAgIGVsaWYgcmVhZHlfZmQgPT0gc3RkaW5fZmQ6CiAgICAgICAgICAgICAgICAgICAgdHJ5OgogICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gb3MucmVhZChzdGRpbl9mZCwgMTYzODQpCiAgICAgICAgICAgICAgICAgICAgICAgIGlmIG5vdCBkYXRhOgogICAgICAgICAgICAgICAgICAgICAgICAgICAgIyBzdGRpbiBjbG9zZWQgLSBwbHVnaW4gdGVybWluYXRlZAogICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVubmluZyA9IEZhbHNlCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhawogICAgICAgICAgICAgICAgICAgICAgICBpZiBkYXRhOgogICAgICAgICAgICAgICAgICAgICAgICAgICAgIyBDaGVjayBmb3IgcmVzaXplIGVzY2FwZSBzZXF1ZW5jZSBhbnl3aGVyZSBpbiBkYXRhOiBceDFiXVJFU0laRTtjb2xzO3Jvd3NceDA3CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSBiJ1x4MWJdUkVTSVpFOycgaW4gZGF0YToKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGRhdGEuaW5kZXgoYidceDFiXVJFU0laRTsnKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeToKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gZGF0YS5pbmRleChiJ1x4MDcnLCBzdGFydCkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplX2RhdGEgPSBkYXRhW3N0YXJ0Kzk6ZW5kXS5kZWNvZGUoKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLCByID0gcmVzaXplX2RhdGEuc3BsaXQoJzsnKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRfc2l6ZShmZCwgaW50KGMpLCBpbnQocikpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMgUmVtb3ZlIHRoZSByZXNpemUgY29tbWFuZCBmcm9tIGRhdGEKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGFbOnN0YXJ0XSArIGRhdGFbZW5kKzE6XQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2VwdCAoVmFsdWVFcnJvciwgSW5kZXhFcnJvcik6CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBkYXRhOgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9zLndyaXRlKGZkLCBkYXRhKQogICAgICAgICAgICAgICAgICAgIGV4Y2VwdCBPU0Vycm9yOgogICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nID0gRmFsc2UKICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsKCiAgICAgICAgICAgICMgQ2hlY2sgaWYgY2hpbGQgZXhpdGVkCiAgICAgICAgICAgIHRyeToKICAgICAgICAgICAgICAgIHdwaWQsIHN0YXR1cyA9IG9zLndhaXRwaWQocGlkLCBvcy5XTk9IQU5HKQogICAgICAgICAgICAgICAgaWYgd3BpZCA9PSBwaWQ6CiAgICAgICAgICAgICAgICAgICAgc3lzLmV4aXQob3Mud2FpdHN0YXR1c190b19leGl0Y29kZShzdGF0dXMpKQogICAgICAgICAgICBleGNlcHQgQ2hpbGRQcm9jZXNzRXJyb3I6CiAgICAgICAgICAgICAgICBicmVhawogICAgZmluYWxseToKICAgICAgICBmY250bC5mY250bChzdGRpbl9mZCwgZmNudGwuRl9TRVRGTCwgb2xkX2ZsYWdzKQogICAgICAgICMgRW5zdXJlIGVudGlyZSBwcm9jZXNzIGdyb3VwIGlzIHRlcm1pbmF0ZWQgd2hlbiB3ZSBleGl0CiAgICAgICAgaWYgY2hpbGRfcGlkOgogICAgICAgICAgICBraWxsX3Byb2Nlc3NfZ3JvdXAoY2hpbGRfcGlkLCBzaWduYWwuU0lHVEVSTSkKICAgICAgICAgICAgZm9yIF8gaW4gcmFuZ2UoMTApOgogICAgICAgICAgICAgICAgdHJ5OgogICAgICAgICAgICAgICAgICAgIHdwaWQsIF8gPSBvcy53YWl0cGlkKC1jaGlsZF9waWQsIG9zLldOT0hBTkcpCiAgICAgICAgICAgICAgICAgICAgaWYgd3BpZCAhPSAwOgogICAgICAgICAgICAgICAgICAgICAgICBicmVhawogICAgICAgICAgICAgICAgZXhjZXB0IENoaWxkUHJvY2Vzc0Vycm9yOgogICAgICAgICAgICAgICAgICAgIGJyZWFrCiAgICAgICAgICAgICAgICB0aW1lLnNsZWVwKDAuMSkKICAgICAgICAgICAgZWxzZToKICAgICAgICAgICAgICAgIGtpbGxfcHJvY2Vzc19ncm91cChjaGlsZF9waWQsIHNpZ25hbC5TSUdLSUxMKQoKaWYgX19uYW1lX18gPT0gJ19fbWFpbl9fJzoKICAgIG1haW4oKQo=";
    // Windows PTY script - uses winpty if available, falls back to subprocess
    const WIN_PTY_SCRIPT_B64 = "IyEvdXNyL2Jpbi9lbnYgcHl0aG9uMwoiIiJXaW5kb3dzIHRlcm1pbmFsIHdyYXBwZXIgdXNpbmcgQ29uUFRZIHZpYSBweXdpbnB0eS4iIiIKaW1wb3J0IHN5cwppbXBvcnQgcmUKaW1wb3J0IHRocmVhZGluZwppbXBvcnQgb3MKaW1wb3J0IG1zdmNydAppbXBvcnQgc2VsZWN0CgojIFByZS1jb21waWxlIHJlZ2V4IHBhdHRlcm5zIGZvciBwZXJmb3JtYW5jZQpSRVNJWkVfUkUgPSByZS5jb21waWxlKHJiJ1x4MWJcXVJFU0laRTtbMC05XSs7WzAtOV0rXHgwNycsIHJlLklHTk9SRUNBU0UpCkZPQ1VTX0lOX1JFID0gcmUuY29tcGlsZShyYidceDFiXFtJJykKRk9DVVNfT1VUX1JFID0gcmUuY29tcGlsZShyYidceDFiXFtPJykKCmRlZiByZWFkX3V0ZjhfY2hhcihidWZmZXIpOgogICAgIiIiUmVhZCBhIGNvbXBsZXRlIFVURi04IGNoYXJhY3RlciBmcm9tIGJ1ZmZlciwgaGFuZGxpbmcgbXVsdGktYnl0ZSBzZXF1ZW5jZXMuIiIiCiAgICBpZiBub3QgYnVmZmVyOgogICAgICAgIHJldHVybiBOb25lLCBidWZmZXIKICAgIAogICAgZmlyc3RfYnl0ZSA9IGJ1ZmZlclswXQogICAgCiAgICAjIERldGVybWluZSB0aGUgbnVtYmVyIG9mIGJ5dGVzIGluIHRoaXMgVVRGLTggY2hhcmFjdGVyCiAgICBpZiBmaXJzdF9ieXRlIDwgMHg4MDoKICAgICAgICAjIEFTQ0lJICgxIGJ5dGUpCiAgICAgICAgcmV0dXJuIGJ1ZmZlclswOjFdLCBidWZmZXJbMTpdCiAgICBlbGlmIGZpcnN0X2J5dGUgPCAweEMwOgogICAgICAgICMgSW52YWxpZCBzdGFydCBieXRlIChjb250aW51YXRpb24gYnl0ZSkKICAgICAgICByZXR1cm4gYnVmZmVyWzA6MV0sIGJ1ZmZlclsxOl0KICAgIGVsaWYgZmlyc3RfYnl0ZSA8IDB4RTA6CiAgICAgICAgIyAyLWJ5dGUgc2VxdWVuY2UKICAgICAgICBuZWVkZWQgPSAyCiAgICBlbGlmIGZpcnN0X2J5dGUgPCAweEYwOgogICAgICAgICMgMy1ieXRlIHNlcXVlbmNlIChDSksgY2hhcmFjdGVycyBmYWxsIGhlcmUpCiAgICAgICAgbmVlZGVkID0gMwogICAgZWxpZiBmaXJzdF9ieXRlIDwgMHhGODoKICAgICAgICAjIDQtYnl0ZSBzZXF1ZW5jZQogICAgICAgIG5lZWRlZCA9IDQKICAgIGVsc2U6CiAgICAgICAgIyBJbnZhbGlkIGJ5dGUKICAgICAgICByZXR1cm4gYnVmZmVyWzA6MV0sIGJ1ZmZlclsxOl0KICAgIAogICAgaWYgbGVuKGJ1ZmZlcikgPj0gbmVlZGVkOgogICAgICAgIHJldHVybiBidWZmZXJbMDpuZWVkZWRdLCBidWZmZXJbbmVlZGVkOl0KICAgIGVsc2U6CiAgICAgICAgIyBOb3QgZW5vdWdoIGJ5dGVzIHlldCwgbmVlZCBtb3JlIGRhdGEKICAgICAgICByZXR1cm4gTm9uZSwgYnVmZmVyCgpkZWYgbWFpbigpOgogICAgIyBQYXJzZSBhcmdzOiB0ZXJtaW5hbF93aW4ucHkgW2NvbHNdIFtyb3dzXSBbc2hlbGxdCiAgICBpZiBsZW4oc3lzLmFyZ3YpIDwgNDoKICAgICAgICBwcmludChmIlVzYWdlOiB7c3lzLmFyZ3ZbMF19IGNvbHMgcm93cyBzaGVsbCIsIGZpbGU9c3lzLnN0ZGVycikKICAgICAgICBzeXMuZXhpdCgxKQoKICAgIGNvbHMgPSBpbnQoc3lzLmFyZ3ZbMV0pCiAgICByb3dzID0gaW50KHN5cy5hcmd2WzJdKQogICAgc2hlbGwgPSBzeXMuYXJndlszXQoKICAgICMgcHl3aW5wdHkgaXMgcmVxdWlyZWQgZm9yIFdpbmRvd3MgUFRZIHN1cHBvcnQKICAgIHRyeToKICAgICAgICBmcm9tIHdpbnB0eSBpbXBvcnQgUFRZCiAgICBleGNlcHQgSW1wb3J0RXJyb3I6CiAgICAgICAgcHJpbnQoInB5d2lucHR5IG5vdCBpbnN0YWxsZWQuIFJ1bjogcGlwIGluc3RhbGwgcHl3aW5wdHkiLCBmaWxlPXN5cy5zdGRlcnIpCiAgICAgICAgc3lzLmV4aXQoMSkKCiAgICAjIFNldCBzdGRpbiB0byBiaW5hcnkgbW9kZSBvbiBXaW5kb3dzCiAgICBtc3ZjcnQuc2V0bW9kZShzeXMuc3RkaW4uZmlsZW5vKCksIG9zLk9fQklOQVJZKQogICAgbXN2Y3J0LnNldG1vZGUoc3lzLnN0ZG91dC5maWxlbm8oKSwgb3MuT19CSU5BUlkpCgogICAgdHJ5OgogICAgICAgIHB0eSA9IFBUWShjb2xzLCByb3dzKQogICAgICAgIHB0eS5zcGF3bihzaGVsbCkKCiAgICAgICAgcnVubmluZyA9IFRydWUKCiAgICAgICAgZGVmIHJlYWRfb3V0cHV0KCk6CiAgICAgICAgICAgIG5vbmxvY2FsIHJ1bm5pbmcKICAgICAgICAgICAgd2hpbGUgcnVubmluZyBhbmQgcHR5LmlzYWxpdmUoKToKICAgICAgICAgICAgICAgIHRyeToKICAgICAgICAgICAgICAgICAgICBkYXRhID0gcHR5LnJlYWQoKQogICAgICAgICAgICAgICAgICAgIGlmIGRhdGE6CiAgICAgICAgICAgICAgICAgICAgICAgICMgcHl3aW5wdHkgcmV0dXJucyBzdHJpbmdzCiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGRhdGEuZW5jb2RlKCd1dGYtOCcpIGlmIGlzaW5zdGFuY2UoZGF0YSwgc3RyKSBlbHNlIGRhdGEKICAgICAgICAgICAgICAgICAgICAgICAgIyBGaWx0ZXIgb3V0IGVzY2FwZSBzZXF1ZW5jZXMgdGhhdCBnZXQgZWNob2VkIGJhY2sKICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gUkVTSVpFX1JFLnN1YihiJycsIG91dHB1dCkKICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gRk9DVVNfSU5fUkUuc3ViKGInJywgb3V0cHV0KQogICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBGT0NVU19PVVRfUkUuc3ViKGInJywgb3V0cHV0KQogICAgICAgICAgICAgICAgICAgICAgICBpZiBvdXRwdXQ6CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeXMuc3Rkb3V0LmJ1ZmZlci53cml0ZShvdXRwdXQpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeXMuc3Rkb3V0LmJ1ZmZlci5mbHVzaCgpCiAgICAgICAgICAgICAgICBleGNlcHQgRXhjZXB0aW9uOgogICAgICAgICAgICAgICAgICAgIHBhc3MKICAgICAgICAgICAgcnVubmluZyA9IEZhbHNlCgogICAgICAgIG91dHB1dF90aHJlYWQgPSB0aHJlYWRpbmcuVGhyZWFkKHRhcmdldD1yZWFkX291dHB1dCwgZGFlbW9uPVRydWUpCiAgICAgICAgb3V0cHV0X3RocmVhZC5zdGFydCgpCgogICAgICAgIGlucHV0X2J1ZmZlciA9IGInJwogICAgICAgIAogICAgICAgIHdoaWxlIHJ1bm5pbmcgYW5kIHB0eS5pc2FsaXZlKCk6CiAgICAgICAgICAgIHRyeToKICAgICAgICAgICAgICAgICMgUmVhZCBhdmFpbGFibGUgZGF0YSBmcm9tIHN0ZGluCiAgICAgICAgICAgICAgICBkYXRhID0gc3lzLnN0ZGluLmJ1ZmZlci5yZWFkKDEpCiAgICAgICAgICAgICAgICBpZiBub3QgZGF0YToKICAgICAgICAgICAgICAgICAgICBicmVhawogICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICBpbnB1dF9idWZmZXIgKz0gZGF0YQogICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAjIENoZWNrIGZvciBlc2NhcGUgc2VxdWVuY2VzLgogICAgICAgICAgICAgICAgIyBXZSBpZGVudGlmeSB0aGUgdHlwZSBieSB0aGUgc2Vjb25kIGJ5dGUgaW5zdGVhZCBvZiByZWFkaW5nCiAgICAgICAgICAgICAgICAjIGEgZml4ZWQgbnVtYmVyIG9mIGJ5dGVzIGFoZWFkLCB3aGljaCBhdm9pZHMgY29uc3VtaW5nIHRoZQogICAgICAgICAgICAgICAgIyBsZWFkaW5nIFx4MWIgb2YgYSBzdWJzZXF1ZW50IGVzY2FwZSB0aGF0IGhhcHBlbnMgdG8gZmFsbAogICAgICAgICAgICAgICAgIyB3aXRoaW4gdGhlIGxvb2thaGVhZCB3aW5kb3cuCiAgICAgICAgICAgICAgICBpZiBpbnB1dF9idWZmZXIuc3RhcnRzd2l0aChiJ1x4MWInKToKICAgICAgICAgICAgICAgICAgICAjIE5lZWQgYXQgbGVhc3QgMiBieXRlcyB0byBpZGVudGlmeSB0aGUgZXNjYXBlIHR5cGUKICAgICAgICAgICAgICAgICAgICB3aGlsZSBsZW4oaW5wdXRfYnVmZmVyKSA8IDI6CiAgICAgICAgICAgICAgICAgICAgICAgIG1vcmUgPSBzeXMuc3RkaW4uYnVmZmVyLnJlYWQoMSkKICAgICAgICAgICAgICAgICAgICAgICAgaWYgbm90IG1vcmU6CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhawogICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF9idWZmZXIgKz0gbW9yZQoKICAgICAgICAgICAgICAgICAgICBpZiBsZW4oaW5wdXRfYnVmZmVyKSA8IDI6CiAgICAgICAgICAgICAgICAgICAgICAgICMgQmFyZSBFU0MgYXQgRU9GIOKAlCBwYXNzIHRocm91Z2gKICAgICAgICAgICAgICAgICAgICAgICAgcHR5LndyaXRlKGlucHV0X2J1ZmZlci5kZWNvZGUoJ2xhdGluLTEnKSkKICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfYnVmZmVyID0gYicnCiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlCgogICAgICAgICAgICAgICAgICAgIHNlY29uZCA9IGlucHV0X2J1ZmZlclsxOjJdCgogICAgICAgICAgICAgICAgICAgIGlmIHNlY29uZCA9PSBiJ10nOgogICAgICAgICAgICAgICAgICAgICAgICAjIE9TQyBzZXF1ZW5jZSAoXHgxYl0uLi5CRUwpIOKAlCByZWFkIHVudGlsIEJFTCAoXHgwNykKICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgYidceDA3JyBub3QgaW4gaW5wdXRfYnVmZmVyOgogICAgICAgICAgICAgICAgICAgICAgICAgICAgYyA9IHN5cy5zdGRpbi5idWZmZXIucmVhZCgxKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgbm90IGM6CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0X2J1ZmZlciArPSBjCgogICAgICAgICAgICAgICAgICAgICAgICBpZiBpbnB1dF9idWZmZXIuc3RhcnRzd2l0aChiJ1x4MWJdUkVTSVpFJykgYW5kIGInXHgwNycgaW4gaW5wdXRfYnVmZmVyOgogICAgICAgICAgICAgICAgICAgICAgICAgICAgIyBQYXJzZSB0aGUgcmVzaXplIGNvbW1hbmQ6IFx4MWJdUkVTSVpFO2NvbHM7cm93c1x4MDcKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZF9pZHggPSBpbnB1dF9idWZmZXIuaW5kZXgoYidceDA3JykKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZV9jbWQgPSBpbnB1dF9idWZmZXJbODplbmRfaWR4XSAgIyBBZnRlciAiXHgxYl1SRVNJWkUiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF9idWZmZXIgPSBpbnB1dF9idWZmZXJbZW5kX2lkeCArIDE6XQoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICMgUGFyc2UgO2NvbHM7cm93cwogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMgPSByZXNpemVfY21kLmRlY29kZSgndXRmLTgnLCBlcnJvcnM9J2lnbm9yZScpLnN0cmlwKCc7Jykuc3BsaXQoJzsnKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgbGVuKHBhcnRzKSA9PSAyOgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeToKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2NvbHMsIG5ld19yb3dzID0gaW50KHBhcnRzWzBdKSwgaW50KHBhcnRzWzFdKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdHkuc2V0X3NpemUobmV3X2NvbHMsIG5ld19yb3dzKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2VwdCBWYWx1ZUVycm9yOgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzCiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2U6CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIE90aGVyIE9TQyBzZXF1ZW5jZSDigJQgcGFzcyB0aHJvdWdoIHRvIFBUWQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcHR5LndyaXRlKGlucHV0X2J1ZmZlci5kZWNvZGUoJ2xhdGluLTEnKSkKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0X2J1ZmZlciA9IGInJwogICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZQoKICAgICAgICAgICAgICAgICAgICBlbGlmIHNlY29uZCA9PSBiJ1snOgogICAgICAgICAgICAgICAgICAgICAgICAjIENTSSBzZXF1ZW5jZSAoXHgxYlsuLi5maW5hbCkg4oCUIHJlYWQgdW50aWwgZmluYWwgYnl0ZSAoMHg0MOKAkzB4N0UpCiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIFRydWU6CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gc3lzLnN0ZGluLmJ1ZmZlci5yZWFkKDEpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiBub3QgYzoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhawogICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfYnVmZmVyICs9IGMKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIDB4NDAgPD0gaW5wdXRfYnVmZmVyWy0xXSA8PSAweDdFOgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrCgogICAgICAgICAgICAgICAgICAgICAgICAjIHh0ZXJtLmpzIHNlbmRzIHRlcm1pbmFsIHByb3RvY29sIHJlc3BvbnNlcyAoREExLCBEQTIsCiAgICAgICAgICAgICAgICAgICAgICAgICMgZGV2aWNlIHN0YXR1cykgdmlhIHRlcm0ub25EYXRhIGluIHJlcGx5IHRvIENvblBUWQogICAgICAgICAgICAgICAgICAgICAgICAjIGNhcGFiaWxpdHkgcXVlcmllcy4gVGhlc2UgbXVzdCBub3QgcmVhY2ggY21kLmV4ZS4KICAgICAgICAgICAgICAgICAgICAgICAgIyAgIERBMTogIFx4MWJbPy4uLmMgICAoZS5nLiBceDFiWz8xOzJjKQogICAgICAgICAgICAgICAgICAgICAgICAjICAgREEyOiAgXHgxYls+Li4uYyAgIChlLmcuIFx4MWJbPjA7MDswYykKICAgICAgICAgICAgICAgICAgICAgICAgIyAgIERTUjogIFx4MWJbLi4ubiAgICAoZS5nLiBceDFiWzBuKQogICAgICAgICAgICAgICAgICAgICAgICBsYXN0ID0gaW5wdXRfYnVmZmVyWy0xXSBpZiBpbnB1dF9idWZmZXIgZWxzZSAwCiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXJkID0gaW5wdXRfYnVmZmVyWzI6M10KICAgICAgICAgICAgICAgICAgICAgICAgaXNfcHJvdG9jb2xfcmVzcG9uc2UgPSAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobGFzdCA9PSBvcmQoJ2MnKSBhbmQgdGhpcmQgaW4gKGInPycsIGInPicpKSBvcgogICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxhc3QgPT0gb3JkKCduJykpCiAgICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgICAgaWYgbm90IGlzX3Byb3RvY29sX3Jlc3BvbnNlOgogICAgICAgICAgICAgICAgICAgICAgICAgICAgIyBMZWdpdGltYXRlIHVzZXIgaW5wdXQgKGN1cnNvciBrZXlzLCBmdW5jdGlvbiBrZXlzLCBldGMuKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcHR5LndyaXRlKGlucHV0X2J1ZmZlci5kZWNvZGUoJ2xhdGluLTEnKSkKICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfYnVmZmVyID0gYicnCiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlCgogICAgICAgICAgICAgICAgICAgIGVsc2U6CiAgICAgICAgICAgICAgICAgICAgICAgICMgT3RoZXIgdHdvLWJ5dGUgZXNjYXBlIChTUzIsIFNTMywgZXRjLikg4oCUIHBhc3MgdGhyb3VnaAogICAgICAgICAgICAgICAgICAgICAgICBwdHkud3JpdGUoaW5wdXRfYnVmZmVyLmRlY29kZSgnbGF0aW4tMScpKQogICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF9idWZmZXIgPSBiJycKICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUKCiAgICAgICAgICAgICAgICAjIFByb2Nlc3MgY29tcGxldGUgVVRGLTggY2hhcmFjdGVycyBmcm9tIGJ1ZmZlcgogICAgICAgICAgICAgICAgd2hpbGUgaW5wdXRfYnVmZmVyOgogICAgICAgICAgICAgICAgICAgIGNoYXJfYnl0ZXMsIGlucHV0X2J1ZmZlciA9IHJlYWRfdXRmOF9jaGFyKGlucHV0X2J1ZmZlcikKICAgICAgICAgICAgICAgICAgICBpZiBjaGFyX2J5dGVzIGlzIE5vbmU6CiAgICAgICAgICAgICAgICAgICAgICAgICMgTmVlZCBtb3JlIGJ5dGVzIHRvIGNvbXBsZXRlIHRoZSBjaGFyYWN0ZXIKICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsKICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAjIERlY29kZSBhbmQgc2VuZCB0byBQVFkKICAgICAgICAgICAgICAgICAgICB0cnk6CiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJfc3RyID0gY2hhcl9ieXRlcy5kZWNvZGUoJ3V0Zi04JykKICAgICAgICAgICAgICAgICAgICAgICAgcHR5LndyaXRlKGNoYXJfc3RyKQogICAgICAgICAgICAgICAgICAgIGV4Y2VwdCBVbmljb2RlRGVjb2RlRXJyb3I6CiAgICAgICAgICAgICAgICAgICAgICAgICMgSW52YWxpZCBVVEYtOCwgc2VuZCBhcy1pcyAoZXNjYXBlIHNlcXVlbmNlcywgZXRjLikKICAgICAgICAgICAgICAgICAgICAgICAgcHR5LndyaXRlKGNoYXJfYnl0ZXMuZGVjb2RlKCdsYXRpbi0xJykpCiAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICBleGNlcHQgRXhjZXB0aW9uIGFzIGU6CiAgICAgICAgICAgICAgICBicmVhawoKICAgICAgICBydW5uaW5nID0gRmFsc2UKICAgICAgICBzeXMuZXhpdCgwKQoKICAgIGV4Y2VwdCBFeGNlcHRpb24gYXMgZToKICAgICAgICBwcmludChmIkVycm9yOiB7ZX0iLCBmaWxlPXN5cy5zdGRlcnIpCiAgICAgICAgc3lzLmV4aXQoMSkKCmlmIF9fbmFtZV9fID09ICdfX21haW5fXyc6CiAgICBtYWluKCkK";
    // Decode and write PTY script to temp file
    const os = require("os");
    const scriptB64 = isWindows ? WIN_PTY_SCRIPT_B64 : PTY_SCRIPT_B64;
    const scriptName = isWindows ? "claude_sidebar_win.py" : "claude_sidebar_pty.py";
    const ptyPath = path.join(os.tmpdir(), scriptName);
    // Always write to ensure current version (overwrites stale cached copies)
    const ptyScript = Buffer.from(scriptB64, "base64").toString("utf-8");
    fs.writeFileSync(ptyPath, ptyScript, { mode: 0o755 });
    // Find Python on Windows - try multiple methods since GUI apps have PATH issues
    let cmd = "python3";
    if (isWindows) {
      cmd = null;
      // 1. Try 'py' launcher (installed by python.org installer to C:\Windows)
      try {
        (0, import_child_process.execSync)("py --version", { stdio: "ignore", timeout: 2000 });
        cmd = "py";
      } catch (e) {}
      // 2. Try 'where.exe python' and use first result that isn't the WindowsApps alias
      if (!cmd) {
        try {
          const whereOutput = (0, import_child_process.execSync)("where.exe python", { encoding: "utf8", timeout: 2000 });
          const pythonPaths = whereOutput.split(/\r?\n/).map(p => p.trim()).filter(p => p && !p.includes("WindowsApps"));
          // Prefer .bat shims (pyenv-win), otherwise use first valid path
          const batShim = pythonPaths.find(p => p.toLowerCase().endsWith(".bat"));
          if (batShim) {
            cmd = batShim;
          } else if (pythonPaths.length > 0) {
            cmd = pythonPaths[0];
          }
        } catch (e) {}
      }
      // 3. Fall back to 'python' and hope for the best
      if (!cmd) {
        cmd = "python";
      }
    }
    const backend = this.getBackend();
    const isCustomBackend = this.plugin.pluginData.cliBackend === "custom";
    const customCommand = (this.plugin.pluginData.customCommand || "").trim();
    // For custom backend, binary is the user-supplied command; if empty, fall back to "claude".
    let cliCmd = isCustomBackend ? (customCommand || "claude") : backend.binary;
    if (yoloMode && backend.yoloFlag) cliCmd += " " + backend.yoloFlag;
    const additionalFlags = this.plugin.pluginData.additionalFlags;
    if (additionalFlags) cliCmd += " " + additionalFlags;
    let baseCmd = cliCmd;
    if (continueSession && backend.resumeFlag) {
      if (backend.resumeIsSubcommand) {
        // e.g. "codex resume --last" — replace the whole command
        cliCmd = backend.binary + " " + backend.resumeFlag;
        if (additionalFlags) cliCmd += " " + additionalFlags;
      } else {
        cliCmd += " " + backend.resumeFlag;
      }
    }
    const shellCmd = continueSession
      ? `${cliCmd} || ${baseCmd} || true; exec $SHELL -i`
      : `${cliCmd} || true; exec $SHELL -i`;
    // Interactive shell: needed when custom command relies on aliases/functions from .zshrc.
    // Default on for "custom" backend; user-toggleable via settings.
    const interactivePref = this.plugin.pluginData.interactiveShell;
    const useInteractive = interactivePref === undefined
      ? isCustomBackend
      : !!interactivePref;
    const shellFlag = useInteractive ? "-ilc" : "-lc";
    let args = isWindows
      ? [ptyPath, String(cols), String(rows), shell]
      : [ptyPath, String(cols), String(rows), shell, shellFlag, shellCmd];

    // Get PATH from user's login shell (GUI apps don't inherit shell config)
    let shellEnv = { ...process.env, TERM: "xterm-256color", COLORTERM: "truecolor" };
    if (!isWindows) {
      try {
        const shellOutput = (0, import_child_process.execSync)(
          `${shell} -lic 'echo "__PATH__"; echo "$PATH"'`,
          { encoding: 'utf8', timeout: 5000 }
        );
        // Extract PATH from after the marker (shell integration escapes pollute early output)
        const shellPath = shellOutput.split('__PATH__\n')[1]?.trim().split('\n')[0];
        if (shellPath) {
          shellEnv.PATH = shellPath;
        }
      } catch (e) {
        // Fall back to process.env.PATH if shell init fails
        console.warn('[Claude Sidebar] PATH detection timed out — falling back to system PATH. If tools are missing, check your shell startup time.');
      }
      // Ensure backend-specific paths are available
      const homeDir = process.env.HOME || '';
      const pathHints = (backend.pathHints || []).map(p => p.replace('~', homeDir));
      for (const hint of pathHints) {
        if (hint && shellEnv.PATH && !shellEnv.PATH.includes(hint)) {
          shellEnv.PATH = `${hint}:${shellEnv.PATH}`;
        }
      }
    }

    this.proc = (0, import_child_process.spawn)(cmd, args, {
      cwd,
      env: shellEnv,
      stdio: ["pipe", "pipe", "pipe"]
    });
    // Use StringDecoder to properly handle UTF-8 boundaries across chunks
    // This prevents replacement characters when multi-byte chars are split
    this.stdoutDecoder = new StringDecoder("utf8");
    this.stderrDecoder = new StringDecoder("utf8");
    this.proc.stdout?.on("data", (data) => {
      this.hasOutput = true;
      if (this.term) {
        const buffer = this.term.buffer.active;
        const userScrolled = Date.now() - this.userScrolledAt < 5000;
        const atBottom = !userScrolled && buffer.baseY === buffer.viewportY;
        const savedViewportY = buffer.viewportY;
        const text = this.stdoutDecoder.write(data);
        this.detectNotifications(text);
        const hasCursorHome = text.includes("\x1b[H");
        this.term.write(text);
        if (atBottom) {
          this.term.scrollToBottom();
        } else if (!hasCursorHome) {
          const jumped = buffer.viewportY !== savedViewportY;
          if (jumped) {
            this.term.scrollToLine(savedViewportY);
          }
        }
        if (hasCursorHome) {
          this._fitPending = true;
          this._scrollTarget = savedViewportY;
          this.debouncedFit();
        }
      }
    });
    this.proc.stderr?.on("data", (data) => {
      this.term?.write(this.stderrDecoder.write(data));
    });
    this.proc.on("exit", (code, signal) => {
      if (isWindows && code === 9009) {
        this.term?.writeln("\r\n[Python not found]");
        this.term?.writeln("Install Python from https://python.org");
        this.term?.writeln("Or run: winget install Python.Python.3");
      } else {
        this.term?.writeln(`\r\n[Process exited: ${code ?? signal}]`);
      }
      this.proc = null;
    });
    this.proc.on("error", (err) => {
      if (isWindows && err.message.includes("ENOENT")) {
        this.term?.writeln("\r\n[Python not found]");
        this.term?.writeln("Install Python from https://python.org");
        this.term?.writeln("Or run: winget install Python.Python.3");
      } else {
        this.term?.writeln(`\r\n[Error: ${err.message}]`);
      }
    });
    this.term?.onResize(({ cols: c, rows: r }) => {
      if (this.proc && !this.proc.killed) {
        this.proc.stdin?.write(`\x1b]RESIZE;${c};${r}\x07`);
      }
    });
    // Safety: Verify dimensions after shell starts and send resize if needed
    setTimeout(() => {
      if (this.proc && !this.proc.killed && this.fitAddon) {
        const currentDims = this.fitAddon.proposeDimensions();
        if (currentDims && currentDims.rows > 0) {
          this.proc.stdin?.write(`\x1b]RESIZE;${currentDims.cols};${currentDims.rows}\x07`);
        }
      }
    }, 500);
    this.term?.focus();
    // Windows still needs auto-launch since we can't use exec there
    if (isWindows) {
      setTimeout(() => {
        if (this.proc && !this.proc.killed) {
          let winCmd = backend.binary;
          if (yoloMode && backend.yoloFlag) winCmd += ' ' + backend.yoloFlag;
          this.proc.stdin?.write(winCmd + '\r');
        }
      }, 1000);
    }
  }
  getNotificationTitle() {
    if (this.plugin.pluginData.cliBackend === "custom") {
      const cmd = (this.plugin.pluginData.customCommand || "").trim();
      const first = cmd.split(/\s+/)[0] || "Claude";
      return first.split("/").pop() || "Claude";
    }
    return this.getBackend()?.label || "Claude";
  }
  // Scan incoming terminal output for OSC notification escape sequences used by
  // Claude Code, Codex, and iTerm-compatible tools. Supported forms:
  //   OSC 9 ; <body>                          BEL / ST   (iTerm2 / Claude Code)
  //   OSC 777 ; notify ; <title> ; <body>     BEL / ST   (rxvt-unicode)
  //   OSC 99 ; ... ; <body>                   BEL / ST   (kitty / ghostty)
  detectNotifications(text) {
    if (!text || !this.plugin?.pluginData) return;
    const enabled = this.plugin.pluginData.notificationsEnabled !== false;
    if (!enabled) return;
    if (!text.includes("\x1b]")) return;
    const oscRe = /\x1b\](\d+);([^\x07\x1b]*)(?:\x07|\x1b\\)/g;
    let match;
    while ((match = oscRe.exec(text)) !== null) {
      const code = match[1];
      const payload = match[2];
      let title = this.getNotificationTitle();
      let body = null;
      if (code === "9") {
        body = payload;
      } else if (code === "777") {
        const parts = payload.split(";");
        if (parts[0] === "notify" && parts.length >= 2) {
          title = parts[1] || title;
          body = parts.slice(2).join(";");
        }
      } else if (code === "99") {
        const semi = payload.lastIndexOf(";");
        body = semi >= 0 ? payload.slice(semi + 1) : payload;
      }
      if (body && body.trim()) this.fireNotification(title, body.trim());
    }
  }
  fireNotification(title, body) {
    const mode = this.plugin.pluginData.notificationMode || "smart";
    const wantInApp = mode === "in-app" || mode === "both" || (mode === "smart" && document.hasFocus());
    const wantSystem = mode === "system" || mode === "both" || (mode === "smart" && !document.hasFocus());
    if (wantInApp) {
      try { new import_obsidian.Notice(`${title}: ${body}`, 5000); } catch (e) {}
    }
    if (wantSystem) {
      try {
        if (typeof Notification !== "undefined") {
          if (Notification.permission === "granted") {
            new Notification(title, { body });
          } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then((p) => {
              if (p === "granted") new Notification(title, { body });
            });
          }
        }
      } catch (e) {}
    }
  }
  stopShell() {
    if (this.proc && !this.proc.killed) {
      this.proc.kill("SIGTERM");
      this.proc = null;
    }
    // Flush any remaining buffered bytes from decoders
    if (this.stdoutDecoder) {
      const remaining = this.stdoutDecoder.end();
      if (remaining) this.term?.write(remaining);
      this.stdoutDecoder = null;
    }
    if (this.stderrDecoder) {
      const remaining = this.stderrDecoder.end();
      if (remaining) this.term?.write(remaining);
      this.stderrDecoder = null;
    }
  }
  dispose() {
    if (this._isDisposed) return;
    this._isDisposed = true;
    this.resizeObserver?.disconnect();
    this.themeObserver?.disconnect();
    if (this.fitTimeout) {
      clearTimeout(this.fitTimeout);
      this.fitTimeout = null;
    }
    if (this.escapeScope) {
      this.app.keymap.popScope(this.escapeScope);
      this.escapeScope = null;
    }
    if (this.imagePasteHandler) {
      document.removeEventListener("paste", this.imagePasteHandler, true);
      this.imagePasteHandler = null;
    }
    if (this.fileDragOverHandler && this.termHost) {
      this.termHost.removeEventListener('dragover', this.fileDragOverHandler);
      this.fileDragOverHandler = null;
    }
    if (this.fileDropHandler && this.termHost) {
      this.termHost.removeEventListener('drop', this.fileDropHandler);
      this.fileDropHandler = null;
    }
    this.stopShell();
    if (this.webglAddon) {
      try { this.webglAddon.dispose(); } catch (e) {}
      this.webglAddon = null;
    }
    this.term?.dispose();
    this.term = null;
    this.fitAddon = null;
  }
};
var ClaudeSidebarSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl)
      .setName("CLI backend")
      .setDesc("Which coding agent CLI to run in the sidebar. Choose Custom to supply your own command (e.g. a wrapper script like ccl).")
      .addDropdown(drop => {
        for (const [key, backend] of Object.entries(CLI_BACKENDS)) {
          drop.addOption(key, backend.label);
        }
        drop.setValue(this.plugin.pluginData.cliBackend || "claude");
        drop.onChange(async (value) => {
          this.plugin.pluginData.cliBackend = value;
          await this.plugin.saveData(this.plugin.pluginData);
          this.display(); // re-render so the custom-command field appears/hides
        });
      });
    if ((this.plugin.pluginData.cliBackend || "claude") === "custom") {
      new import_obsidian.Setting(containerEl)
        .setName("Custom command")
        .setDesc("The exact command to execute. Can be an absolute path, an alias, or an inline shell snippet. Runs under your login shell so PATH, env, and (when Interactive shell is on) aliases from .zshrc are available.")
        .addText(text => text
          .setPlaceholder("~/start-claude.sh  or  ccl  or  env X=1 claude")
          .setValue(this.plugin.pluginData.customCommand || "")
          .onChange(async (value) => {
            this.plugin.pluginData.customCommand = value.trim() || null;
            await this.plugin.saveData(this.plugin.pluginData);
          }));
    }
    new import_obsidian.Setting(containerEl)
      .setName("Default working directory")
      .setDesc("Absolute path or relative to vault root. Leave empty for vault root.")
      .addText(text => text
        .setPlaceholder("/Users/you/project")
        .setValue(this.plugin.pluginData.defaultWorkingDir || "")
        .onChange(async (value) => {
          this.plugin.pluginData.defaultWorkingDir = value.trim() || null;
          await this.plugin.saveData(this.plugin.pluginData);
        }));
    new import_obsidian.Setting(containerEl)
      .setName("CLI flags")
      .setDesc("Flags appended to every CLI session.")
      .addText(text => text
        .setPlaceholder("--model claude-opus-4-6")
        .setValue(this.plugin.pluginData.additionalFlags || "")
        .onChange(async (value) => {
          this.plugin.pluginData.additionalFlags = value.trim() || null;
          await this.plugin.saveData(this.plugin.pluginData);
        }));
    new import_obsidian.Setting(containerEl)
      .setName("Interactive shell")
      .setDesc("Launch the command via zsh -ilc so aliases and functions from .zshrc are available. Default: on for Custom, off otherwise. Turn on if your command relies on shell aliases.")
      .addToggle(toggle => {
        const pref = this.plugin.pluginData.interactiveShell;
        const current = pref === undefined
          ? (this.plugin.pluginData.cliBackend || "claude") === "custom"
          : !!pref;
        toggle.setValue(current).onChange(async (value) => {
          this.plugin.pluginData.interactiveShell = value;
          await this.plugin.saveData(this.plugin.pluginData);
        });
      });
    new import_obsidian.Setting(containerEl)
      .setName("Renderer")
      .setDesc("WebGL is GPU-accelerated and fixes ghosting/CJK artifacts from the DOM renderer. Switch to DOM only if your environment lacks WebGL or you see rendering glitches.")
      .addDropdown(drop => drop
        .addOption("webgl", "WebGL (recommended)")
        .addOption("dom", "DOM (fallback)")
        .setValue(this.plugin.pluginData.rendererMode || "webgl")
        .onChange(async (value) => {
          this.plugin.pluginData.rendererMode = value;
          await this.plugin.saveData(this.plugin.pluginData);
          new import_obsidian.Notice("Renderer change takes effect on the next new tab.", 4000);
        }));
    new import_obsidian.Setting(containerEl)
      .setName("Notifications")
      .setDesc("Show a notification when the agent finishes a task (via OSC 9/99/777 escape sequences from the CLI).")
      .addToggle(toggle => toggle
        .setValue(this.plugin.pluginData.notificationsEnabled !== false)
        .onChange(async (value) => {
          this.plugin.pluginData.notificationsEnabled = value;
          await this.plugin.saveData(this.plugin.pluginData);
        }));
    new import_obsidian.Setting(containerEl)
      .setName("Notification style")
      .setDesc("Smart: system notification when Obsidian is in the background, in-app toast when focused. In-app only / System only / Both override that.")
      .addDropdown(drop => drop
        .addOption("smart", "Smart (recommended)")
        .addOption("in-app", "In-app toast only")
        .addOption("system", "System notification only")
        .addOption("both", "Both")
        .setValue(this.plugin.pluginData.notificationMode || "smart")
        .onChange(async (value) => {
          this.plugin.pluginData.notificationMode = value;
          await this.plugin.saveData(this.plugin.pluginData);
        }));
  }
};
var VaultTerminalPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.lastRibbonClick = 0;
    this.pluginData = {};
  }
  async onload() {
    this.registerView(VIEW_TYPE, (leaf) => new TerminalView(leaf, this));
    this.pluginData = await this.loadData() || {};
    this.lastActiveTerminalLeaf = null;
    this.layoutReady = false;
    this.app.workspace.onLayoutReady(() => { this.layoutReady = true; });

    // Track the most recently focused Claude tab
    this.registerEvent(
      this.app.workspace.on('active-leaf-change', (leaf) => {
        if (leaf && leaf.view instanceof TerminalView) {
          this.lastActiveTerminalLeaf = leaf;
        }
      })
    );
    const ribbonIcon = this.addRibbonIcon("bot", "New Claude Tab", () => {
      const now = Date.now();
      if (now - this.lastRibbonClick < 1500) return; // 1.5s throttle to prevent accidental double-clicks
      this.lastRibbonClick = now;
      this.createNewTab();
    });
    // Right-click context menu
    ribbonIcon.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const menu = new import_obsidian.Menu();
      const activeBackend = CLI_BACKENDS[this.pluginData.cliBackend || "claude"];
      if (activeBackend.yoloFlag) {
        menu.addItem((item) => {
          item.setTitle("Open in YOLO mode")
            .setIcon("zap")
            .onClick(() => {
              const now = Date.now();
              if (now - this.lastRibbonClick < 1500) return;
              this.lastRibbonClick = now;
              this.createNewTab(null, true);
            });
        });
      }
      menu.addItem((item) => {
        item.setTitle("Run from active folder")
          .setIcon("folder-open")
          .onClick(() => {
            const now = Date.now();
            if (now - this.lastRibbonClick < 1500) return;
            this.lastRibbonClick = now;
            const file = this.app.workspace.getActiveFile();
            let dir = null;
            if (file) {
              const vaultPath = this.getVaultPath();
              const parentPath = file.parent ? file.parent.path : "";
              dir = parentPath ? `${vaultPath}/${parentPath}` : vaultPath;
            }
            this.createNewTab(dir);
          });
      });
      if (activeBackend.resumeFlag) {
        menu.addItem((item) => {
          item.setTitle("Resume last conversation")
            .setIcon("history")
            .onClick(() => {
              const now = Date.now();
              if (now - this.lastRibbonClick < 1500) return;
              this.lastRibbonClick = now;
              const lastCwd = this.pluginData.lastCwd || null;
              this.createNewTab(lastCwd, false, true);
            });
        });
      }
      menu.showAtMouseEvent(e);
    });
    this.addCommand({
      id: "open-claude",
      name: "Open Claude Code",
      callback: () => this.activateView()
    });
    this.addCommand({
      id: "new-claude-tab",
      name: "New Claude Tab",
      callback: () => this.createNewTab()
    });
    this.addCommand({
      id: "new-claude-tab-yolo",
      name: "New Tab (YOLO mode)",
      checkCallback: (checking) => {
        const backend = CLI_BACKENDS[this.pluginData.cliBackend || "claude"];
        if (!backend?.yoloFlag) return false;
        if (!checking) this.createNewTab(null, true);
        return true;
      }
    });
    this.addCommand({
      id: "close-claude-tab",
      name: "Close Claude Tab",
      checkCallback: (checking) => {
        const view = this.app.workspace.getActiveViewOfType(TerminalView);
        if (view) {
          if (!checking) view.leaf.detach();
          return true;
        }
        return false;
      }
    });
    this.addCommand({
      id: "toggle-claude-focus",
      name: "Toggle Focus: Editor ↔ Claude",
      callback: () => this.toggleFocus()
    });
    this.addCommand({
      id: "send-file-to-claude",
      name: "Send File Path to Claude",
      checkCallback: (checking) => {
        const file = this.app.workspace.getActiveFile();
        if (!file) return false;

        if (!checking) {
          const absolutePath = `"${this.getVaultPath()}/${file.path}" `;
          this.sendTextToTerminal(absolutePath);
        }
        return true;
      }
    });
    this.addCommand({
      id: "send-selection-to-claude",
      name: "Send Selection to Claude",
      checkCallback: (checking) => {
        const editor = this.app.workspace.activeEditor?.editor;
        if (!editor) return false;

        const selection = editor.getSelection();
        if (!selection) return false;

        if (!checking) {
          const enriched = this.buildSelectionContext(editor, selection);
          this.sendTextToTerminal(enriched);
        }
        return true;
      }
    });

    this.addCommand({
      id: "run-claude-from-folder",
      name: "Run Claude from this folder",
      callback: () => {
        const file = this.app.workspace.getActiveFile();
        let dir = null;
        if (file) {
          const vaultPath = this.getVaultPath();
          const parentPath = file.parent ? file.parent.path : "";
          dir = parentPath ? `${vaultPath}/${parentPath}` : vaultPath;
        }
        this.createNewTab(dir);
      }
    });
    this.addCommand({
      id: "resume-claude",
      name: "Resume last conversation",
      checkCallback: (checking) => {
        const backend = CLI_BACKENDS[this.pluginData.cliBackend || "claude"];
        if (!backend?.resumeFlag) return false;
        if (!checking) {
          const lastCwd = this.pluginData.lastCwd || null;
          this.createNewTab(lastCwd, false, true);
        }
        return true;
      }
    });

    // Register folder context menu
    this.registerEvent(
      this.app.workspace.on('file-menu', (menu, file, source) => {
        // Only show for folders, not files
        if (file instanceof import_obsidian.TFolder) {
          menu.addItem(item =>
            item
              .setTitle('Open Claude here')
              .setIcon('bot')
              .onClick(() => {
                const absolutePath = this.app.vault.adapter.getFullPath(file.path);
                this.createNewTab(absolutePath);
              })
          );
          const folderBackend = CLI_BACKENDS[this.pluginData.cliBackend || "claude"];
          if (folderBackend.yoloFlag) {
            menu.addItem(item =>
              item
                .setTitle('Open Claude here (YOLO)')
                .setIcon('zap')
                .onClick(() => {
                  const absolutePath = this.app.vault.adapter.getFullPath(file.path);
                  this.createNewTab(absolutePath, true);
                })
            );
          }
        }
      })
    );
    // Register editor context menu (right-click on selected text)
    this.registerEvent(
      this.app.workspace.on('editor-menu', (menu, editor, view) => {
        const selection = editor.getSelection();
        if (selection) {
          menu.addItem(item =>
            item
              .setTitle('Send selection to Claude')
              .setIcon('bot')
              .onClick(() => {
                const enriched = this.buildSelectionContext(editor, selection);
                this.sendTextToTerminal(enriched);
              })
          );
        }
      })
    );
    this.addSettingTab(new ClaudeSidebarSettingsTab(this.app, this));
  }
  async toggleFocus() {
    const activeView = this.app.workspace.getActiveViewOfType(TerminalView);
    if (activeView) {
      // Currently in Claude, go to editor — prefer most recent non-pinned leaf
      const leaves = this.app.workspace.getLeavesOfType("markdown");
      const unpinned = leaves.filter(l => !l.pinned);
      const target = unpinned.length > 0 ? unpinned[0] : leaves[0];
      if (target) {
        this.app.workspace.setActiveLeaf(target, { focus: true });
      }
    } else {
      // Currently in editor, go to Claude (prefer last-active tab)
      const claudeLeaves = this.app.workspace.getLeavesOfType(VIEW_TYPE);
      if (claudeLeaves.length > 0) {
        let target = claudeLeaves[0];
        if (this.lastActiveTerminalLeaf && claudeLeaves.includes(this.lastActiveTerminalLeaf)) {
          target = this.lastActiveTerminalLeaf;
        }
        this.app.workspace.setActiveLeaf(target, { focus: true });
        const view = target.view;
        if (view instanceof TerminalView && view.term) {
          view.term.focus();
        }
      }
    }
  }
  onunload() {
    // Kill all terminal processes before unloading to prevent orphans
    const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE);
    for (const leaf of leaves) {
      const view = leaf.view;
      if (view instanceof TerminalView) {
        view.stopShell();
      }
    }
  }
  getVaultPath() {
    const adapter = this.app.vault.adapter;
    return adapter.basePath || "";
  }
  async activateView() {
    const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE);
    if (leaves.length) {
      this.app.workspace.revealLeaf(leaves[0]);
      this.app.workspace.setActiveLeaf(leaves[0], { focus: true });
      setTimeout(() => {
        const view = leaves[0].view;
        if (view instanceof TerminalView && view.term) {
          view.term.focus();
        }
      }, 50);
      return;
    }
    await this.createNewTab();
  }
  async createNewTab(workingDir = null, yoloMode = false, continueSession = false) {
    if (!this.layoutReady) return;
    const leaf = this.app.workspace.getRightLeaf(false);
    if (leaf) {
      const state = {};
      if (workingDir) state.workingDir = workingDir;
      if (yoloMode) state.yoloMode = yoloMode;
      if (continueSession) state.continueSession = continueSession;
      await leaf.setViewState({
        type: VIEW_TYPE,
        active: true,
        state
      });
      this.app.workspace.revealLeaf(leaf);
      // Focus the terminal after the leaf is revealed
      setTimeout(() => {
        const view = leaf.view;
        if (view instanceof TerminalView && view.term) {
          view.term.focus();
        }
      }, 50);
    }
  }
  buildSelectionContext(editor, selection) {
    const file = this.app.workspace.getActiveFile();
    if (!file) return selection;

    const vaultPath = this.getVaultPath();
    const absolutePath = `${vaultPath}/${file.path}`;

    // Get line numbers from cursor selection range
    const from = editor.getCursor("from");
    const to = editor.getCursor("to");
    const startLine = from.line + 1;
    const endLine = to.line + 1;
    const lineInfo = startLine === endLine ? `line ${startLine}` : `lines ${startLine}-${endLine}`;

    // Find [[wikilinks]] in the selection
    const wikiLinkRegex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
    const linkedPaths = [];
    let match;
    while ((match = wikiLinkRegex.exec(selection)) !== null) {
      const linkText = match[1];
      const linked = this.app.metadataCache.getFirstLinkpathDest(linkText, file.path);
      if (linked) {
        linkedPaths.push(`${vaultPath}/${linked.path}`);
      }
    }

    let context = `From "${absolutePath}" (${lineInfo}):\n\n${selection}`;
    if (linkedPaths.length > 0) {
      context += `\n\nLinked notes:\n${linkedPaths.map(p => `- "${p}"`).join("\n")}`;
    }
    return context;
  }
  async sendTextToTerminal(text) {
    let leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE);
    const needsNewTab = leaves.length === 0;
    if (needsNewTab) {
      await this.createNewTab();
      leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE);
    }
    if (leaves.length === 0) return false;

    // Prefer the most recently focused Claude tab, fall back to first
    let leaf = leaves[0];
    if (this.lastActiveTerminalLeaf && leaves.includes(this.lastActiveTerminalLeaf)) {
      leaf = this.lastActiveTerminalLeaf;
    }
    const view = leaf.view;

    if (!(view instanceof TerminalView)) return false;

    if (needsNewTab) {
      // Wait for process to start
      let attempts = 0;
      while ((!view.proc || !view.hasOutput) && attempts < 100) {
        await new Promise(r => setTimeout(r, 50));
        attempts++;
      }
      // Additional delay for Claude to fully initialize after first output
      await new Promise(r => setTimeout(r, 1000));
    }

    if (!view.proc || view.proc.killed) return false;

    view.proc.stdin?.write(text);

    this.app.workspace.setActiveLeaf(leaf, { focus: true });
    if (view.term) {
      view.term.focus();
    }
    return true;
  }
};
