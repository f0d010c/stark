//
//  SettingsView.swift
//  Resonance — settings screen
//
//  Direction: refined editorial restraint. Inspired by Things 3 (typographic clarity),
//  Mela (text-first, no chrome), Ivory (haptic + symbolEffect choreography).
//  Liquid Glass adopted on toolbar, search, and floating Now Playing pill.
//
//  Built for iOS 26 / Xcode 26 / Swift 6.2. Strict HIG compliance.
//

import SwiftUI

// MARK: - Model

@Observable
final class SettingsStore {
    var streamingQuality: StreamingQuality = .lossless
    var downloadQuality: DownloadQuality = .high
    var crossfadeSeconds: Double = 6
    var equalizer: EqualizerPreset = .flat
    var soundCheck: Bool = true
    var dolbyAtmos: DolbyAtmosMode = .automatic
    var cellularStreaming: Bool = false
    var animatedArt: Bool = true
    var showLyricsTranslation: Bool = false
    var lyricsLanguage: String = "English"
    var hapticFeedback: Bool = true
}

enum StreamingQuality: String, CaseIterable, Identifiable {
    case high = "High Efficiency"
    case standard = "High Quality"
    case lossless = "Lossless"
    case hiRes = "Hi-Res Lossless"
    var id: Self { self }
    var subtitle: String {
        switch self {
        case .high:     "AAC 64 kbps"
        case .standard: "AAC 256 kbps"
        case .lossless: "ALAC 24-bit / 48 kHz"
        case .hiRes:    "ALAC 24-bit / 192 kHz"
        }
    }
}

enum DownloadQuality: String, CaseIterable, Identifiable {
    case high = "High"
    case lossless = "Lossless"
    var id: Self { self }
}

enum EqualizerPreset: String, CaseIterable, Identifiable {
    case flat, acoustic, bassBooster, classical, electronic, hipHop, jazz, latin, loudness, lounge, piano, pop, rnb, rock, smallSpeakers, spokenWord, trebleBooster, vocalBooster
    var id: Self { self }
    var label: String { rawValue.capitalized }
}

enum DolbyAtmosMode: String, CaseIterable, Identifiable {
    case automatic = "Automatic"
    case alwaysOn = "Always On"
    case off = "Off"
    var id: Self { self }
}

// MARK: - Root

