using Microsoft.UI;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Windows.UI;

namespace Resonance.Controls;

public sealed partial class AlbumArtwork : UserControl
{
    public AlbumArtwork() => InitializeComponent();

    public static readonly DependencyProperty FromColorProperty =
        DependencyProperty.Register(nameof(FromColor), typeof(Color), typeof(AlbumArtwork), new(Colors.SlateBlue));
    public Color FromColor { get => (Color)GetValue(FromColorProperty); set => SetValue(FromColorProperty, value); }

public static readonly DependencyProperty ToColorProperty =
        DependencyProperty.Register(nameof(ToColor), typeof(Color), typeof(AlbumArtwork), new(Colors.DarkSlateBlue));
    public Color ToColor { get => (Color)GetValue(ToColorProperty); set => SetValue(ToColorProperty, value); }

    public static readonly DependencyProperty TitleTextProperty =
        DependencyProperty.Register(nameof(TitleText), typeof(string), typeof(AlbumArtwork), new(""));
    public string TitleText { get => (string)GetValue(TitleTextProperty); set => SetValue(TitleTextProperty, value); }

    public static readonly DependencyProperty ArtistTextProperty =
        DependencyProperty.Register(nameof(ArtistText), typeof(string), typeof(AlbumArtwork), new(""));
    public string ArtistText { get => (string)GetValue(ArtistTextProperty); set => SetValue(ArtistTextProperty, value); }

    public static readonly DependencyProperty YearTextProperty =
        DependencyProperty.Register(nameof(YearText), typeof(string), typeof(AlbumArtwork), new(""));
    public string YearText { get => (string)GetValue(YearTextProperty); set => SetValue(YearTextProperty, value); }
}
