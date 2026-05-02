/**
 * OpenClaw Ops — Complete Mock Data (16 tabs)
 */
export const MOCK = {
  trading: {
    desk: {
      agentMode: 'auto_guarded',
      mt5Sync: 'connected',
      lastSyncTime: '22:55',
      latencyMs: 14,
      summary: {
        todayPnl: { value: '+$4,250.00', positive: true },
        activeExposure: '1.5 lots',
        tradesToday: 7,
        dailyLossCapRemaining: '$2,750.00',
        marginLevel: '840%'
      },
      positions: [
        {
          symbol: 'XAUUSD', direction: 'BUY', totalLot: 0.5, totalPnl: '+$410.00', positive: true,
          layers: [
            { id: 'L1', lot: 0.3, entry: '2340.50', sl: '2335.00', tp: '2360.00', pnl: '+$180.00', status: 'open', positive: true },
            { id: 'L2', lot: 0.2, entry: '2338.00', sl: '2335.00', tp: '2360.00', pnl: '+$230.00', status: 'open', positive: true }
          ]
        },
        {
          symbol: 'BTCUSD', direction: 'SELL', totalLot: 1.0, totalPnl: '-$450.00', positive: false,
          layers: [
            { id: 'L1', lot: 1.0, entry: '68000', sl: '69000', tp: '65000', pnl: '-$450.00', status: 'open', positive: false }
          ]
        },
        {
          symbol: 'EURUSD', direction: 'BUY', totalLot: 0.5, totalPnl: '+$312.40', positive: true,
          layers: [
            { id: 'L1', lot: 0.3, entry: '1.0850', sl: '1.0820', tp: '1.0900', pnl: '+$190.00', status: 'open', positive: true },
            { id: 'L2', lot: 0.2, entry: '1.0845', sl: '1.0820', tp: '1.0900', pnl: '+$122.40', status: 'open', positive: true }
          ]
        }
      ]
    },
    strategy: {
      multiplier: { current: 1.0, min: 0.5, max: 3.0 },
      layering: { maxLayers: 3, distancePips: 50, enabled: true },
      trailingSL: { enabled: true, activateAfterPips: 100, trailPips: 30 },
      maxLotPerOrder: 2.0,
      maxTotalExposure: 5.0,
      maxTradesPerDay: 15,
      dailyLossCap: '$5,000',
      newsBlackout: true,
      duplicateGuard: true,
      spreadGuard: { enabled: true, maxSpread: 3.0 },
      configVersion: 14,
      lastModified: '2026-04-28T10:30:00+07:00'
    },
    signalStream: [
      { id: 'sig-001', time: '22:50', source: 'Telegram: GoldSignalVIP', raw: 'XAUUSD Buy 2340 SL 2335 TP 2360', parsedClass: 'new_signal', confidence: 94, actionResult: 'EXECUTED', actionDetail: 'MT5-28471 | Fill 2340.50' },
      { id: 'sig-002', time: '22:45', source: 'Telegram: GoldSignalVIP', raw: 'Cắt nửa XAUUSD gồng tiếp', parsedClass: 'partial_close', confidence: 78, actionResult: 'EXECUTED', actionDetail: 'Closed 0.15 lot' },
      { id: 'sig-003', time: '22:30', source: 'Zalo: Trader Minh', raw: 'BTCUSD lên quá, cắt lỗ đi anh em', parsedClass: 'noise', confidence: 45, actionResult: 'NOISE', actionDetail: 'Ignored — noise' },
      { id: 'sig-004', time: '21:15', source: 'Telegram: CryptoAlpha', raw: 'BTCUSD Sell 68500 SL 69500 TP 65000', parsedClass: 'new_signal', confidence: 88, actionResult: 'HARD_REJECT', actionDetail: 'Vượt max exposure 5.0 lots' },
      { id: 'sig-005', time: '20:00', source: 'Telegram: GoldSignalVIP', raw: 'EURUSD Buy 1.0850 SL 1.0820 TP 1.0900', parsedClass: 'new_signal', confidence: 96, actionResult: 'EXECUTED', actionDetail: 'MT5-28469 | Fill 1.0850' },
      { id: 'sig-006', time: '19:30', source: 'Telegram: CryptoAlpha', raw: 'Dời SL hòa vốn XAUUSD', parsedClass: 'amend_sl', confidence: 82, actionResult: 'EXECUTED', actionDetail: 'SL moved to 2340.50' }
    ],
    connections: {
      telegram: { status: 'connected', channels: [
        { name: 'GoldSignalVIP', type: 'channel', status: 'active', lastMsg: '2 phút trước' },
        { name: 'CryptoAlpha', type: 'group', status: 'active', lastMsg: '15 phút trước' }
      ]},
      zalo: { status: 'active', expiry: '30/04 08:00', account: 'Trader Minh' },
      mt5: { status: 'connected', broker: 'ICMarkets', accountId: '50281***', balance: '$12,500.00', server: 'ICMarkets-Live04' },
      manual: { lastInput: '2026-04-29T18:00:00+07:00' }
    },
    history: {
      executions: [
        { orderId: 'MT5-28471', symbol: 'XAUUSD', type: 'BUY', lot: 0.3, fillPrice: '2340.50', timestamp: '2026-04-29 22:50' },
        { orderId: 'MT5-28470', symbol: 'EURUSD', type: 'SELL', lot: 0.5, fillPrice: '1.0845', timestamp: '2026-04-29 18:30' },
        { orderId: 'MT5-28469', symbol: 'EURUSD', type: 'BUY', lot: 0.3, fillPrice: '1.0850', timestamp: '2026-04-29 20:00' }
      ],
      rejects: [
        { signalId: 'sig-004', symbol: 'BTCUSD', reason: 'Vượt max exposure (5.0 lots)', timestamp: '2026-04-29 21:15' },
        { signalId: 'sig-009', symbol: 'GBPJPY', reason: 'Source trust 45% < threshold 70%', timestamp: '2026-04-29 16:00' },
        { signalId: 'sig-012', symbol: 'USDJPY', reason: 'News blackout active', timestamp: '2026-04-29 14:30' }
      ],
      reconciliation: { lastRun: '22:00:00', dbPositions: 3, mt5Positions: 3, mismatches: 0 }
    }
  },
  leads: {
    radar: [
      { id: 'lead-001', group: 'Hội Kinh Doanh Đồ Uống', time: '2 phút trước', content: 'Có ai biết đơn vị nào setup phần mềm cho quán trà sữa không? Quán mình đang vỡ trận vì gọi món chậm.', score: 92, urgency: 'hot', painPoint: 'Order delay → mất khách', policy: 'draft_fast' },
      { id: 'lead-002', group: 'Cộng Đồng Startup Việt', time: '18 phút trước', content: 'Team mình cần CRM quản lý khách hàng, ai có recommend tool nào không?', score: 74, urgency: 'warm', painPoint: 'Quản lý khách thủ công', policy: 'assisted_comment' },
      { id: 'lead-003', group: 'Hội Chủ Quán Cafe SG', time: '45 phút trước', content: 'Có phần mềm nào quản lý kho nguyên liệu tốt ko? Kho mình toàn hao hụt không biết lý do.', score: 81, urgency: 'warm', painPoint: 'Thất thoát kho', policy: 'draft_fast' },
      { id: 'lead-004', group: 'SME Digital', time: '1 giờ trước', content: 'Cần hệ thống POS cho chuỗi 5 quán, ai biết bên nào làm ổn định?', score: 88, urgency: 'hot', painPoint: 'Scale chuỗi thiếu POS', policy: 'draft_fast' }
    ],
    respond: {
      activeLead: {
        id: 'lead-001', group: 'Hội Kinh Doanh Đồ Uống',
        originalPost: 'Có ai biết đơn vị nào setup phần mềm cho quán trà sữa không? Quán mình đang vỡ trận vì gọi món chậm.',
        painPoint: 'Order delay → mất khách',
        commentDraft: 'Mình từng triển khai cho quán trà sữa ở quận 7, cũng bị tình trạng gọi món chậm y chang. Sau khi lên hệ thống POS + QR order thì throughput tăng 40%. Inbox mình nếu bạn cần tư vấn chi tiết nhé!',
        zaloDraft: 'Chào bạn, mình thấy bạn đang tìm giải pháp cho quán trà sữa. Mình có kinh nghiệm triển khai cho case tương tự, để mình gửi bạn thông tin chi tiết.',
        proofMatch: { id: 'proof-001', title: 'Case Study: Quán Trà Sữa Q7', confidence: 92 },
        status: 'draft_ready'
      }
    },
    customers: [
      { id: 'cust-001', name: 'Nguyễn Văn Bình', source: 'FB: Hội Kinh Doanh', zaloId: 'nvbinh_business', phone: '0901***456', email: 'binh@***.vn', valueScore: 85, totalDeals: 3, lastContact: '2026-04-28', status: 'active' },
      { id: 'cust-002', name: 'Trần Thị Mai', source: 'FB: Startup Việt', zaloId: 'ttmai_ceo', phone: '0912***789', email: 'mai@***.com', valueScore: 72, totalDeals: 1, lastContact: '2026-04-25', status: 'active' },
      { id: 'cust-003', name: 'Lê Hoàng Nam', source: 'FB: Hội Chủ Quán', zaloId: '', phone: '0938***123', email: '', valueScore: 60, totalDeals: 0, lastContact: '2026-04-20', status: 'prospect' }
    ],
    sources: [
      { id: 'src-001', name: 'Hội Kinh Doanh Đồ Uống', platform: 'Facebook', members: '45.2K', status: 'active', cooldownMin: 30, postsToday: 12, leadsToday: 3, riskLevel: 'low' },
      { id: 'src-002', name: 'Cộng Đồng Startup Việt', platform: 'Facebook', members: '128K', status: 'active', cooldownMin: 60, postsToday: 28, leadsToday: 1, riskLevel: 'medium' },
      { id: 'src-003', name: 'Hội Chủ Quán Cafe SG', platform: 'Facebook', members: '32K', status: 'active', cooldownMin: 30, postsToday: 8, leadsToday: 1, riskLevel: 'low' },
      { id: 'src-004', name: 'SME Digital', platform: 'Facebook', members: '18K', status: 'paused', cooldownMin: 120, postsToday: 0, leadsToday: 0, riskLevel: 'high' }
    ],
    proof: [
      { id: 'proof-001', title: 'Case Study: Quán Trà Sữa Q7', type: 'case_study', hasScreenshot: true, screenshotUrl: '', claims: ['Tăng throughput 40%', 'Giảm thời gian order 60%'], verified: true, usageCount: 5 },
      { id: 'proof-002', title: 'Feedback: Chuỗi Cafe ABC', type: 'testimonial', hasScreenshot: true, screenshotUrl: '', claims: ['Quản lý kho chính xác 98%'], verified: true, usageCount: 3 },
      { id: 'proof-003', title: 'Demo: POS Mobile App', type: 'demo', hasScreenshot: false, screenshotUrl: '', claims: ['Real-time dashboard'], verified: false, usageCount: 0 }
    ],
    audit: [
      { id: 'audit-001', type: 'reply_sent', leadId: 'lead-015', group: 'Hội Kinh Doanh', action: 'Comment posted', timestamp: '2026-04-29 20:15', status: 'success', modelCost: '$0.003' },
      { id: 'audit-002', type: 'platform_alert', leadId: '', group: '', action: 'Rate limit warning on SME Digital', timestamp: '2026-04-29 18:00', status: 'warning', modelCost: '' },
      { id: 'audit-003', type: 'reply_draft', leadId: 'lead-002', group: 'Startup Việt', action: 'AI draft generated', timestamp: '2026-04-29 17:45', status: 'success', modelCost: '$0.005' }
    ]
  },
  content: {
    command: {
      currentPrompt: '',
      selectedPlatform: 'linkedin',
      mode: 'generate_only',
      platforms: ['linkedin', 'tiktok', 'facebook', 'youtube', 'upwork'],
      recentCommands: [
        { prompt: 'Viết bài LinkedIn về AI grading cho giáo viên THPT', platform: 'linkedin', timestamp: '2026-04-29 15:00', status: 'completed' },
        { prompt: 'Tạo caption TikTok cho video EngPath walkthrough', platform: 'tiktok', timestamp: '2026-04-29 12:00', status: 'completed' }
      ],
      skills: ['content-creator', 'social-content', 'avoid-ai-writing'],
      contextItems: ['creator-profile.md', 'platform-rules.md', 'current-focus.md'],
      autonomyLevel: 'auto_with_review',
      triggers: {
        schedule: true,
        trend: true,
        performance: false,
        command: true
      }
    },
    pillars: [
      {
        id: 'pillar-001',
        name: 'AI in Education',
        keywords: ['AI agent', 'edtech', 'grading', 'learning path'],
        themes: ['Case Study', 'Quick Tips', 'Behind the Scenes'],
        brandVoice: 'Chuyên nghiệp, storytelling, data-driven',
        platforms: { linkedin: '3x/week', tiktok: '1x/day', youtube: '1x/week' },
        autonomyLevel: 'auto_with_review',
        active: true
      },
      {
        id: 'pillar-002',
        name: 'SaaS Builder',
        keywords: ['SaaS', 'startup', 'MVP', 'product launch'],
        themes: ['Tutorial', 'Case Study', 'Founder Story'],
        brandVoice: 'Gần gũi, thực tế, có chiều sâu',
        platforms: { linkedin: '2x/week', facebook: '3x/week' },
        autonomyLevel: 'auto_no_publish',
        active: false
      }
    ],
    pipeline: {
      draft: [
        { id: 'pkg-009', title: 'LinkedIn: AI grading cho giáo viên', platform: 'linkedin', type: 'post', createdAt: '2026-04-29', triggerType: 'command', autonomyLevel: 'auto_with_review', pillar: 'AI in Education', status: 'draft' },
        { id: 'pkg-010', title: 'TikTok: EngPath Walkthrough Caption', platform: 'tiktok', type: 'caption', createdAt: '2026-04-28', triggerType: 'schedule', autonomyLevel: 'fully_auto', pillar: 'AI in Education', status: 'draft' }
      ],
      reviewed: [
        { id: 'pkg-008', title: 'LinkedIn: POS FnB Case Study Deep Dive', platform: 'linkedin', type: 'post', createdAt: '2026-04-28', triggerType: 'performance', autonomyLevel: 'auto_with_review', pillar: 'SaaS Builder', status: 'reviewed' }
      ],
      ready: [
        { id: 'pkg-007', title: 'Facebook: SaaS Startup Tips', platform: 'facebook', type: 'post', createdAt: '2026-04-27', triggerType: 'schedule', autonomyLevel: 'fully_auto', pillar: 'SaaS Builder', status: 'ready' }
      ],
      scheduled: [
        { id: 'pkg-011', title: 'LinkedIn: Portfolio Engineering Best Practices', platform: 'linkedin', type: 'post', createdAt: '2026-04-29', triggerType: 'schedule', autonomyLevel: 'fully_auto', pillar: 'AI in Education', scheduledAt: '2026-05-01 08:00', status: 'scheduled' }
      ],
      publishing: [],
      published: [
        { id: 'pkg-005', title: 'TikTok: Vanhien Walkthrough', platform: 'tiktok', type: 'video', views: 1200, createdAt: '2026-04-26', triggerType: 'command', autonomyLevel: 'auto_with_review', publishedAt: '2026-04-26 13:00', publishMethod: 'official_api' },
        { id: 'pkg-004', title: 'LinkedIn: Portfolio Engineering', platform: 'linkedin', type: 'post', views: 3400, createdAt: '2026-04-25', triggerType: 'schedule', autonomyLevel: 'fully_auto', publishedAt: '2026-04-25 08:00', publishMethod: 'official_api' },
        { id: 'pkg-003', title: 'YouTube: EngPath Deep Dive', platform: 'youtube', type: 'video', views: 890, createdAt: '2026-04-24', triggerType: 'trend', autonomyLevel: 'auto_with_review', publishedAt: '2026-04-24 18:00', publishMethod: 'browser_assisted' }
      ]
    },
    video: {
      jobs: [
        { id: 'vj-001', title: 'EngPath Walkthrough v3', template: 'CinematicWalkthrough', status: 'rendering', progress: 65, duration: '42s', createdAt: '2026-04-29 14:00', productionType: 'walkthrough', publishMethod: 'official_api' },
        { id: 'vj-002', title: 'Vanhien Walkthrough', template: 'CinematicWalkthrough', status: 'completed', progress: 100, duration: '38s', createdAt: '2026-04-26 10:00', previewUrl: '#', productionType: 'walkthrough', publishMethod: 'official_api' },
        { id: 'vj-003', title: 'TikTok Viral: FnB POS', template: 'ViralShort', status: 'queued', progress: 0, duration: '28s', createdAt: '2026-04-29 16:00', productionType: 'viral_clip', publishMethod: 'official_api' },
        { id: 'vj-004', title: 'Product Showcase: AI Grading', template: 'ProductShowcase', status: 'completed', progress: 100, duration: '45s', createdAt: '2026-04-28 09:00', previewUrl: '#', productionType: 'product_showcase', publishMethod: 'official_api' },
        { id: 'vj-005', title: 'Testimonial: Customer Feedback', template: 'TestimonialEdit', status: 'completed', progress: 100, duration: '62s', createdAt: '2026-04-27 11:00', previewUrl: '#', productionType: 'testimonial_edit', publishMethod: 'handoff' }
      ],
      templates: ['CinematicWalkthrough', 'ProductShowcase', 'QuickDemo', 'ViralShort', 'TestimonialEdit'],
      projectMatrix: { scenes: 13, assets: 45, motionLocked: true }
    },
    context: {
      items: [
        { id: 'ctx-001', source: 'LinkedIn Profile', scope: 'public_profile', captured: '2026-04-28 09:00', retention: '30 days', status: 'active', size: '2.4 KB' },
        { id: 'ctx-002', source: 'Facebook Page Insights', scope: 'page_analytics', captured: '2026-04-27 14:00', retention: '7 days', status: 'active', size: '8.1 KB' },
        { id: 'ctx-003', source: 'TikTok Creator Dashboard', scope: 'creator_analytics', captured: '2026-04-25 11:00', retention: '7 days', status: 'expired', size: '5.6 KB' }
      ],
      captureMode: 'manual_session',
      totalItems: 3,
      activeItems: 2
    },
    audit: [
      { id: 'ca-001', type: 'render_complete', action: 'Video rendered: Vanhien Walkthrough', timestamp: '2026-04-26 12:30', status: 'success', modelCost: '$0.00' },
      { id: 'ca-002', type: 'publish_assisted', action: 'TikTok upload assisted: Vanhien Walkthrough', timestamp: '2026-04-26 13:00', status: 'success', modelCost: '$0.00' },
      { id: 'ca-003', type: 'content_generated', action: 'AI generated LinkedIn post: Portfolio Engineering', timestamp: '2026-04-25 09:00', status: 'success', modelCost: '$0.008' },
      { id: 'ca-004', type: 'context_captured', action: 'Browser context: LinkedIn Profile', timestamp: '2026-04-28 09:00', status: 'success', modelCost: '$0.002' }
    ]
  }
};