struct SettingsView: View {
    @State private var store = SettingsStore()
    @State private var searchQuery = ""
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    var body: some View {
        NavigationStack {
            List {
                profileSection
                audioSection
                downloadsSection
                playbackSection
                lyricsSection
                feedbackSection
                aboutSection
            }
            .listStyle(.insetGrouped)
            .scrollContentBackground(.hidden)
            .background(backgroundLayer)
            .scrollEdgeEffectStyle(.soft, for: .all)
            .navigationTitle("Settings")
            .navigationBarTitleDisplayMode(.large)
            .searchable(text: $searchQuery, prompt: "Search settings")
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button {} label: {
                        Image(systemName: "person.crop.circle")
                            .symbolRenderingMode(.hierarchical)
                            .font(.title3)
                    }
                    .buttonStyle(.glass)
                    .accessibilityLabel("Account")
                }
            }
            .overlay(alignment: .bottom) {
                NowPlayingPill()
                    .padding(.horizontal, 16)
                    .padding(.bottom, 12)
            }
        }
    }

    // MARK: Sections

    private var profileSection: some View {
        Section {
            ProfileRow(name: "Elena Park", subtitle: "Family · 4 members")
                .listRowBackground(Color.clear)
                .listRowInsets(EdgeInsets(top: 4, leading: 16, bottom: 16, trailing: 16))
        }
    }

    private var audioSection: some View {
        Section {
            NavigationLink {
                StreamingQualityPicker(selection: $store.streamingQuality)
            } label: {
                SettingRow(
                    icon: "waveform",
                    title: "Streaming",
                    detail: store.streamingQuality.rawValue,
                    tint: Color(.systemPurple)
                )
            }

            NavigationLink {
                EqualizerPicker(selection: $store.equalizer)
            } label: {
                SettingRow(
                    icon: "slider.horizontal.3",
                    title: "EQ",
                    detail: store.equalizer.label,
                    tint: Color(.systemTeal)
                )
            }

            Toggle(isOn: $store.soundCheck) {
                SettingRow(
                    icon: "speaker.wave.2",
                    title: "Sound Check",
                    detail: "Normalize loudness across tracks",
                    tint: Color(.systemBlue),
                    showsDetailInline: true
                )
            }

            Picker(selection: $store.dolbyAtmos) {
                ForEach(DolbyAtmosMode.allCases) { mode in
                    Text(mode.rawValue).tag(mode)
                }
            } label: {
                SettingRow(
                    icon: "airpodspro",
                    title: "Dolby Atmos",
                    tint: Color(.systemIndigo)
                )
            }
            .pickerStyle(.menu)
        } header: {
            SectionHeader("Audio")
        } footer: {
            Text("Lossless requires a wired connection or a compatible Bluetooth codec. Hi-Res requires an external DAC.")
                .font(.footnote)
                .foregroundStyle(.secondary)
        }
    }

    private var downloadsSection: some View {
        Section {
            NavigationLink {
                DownloadQualityPicker(selection: $store.downloadQuality)
            } label: {
                SettingRow(
                    icon: "arrow.down.circle",
                    title: "Download Quality",
                    detail: store.downloadQuality.rawValue,
                    tint: Color(.systemGreen)
                )
            }

            Toggle(isOn: $store.cellularStreaming) {
                SettingRow(
                    icon: "antenna.radiowaves.left.and.right",
                    title: "Cellular Streaming",
                    detail: "Use mobile data for streaming",
                    tint: Color(.systemOrange),
                    showsDetailInline: true
                )
            }
        } header: {
            SectionHeader("Downloads & Data")
        }
    }

    private var playbackSection: some View {
        Section {
            VStack(alignment: .leading, spacing: 12) {
                HStack {
                    SettingRow(
                        icon: "arrow.left.arrow.right",
                        title: "Crossfade",
                        tint: Color(.systemPink)
                    )
                    Spacer()
                    Text("\(Int(store.crossfadeSeconds))s")
                        .font(.body.monospacedDigit())
                        .foregroundStyle(.secondary)
                        .contentTransition(.numericText(value: store.crossfadeSeconds))
                }

                Slider(value: $store.crossfadeSeconds, in: 0...12, step: 1) {
                    Text("Crossfade")
                } minimumValueLabel: {
                    Text("0").font(.caption2).foregroundStyle(.tertiary)
                } maximumValueLabel: {
                    Text("12").font(.caption2).foregroundStyle(.tertiary)
                }
                .tint(Color(.systemPink))
            }
            .padding(.vertical, 4)

            Toggle(isOn: $store.animatedArt) {
                SettingRow(
                    icon: "sparkles",
                    title: "Animated Album Art",
                    detail: "Subtle motion on the now-playing screen",
                    tint: Color(.systemYellow),
                    showsDetailInline: true
                )
            }

            Toggle(isOn: $store.hapticFeedback) {
                SettingRow(
                    icon: "iphone.radiowaves.left.and.right",
                    title: "Haptics",
                    tint: Color(.systemMint)
                )
            }
        } header: {
            SectionHeader("Playback")
        }
    }

    private var lyricsSection: some View {
        Section {
            Toggle(isOn: $store.showLyricsTranslation) {
                SettingRow(
                    icon: "text.bubble",
                    title: "Translate Lyrics",
                    tint: Color(.systemCyan)
                )
            }

            if store.showLyricsTranslation {
                NavigationLink {
                    LanguagePicker(selection: $store.lyricsLanguage)
                } label: {
                    SettingRow(
                        icon: "globe",
                        title: "Language",
                        detail: store.lyricsLanguage,
                        tint: Color(.systemBrown)
                    )
                }
                .transition(.move(edge: .top).combined(with: .opacity))
            }
        } header: {
            SectionHeader("Lyrics")
        }
        .animation(.spring(response: 0.4, dampingFraction: 0.85), value: store.showLyricsTranslation)
    }

    private var feedbackSection: some View {
        Section {
            NavigationLink { Text("Send Feedback") } label: {
                SettingRow(icon: "envelope", title: "Send Feedback", tint: Color(.systemBlue))
            }
            NavigationLink { Text("Report a Concern") } label: {
                SettingRow(icon: "exclamationmark.bubble", title: "Report a Concern", tint: Color(.systemRed))
            }
        } header: {
            SectionHeader("Feedback")
        }
    }

    private var aboutSection: some View {
        Section {
            HStack {
                Text("Version")
                Spacer()
                Text("4.2.0 (1872)")
                    .foregroundStyle(.secondary)
                    .font(.body.monospacedDigit())
            }
            .listRowBackground(Color.clear)

            Button(role: .destructive) {} label: {
                Text("Sign Out")
            }
        } footer: {
            VStack(alignment: .leading, spacing: 6) {
                Text("Resonance · Made in Berlin")
                Text("© 2026 Resonance Audio Labs")
            }
            .font(.caption2)
            .foregroundStyle(.tertiary)
            .padding(.top, 24)
        }
    }

    private var backgroundLayer: some View {
        ZStack {
            Color(.systemGroupedBackground)
            // Subtle mesh gradient — Liquid Glass refraction has something to bend
            MeshGradient(
                width: 3, height: 3,
                points: [
                    [0.0, 0.0], [0.5, 0.0], [1.0, 0.0],
                    [0.0, 0.5], [0.5, 0.5], [1.0, 0.5],
                    [0.0, 1.0], [0.5, 1.0], [1.0, 1.0]
                ],
                colors: [
                    Color(.systemPurple).opacity(0.10),
                    Color(.systemTeal).opacity(0.06),
                    Color(.systemPink).opacity(0.08),
                    Color(.systemBlue).opacity(0.05),
                    Color.clear,
                    Color(.systemIndigo).opacity(0.05),
                    Color(.systemMint).opacity(0.06),
                    Color.clear,
                    Color(.systemOrange).opacity(0.05)
                ]
            )
            .ignoresSafeArea()
            .opacity(reduceMotion ? 0.4 : 1)
        }
    }
}

