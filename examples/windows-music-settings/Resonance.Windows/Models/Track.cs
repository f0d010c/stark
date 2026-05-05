using Microsoft.UI.Xaml.Media;

namespace Resonance.Models;

public sealed record Track(
    string Title,
    string Artist,
    string Album,
    string Year,
    int DurationSeconds,
    string AccentHex,
    string ArtGradientFromHex,
    string ArtGradientToHex,
    string ArtGlyph
);

public static class TrackLibrary
{
    public static IReadOnlyList<Track> Tracks { get; } = new List<Track>
    {
        new("Apricot Princess", "Rex Orange County",      "Apricot Princess",        "2017", 218, "#E8743C", "#F4B860", "#C53030", ""),
        new("Saturn",           "Sleeping at Last",       "Atlas: Space",            "2014", 286, "#7C3AED", "#A78BFA", "#312E81", ""),
        new("Time",             "Hans Zimmer",            "Inception OST",           "2010", 252, "#0EA5E9", "#22D3EE", "#0C4A6E", ""),
        new("In the End",       "Linkin Park",            "Hybrid Theory",           "2000", 217, "#475569", "#94A3B8", "#1E293B", ""),
        new("Heat Waves",       "Glass Animals",          "Dreamland",               "2020", 238, "#EC4899", "#F472B6", "#831843", ""),
        new("Adagio in D Minor","John Murphy",            "Sunshine OST",            "2007", 358, "#F59E0B", "#FBBF24", "#92400E", ""),
        new("Bloodstream",      "Tokio Myers",            "Our Generation",          "2017", 197, "#10B981", "#34D399", "#064E3B", ""),
        new("Strobe",           "deadmau5",               "For Lack of a Better Name","2009", 634, "#3B82F6", "#60A5FA", "#1E3A8A", ""),
        new("Nightcall",        "Kavinsky",               "Outrun",                  "2013", 257, "#EF4444", "#F87171", "#7F1D1D", ""),
        new("Sun",              "Two Door Cinema Club",   "Beacon",                  "2012", 215, "#FACC15", "#FDE047", "#713F12", "")
    };

    public static IReadOnlyList<Album> Albums { get; } = Tracks
        .GroupBy(t => t.Album)
        .Select(g => new Album(g.Key, g.First().Artist, g.First().Year, g.First().ArtGradientFromHex, g.First().ArtGradientToHex, g.First().ArtGlyph, g.ToList()))
        .ToList();
}

public sealed record Album(
    string Title,
    string Artist,
    string Year,
    string ArtGradientFromHex,
    string ArtGradientToHex,
    string ArtGlyph,
    IReadOnlyList<Track> Tracks
);
