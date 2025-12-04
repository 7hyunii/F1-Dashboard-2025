import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Constructor } from "@/types/constructor";
import { getImagePath } from "@/lib/utils/image";

interface TeamInfoSectionProps {
  team: Constructor;
}

export function TeamInfoSection({ team }: TeamInfoSectionProps) {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                        <img src={getImagePath("/trophy_red.svg")} alt="Constructor Points" className="w-8 h-8 mx-auto mb-3" />
                        <p className="text-3xl mb-1 text-white font-bold">{team.points}</p>
                        <p className="text-sm text-gray-400">Constructor Points</p>
                    </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                        <img src={getImagePath("/trending-up.svg")} alt="Championship Position" className="w-8 h-8 mx-auto mb-3" />
                        <p className="text-3xl mb-1 text-white font-bold">P{team.position}</p>
                        <p className="text-sm text-gray-400">Championship Position</p>
                    </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                        <img src={getImagePath("/award.svg")} alt="Season Wins" className="w-8 h-8 mx-auto mb-3 text-green-500" />
                        <p className="text-3xl mb-1 text-white font-bold">{team.wins}</p>
                        <p className="text-sm text-gray-400">Season Wins</p>
                    </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                        <img src={getImagePath("/crown.svg")} alt="World Championships" className="w-8 h-8 mx-auto mb-3 text-purple-500" />
                        <p className="text-3xl mb-1 text-white font-bold">{team.championships}</p>
                        <p className="text-sm text-gray-400">World Championships</p>
                    </CardContent>
                </Card>
            </div>

            {/* Team Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-white font-bold">Team Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500 font-medium mb-1">Full Name</p>
                                <p className="text-xl text-white">{team.fullName}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium mb-1">Base</p>
                                <p className="text-xl text-white">{team.base}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium mb-1">Founded</p>
                                <p className="text-xl text-white">{team.entryYear}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium mb-1">Team Chief</p>
                                <p className="text-xl text-white">{team.teamChief}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-white font-bold">Technical Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500 font-medium mb-1">Technical Chief</p>
                                <p className="text-xl text-white">{team.technicalChief}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium mb-1">Chassis</p>
                                <p className="text-xl text-white">{team.chassis}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium mb-1">Power Unit</p>
                                <p className="text-xl text-white">{team.powerUnit}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    ); 
}