// MARK: - Row primitives

struct SettingRow: View {
    let icon: String
    let title: String
    var detail: String? = nil
    let tint: Color
    var showsDetailInline: Bool = false

    var body: some View {
        HStack(spacing: 12) {
            IconBadge(icon: icon, tint: tint)
            VStack(alignment: .leading, spacing: 1) {
                Text(title)
                    .font(.body)
                    .foregroundStyle(.primary)
                if showsDetailInline, let detail {
                    Text(detail)
                        .font(.caption)
                        .foregroundStyle(.secondary)
                }
            }
            if !showsDetailInline, let detail {
                Spacer()
                Text(detail)
                    .font(.body)
                    .foregroundStyle(.secondary)
                    .lineLimit(1)
                    .truncationMode(.tail)
            }
        }
        .padding(.vertical, 2)
    }
}

struct IconBadge: View {
    let icon: String
    let tint: Color

    var body: some View {
        Image(systemName: icon)
            .font(.system(size: 14, weight: .semibold))
            .foregroundStyle(.white)
            .frame(width: 28, height: 28)
            .background(tint.gradient, in: RoundedRectangle(cornerRadius: 7, style: .continuous))
            .accessibilityHidden(true)
    }
}

struct SectionHeader: View {
    let title: String
    init(_ title: String) { self.title = title }
    var body: some View {
        Text(title.uppercased())
            .font(.caption2)
            .fontWeight(.semibold)
            .tracking(0.6)
            .foregroundStyle(.secondary)
            .padding(.leading, 4)
    }
}

struct ProfileRow: View {
    let name: String
    let subtitle: String

    var body: some View {
        HStack(spacing: 14) {
            Circle()
                .fill(.linearGradient(
                    colors: [Color(.systemTeal), Color(.systemBlue)],
                    startPoint: .topLeading, endPoint: .bottomTrailing
                ))
                .frame(width: 56, height: 56)
                .overlay(
                    Text(initials(from: name))
                        .font(.headline)
                        .foregroundStyle(.white)
                )
                .glassEffect(in: Circle())

            VStack(alignment: .leading, spacing: 2) {
                Text(name).font(.title3.weight(.semibold))
                Text(subtitle).font(.subheadline).foregroundStyle(.secondary)
            }

            Spacer()

            Image(systemName: "chevron.right")
                .font(.footnote.weight(.semibold))
                .foregroundStyle(.tertiary)
        }
        .padding(16)
        .background(
            RoundedRectangle(cornerRadius: 18, style: .continuous)
                .fill(.ultraThinMaterial)
        )
        .glassEffect(in: RoundedRectangle(cornerRadius: 18, style: .continuous))
    }

