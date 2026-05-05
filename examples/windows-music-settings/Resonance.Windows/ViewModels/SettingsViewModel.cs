using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;

namespace Resonance.ViewModels;

public partial class SettingsViewModel : ObservableObject
{
    [ObservableProperty]
    private int streamingQualityIndex = 2; // Lossless

    [ObservableProperty]
    private int equalizerIndex = 0; // Flat

    [ObservableProperty]
    private int dolbyAtmosIndex = 0; // Automatic

    [ObservableProperty]
    private int downloadQualityIndex = 0; // High

    [ObservableProperty]
    private int lyricsLanguageIndex = 0; // English

    [ObservableProperty]
    private double crossfadeSeconds = 6;

    [ObservableProperty]
    private bool soundCheck = true;

    [ObservableProperty]
    private bool headTracking = true;

    [ObservableProperty]
    private bool cellularStreaming = false;

    [ObservableProperty]
    private bool animatedArt = true;

    [ObservableProperty]
    private bool showLyricsTranslation = false;

    [RelayCommand]
    private void SignOut()
    {
        // Persist sign-out via auth service in production. Demo no-op.
    }
}
