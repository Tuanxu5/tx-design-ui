try {
  (() => {
    var t = __REACT__,
      {
        Children: f,
        Component: k,
        Fragment: R,
        Profiler: L,
        PureComponent: P,
        StrictMode: w,
        Suspense: E,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: D,
        cloneElement: M,
        createContext: x,
        createElement: v,
        createFactory: H,
        createRef: F,
        forwardRef: U,
        isValidElement: N,
        lazy: G,
        memo: W,
        startTransition: K,
        unstable_act: Y,
        useCallback: u,
        useContext: q,
        useDebugValue: V,
        useDeferredValue: Z,
        useEffect: d,
        useId: z,
        useImperativeHandle: J,
        useInsertionEffect: Q,
        useLayoutEffect: X,
        useMemo: $,
        useReducer: j,
        useRef: oo,
        useState: no,
        useSyncExternalStore: eo,
        useTransition: co,
        version: to,
      } = __REACT__;
    var so = __STORYBOOK_API__,
      {
        ActiveTabs: io,
        Consumer: uo,
        ManagerContext: mo,
        Provider: po,
        RequestResponseError: So,
        addons: l,
        combineParameters: Co,
        controlOrMetaKey: ho,
        controlOrMetaSymbol: bo,
        eventMatchesShortcut: Ao,
        eventToShortcut: To,
        experimental_requestResponse: _o,
        isMacLike: go,
        isShortcutTaken: yo,
        keyToSymbol: Bo,
        merge: Oo,
        mockChannel: fo,
        optionOrAltSymbol: ko,
        shortcutMatchesShortcut: Ro,
        shortcutToHumanString: Lo,
        types: m,
        useAddonState: Po,
        useArgTypes: wo,
        useArgs: Eo,
        useChannel: Do,
        useGlobalTypes: Mo,
        useGlobals: p,
        useParameter: xo,
        useSharedState: vo,
        useStoryPrepared: Ho,
        useStorybookApi: S,
        useStorybookState: Fo,
      } = __STORYBOOK_API__;
    var Ko = __STORYBOOK_COMPONENTS__,
      {
        A: Yo,
        ActionBar: qo,
        AddonPanel: Vo,
        Badge: Zo,
        Bar: zo,
        Blockquote: Jo,
        Button: Qo,
        ClipboardCode: Xo,
        Code: $o,
        DL: jo,
        Div: on,
        DocumentWrapper: nn,
        EmptyTabContent: en,
        ErrorFormatter: cn,
        FlexBar: tn,
        Form: rn,
        H1: In,
        H2: an,
        H3: ln,
        H4: sn,
        H5: un,
        H6: dn,
        HR: mn,
        IconButton: C,
        IconButtonSkeleton: pn,
        Icons: Sn,
        Img: Cn,
        LI: hn,
        Link: bn,
        ListItem: An,
        Loader: Tn,
        Modal: _n,
        OL: gn,
        P: yn,
        Placeholder: Bn,
        Pre: On,
        ResetWrapper: fn,
        ScrollArea: kn,
        Separator: Rn,
        Spaced: Ln,
        Span: Pn,
        StorybookIcon: wn,
        StorybookLogo: En,
        Symbols: Dn,
        SyntaxHighlighter: Mn,
        TT: xn,
        TabBar: vn,
        TabButton: Hn,
        TabWrapper: Fn,
        Table: Un,
        Tabs: Nn,
        TabsState: Gn,
        TooltipLinkList: Wn,
        TooltipMessage: Kn,
        TooltipNote: Yn,
        UL: qn,
        WithTooltip: Vn,
        WithTooltipPure: Zn,
        Zoom: zn,
        codeCommon: Jn,
        components: Qn,
        createCopyToClipboardFunction: Xn,
        getStoryHref: $n,
        icons: jn,
        interleaveSeparators: oe,
        nameSpaceClassNames: ne,
        resetComponents: ee,
        withReset: ce,
      } = __STORYBOOK_COMPONENTS__;
    var le = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: se,
        AccessibilityIcon: ie,
        AddIcon: ue,
        AdminIcon: de,
        AlertAltIcon: me,
        AlertIcon: pe,
        AlignLeftIcon: Se,
        AlignRightIcon: Ce,
        AppleIcon: he,
        ArrowBottomLeftIcon: be,
        ArrowBottomRightIcon: Ae,
        ArrowDownIcon: Te,
        ArrowLeftIcon: _e,
        ArrowRightIcon: ge,
        ArrowSolidDownIcon: ye,
        ArrowSolidLeftIcon: Be,
        ArrowSolidRightIcon: Oe,
        ArrowSolidUpIcon: fe,
        ArrowTopLeftIcon: ke,
        ArrowTopRightIcon: Re,
        ArrowUpIcon: Le,
        AzureDevOpsIcon: Pe,
        BackIcon: we,
        BasketIcon: Ee,
        BatchAcceptIcon: De,
        BatchDenyIcon: Me,
        BeakerIcon: xe,
        BellIcon: ve,
        BitbucketIcon: He,
        BoldIcon: Fe,
        BookIcon: Ue,
        BookmarkHollowIcon: Ne,
        BookmarkIcon: Ge,
        BottomBarIcon: We,
        BottomBarToggleIcon: Ke,
        BoxIcon: Ye,
        BranchIcon: qe,
        BrowserIcon: Ve,
        ButtonIcon: Ze,
        CPUIcon: ze,
        CalendarIcon: Je,
        CameraIcon: Qe,
        CategoryIcon: Xe,
        CertificateIcon: $e,
        ChangedIcon: je,
        ChatIcon: oc,
        CheckIcon: nc,
        ChevronDownIcon: ec,
        ChevronLeftIcon: cc,
        ChevronRightIcon: tc,
        ChevronSmallDownIcon: rc,
        ChevronSmallLeftIcon: Ic,
        ChevronSmallRightIcon: ac,
        ChevronSmallUpIcon: lc,
        ChevronUpIcon: sc,
        ChromaticIcon: ic,
        ChromeIcon: uc,
        CircleHollowIcon: dc,
        CircleIcon: mc,
        ClearIcon: pc,
        CloseAltIcon: Sc,
        CloseIcon: Cc,
        CloudHollowIcon: hc,
        CloudIcon: bc,
        CogIcon: Ac,
        CollapseIcon: Tc,
        CommandIcon: _c,
        CommentAddIcon: gc,
        CommentIcon: yc,
        CommentsIcon: Bc,
        CommitIcon: Oc,
        CompassIcon: fc,
        ComponentDrivenIcon: kc,
        ComponentIcon: Rc,
        ContrastIcon: Lc,
        ControlsIcon: Pc,
        CopyIcon: wc,
        CreditIcon: Ec,
        CrossIcon: Dc,
        DashboardIcon: Mc,
        DatabaseIcon: xc,
        DeleteIcon: vc,
        DiamondIcon: Hc,
        DirectionIcon: Fc,
        DiscordIcon: Uc,
        DocChartIcon: Nc,
        DocListIcon: Gc,
        DocumentIcon: Wc,
        DownloadIcon: Kc,
        DragIcon: Yc,
        EditIcon: qc,
        EllipsisIcon: Vc,
        EmailIcon: Zc,
        ExpandAltIcon: zc,
        ExpandIcon: Jc,
        EyeCloseIcon: Qc,
        EyeIcon: Xc,
        FaceHappyIcon: $c,
        FaceNeutralIcon: jc,
        FaceSadIcon: ot,
        FacebookIcon: nt,
        FailedIcon: et,
        FastForwardIcon: ct,
        FigmaIcon: tt,
        FilterIcon: rt,
        FlagIcon: It,
        FolderIcon: at,
        FormIcon: lt,
        GDriveIcon: st,
        GithubIcon: it,
        GitlabIcon: ut,
        GlobeIcon: dt,
        GoogleIcon: mt,
        GraphBarIcon: pt,
        GraphLineIcon: St,
        GraphqlIcon: Ct,
        GridAltIcon: ht,
        GridIcon: bt,
        GrowIcon: At,
        HeartHollowIcon: Tt,
        HeartIcon: _t,
        HomeIcon: gt,
        HourglassIcon: yt,
        InfoIcon: Bt,
        ItalicIcon: Ot,
        JumpToIcon: ft,
        KeyIcon: kt,
        LightningIcon: Rt,
        LightningOffIcon: Lt,
        LinkBrokenIcon: Pt,
        LinkIcon: wt,
        LinkedinIcon: Et,
        LinuxIcon: Dt,
        ListOrderedIcon: Mt,
        ListUnorderedIcon: xt,
        LocationIcon: vt,
        LockIcon: Ht,
        MarkdownIcon: Ft,
        MarkupIcon: Ut,
        MediumIcon: Nt,
        MemoryIcon: Gt,
        MenuIcon: Wt,
        MergeIcon: Kt,
        MirrorIcon: Yt,
        MobileIcon: qt,
        MoonIcon: Vt,
        NutIcon: Zt,
        OutboxIcon: zt,
        OutlineIcon: Jt,
        PaintBrushIcon: Qt,
        PaperClipIcon: Xt,
        ParagraphIcon: $t,
        PassedIcon: jt,
        PhoneIcon: or,
        PhotoDragIcon: nr,
        PhotoIcon: er,
        PinAltIcon: cr,
        PinIcon: tr,
        PlayBackIcon: rr,
        PlayIcon: Ir,
        PlayNextIcon: ar,
        PlusIcon: lr,
        PointerDefaultIcon: sr,
        PointerHandIcon: ir,
        PowerIcon: ur,
        PrintIcon: dr,
        ProceedIcon: mr,
        ProfileIcon: pr,
        PullRequestIcon: Sr,
        QuestionIcon: Cr,
        RSSIcon: hr,
        RedirectIcon: br,
        ReduxIcon: Ar,
        RefreshIcon: Tr,
        ReplyIcon: _r,
        RepoIcon: gr,
        RequestChangeIcon: yr,
        RewindIcon: Br,
        RulerIcon: h,
        SearchIcon: Or,
        ShareAltIcon: fr,
        ShareIcon: kr,
        ShieldIcon: Rr,
        SideBySideIcon: Lr,
        SidebarAltIcon: Pr,
        SidebarAltToggleIcon: wr,
        SidebarIcon: Er,
        SidebarToggleIcon: Dr,
        SpeakerIcon: Mr,
        StackedIcon: xr,
        StarHollowIcon: vr,
        StarIcon: Hr,
        StatusFailIcon: Fr,
        StatusPassIcon: Ur,
        StatusWarnIcon: Nr,
        StickerIcon: Gr,
        StopAltIcon: Wr,
        StopIcon: Kr,
        StorybookIcon: Yr,
        StructureIcon: qr,
        SubtractIcon: Vr,
        SunIcon: Zr,
        SupportIcon: zr,
        SwitchAltIcon: Jr,
        SyncIcon: Qr,
        TabletIcon: Xr,
        ThumbsUpIcon: $r,
        TimeIcon: jr,
        TimerIcon: oI,
        TransferIcon: nI,
        TrashIcon: eI,
        TwitterIcon: cI,
        TypeIcon: tI,
        UbuntuIcon: rI,
        UndoIcon: II,
        UnfoldIcon: aI,
        UnlockIcon: lI,
        UnpinIcon: sI,
        UploadIcon: iI,
        UserAddIcon: uI,
        UserAltIcon: dI,
        UserIcon: mI,
        UsersIcon: pI,
        VSCodeIcon: SI,
        VerifiedIcon: CI,
        VideoIcon: hI,
        WandIcon: bI,
        WatchIcon: AI,
        WindowsIcon: TI,
        WrenchIcon: _I,
        XIcon: gI,
        YoutubeIcon: yI,
        ZoomIcon: BI,
        ZoomOutIcon: OI,
        ZoomResetIcon: fI,
        iconList: kI,
      } = __STORYBOOK_ICONS__;
    var s = "storybook/measure-addon",
      b = `${s}/tool`,
      A = () => {
        let [r, c] = p(),
          { measureEnabled: I } = r,
          i = S(),
          a = u(() => c({ measureEnabled: !I }), [c, I]);
        return (
          d(() => {
            i.setAddonShortcut(s, {
              label: "Toggle Measure [M]",
              defaultShortcut: ["M"],
              actionName: "measure",
              showInMenu: !1,
              action: a,
            });
          }, [a, i]),
          t.createElement(C, { key: b, active: I, title: "Enable measure", onClick: a }, t.createElement(h, null))
        );
      };
    l.register(s, () => {
      l.add(b, {
        type: m.TOOL,
        title: "Measure",
        match: ({ viewMode: r, tabId: c }) => r === "story" && !c,
        render: () => t.createElement(A, null),
      });
    });
  })();
} catch (e) {
  console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e);
}