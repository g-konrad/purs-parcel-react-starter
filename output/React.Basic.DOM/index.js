// Generated by purs version 0.14.3
"use strict";
var $foreign = require("./foreign.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect = require("../Effect/index.js");
var React_Basic_DOM_Generated = require("../React.Basic.DOM.Generated/index.js");
var React_Basic_DOM_Internal = require("../React.Basic.DOM.Internal/index.js");
var Unsafe_Coerce = require("../Unsafe.Coerce/index.js");
var text = Unsafe_Coerce.unsafeCoerce;
var render$prime = $foreign.renderThen;
var render = function (jsx) {
    return function (node) {
        return render$prime(jsx)(node)(Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit));
    };
};
var hydrate$prime = $foreign.hydrateThen;
var hydrate = function (jsx) {
    return function (node) {
        return hydrate$prime(jsx)(node)(Control_Applicative.pure(Effect.applicativeEffect)(Data_Unit.unit));
    };
};
module.exports = {
    render: render,
    "render'": render$prime,
    hydrate: hydrate,
    "hydrate'": hydrate$prime,
    text: text,
    unmount: $foreign.unmount,
    createPortal: $foreign.createPortal,
    a: React_Basic_DOM_Generated.a,
    "a'": React_Basic_DOM_Generated["a'"],
    a_: React_Basic_DOM_Generated.a_,
    abbr: React_Basic_DOM_Generated.abbr,
    "abbr'": React_Basic_DOM_Generated["abbr'"],
    abbr_: React_Basic_DOM_Generated.abbr_,
    address: React_Basic_DOM_Generated.address,
    "address'": React_Basic_DOM_Generated["address'"],
    address_: React_Basic_DOM_Generated.address_,
    area: React_Basic_DOM_Generated.area,
    "area'": React_Basic_DOM_Generated["area'"],
    article: React_Basic_DOM_Generated.article,
    "article'": React_Basic_DOM_Generated["article'"],
    article_: React_Basic_DOM_Generated.article_,
    aside: React_Basic_DOM_Generated.aside,
    "aside'": React_Basic_DOM_Generated["aside'"],
    aside_: React_Basic_DOM_Generated.aside_,
    audio: React_Basic_DOM_Generated.audio,
    "audio'": React_Basic_DOM_Generated["audio'"],
    audio_: React_Basic_DOM_Generated.audio_,
    b: React_Basic_DOM_Generated.b,
    "b'": React_Basic_DOM_Generated["b'"],
    b_: React_Basic_DOM_Generated.b_,
    base: React_Basic_DOM_Generated.base,
    "base'": React_Basic_DOM_Generated["base'"],
    bdi: React_Basic_DOM_Generated.bdi,
    "bdi'": React_Basic_DOM_Generated["bdi'"],
    bdi_: React_Basic_DOM_Generated.bdi_,
    bdo: React_Basic_DOM_Generated.bdo,
    "bdo'": React_Basic_DOM_Generated["bdo'"],
    bdo_: React_Basic_DOM_Generated.bdo_,
    blockquote: React_Basic_DOM_Generated.blockquote,
    "blockquote'": React_Basic_DOM_Generated["blockquote'"],
    blockquote_: React_Basic_DOM_Generated.blockquote_,
    body: React_Basic_DOM_Generated.body,
    "body'": React_Basic_DOM_Generated["body'"],
    body_: React_Basic_DOM_Generated.body_,
    br: React_Basic_DOM_Generated.br,
    "br'": React_Basic_DOM_Generated["br'"],
    button: React_Basic_DOM_Generated.button,
    "button'": React_Basic_DOM_Generated["button'"],
    button_: React_Basic_DOM_Generated.button_,
    canvas: React_Basic_DOM_Generated.canvas,
    "canvas'": React_Basic_DOM_Generated["canvas'"],
    canvas_: React_Basic_DOM_Generated.canvas_,
    caption: React_Basic_DOM_Generated.caption,
    "caption'": React_Basic_DOM_Generated["caption'"],
    caption_: React_Basic_DOM_Generated.caption_,
    cite: React_Basic_DOM_Generated.cite,
    "cite'": React_Basic_DOM_Generated["cite'"],
    cite_: React_Basic_DOM_Generated.cite_,
    code: React_Basic_DOM_Generated.code,
    "code'": React_Basic_DOM_Generated["code'"],
    code_: React_Basic_DOM_Generated.code_,
    col: React_Basic_DOM_Generated.col,
    "col'": React_Basic_DOM_Generated["col'"],
    colgroup: React_Basic_DOM_Generated.colgroup,
    "colgroup'": React_Basic_DOM_Generated["colgroup'"],
    colgroup_: React_Basic_DOM_Generated.colgroup_,
    "data'": React_Basic_DOM_Generated["data'"],
    "data''": React_Basic_DOM_Generated["data''"],
    data_: React_Basic_DOM_Generated.data_,
    datalist: React_Basic_DOM_Generated.datalist,
    "datalist'": React_Basic_DOM_Generated["datalist'"],
    datalist_: React_Basic_DOM_Generated.datalist_,
    dd: React_Basic_DOM_Generated.dd,
    "dd'": React_Basic_DOM_Generated["dd'"],
    dd_: React_Basic_DOM_Generated.dd_,
    del: React_Basic_DOM_Generated.del,
    "del'": React_Basic_DOM_Generated["del'"],
    del_: React_Basic_DOM_Generated.del_,
    details: React_Basic_DOM_Generated.details,
    "details'": React_Basic_DOM_Generated["details'"],
    details_: React_Basic_DOM_Generated.details_,
    dfn: React_Basic_DOM_Generated.dfn,
    "dfn'": React_Basic_DOM_Generated["dfn'"],
    dfn_: React_Basic_DOM_Generated.dfn_,
    dialog: React_Basic_DOM_Generated.dialog,
    "dialog'": React_Basic_DOM_Generated["dialog'"],
    dialog_: React_Basic_DOM_Generated.dialog_,
    div: React_Basic_DOM_Generated.div,
    "div'": React_Basic_DOM_Generated["div'"],
    div_: React_Basic_DOM_Generated.div_,
    dl: React_Basic_DOM_Generated.dl,
    "dl'": React_Basic_DOM_Generated["dl'"],
    dl_: React_Basic_DOM_Generated.dl_,
    dt: React_Basic_DOM_Generated.dt,
    "dt'": React_Basic_DOM_Generated["dt'"],
    dt_: React_Basic_DOM_Generated.dt_,
    em: React_Basic_DOM_Generated.em,
    "em'": React_Basic_DOM_Generated["em'"],
    em_: React_Basic_DOM_Generated.em_,
    embed: React_Basic_DOM_Generated.embed,
    "embed'": React_Basic_DOM_Generated["embed'"],
    fieldset: React_Basic_DOM_Generated.fieldset,
    "fieldset'": React_Basic_DOM_Generated["fieldset'"],
    fieldset_: React_Basic_DOM_Generated.fieldset_,
    figcaption: React_Basic_DOM_Generated.figcaption,
    "figcaption'": React_Basic_DOM_Generated["figcaption'"],
    figcaption_: React_Basic_DOM_Generated.figcaption_,
    figure: React_Basic_DOM_Generated.figure,
    "figure'": React_Basic_DOM_Generated["figure'"],
    figure_: React_Basic_DOM_Generated.figure_,
    footer: React_Basic_DOM_Generated.footer,
    "footer'": React_Basic_DOM_Generated["footer'"],
    footer_: React_Basic_DOM_Generated.footer_,
    form: React_Basic_DOM_Generated.form,
    "form'": React_Basic_DOM_Generated["form'"],
    form_: React_Basic_DOM_Generated.form_,
    h1: React_Basic_DOM_Generated.h1,
    "h1'": React_Basic_DOM_Generated["h1'"],
    h1_: React_Basic_DOM_Generated.h1_,
    h2: React_Basic_DOM_Generated.h2,
    "h2'": React_Basic_DOM_Generated["h2'"],
    h2_: React_Basic_DOM_Generated.h2_,
    h3: React_Basic_DOM_Generated.h3,
    "h3'": React_Basic_DOM_Generated["h3'"],
    h3_: React_Basic_DOM_Generated.h3_,
    h4: React_Basic_DOM_Generated.h4,
    "h4'": React_Basic_DOM_Generated["h4'"],
    h4_: React_Basic_DOM_Generated.h4_,
    h5: React_Basic_DOM_Generated.h5,
    "h5'": React_Basic_DOM_Generated["h5'"],
    h5_: React_Basic_DOM_Generated.h5_,
    h6: React_Basic_DOM_Generated.h6,
    "h6'": React_Basic_DOM_Generated["h6'"],
    h6_: React_Basic_DOM_Generated.h6_,
    head: React_Basic_DOM_Generated.head,
    "head'": React_Basic_DOM_Generated["head'"],
    head_: React_Basic_DOM_Generated.head_,
    header: React_Basic_DOM_Generated.header,
    "header'": React_Basic_DOM_Generated["header'"],
    header_: React_Basic_DOM_Generated.header_,
    hgroup: React_Basic_DOM_Generated.hgroup,
    "hgroup'": React_Basic_DOM_Generated["hgroup'"],
    hgroup_: React_Basic_DOM_Generated.hgroup_,
    hr: React_Basic_DOM_Generated.hr,
    "hr'": React_Basic_DOM_Generated["hr'"],
    html: React_Basic_DOM_Generated.html,
    "html'": React_Basic_DOM_Generated["html'"],
    html_: React_Basic_DOM_Generated.html_,
    i: React_Basic_DOM_Generated.i,
    "i'": React_Basic_DOM_Generated["i'"],
    i_: React_Basic_DOM_Generated.i_,
    iframe: React_Basic_DOM_Generated.iframe,
    "iframe'": React_Basic_DOM_Generated["iframe'"],
    iframe_: React_Basic_DOM_Generated.iframe_,
    img: React_Basic_DOM_Generated.img,
    "img'": React_Basic_DOM_Generated["img'"],
    input: React_Basic_DOM_Generated.input,
    "input'": React_Basic_DOM_Generated["input'"],
    ins: React_Basic_DOM_Generated.ins,
    "ins'": React_Basic_DOM_Generated["ins'"],
    ins_: React_Basic_DOM_Generated.ins_,
    kbd: React_Basic_DOM_Generated.kbd,
    "kbd'": React_Basic_DOM_Generated["kbd'"],
    kbd_: React_Basic_DOM_Generated.kbd_,
    keygen: React_Basic_DOM_Generated.keygen,
    "keygen'": React_Basic_DOM_Generated["keygen'"],
    keygen_: React_Basic_DOM_Generated.keygen_,
    label: React_Basic_DOM_Generated.label,
    "label'": React_Basic_DOM_Generated["label'"],
    label_: React_Basic_DOM_Generated.label_,
    legend: React_Basic_DOM_Generated.legend,
    "legend'": React_Basic_DOM_Generated["legend'"],
    legend_: React_Basic_DOM_Generated.legend_,
    li: React_Basic_DOM_Generated.li,
    "li'": React_Basic_DOM_Generated["li'"],
    li_: React_Basic_DOM_Generated.li_,
    link: React_Basic_DOM_Generated.link,
    "link'": React_Basic_DOM_Generated["link'"],
    main: React_Basic_DOM_Generated.main,
    "main'": React_Basic_DOM_Generated["main'"],
    main_: React_Basic_DOM_Generated.main_,
    map: React_Basic_DOM_Generated.map,
    "map'": React_Basic_DOM_Generated["map'"],
    map_: React_Basic_DOM_Generated.map_,
    mark: React_Basic_DOM_Generated.mark,
    "mark'": React_Basic_DOM_Generated["mark'"],
    mark_: React_Basic_DOM_Generated.mark_,
    math: React_Basic_DOM_Generated.math,
    "math'": React_Basic_DOM_Generated["math'"],
    math_: React_Basic_DOM_Generated.math_,
    menu: React_Basic_DOM_Generated.menu,
    "menu'": React_Basic_DOM_Generated["menu'"],
    menu_: React_Basic_DOM_Generated.menu_,
    menuitem: React_Basic_DOM_Generated.menuitem,
    "menuitem'": React_Basic_DOM_Generated["menuitem'"],
    menuitem_: React_Basic_DOM_Generated.menuitem_,
    meta: React_Basic_DOM_Generated.meta,
    "meta'": React_Basic_DOM_Generated["meta'"],
    meter: React_Basic_DOM_Generated.meter,
    "meter'": React_Basic_DOM_Generated["meter'"],
    meter_: React_Basic_DOM_Generated.meter_,
    nav: React_Basic_DOM_Generated.nav,
    "nav'": React_Basic_DOM_Generated["nav'"],
    nav_: React_Basic_DOM_Generated.nav_,
    noscript: React_Basic_DOM_Generated.noscript,
    "noscript'": React_Basic_DOM_Generated["noscript'"],
    noscript_: React_Basic_DOM_Generated.noscript_,
    object: React_Basic_DOM_Generated.object,
    "object'": React_Basic_DOM_Generated["object'"],
    object_: React_Basic_DOM_Generated.object_,
    ol: React_Basic_DOM_Generated.ol,
    "ol'": React_Basic_DOM_Generated["ol'"],
    ol_: React_Basic_DOM_Generated.ol_,
    optgroup: React_Basic_DOM_Generated.optgroup,
    "optgroup'": React_Basic_DOM_Generated["optgroup'"],
    optgroup_: React_Basic_DOM_Generated.optgroup_,
    option: React_Basic_DOM_Generated.option,
    "option'": React_Basic_DOM_Generated["option'"],
    option_: React_Basic_DOM_Generated.option_,
    output: React_Basic_DOM_Generated.output,
    "output'": React_Basic_DOM_Generated["output'"],
    output_: React_Basic_DOM_Generated.output_,
    p: React_Basic_DOM_Generated.p,
    "p'": React_Basic_DOM_Generated["p'"],
    p_: React_Basic_DOM_Generated.p_,
    param: React_Basic_DOM_Generated.param,
    "param'": React_Basic_DOM_Generated["param'"],
    picture: React_Basic_DOM_Generated.picture,
    "picture'": React_Basic_DOM_Generated["picture'"],
    picture_: React_Basic_DOM_Generated.picture_,
    pre: React_Basic_DOM_Generated.pre,
    "pre'": React_Basic_DOM_Generated["pre'"],
    pre_: React_Basic_DOM_Generated.pre_,
    progress: React_Basic_DOM_Generated.progress,
    "progress'": React_Basic_DOM_Generated["progress'"],
    progress_: React_Basic_DOM_Generated.progress_,
    q: React_Basic_DOM_Generated.q,
    "q'": React_Basic_DOM_Generated["q'"],
    q_: React_Basic_DOM_Generated.q_,
    rb: React_Basic_DOM_Generated.rb,
    "rb'": React_Basic_DOM_Generated["rb'"],
    rb_: React_Basic_DOM_Generated.rb_,
    rp: React_Basic_DOM_Generated.rp,
    "rp'": React_Basic_DOM_Generated["rp'"],
    rp_: React_Basic_DOM_Generated.rp_,
    rt: React_Basic_DOM_Generated.rt,
    "rt'": React_Basic_DOM_Generated["rt'"],
    rt_: React_Basic_DOM_Generated.rt_,
    rtc: React_Basic_DOM_Generated.rtc,
    "rtc'": React_Basic_DOM_Generated["rtc'"],
    rtc_: React_Basic_DOM_Generated.rtc_,
    ruby: React_Basic_DOM_Generated.ruby,
    "ruby'": React_Basic_DOM_Generated["ruby'"],
    ruby_: React_Basic_DOM_Generated.ruby_,
    s: React_Basic_DOM_Generated.s,
    "s'": React_Basic_DOM_Generated["s'"],
    s_: React_Basic_DOM_Generated.s_,
    samp: React_Basic_DOM_Generated.samp,
    "samp'": React_Basic_DOM_Generated["samp'"],
    samp_: React_Basic_DOM_Generated.samp_,
    script: React_Basic_DOM_Generated.script,
    "script'": React_Basic_DOM_Generated["script'"],
    script_: React_Basic_DOM_Generated.script_,
    section: React_Basic_DOM_Generated.section,
    "section'": React_Basic_DOM_Generated["section'"],
    section_: React_Basic_DOM_Generated.section_,
    select: React_Basic_DOM_Generated.select,
    "select'": React_Basic_DOM_Generated["select'"],
    select_: React_Basic_DOM_Generated.select_,
    slot: React_Basic_DOM_Generated.slot,
    "slot'": React_Basic_DOM_Generated["slot'"],
    slot_: React_Basic_DOM_Generated.slot_,
    small: React_Basic_DOM_Generated.small,
    "small'": React_Basic_DOM_Generated["small'"],
    small_: React_Basic_DOM_Generated.small_,
    source: React_Basic_DOM_Generated.source,
    "source'": React_Basic_DOM_Generated["source'"],
    span: React_Basic_DOM_Generated.span,
    "span'": React_Basic_DOM_Generated["span'"],
    span_: React_Basic_DOM_Generated.span_,
    strong: React_Basic_DOM_Generated.strong,
    "strong'": React_Basic_DOM_Generated["strong'"],
    strong_: React_Basic_DOM_Generated.strong_,
    style: React_Basic_DOM_Generated.style,
    "style'": React_Basic_DOM_Generated["style'"],
    style_: React_Basic_DOM_Generated.style_,
    sub: React_Basic_DOM_Generated.sub,
    "sub'": React_Basic_DOM_Generated["sub'"],
    sub_: React_Basic_DOM_Generated.sub_,
    summary: React_Basic_DOM_Generated.summary,
    "summary'": React_Basic_DOM_Generated["summary'"],
    summary_: React_Basic_DOM_Generated.summary_,
    sup: React_Basic_DOM_Generated.sup,
    "sup'": React_Basic_DOM_Generated["sup'"],
    sup_: React_Basic_DOM_Generated.sup_,
    table: React_Basic_DOM_Generated.table,
    "table'": React_Basic_DOM_Generated["table'"],
    table_: React_Basic_DOM_Generated.table_,
    tbody: React_Basic_DOM_Generated.tbody,
    "tbody'": React_Basic_DOM_Generated["tbody'"],
    tbody_: React_Basic_DOM_Generated.tbody_,
    td: React_Basic_DOM_Generated.td,
    "td'": React_Basic_DOM_Generated["td'"],
    td_: React_Basic_DOM_Generated.td_,
    template: React_Basic_DOM_Generated.template,
    "template'": React_Basic_DOM_Generated["template'"],
    template_: React_Basic_DOM_Generated.template_,
    textarea: React_Basic_DOM_Generated.textarea,
    "textarea'": React_Basic_DOM_Generated["textarea'"],
    textarea_: React_Basic_DOM_Generated.textarea_,
    tfoot: React_Basic_DOM_Generated.tfoot,
    "tfoot'": React_Basic_DOM_Generated["tfoot'"],
    tfoot_: React_Basic_DOM_Generated.tfoot_,
    th: React_Basic_DOM_Generated.th,
    "th'": React_Basic_DOM_Generated["th'"],
    th_: React_Basic_DOM_Generated.th_,
    thead: React_Basic_DOM_Generated.thead,
    "thead'": React_Basic_DOM_Generated["thead'"],
    thead_: React_Basic_DOM_Generated.thead_,
    time: React_Basic_DOM_Generated.time,
    "time'": React_Basic_DOM_Generated["time'"],
    time_: React_Basic_DOM_Generated.time_,
    title: React_Basic_DOM_Generated.title,
    "title'": React_Basic_DOM_Generated["title'"],
    title_: React_Basic_DOM_Generated.title_,
    tr: React_Basic_DOM_Generated.tr,
    "tr'": React_Basic_DOM_Generated["tr'"],
    tr_: React_Basic_DOM_Generated.tr_,
    track: React_Basic_DOM_Generated.track,
    "track'": React_Basic_DOM_Generated["track'"],
    u: React_Basic_DOM_Generated.u,
    "u'": React_Basic_DOM_Generated["u'"],
    u_: React_Basic_DOM_Generated.u_,
    ul: React_Basic_DOM_Generated.ul,
    "ul'": React_Basic_DOM_Generated["ul'"],
    ul_: React_Basic_DOM_Generated.ul_,
    "var": React_Basic_DOM_Generated["var"],
    "var'": React_Basic_DOM_Generated["var'"],
    var_: React_Basic_DOM_Generated.var_,
    video: React_Basic_DOM_Generated.video,
    "video'": React_Basic_DOM_Generated["video'"],
    video_: React_Basic_DOM_Generated.video_,
    wbr: React_Basic_DOM_Generated.wbr,
    "wbr'": React_Basic_DOM_Generated["wbr'"],
    css: React_Basic_DOM_Internal.css,
    mergeStyles: React_Basic_DOM_Internal.mergeStyles,
    unsafeCreateDOMComponent: React_Basic_DOM_Internal.unsafeCreateDOMComponent
};