    private func initials(from name: String) -> String {
        name.split(separator: " ").compactMap(\.first).map(String.init).joined().uppercased()
    }
}

// MARK: - Now Playing pill (Liquid Glass)

struct NowPlayingPill: View {
    @State private var isPlaying = true

    var body: some View {
        GlassEffectContainer {
            HStack(spacing: 12) {
                RoundedRectangle(cornerRadius: 6, style: .continuous)
                    .fill(.linearGradient(colors: [.purple, .pink], startPoint: .topLeading, endPoint: .bottomTrailing))
                    .frame(width: 36, height: 36)
                    .overlay(
                        Image(systemName: "music.note")
                            .foregroundStyle(.white)
                            .font(.footnote.weight(.bold))
                    )

                VStack(alignment: .leading, spacing: 1) {
                    Text("Apricot Princess")
                        .font(.subheadline.weight(.semibold))
                        .lineLimit(1)
                    Text("Rex Orange County")
                        .font(.caption2)
                        .foregroundStyle(.secondary)
                        .lineLimit(1)
                }

                Spacer(minLength: 8)

                Button {
                    withAnimation(.spring(response: 0.25, dampingFraction: 0.7)) {
                        isPlaying.toggle()
                    }
                } label: {
                    Image(systemName: isPlaying ? "pause.fill" : "play.fill")
                        .contentTransition(.symbolEffect(.replace.byLayer))
                        .font(.title3.weight(.semibold))
                        .frame(width: 36, height: 36)
                }
                .buttonStyle(.glass)
                .accessibilityLabel(isPlaying ? "Pause" : "Play")
            }
            .padding(.horizontal, 10)
            .padding(.vertical, 8)
        }
        .glassEffect(in: Capsule())
    }
}

// MARK: - Pickers

struct StreamingQualityPicker: View {
    @Binding var selection: StreamingQuality
    var body: some View {
        List {
            ForEach(StreamingQuality.allCases) { q in
                Button { selection = q } label: {
                    HStack {
                        VStack(alignment: .leading, spacing: 2) {
                            Text(q.rawValue).foregroundStyle(.primary)
                            Text(q.subtitle).font(.caption).foregroundStyle(.secondary)
                        }
                        Spacer()
                        if q == selection {
                            Image(systemName: "checkmark")
                                .foregroundStyle(.tint)
                                .symbolEffect(.bounce, value: selection)
                        }
                    }
                }
            }
        }
        .navigationTitle("Streaming Quality")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct DownloadQualityPicker: View {
    @Binding var selection: DownloadQuality
    var body: some View {
        List(DownloadQuality.allCases) { q in
            Button { selection = q } label: {
                HStack {
                    Text(q.rawValue).foregroundStyle(.primary)
                    Spacer()
                    if q == selection { Image(systemName: "checkmark").foregroundStyle(.tint) }
                }
            }
        }
        .navigationTitle("Download Quality")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct EqualizerPicker: View {
    @Binding var selection: EqualizerPreset
    var body: some View {
        List(EqualizerPreset.allCases) { preset in
            Button { selection = preset } label: {
                HStack {
                    Text(preset.label).foregroundStyle(.primary)
                    Spacer()
                    if preset == selection { Image(systemName: "checkmark").foregroundStyle(.tint) }
                }
            }
        }
        .navigationTitle("Equalizer")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct LanguagePicker: View {
    @Binding var selection: String
    private let languages = ["English", "Español", "Français", "Deutsch", "日本語", "한국어", "中文", "Português"]
    var body: some View {
        List(languages, id: \.self) { lang in
            Button { selection = lang } label: {
                HStack {
                    Text(lang).foregroundStyle(.primary)
                    Spacer()
                    if lang == selection { Image(systemName: "checkmark").foregroundStyle(.tint) }
                }
            }
        }
        .navigationTitle("Language")
        .navigationBarTitleDisplayMode(.inline)
    }
}

#Preview {
    SettingsView()
}
